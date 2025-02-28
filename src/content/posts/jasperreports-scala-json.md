---
title: Cómo generar un reporte a partir de un JSON en Jasper Reports en Scala
description: Crea un diseño en Jaspersoft Studio y después genera un reporte usando un datasource de tipo JSON con la librería de JasperReports. 
publishedDate: 2025-01-30
author: "David San Luis Aguirre"
tags:
  - documentation
---

## Introducción

JasperReports es una poderosa herramienta de generación de reportes que permite crear documentos en formatos como PDF, HTML, XLS, y más. En este tutorial, aprenderemos a generar una factura a partir de un JSON usando la biblioteca JasperReports en Scala.

## Requisitos previos

Antes de comenzar, asegúrese de contar con:

- [**Jaspersoft Studio**](https://community.jaspersoft.com/download-jaspersoft/community-edition/) instalado para diseñar el reporte. En este tutorial se usara la version 6.21.3.
- Un archivo [**JSON**](/jsons/invoices-json-examples) que sirva como fuente de datos.

### Paso 1: Diseñar el reporte en Jaspersoft Studio

#### 1.1 Configurar el Origen de Datos JSON

1. **Acceder al Administrador de Data Adapters**
   - En la barra lateral izquierda, localiza **Repository Explorer**
   - Haz clic derecho en **Data Adapters** > **Create Data Adapter**

2. **Seleccionar Tipo de Fuente de Datos**
   - En el wizard de creación:
      - **Tipo**: Selecciona **JSON File** (última opción en la lista)
      - **Nombre**: `JSON_Adapter_iNVOICE` (usar nombre descriptivo)

3. **Configurar Ruta del JSON** 🗂️
   - **File Name/URL**:
      - Usa el ícono de carpeta para seleccionar tu archivo JSON local
      - Marca esta opcion:
         - ✅ **Use the report JSON expression when filling the report**

4. **Validación de Conexión** 🔍
   - Haz clic en **Test** → Debes ver:  
     `Successful`
   - Si falla:
      - Verifica la sintaxis del JSON (usa [JSONLint](https://jsonlint.com/))

---



### Paso 2. **Crear un Nuevo Reporte con Datos JSON**

Sigue estos pasos para configurar la estructura base del reporte:

#### Paso a Paso:
1. **Iniciar nuevo reporte**
   - Menú superior: **File > New > Jasper Report**
   - Selecciona un template básico (ej: `Invoice`)

2. **Configurar conexión a JSON**
   - En la sección **Data Adapter**:
      - Selecciona tu adaptador JSON previamente creado
      - Verifica la ruta del archivo JSON de prueba

3. **Mapear estructura del JSON**
   - En el panel **Dataset and Query**:
      - **JSON Path**: Haz doble clic en el nodo padre (`invoice` en este caso)
        ```json
        // Ejemplo de estructura esperada:
        {
          "invoice": {
            "id": "INV-2023",
            "items": [...],
            "client": {...}
          }
        }
        ```
      - Click en **Read Fields** para cargar los sub-campos

4. **Agregar campos al diseño**
   - Desde el panel **Fields**:
      - Arrastra los elementos clave al área de diseño (ej: `invoice.id`, `invoice.total`)
      - Usa elementos estáticos (Text) para encabezados

5. **Configuración final del dataset**
   - En la pestaña **Group By**:
      - No modifiques valores (presiona **Next** directamente)
   - Click en **Finish** para generar la plantilla base

#### 📸 Vista Preliminar:
![Vista inicial del reporte con datos básicos](@/assets/screenshots/invoice-init-screenshot.png)
*Ejemplo de reporte con campos principales mapeados*

---

#### 💡 **Trabajando con Datos Anidados** <span style="color: #2ecc71;">(Nuevo!)</span>:
Para incluir tablas con estructuras complejas (ej: lista de ítems dentro de `invoice.items`):  
➡️ [Guía completa: Tablas con propiedades anidadas en JSON](/jaspersofstudio/propiedades-anidadas-json-tabla)

---

### Paso 3. **Diseñar el reporte**:

1. **Organización básica de elementos**
    - Arrastre y suelte los campos del panel *Fields* al área de diseño
    - Personalice con:
        - **Títulos**: Use *Static Text* con fuentes grandes (18-22pt)
        - **Encabezados**: Fondo coloreado + texto blanco
        - **Formatos**: Alineación numérica derecha, fechas con `dd/MM/yyyy`

2. **Creación de variables para operaciones** 
    - Click derecho en *Variables* > *Create Variable*:
      ```java
      // Ejemplo: Cálculo de subtotal
      $F{precio} * $F{cantidad}
      ```
    - Tipos comunes:
      | Variable | Expresión | Cálculo | Uso |
      |----------|-----------|---------|-----|
      | TotalItems | `$F{quantity}` | Sum | Pie de tabla |
      | SubTotal | `$F{quantity * $F{unit_price} | Sum | Sección totales |
      | GranTotal | `$F{quantity} * $F{unit_price} * (1 + $F{tax_rate})` | Sum | Resumen final |

3. **Integración de variables en diseño**
   ```java
   // En cuadro de texto dinámico:
   "$ " + $V{GranTotal}
   
   // Con formato monetario:
   (new DecimalFormat("$#,##0.00")).format($V{SubTotal})

#### 📸 Ejemplo de Implementación:
![Ejemplo de diseño final con datos dinámicos](@/assets/screenshots/invoice-finish-screenshot.png)  
*Reporte funcional 

---

### Paso 4. **Compilar y guardar el reporte (.jrxml)**.

#### ¿Por qué necesitamos dos formatos (.jrxml y .jasper)?

1. **Archivo `.jrxml`**
    - **Función**: Es el diseño *editable* del reporte en formato XML.
    - **Características**:
        - Contiene toda la estructura visual (tablas, campos, estilos).
        - Es legible para humanos (puedes abrirlo con cualquier editor de texto).
        - **Solo se usa en fase de diseño** con JasperSoft Studio.

2. **Archivo `.jasper`**
    - **Función**: Versión *compilada* y optimizada del reporte..
    - **Características**:
        - Formato binario específico de JasperReports.
        - No es editable directamente.
        - Requerido para la generación de reportes en tiempo de ejecución.


## Paso 2: Configurar el proyecto Scala

Agregue las siguientes dependencias en su archivo `build.sbt`:

```scala
libraryDependencies ++= Seq(
  "net.sf.jasperreports" % "jasperreports" % "6.20.0",
  "com.fasterxml.jackson.core" % "jackson-databind" % "2.15.0"
)
```

🚧 ¡Este sitio está en construcción! 🚧

