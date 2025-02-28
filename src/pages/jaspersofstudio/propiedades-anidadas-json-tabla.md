---
layout: '@/layouts/PageLayout.astro'  
title: Incorporar objetos anidados del JSON en una tabla
---

### **Incorporar objetos anidados del JSON en una tabla**

Sigue estos pasos para mostrar datos anidados de un JSON en una tabla:

#### Paso a Paso:
1. **Insertar componente Table**
    - En la pestaña **Palette**, arrastra el elemento **Table** al diseño
    - Selecciona la opción _"Create a Table using a new dataset"_

2. **Configurar Dataset para datos anidados**
    - Elige: _"Create new dataset from connection/data source"_
    - Selecciona tu adaptador de JSON previamente configurado
    - **JSON Path**: Especifica la ruta del array anidado (ej: `items` para un JSON como `{"items": [...]}`)
      ```json
      // Ejemplo de estructura esperada
      {
        "orden": "123",
        "items": [
          {"producto": "Laptop", "cantidad": 2},
          {"producto": "Mouse", "cantidad": 5}
        ]
      }
      ```
    - Selecciona los campos a mostrar en la tabla (ej: `producto`, `cantidad`)

3. **Configuración avanzada del DataSource**
    - En la pestaña **Group By**:
        - Selecciona: _"Use a JRDataSource expression"_
        - Inserta este código para acceder al array anidado:
          ```java
          // Transforma el DataSource principal al sub-conjunto de datos
          ((net.sf.jasperreports.engine.data.JsonDataSource)$P{REPORT_DATA_SOURCE})
            .subDataSource("items") // Reemplaza "items" por tu key JSON
          ```
          *¿Qué hace esto?*  
          Crea un sub-`DataSource` que apunta específicamente al array anidado, permitiendo iterar sobre sus elementos.

4. **Vincular campos a la tabla**
    - Arrastra los campos del nuevo dataset desde el panel **Outline** a las columnas de la tabla
    - Ajusta los encabezados y formatos según necesites

#### 🔍 Validación Importante:
- **Coherencia en nombres**: El key usado en `subDataSource()` (ej: `"items"`) debe coincidir exactamente con el nombre del array en tu JSON
- **Tipos de datos**: Asegúrate que los campos numéricos estén configurados como `java.lang.Integer/Double` en las propiedades del campo

#### 💡 Ejemplo de Uso en Tabla:
| Producto (Texto) | Cantidad (Número) |
|------------------|-------------------|
| `$F{producto}`   | `$F{cantidad}`    |
