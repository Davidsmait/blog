---
title: Ionic SQLite TypeORM
description: Integra SQLite en tu aplicación de ionic
publishedDate: 2024-10-18
tags:
  - documentation
---

En este documento se explica como poder integrar SQLite a tu aplicación de Ionic junto con TypeORM, solamente para las plataformas iOS y Android, si te interesa saber como implementarlo en otras plataformas como Web o Electron revisa la [documentación](https://github.com/capacitor-community/sqlite/blob/master/docs/TypeORM-Usage-From-5.6.0.md) oficial

## Dependencias necesarias
Estas son las dependencias necesarias para poder hacer la integración


```shell
npm install @capacitor-community/sqlite 
npm install typeorm@latest
npm install sqlite3


npm install @types/node --save-dev 
npm install @types/es6-shim
npm install @types/events
npm install es6-shim  

```
Habilita los decoradores como @Injectable(), @Entity(), @Column() y la manipulación de metadatos en tiempo de ejecución. En TypeORM, se usa para definir la estructura de entidades y columnas que representan las tablas de la base de datos.


```shell 

npm install reflect-metadata --save

```
Agrega reflect-metadata en el archivo principal de tu aplicación o en algún lugar que se ejecute antes de cualquier otro código

```javascript
import "reflect-metadata"
```

[//]: # (Si en algun punto encuentras problemas instala alguna de las siguientes dependencias)

[//]: # (```shell)

[//]: # (npm install @types/node --save-dev )

[//]: # (npm install @types/es6-shim)

[//]: # (npm install @types/events)

[//]: # (npm install es6-shim  )

[//]: # (```)

Al integrar **SQLite** con **Capacitor** en un proyecto TypeScript, ciertas opciones en `tsconfig.json` son esenciales para evitar errores y habilitar funcionalidades clave. Este documento explica cada configuración y su relevancia.

---

## **Opciones Clave en `compilerOptions`**

Al integrar **SQLite** con **Capacitor** en un proyecto TypeScript, ciertas opciones en `tsconfig.json` son esenciales para evitar errores y habilitar funcionalidades clave. Este documento explica cada configuración y su relevancia.

```shell tsconfig.ts

"compilerOptions": {
	"types": ["node"],
	"skipLibCheck": true,
	"emitDecoratorMetadata": true,
  "experimentalDecorators": true,

}
```

### `"types": ["node"]`
Incluye los tipos de Node.js en el proyecto. Capacitor utiliza APIs nativas que dependen de módulos como `fs`, `path`, o `Buffer`, incluso en entornos móviles. Sin esta opción, TypeScript mostrará errores como:

### `"skipLibCheck": true`
Omite la verificación de tipos en archivos de declaración (*.d.ts). Librerías como SQLite o plugins de Capacitor pueden tener tipos conflictivos con otras dependencias. Esta opción acelera la compilación y evita errores irrelevantes.

### `"experimentalDecorators": true`
Habilita el uso de decoradores en el código.  Si usas TypeORM para definir entidades de SQLite o frameworks como Ionic/Angular, los decoradores son esenciales:  

```bash
  @Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
  ```
### `"emitDecoratorMetadata": true`
Genera metadatos de tipo para decoradores en tiempo de compilación. Librerías como TypeORM o InversifyJS requieren metadatos para funcionar correctamente (ej: inferir tipos de columnas en SQLite).

---

## Estructura de carpetas 
La estructura del directorio para TypeOrm puede ser elaborada de la siguiente manera, independientemente del framework usado

![DavidSan logo](@/assets/screenshots/sqlite-typeorm-structure.png)


El proyecto está organizado en varios archivos clave, como se muestra a continuación:

1. **DataSource Configuración** - Configura la conexión con la base de datos.
2. **Entidades** - Define las entidades de *Author*, *Category* y *Post*.
3. **Migraciones** - Configura las migraciones de la base de datos.
4. **Parametros SQLite** - Configura la conexión SQLite utilizando Capacitor.
5. **Repositorios** - Proporciona los repositorios para interactuar con las entidades en la base de datos.

[//]: # (5. **Utilidades** - Funciones auxiliares como contar elementos en las tablas.)

## Archivos Clave

### 1. **DataSource: AuthorDataSource.ts**

Configura la conexión de TypeORM para la base de datos SQLite utilizando Capacitor.

```typescript DataSource.ts
import { DataSource , type DataSourceOptions} from 'typeorm';
import sqliteParams from '../sqliteParams';
import * as entities from '../entities/author';
import * as migrations from '../migrations/author';

const dbName = "YOUR_DATABASE_NAME";

const dataSourceConfig: DataSourceOptions = {
    name: 'authorConnection',
    type: 'capacitor',
    driver: sqliteParams.connection,
    database: dbName,
    mode: 'no-encryption',
    entities: entities,
    migrations: migrations, //["../migrations/author/*{.ts,.js}"]
    subscribers: [],
    logging: [/*'query',*/ 'error','schema'],
    synchronize: false,     // !!!You will lose all data in database if set to `true`
    migrationsRun: false  // Required with capacitor type
};
export const dataSourceAuthor = new DataSource(dataSourceConfig);
const authorDataSource = {
    dataSource: dataSourceAuthor,
    dbName: dbName
};

export default authorDataSource;
```

### 2. **Entidades**

A continuación, se define un ejemplo de cómo estructurar las entidades y sus relaciones a partir de un diagrama. Revisa el siguiente diagrama para obtener más detalles sobre la estructura de las entidades.

![Diagrama de Entidades](@/assets/screenshots/diagrama-entidades-ejemplo1.png)

En este diagrama, se muestran las entidades clave y las relaciones que existen entre ellas. Utiliza este ejemplo como referencia para crear las entidades necesarias en tu propio modelo de datos.

```typescript Proyecto.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn} from 'typeorm';

import {UnidadEntity} from "./Unidad.entity";

@Entity('proyectos')
export class ProyectoEntity {
  @PrimaryColumn()
  proyecto_id!: number;

  @Column({ type: 'text', nullable: true })
  proyecto!: string;

  @OneToMany(() => UnidadEntity, (unidad) => unidad.proyecto)
  unidades!: UnidadEntity[];
}

```


```typescript Unidad.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    Relation,
    PrimaryColumn,
    OneToMany
} from 'typeorm';
import {ProyectoEntity} from "./Proyecto.entity";

@Entity('unidades')
export class UnidadEntity {
    @PrimaryColumn()
    unidad_id!: number;

    @PrimaryColumn()
    proyecto_id!: number;

    @Column({ type: 'text', nullable: false })
    nombre!: string;

    @ManyToOne(() => ProyectoEntity, (proyecto) => proyecto.unidades)
    @JoinColumn({ name: 'proyecto_id'})
    proyecto!: Relation<ProyectoEntity>;

}

```

### 4 **Migraciones**
El archivo de migraciones se utiliza para mantener la base de datos sincronizada con las entidades definidas. En este ejemplo, el archivo index.ts está vacío y se debe completar según las necesidades de migración de la base de datos.

```typescript index.ts
export {};
```

### 4. **Parametros SQLite: sqliteParams.ts**

Configura la conexión SQLite utilizando el plugin de Capacitor.


```typescript sqliteParams.ts
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

const sqliteConnection: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
const sqlitePlugin = CapacitorSQLite;
const platform: string = Capacitor.getPlatform();

const sqliteParams = {
  connection: sqliteConnection,
  plugin: sqlitePlugin,
  platform: platform
}

export default sqliteParams;

```
Para más detalles, consulta la [documentación oficial](https://github.com/capacitor-community/sqlite/blob/master/docs/TypeORM-Usage-From-5.6.0.md) para mas detalles 

### 5. **Repositorios**

Los repositorios proporcionan una manera sencilla de interactuar con las entidades. En este ejemplo, el repositorio para la entidad Author está configurado.

```typescript
import {Injectable} from "@angular/core";
import {Repository} from "typeorm";
import {ProyectoEntity} from "../entities/Operaciones/Proyecto.entity";
import db from "../datasources/DataSource";
import {Proyecto} from "../../app/shared/models/GetProyectResponse.model";

@Injectable({
  providedIn: 'root'
})
export class OperacionesRepository {
    proyectosRepository: Repository<ProyectoEntity>

    constructor() {
        this.proyectosRepository = db.dataSource.getRepository(ProyectoEntity)
    }

    async saveProyectos(proyectos: Proyecto[]){
        const proyectosEntities = proyectos.map(proyecto => {
            const proyectoEntity = new ProyectoEntity();
            proyectoEntity.proyecto_id = proyecto.idproyecto;
            proyectoEntity.proyecto = proyecto.proyecto;

            return proyectoEntity;
        });

        await this.proyectosRepository.save(proyectosEntities);
    }

    getIncidencias(){
        return this.proyectosRepository.find({
            relations: [
                'unidades',]
        })
    }
}
```
