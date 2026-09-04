---
title: 🌐 UP1.6. Procesamiento de código en el servidor - CE1.e)
---

### RA1. Prepara el entorno de desarrollo y los servidores de aplicaciones Web instalando e integrando las funcionalidades necesarias.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| e) Se han añadido y configurado los componentes y módulos necesarios para el procesamiento de código en el servidor. | Práctico | 15 % |

### 1. Introducción
Una aplicación Web dinámica necesita que el servidor sea capaz de **interpretar y ejecutar código** antes de enviar una respuesta al cliente. Un servidor Web como Apache o Nginx puede entregar directamente archivos estáticos como HTML, CSS, JavaScript o imágenes, pero necesita componentes adicionales para ejecutar código de servidor.

Una arquitectura habitual es: **Cliente → Servidor Web → Módulo/Runtime → Aplicación → Base de datos**

Por ejemplo: **Navegador → Apache → PHP → MariaDB**

### 2. Código estático y código dinámico
Es importante diferenciar entre **contenido estático** y **contenido dinámico**. El contenido estático se entrega directamente al cliente:

- HTML
- CSS
- JavaScript
- Imágenes
- Vídeos

El contenido dinámico necesita ser procesado por el servidor:

- PHP
- Java
- Python
- Node.js
- ASP.NET Core

Por ejemplo, un archivo PHP puede contener:

`<?php echo "Hola"; ?>`

El navegador no debe recibir el código PHP, sino el resultado de su ejecución:

**PHP → "Hola" → Navegador**

### 3. Componentes necesarios para ejecutar código
Para ejecutar código en el servidor pueden ser necesarios diferentes componentes:

| Componente | Función |
|---|---|
| Servidor Web | Recibe las peticiones |
| Runtime | Ejecuta el código |
| Módulos | Amplían las capacidades del servidor |
| Extensiones | Añaden funcionalidades al lenguaje |
| Librerías | Proporcionan funcionalidades reutilizables |
| Dependencias | Componentes necesarios para la aplicación |

Estos elementos deben ser **compatibles entre sí**. Por ejemplo, una aplicación PHP necesita una versión compatible de PHP y las extensiones requeridas por la aplicación.

### 4. PHP y Apache
Una combinación muy habitual en servidores Linux es **Apache + PHP**.
Podemos instalar PHP y su integración con Apache mediante:

`sudo apt install php libapache2-mod-php`

Podemos comprobar la versión instalada mediante:

`php -v`

El módulo permite que Apache procese determinados archivos PHP.

El funcionamiento sería: **Petición → Apache → Módulo PHP → Código PHP → Respuesta**

Después de modificar la configuración puede ser necesario reiniciar Apache:

`sudo systemctl restart apache2`

### 5. Extensiones del lenguaje
Las aplicaciones suelen necesitar **extensiones** adicionales para proporcionar determinadas funcionalidades. 
Por ejemplo, una aplicación PHP que utiliza MariaDB/MySQL puede necesitar:

`sudo apt install php-mysql`

Otras extensiones habituales son:

- `php-curl`
- `php-mbstring`
- `php-xml`
- `php-zip`
- `php-gd`

Podemos consultar las extensiones instaladas mediante:

`php -m`

No debemos instalar extensiones innecesarias. Es preferible instalar únicamente las que requiere la aplicación.

### 6. Otros entornos de ejecución
PHP no es la única tecnología utilizada para ejecutar código en el servidor.

| Tecnología | Entorno de ejecución |
|---|---|
| PHP | PHP Runtime |
| Java | JVM |
| Python | Python Runtime + WSGI/ASGI |
| JavaScript | Node.js |
| .NET | .NET Runtime |

Cada tecnología necesita una configuración diferente.

Por ejemplo:

**Node.js:**

`Navegador → Nginx → Node.js → Aplicación`

**Java:**

`Navegador → Apache/Nginx → Tomcat → Aplicación Java`

**Python:**

`Navegador → Nginx → Gunicorn/Uvicorn → Aplicación Python`

### 7. Módulos del servidor Web
Los servidores Web pueden incorporar **módulos** para ampliar sus funcionalidades. En Apache existen módulos para:

- Reescritura de URLs.
- HTTPS.
- Autenticación.
- Compresión.
- Proxy inverso.
- Gestión de cabeceras.

Por ejemplo, podemos habilitar el módulo de reescritura:

`sudo a2enmod rewrite`

Y posteriormente reiniciar Apache:

`sudo systemctl restart apache2`

El uso de módulos permite adaptar el servidor a las necesidades concretas de la aplicación.

### 8. Dependencias y gestores de paquetes
Las aplicaciones modernas suelen depender de diferentes librerías y componentes. Los gestores de dependencias permiten instalar y mantener estos elementos.

| Tecnología | Gestor |
|---|---|
| PHP | Composer |
| JavaScript/Node.js | npm |
| Python | pip |
| Java | Maven / Gradle |
| .NET | NuGet |

Por ejemplo, una aplicación PHP puede definir sus dependencias mediante Composer.

`composer install`

Esto permite instalar las versiones de las librerías necesarias para que la aplicación funcione correctamente. Es importante controlar las versiones porque una actualización de una dependencia puede provocar incompatibilidades.

### 9. Configuración, pruebas y seguridad
Después de añadir componentes debemos comprobar que funcionan correctamente. Algunas comprobaciones son:

- Verificar las versiones instaladas.
- Comprobar los módulos activos.
- Revisar los archivos de configuración.
- Reiniciar los servicios necesarios.
- Consultar los logs.
- Probar la ejecución de la aplicación.

Por ejemplo:

`php -v`

`php -m`

`sudo systemctl status apache2`

`sudo journalctl -u apache2`

Desde el punto de vista de seguridad, debemos mantener actualizados el runtime, los módulos y las dependencias y evitar componentes innecesarios.

### 10. Actividad práctica: Configuración del entorno para ejecutar código en el servidor
La empresa necesita preparar el servidor Web para poder ejecutar código dinámico y alojar una aplicación Web. Realiza las siguientes acciones:

a. **Instala PHP** en el servidor.

b. **Configura Apache** para que pueda procesar páginas PHP.

c. **Comprueba que PHP está correctamente instalado** y que Apache puede ejecutar código PHP.

d. **Instala las extensiones de PHP necesarias** para trabajar con aplicaciones Web y justifica su elección.

e. **Crea una página PHP de prueba** y comprueba que se ejecuta correctamente desde un navegador.

f. **Verifica el funcionamiento conjunto** de Apache y PHP.

g. **Documenta el procedimiento realizado**, incluyendo capturas de las principales comprobaciones y las incidencias encontradas.

#### Resultado esperado
Al finalizar la actividad, el servidor deberá ser capaz de ejecutar código PHP y comunicarse con el servidor de bases de datos:

**Cliente → Apache → PHP → MariaDB**

> **Importante:** no es necesario buscar los comandos utilizados. Todos los comandos y procedimientos necesarios para realizar la actividad aparecen en la explicación del criterio.