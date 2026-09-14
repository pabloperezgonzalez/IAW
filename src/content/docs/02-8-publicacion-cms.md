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

### Actividad UP2.8. Presentación de los gestores de contenidos - CE2.h)
A partir del sitio **WordPress instalado, configurado, personalizado y protegido con XAMPP**, cada alumnado realizará una **presentación de su sitio Web** ante el resto de la clase. El objetivo es explicar las decisiones tomadas durante el desarrollo y demostrar que el sitio funciona correctamente.

a. Presentar brevemente la temática y finalidad del sitio Web.

b. Mostrar la página principal y explicar su estructura.

c. Mostrar el tema utilizado y las principales personalizaciones realizadas.

d. Enseñar las páginas, entradas, categorías y etiquetas creadas.

e. Mostrar el menú de navegación y explicar su organización.

f. Presentar los diferentes usuarios y roles configurados.

g. Mostrar la extensión o plugin adicional instalado y explicar su utilidad.

h. Explicar las principales medidas de seguridad aplicadas.

i. Realizar una demostración práctica de las principales funcionalidades del sitio.

j. Explicar brevemente los problemas encontrados durante el desarrollo y cómo se solucionaron.

#### Condiciones de la presentación
- Duración aproximada: **5-7 minutos**.
- La presentación debe realizarse mostrando el **WordPress funcionando**.
- Se deberá utilizar el sitio Web desarrollado como elemento principal de la presentación.
- El alumnado debe demostrar personalmente las funcionalidades más importantes.
- No es necesario explicar comandos de instalación o configuración.
- Se valorará especialmente la capacidad para **explicar las decisiones tomadas y justificar la configuración realizada**.

#### Contenido mínimo
La presentación deberá incluir:

| Apartado | Contenido |
|---|---|
| **Temática** | Finalidad y público del sitio |
| **Diseño** | Tema, apariencia y personalización |
| **Contenidos** | Páginas, entradas, categorías y etiquetas |
| **Navegación** | Menús y organización |
| **Usuarios** | Roles y permisos |
| **Extensiones** | Plugins utilizados |
| **Seguridad** | Medidas de protección aplicadas |
| **Demostración** | Funcionamiento del sitio |
| **Problemas** | Dificultades y soluciones |

#### Rúbrica de evaluación
| Criterio | Excelente (10) | Notable (8) | Suficiente (5) | Insuficiente (0-4) | Ponderación |
|:---|:---|:---|:---|:---|:---:|
| **Presentación del proyecto** | Explica claramente la temática, finalidad y público objetivo. | Explica correctamente la finalidad del sitio. | Explicación básica y poco detallada. | No explica adecuadamente el proyecto. | **10%** |
| **Diseño y personalización** | Presenta y justifica las personalizaciones realizadas, mostrando un diseño coherente. | Muestra correctamente las principales personalizaciones. | Presenta algunas personalizaciones básicas. | Apenas existen personalizaciones o no sabe explicarlas. | **15%** |
| **Organización de contenidos** | Demuestra una organización clara mediante páginas, entradas, categorías, etiquetas y menús. | La organización es correcta. | La organización es básica. | Los contenidos están desorganizados o no sabe explicarlos. | **15%** |
| **Usuarios y permisos** | Explica y demuestra correctamente los diferentes roles y sus permisos. | Configura correctamente los usuarios y roles. | Presenta una configuración básica. | No diferencia correctamente los roles o permisos. | **10%** |
| **Plugins y funcionalidades** | Explica claramente las extensiones utilizadas y demuestra su funcionamiento. | Explica y demuestra correctamente las principales extensiones. | Utiliza alguna extensión pero apenas explica su funcionamiento. | Las extensiones no funcionan o no sabe explicar su utilidad. | **10%** |
| **Seguridad** | Explica y demuestra varias medidas de seguridad aplicadas al sitio. | Explica correctamente las principales medidas de seguridad. | Aplica algunas medidas básicas. | No aplica o no sabe explicar medidas de seguridad. | **15%** |
| **Demostración práctica** | Demuestra de forma fluida las principales funcionalidades y responde correctamente a las preguntas. | Demuestra correctamente las funcionalidades principales. | La demostración es parcial o presenta algunas dificultades. | No consigue demostrar correctamente el funcionamiento. | **15%** |
| **Comunicación y expresión** | Se expresa con claridad, utiliza vocabulario técnico adecuado y mantiene una presentación fluida. | Se expresa correctamente y utiliza vocabulario técnico adecuado. | La explicación es comprensible, aunque poco fluida. | La explicación es confusa o utiliza incorrectamente la terminología. | **5%** |
| **Problemas y soluciones** | Identifica problemas reales del desarrollo y explica claramente cómo los solucionó. | Explica correctamente algunos problemas y soluciones. | Menciona problemas pero apenas explica las soluciones. | No identifica problemas ni soluciones. | **5%** |
| **TOTAL** | | | | | **100%** |