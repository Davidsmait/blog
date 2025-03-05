---
layout: '@/layouts/PageLayout.astro'
title: CEN
---


# Proceso de Desarrollo

El proceso se estructuró en varias fases, comenzando por un exhaustivo análisis de los requerimientos, lo que permitió definir una solución que maximizara la experiencia de usuario y la integración con el sistema ERP existente.

## Análisis de Requerimientos

- Se identificó la necesidad de ofrecer una experiencia de usuario flexible a través de aplicaciones móviles.
- Los usuarios requerían acceso remoto a los módulos del ERP de la compañía, facilitando la operación en cualquier momento y lugar.

## Solución General

- Se desarrolló una aplicación móvil multiplataforma, disponible para iOS y Android, que permite a los usuarios acceder a los módulos a los que tienen permisos asignados.
- La comunicación entre la app y el ERP se establece mediante servicios REST, garantizando una integración robusta y escalable.
- La autenticación se gestiona a través del ERP, el cual genera un token JWT que se adjunta en cada petición, asegurando la validez y seguridad de las sesiones.

---

# Arquitectura y Enfoque Técnico

Se adoptó una arquitectura híbrida **offline-first** para garantizar funcionalidad sin conexión, lo que significa que la aplicación puede funcionar sin conexión al almacenar los datos localmente y sincronizarlos con el servidor cuando se disponga de internet.

## **Arquitectura Técnica**
### **Frontend**
- **Framework**: `Ionic + Angular` (aplicación híbrida Android/iOS).
- **Gestión de Estado**: `NgRx` (con Store, Actions, Reducers y Effects para flujo unidireccional).
- **Módulos de Hardware**:
    - Escaneo de QR/códigos de barras: `capacitor barcode-scanner` + personalización para tolerancia a errores.
- **Persistencia local**: Base de datos embebida para almacenamiento offline seguro con `sqlite`.

### Backend (Integrado, desarrollado por el cliente )

## Flujo de Trabajo

1. **Almacenamiento Local Inmediato:**
    - Los datos se guardan inmediatamente en una base de datos embebida (SQLite) en el dispositivo.
    - Se han implementado métodos en el repositorio de las entidades para identificar y recuperar los registros que aún no se han enviado al servidor.

2. **Sincronización con el Servidor:**
    - Cuando la aplicación detecta que hay conexión a internet, utiliza el cliente HTTP de Angular para enviar los registros pendientes al servidor.
    - Una vez confirmado el envío, cada registro se marca como "enviado", de modo que solo se vuelven a procesar aquellos que siguen pendientes.

Este enfoque garantiza que la aplicación pueda recolectar y almacenar datos de manera confiable, sin importar la disponibilidad de conexión, y luego sincronizarlos automáticamente cuando sea posible.

---

# Desafíos Técnicos y Soluciones

| **Desafío**                                                                 | **Solución Implementada**                                                                                                                                                                         | **Resultado**                                                                            |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **Sincronización offline de datos críticos**                                | Implementación de capa de sincronización con:<br>- `SQLite` para almacenamiento local<br>- `TypeORM` para mapeo objeto-relacional<br>- Lógica de reintentos exponenciales con backoff inteligente | 99.8% de operaciones exitosas<br>en condiciones de conectividad intermitente             |
| **Rechazo de imágenes por tamaño excesivo<br>(especialmente en dispositivos iOS)** | Integración de sistema de compresión en tiempo real:<br>- Reducción de calidad al 50%                                                                                                             | Reducción del 100% en peso de archivos<br>sin pérdida perceptible de calidad             |
| **Validación de despachos/incidencias<br>dependientes de hardware**         | Flujo de permisos adaptativo:<br>1. Solicitud contextual con explicación UX<br>2. Fallback a configuración nativa<br>3. Mockeo de datos para desarrollo<br>4. Polyfills para API faltantes        | 100% de cumplimiento en:<br>- GPS activado<br>- Cámara accesible<br>- Permisos otorgados |
---
