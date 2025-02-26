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

## Paso 1: Diseñar el reporte en Jaspersoft Studio

1. **Crear un Data Adapter a partir de tu JSON**:
   - En la pestaña **"Repository Explorer"**, haz clic derecho y selecciona **"Nuevo adaptador"**.
   - Especifica la ruta de tu archivo JSON.
   - Marca la opción **"Use the report JSON expression when filling the report"**.
   - Haz clic en **"Test"** para verificar que todo funcione correctamente y, si es así, pulsa **"Finish"**.


2. **Crear un nuevo reporte**:

   - Ve a **"File" > "New" > "Jasper Report"**.
   - En la pestaña **"Datasource"**, selecciona el adaptador que agregaste.
   - Si estás usando el JSON proporcionado, haz doble clic en la propiedad **"invoice"** para agregar los elementos dentro de ella.
   - Arrastra los **data fields** necesarios en la pestaña **"Fields"**.
   - En la pestaña **"Group by"**, haz clic en **"Siguiente"** sin modificar nada.
   - Finalmente, pulsa **"Finish"**.

   A continuación se muestra una imagen de cómo debería verse el reporte una vez configurado:

![DavidSan logo](@/assets/screenshots/invoice-init-screenshot.png)

3. **Diseñar el reporte**:

    - Arrastre y suelte los campos en el reporte y personalice el diseño con títulos, encabezados y formatos.
      
A continuación, muestro un ejemplo de cómo lo diseñé:

![DavidSan logo](@/assets/screenshots/invoice-finish-screenshot.png)


4. **Compilar y guardar el reporte (.jrxml)**.

## Paso 2: Configurar el proyecto Scala

Agregue las siguientes dependencias en su archivo `build.sbt`:

```scala
libraryDependencies ++= Seq(
  "net.sf.jasperreports" % "jasperreports" % "6.20.0",
  "com.fasterxml.jackson.core" % "jackson-databind" % "2.15.0"
)
```

🚧 ¡Este sitio está en construcción! 🚧
