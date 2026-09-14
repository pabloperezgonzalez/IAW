---
title: ☁️ UP2.4. Instalación de gestores de contenidos - CE2.c)
---

### RA2. Implanta gestores de contenidos seleccionándolos y estableciendo la configuración de sus parámetros.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| c) Se han instalado diferentes tipos de gestores de contenidos. | Práctico | 15 % |

### 1. Introducción
Los gestores de contenidos o **CMS (Content Management System)** permiten crear y administrar sitios Web sin tener que desarrollar desde cero todas sus funcionalidades. En este criterio se debe aprender a **instalar diferentes tipos de CMS**, comprobando previamente sus requisitos y configurando correctamente el entorno necesario para su funcionamiento.

El proceso general será: **Requisitos → Instalación → Configuración → Comprobación**

### 2. Requisitos previos
Antes de instalar un CMS debemos comprobar que el servidor dispone de los componentes necesarios. Habitualmente necesitaremos:

- Sistema operativo.
- Servidor Web, como Apache o Nginx.
- Lenguaje de programación, como PHP.
- Sistema gestor de bases de datos, como MariaDB.
- Extensiones necesarias.
- Espacio de almacenamiento.
- Acceso de administración.

> Por ejemplo: **CMS PHP → Apache + PHP + MariaDB**

### 3. Preparación del entorno
Antes de realizar la instalación debemos preparar el servidor. Algunas tareas habituales son:

- Actualizar el sistema.
- Instalar el servidor Web.
- Instalar el lenguaje necesario.
- Instalar el SGBD.
- Crear la base de datos.
- Crear el usuario de la aplicación.
- Configurar los permisos.
- Comprobar que los servicios funcionan.

> Es importante separar la instalación del CMS de la configuración del servidor: primero debemos disponer de un entorno funcional.

### 4. Instalación de un CMS
El procedimiento general para instalar un CMS suele ser:

1. Obtener el software del CMS.
2. Copiarlo al directorio Web.
3. Configurar los permisos necesarios.
4. Crear la base de datos.
5. Acceder al instalador desde el navegador.
6. Introducir los datos de conexión con la base de datos.
7. Crear el usuario administrador.
8. Completar la instalación.
9. Acceder al panel de administración.
10. Comprobar el funcionamiento.

El acceso normalmente se realiza mediante una dirección similar a: `http://servidor/cms`

### 5. Instalación de WordPress
**WordPress** es uno de los CMS más utilizados para crear blogs y sitios Web. 
Para instalarlo debemos preparar: **Apache + PHP + MariaDB + WordPress**

Durante el proceso de instalación será necesario configurar:

- Nombre de la base de datos.
- Usuario de la base de datos.
- Contraseña.
- Servidor de la base de datos.
- Nombre del sitio.
- Usuario administrador.
- Contraseña del administrador.

> Una vez finalizada la instalación debemos comprobar: **Navegador → WordPress → Base de datos**

### 6. Instalación de otros CMS
Para comprender las diferencias entre los gestores de contenidos, es recomendable instalar más de un CMS. Por ejemplo:

| CMS | Utilización principal |
|---|---|
| WordPress | Blogs y Web corporativas |
| Joomla | Portales y sitios Web |
| Drupal | Portales y proyectos complejos |
| PrestaShop | Comercio electrónico |
| Moodle | Plataformas educativas |

> Aunque el procedimiento general es similar, cada CMS puede tener **requisitos, configuraciones y métodos de instalación diferentes**.

### 7. Configuración de la base de datos
Muchos CMS necesitan una base de datos para almacenar:

- Usuarios.
- Configuración.
- Páginas.
- Artículos.
- Categorías.
- Comentarios.
- Productos.
- Otros contenidos.

> No es recomendable utilizar el usuario administrador del SGBD para que la aplicación acceda a la base de datos. Aplicar el principio de **mínimo privilegio** reduce las consecuencias de un posible compromiso de la aplicación.

### 8. Comprobación de la instalación
Una vez instalado el CMS debemos comprobar que funciona correctamente. Podemos verificar:

- Acceso a la página principal.
- Acceso al panel de administración.
- Creación de contenidos.
- Modificación de contenidos.
- Gestión de usuarios.
- Conexión con la base de datos.
- Carga de imágenes y archivos.
- Funcionamiento de los enlaces.

> El proceso puede resumirse como: **Instalar → Configurar → Acceder → Crear contenido → Comprobar**

### 9. Problemas habituales durante la instalación
Durante la instalación pueden aparecer diferentes problemas.

| Problema | Posible causa |
|---|---|
| El CMS no carga | Apache/Nginx no funciona |
| Error de PHP | Versión o extensión incorrecta |
| Error de conexión con BD | Datos de conexión incorrectos |
| No se pueden subir archivos | Permisos incorrectos |
| Página en blanco | Error de PHP o configuración |
| Instalación bloqueada | Requisitos no cumplidos |
| Error 403 | Permisos o configuración del servidor |
| Error 500 | Error del servidor o aplicación |

### 10. Actividad UP2.4. Instalación de gestores de contenidos - CE2.c)
Utilizando el entorno **XAMPP previamente instalado**, instala y configura **WordPress** en el servidor local, preparando la base de datos necesaria y comprobando posteriormente el funcionamiento del gestor de contenidos.

a. Comprobar que **Apache** y **MariaDB** están funcionando correctamente en XAMPP.

b. Descargar WordPress y preparar sus archivos en el directorio de publicación de XAMPP.

c. Crear una base de datos específica para WordPress.

d. Crear el usuario y los permisos necesarios para acceder a la base de datos.

e. Iniciar el proceso de instalación de WordPress desde el navegador.

f. Configurar los datos de conexión con la base de datos.

g. Crear la cuenta de administrador de WordPress.

g. Configurar el nombre y los datos básicos del sitio Web.

h. Acceder al panel de administración y crear una primera página o entrada.

i. Comprobar desde el navegador que el sitio Web funciona correctamente.

#### Resultado esperado
Disponer de una instalación funcional de **WordPress sobre XAMPP**, accesible desde el navegador y con acceso al panel de administración.
La arquitectura utilizada será: **Navegador → Apache → PHP → WordPress → MariaDB**