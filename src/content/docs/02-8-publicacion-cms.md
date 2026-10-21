---
title: ☁️ UP2.8. Publicación de los gestores de contenidos - CE2.h)
---

### RA2. Implanta gestores de contenidos seleccionándolos y estableciendo la configuración de sus parámetros.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| h) Se han publicado los gestores de contenidos. | Práctico | 10 % | 

### 1. Introducción
Una vez instalado, configurado y probado un gestor de contenidos, el siguiente paso es **publicarlo para que los usuarios puedan acceder a él**. Publicar un CMS significa trasladarlo o ponerlo a disposición de los usuarios en un **entorno accesible**, normalmente un servidor Web conectado a Internet. El proceso puede representarse como: **Desarrollo → Pruebas → Preparación → Publicación → Verificación**.

Antes de publicar debemos asegurarnos de que el CMS funciona correctamente y que se han aplicado las medidas de seguridad necesarias.

### 2. Entorno de desarrollo y entorno de producción
Durante el desarrollo podemos utilizar un ordenador local o una máquina virtual.  Por ejemplo: **Ordenador → XAMPP → Apache + PHP + MariaDB → CMS**. Sin embargo, los usuarios finales necesitan acceder al CMS desde un servidor de producción. Podemos diferenciar:

| Entorno | Finalidad |
|---|---|
| Desarrollo | Crear y configurar el CMS |
| Pruebas | Comprobar su funcionamiento |
| Producción | Ofrecer el CMS a los usuarios |

> No es recomendable utilizar directamente el entorno de desarrollo como servidor público sin realizar previamente las configuraciones necesarias.

### 3. Preparación del servidor
Antes de publicar el CMS debemos comprobar que el servidor cumple los requisitos necesarios. Debemos verificar:

- Sistema operativo.
- Servidor Web.
- Versión de PHP u otro lenguaje necesario.
- Sistema gestor de bases de datos.
- Extensiones necesarias.
- Espacio de almacenamiento.
- Memoria disponible.
- Permisos de archivos.
- Configuración de red.

Por ejemplo, para muchos CMS basados en PHP podemos encontrar una arquitectura como: **Cliente → Apache/Nginx → PHP → CMS → MariaDB/MySQL**

### 4. Dominio y acceso al sitio Web
Para que los usuarios puedan acceder al CMS desde Internet podemos utilizar un **nombre de dominio**, como, por ejemplo **www.ejemplo.es**. El dominio debe estar asociado mediante DNS a la dirección IP del servidor.

El funcionamiento sería: **Usuario → www.ejemplo.es → DNS → IP del servidor → Servidor Web → CMS**
También podemos utilizar un subdominio, por ejemplo: **blog.ejemplo.es**

> Durante las pruebas también podemos utilizar directamente la dirección IP del servidor.

### 5. Transferencia de los archivos del CMS
Si el CMS se ha desarrollado en un equipo local, debemos trasladar sus archivos al servidor de producción. Podemos utilizar diferentes métodos:

- FTP.
- SFTP.
- SCP.
- Git.
- Herramientas de administración del hosting.

Debemos colocar los archivos en el directorio configurado como raíz del sitio Web. Por ejemplo: **/var/www/ejemplo/**. También debemos comprobar que los permisos de los archivos y directorios son adecuados.

> No debemos proporcionar permisos excesivos simplemente para solucionar problemas de acceso.

### 6. Configuración de la base de datos
El CMS necesita acceder a su base de datos en el servidor de producción. Debemos:

1. Crear la base de datos.
2. Crear un usuario específico.
3. Asignar los permisos necesarios.
4. Importar la estructura y los datos.
5. Configurar los datos de conexión del CMS.
6. Comprobar la conexión.

La aplicación debe utilizar un usuario específico de la base de datos y no una cuenta administrativa. El proceso sería: **CMS → Usuario de aplicación → Base de datos**

### 7. Configuración del servidor Web
El servidor Web debe estar preparado para atender las peticiones del CMS. Debemos configurar, según el servidor utilizado:

- Directorio raíz.
- Dominio o subdominio.
- Virtual Host o bloque de servidor.
- Versión de PHP.
- Módulos necesarios.
- Permisos.
- Reescritura de URLs.
- Página de inicio.
- Logs.

Por ejemplo: **www.ejemplo.es → Virtual Host → /var/www/ejemplo → CMS**

Una configuración incorrecta puede provocar errores como:

- **403 Forbidden**
- **404 Not Found**
- **500 Internal Server Error**

### 8. Configuración de HTTPS
Antes de publicar el CMS debemos proteger las comunicaciones utilizando **HTTPS**. Para ello debemos disponer de un certificado TLS válido. 

El acceso será: **https://www.ejemplo.es**

HTTPS permite proteger información como:

- Contraseñas.
- Sesiones.
- Formularios.
- Datos de usuarios.
- Información administrativa.

> Un CMS publicado en Internet debe proteger especialmente los accesos al panel de administración.

### 9. Verificación de la publicación
Una vez publicado el CMS debemos realizar una última comprobación desde el exterior. Debemos verificar:

- Acceso al dominio.
- Página principal.
- Menús y enlaces.
- Inicio de sesión.
- Panel de administración.
- Creación y edición de contenidos.
- Formularios.
- Imágenes y archivos.
- Extensiones.
- Conexión con la base de datos.
- HTTPS.
- Permisos de usuarios.

> El proceso sería: **Publicar → Comprobar → Detectar errores → Corregir → Volver a comprobar**

### 10. Actividad UP2.8. Presentación de los gestores de contenidos - CE2.h)
A partir del sitio **WordPress instalado, configurado, personalizado y protegido con XAMPP**, cada alumnado realizará una **presentación de su sitio Web** ante el resto de la clase. El objetivo es explicar las decisiones tomadas durante el desarrollo y demostrar que el sitio funciona correctamente.

a. Presentar brevemente la temática y finalidad del sitio Web.

b. Mostrar la página principal y explicar su estructura.

c. Mostrar el tema utilizado y las principales personalizaciones realizadas.

d. Enseñar las páginas y entradas creadas.

e. Realizar una demostración práctica de las principales funcionalidades del sitio.

f. Explicar brevemente los problemas encontrados durante el desarrollo y cómo se solucionaron.

#### Condiciones de la presentación
- Duración máxima: **5 minutos**.
- La presentación debe realizarse mostrando el **WordPress funcionando**.
- Se deberá utilizar el sitio Web desarrollado como elemento principal de la presentación.
- El alumnado debe demostrar personalmente las funcionalidades más importantes.
- No es necesario explicar comandos de instalación o configuración.
- Se valorará especialmente la capacidad para **explicar las decisiones tomadas y justificar la configuración realizada**.