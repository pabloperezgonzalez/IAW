---
title: ☁️ UP2.6. Seguridad de los gestores de contenidos - CE2.f)
---

### RA2. Implanta gestores de contenidos seleccionándolos y estableciendo la configuración de sus parámetros.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| f) Se han activado y configurado los mecanismos de seguridad proporcionados por los propios gestores de contenidos. | Práctico | 15 % |

### 1. Introducción
Los gestores de contenidos incorporan diferentes mecanismos destinados a **proteger el sitio Web, los usuarios y los contenidos**. Una vez instalado y configurado un CMS, debemos activar y revisar estas medidas de seguridad. Entre ellas encontramos:

- Gestión de usuarios y permisos.
- Autenticación.
- Protección del panel de administración.
- Actualizaciones.
- Copias de seguridad.
- Protección frente a intentos de acceso.
- Gestión de sesiones.
- Extensiones de seguridad.
- Registro de actividad.

> La seguridad de un CMS no depende únicamente del servidor. También debemos configurar correctamente las opciones de seguridad que proporciona el propio gestor.

### 2. Usuarios, roles y permisos
Los CMS permiten establecer diferentes niveles de acceso para los usuarios. Por ejemplo:

| Rol | Permisos |
|---|---|
| Administrador | Control total |
| Editor | Gestiona contenidos |
| Autor | Crea y modifica sus contenidos |
| Colaborador | Crea contenidos con restricciones |
| Usuario | Acceso limitado |

> Debemos evitar utilizar cuentas con privilegios de administrador para tareas que no los necesiten. El objetivo es aplicar el principio de: **Mínimo privilegio → Cada usuario tiene únicamente los permisos necesarios**

### 3. Seguridad de las contraseñas
Las cuentas del CMS deben utilizar contraseñas seguras. Debemos comprobar que:

- Las contraseñas sean suficientemente complejas.
- No se utilicen contraseñas predeterminadas.
- Cada usuario tenga sus propias credenciales.
- Se eliminen cuentas innecesarias.
- Las cuentas administrativas estén correctamente protegidas.

Cuando el CMS lo permita, también podemos utilizar mecanismos adicionales como:

- Autenticación multifactor.
- Códigos de un solo uso.
- Llaves de seguridad.
- Políticas de caducidad o reutilización.

> La cuenta de administrador es uno de los elementos más importantes que debemos proteger.

### 4. Protección del panel de administración
El panel de administración permite modificar prácticamente todo el sitio Web, por lo que debe estar especialmente protegido. Debemos:

- Utilizar credenciales seguras.
- Limitar los usuarios administradores.
- Eliminar usuarios innecesarios.
- Utilizar HTTPS.
- Evitar compartir cuentas.
- Controlar los intentos de acceso.
- Mantener actualizado el CMS.

> Por ejemplo: **Usuario → HTTPS → Panel de administración → Autenticación → CMS**

### 5. Actualizaciones del CMS
Las actualizaciones son fundamentales para mantener la seguridad. Debemos mantener actualizados:

- Núcleo del CMS.
- Plugins.
- Módulos.
- Componentes.
- Temas.
- Extensiones.

Las actualizaciones pueden corregir:

- Vulnerabilidades.
- Errores.
- Problemas de compatibilidad.
- Fallos de seguridad.

> Antes de actualizar un CMS en producción es recomendable: **Copia de seguridad → Actualización → Pruebas → Verificación**

### 6. Extensiones y componentes de seguridad
Muchos CMS permiten instalar extensiones destinadas a mejorar la seguridad. Pueden proporcionar funcionalidades como:

- Protección frente a ataques.
- Limitación de intentos de inicio de sesión.
- Detección de cambios.
- Auditoría de usuarios.
- Escaneo de archivos.
- Protección del panel de administración.

Sin embargo, debemos instalar únicamente extensiones **necesarias y mantenidas**. Cada plugin o módulo adicional puede introducir:

- Nuevas vulnerabilidades.
- Dependencias.
- Problemas de compatibilidad.
- Mayor superficie de ataque.

### 7. Copias de seguridad
Las copias de seguridad permiten recuperar el sitio Web ante diferentes problemas. Debemos considerar al menos:

- Archivos del CMS.
- Base de datos.
- Configuración.
- Contenidos subidos por los usuarios.

Una estrategia sencilla sería: **CMS + Base de datos → Copia de seguridad → Almacenamiento seguro**

> Las copias deben comprobarse periódicamente mediante pruebas de restauración. Una copia de seguridad que nunca se ha probado no garantiza que pueda recuperarse correctamente.

### 8. HTTPS y protección de las comunicaciones
El acceso al CMS debe realizarse mediante **HTTPS** para proteger las comunicaciones entre los usuarios y el servidor. HTTPS permite proteger información como:

- Usuarios.
- Contraseñas.
- Sesiones.
- Formularios.
- Contenidos privados.

> El funcionamiento sería: **Navegador → HTTPS/TLS → Servidor Web → CMS**

### 9. Verificación de la seguridad
Después de configurar las medidas de seguridad debemos comprobar que realmente funcionan. Podemos realizar pruebas como:

- Intentar acceder con credenciales incorrectas.
- Comprobar los permisos de diferentes usuarios.
- Verificar que un usuario normal no puede acceder a funciones administrativas.
- Comprobar el acceso mediante HTTPS.
- Revisar las actualizaciones disponibles.
- Comprobar que las extensiones están actualizadas.
- Verificar las copias de seguridad.
- Revisar los registros de actividad.

> El proceso puede resumirse como: **Configurar → Probar → Detectar problemas → Corregir → Volver a comprobar**

### 10. Actividad UP2.6. Seguridad de los gestores de contenidos - CE2.f)
Sobre el sitio **WordPress instalado y personalizado en XAMPP**, activa y configura diferentes mecanismos de seguridad proporcionados por el propio gestor de contenidos para proteger el acceso, los usuarios y la instalación.

a. Comprobar los usuarios existentes y eliminar las cuentas innecesarias.

b. Revisar los roles y permisos de los usuarios creados.

c. Configurar contraseñas seguras para todas las cuentas.

d. Crear un usuario con permisos limitados y comprobar sus restricciones.

e. Revisar las actualizaciones disponibles de WordPress.

f. Instalar y configurar un plugin de seguridad.

g. Activar las medidas de protección disponibles en el plugin.

h. Comprobar la configuración de acceso y protección del panel de administración.

i. Realizar una copia de seguridad de los archivos y de la base de datos.

j. Revisar los avisos o registros de seguridad disponibles.

k. Realizar pruebas de acceso con diferentes usuarios para verificar los permisos y las restricciones.

### Resultado esperado
Disponer de una instalación de WordPress con los usuarios correctamente configurados, contraseñas seguras, componentes actualizados, medidas de protección activadas y una copia de seguridad disponible.