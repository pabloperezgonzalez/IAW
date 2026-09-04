---
title: 🌐 UP1.5. Instalación y configuración de servidores Web y BBDD - CE1.c)
---

### RA1. Prepara el entorno de desarrollo y los servidores de aplicaciones Web instalando e integrando las funcionalidades necesarias.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| c) Se han instalado y configurado servidores Web y de bases de datos. | Práctico | 20 % |

### 1. Introducción
Una aplicación Web necesita diferentes servicios para poder funcionar. Entre los más importantes se encuentran el **servidor Web** y el **servidor de bases de datos**. El servidor Web recibe las peticiones de los clientes y proporciona los recursos solicitados, mientras que el servidor de bases de datos almacena y gestiona la información de la aplicación.

Una arquitectura habitual es: **Cliente → HTTP/HTTPS → Servidor Web → Aplicación → Servidor de bases de datos**
En 2º de ASIR, debemos ser capaces de **instalar, configurar, iniciar, comprobar y administrar** estos servicios.

### 2. Servidores Web
Un **servidor Web** es un software encargado de recibir peticiones mediante HTTP o HTTPS y devolver recursos al cliente. Los servidores Web más utilizados son:

| Servidor | Características |
|---|---|
| Apache | Muy utilizado, flexible y modular |
| Nginx | Alto rendimiento y bajo consumo |
| IIS | Servidor Web de Microsoft |
| Caddy | Configuración sencilla y HTTPS automatizado |

Un servidor Web puede proporcionar:

- Páginas HTML.
- Imágenes, CSS y JavaScript.
- Aplicaciones Web.
- Archivos.
- Servicios mediante APIs.
- Conexiones HTTPS.

### 3. Instalación de Apache
En sistemas basados en Debian o Ubuntu podemos instalar Apache mediante:

`sudo apt update`
`sudo apt install apache2`

Una vez instalado podemos comprobar su estado:

`sudo systemctl status apache2`

Y controlar el servicio mediante:

`sudo systemctl start apache2`
`sudo systemctl stop apache2`
`sudo systemctl restart apache2`

Para iniciar Apache automáticamente cuando arranque el sistema:

`sudo systemctl enable apache2`

La instalación debe comprobarse accediendo desde un navegador a la dirección IP del servidor.

### 4. Configuración básica del servidor Web
Después de instalar el servidor Web debemos revisar su configuración. En Apache es importante conocer:

- Directorio raíz del sitio Web.
- Puertos de escucha.
- Hosts virtuales.
- Módulos.
- Archivos de configuración.
- Logs.
- Permisos.

Por ejemplo, el directorio habitual de contenidos en Ubuntu es:

`/var/www/html`

Los puertos más habituales son:

| Puerto | Servicio |
|---|---|
| 80/TCP | HTTP |
| 443/TCP | HTTPS |

Podemos comprobar los puertos en escucha mediante:

`sudo ss -lntp`

También podemos comprobar el funcionamiento mediante:

`curl http://localhost`

### 5. Hosts virtuales
Los **hosts virtuales** permiten alojar varios sitios Web en un mismo servidor. Por ejemplo:

**Servidor Web**

- `www.empresa1.com`
- `www.empresa2.com`
- `www.empresa3.com`

Cada sitio puede tener:

- Su propio dominio.
- Su propio directorio.
- Su propia configuración.
- Sus propios logs.
- Sus propios certificados.

Esto permite aprovechar mejor los recursos de un único servidor. La configuración de hosts virtuales es especialmente importante en entornos donde se alojan múltiples aplicaciones Web.

### 6. Servidores de bases de datos
Un **servidor de bases de datos** proporciona servicios para almacenar, consultar y modificar la información utilizada por las aplicaciones. Algunos SGBD habituales son:

- MariaDB.
- MySQL.
- PostgreSQL.
- Microsoft SQL Server.
- MongoDB.

En una aplicación Web tradicional podemos encontrar:

**Servidor Web → Aplicación → SGBD**

Por ejemplo:

**Apache → PHP → MariaDB**

La aplicación no debería permitir normalmente que los usuarios accedan directamente al SGBD.

### 7. Instalación y configuración de MariaDB
En Ubuntu podemos instalar MariaDB mediante:

`sudo apt update`
`sudo apt install mariadb-server`

Comprobamos el servicio:

`sudo systemctl status mariadb`

También podemos iniciar y detener el servicio:

`sudo systemctl start mariadb`
`sudo systemctl stop mariadb`
`sudo systemctl restart mariadb`

Y configurarlo para que se inicie automáticamente:

`sudo systemctl enable mariadb`

Una vez instalado, debemos revisar su configuración y aplicar medidas de seguridad.

### 8. Bases de datos, usuarios y permisos
Una correcta configuración del SGBD requiere crear **bases de datos, usuarios y permisos adecuados**.
Por ejemplo:

**Aplicación Web**
        ↓ utiliza
**Usuario de aplicación**
        ↓ tiene permisos sobre
**Base de datos de la aplicación**

No es recomendable utilizar el usuario administrador del SGBD para que una aplicación Web realice todas sus operaciones. Debemos aplicar el principio de **mínimo privilegio**, concediendo únicamente los permisos necesarios. También es importante utilizar contraseñas seguras y controlar quién puede acceder al servidor de bases de datos.

### 9. Integración y comprobación
Una vez instalados el servidor Web y el SGBD debemos comprobar que todos los componentes funcionan conjuntamente. Ejemplo:

```text
**Cliente**
    ↓ HTTP/HTTPS
**Apache**
    ↓
**Aplicación PHP**
    ↓
**MariaDB**
```

Podemos realizar diferentes comprobaciones:

- Verificar que los servicios están activos.
- Comprobar los puertos.
- Acceder a la página Web.
- Comprobar los logs.
- Realizar una consulta a la base de datos.
- Comprobar la conexión entre aplicación y SGBD.

Herramientas útiles:

`systemctl`: Permite iniciar, detener, reiniciar, ver el estado, habilitar o deshabilitar servicios que se ejecutan en segundo plano (como un servidor web o una base de datos).

`ss`: Muestra información detallada sobre los puertos que están abiertos, qué conexiones están activas y qué programas las están usando

`curl`: Tranfiere datos desde o hacia un servidor utilizando diferentes protocolos (como HTTP, HTTPS, FTP). Se usa frecuentemente para descargar archivos, probar APIs o verificar si una página web responde correctamente sin necesidad de usar un navegador.

`journalctl`: Recopila todos los mensajes generados por el kernel de Linux, los servicios y el propio sistema operativo, permitiéndote investigar errores y fallos en un solo lugar.

### 10. Actividad práctica: Instalación de un servidor Web y de bases de datos
Una empresa necesita preparar un servidor Linux para alojar una futura aplicación Web. Realiza las siguientes acciones:

a. **Prepara una máquina virtual en VirtualBox** con [Ubuntu Server 26.04.1 LTS](https://ubuntu.com/download/server) con los siguientes requisitos mínimos:
- Nombre: IAW-US-NombreApellidos.
- Memoria RAM: 2 GB.
- Almacenamiento: 25 GB.
- Red: NAT.
- Nombre de usuario: nombreapellidos.
- Instalar interfaz gráfica.

b. **Instala y configura Apache** como servidor Web.

c. **Comprueba que Apache está funcionando** y que el servidor Web es accesible desde un navegador.

d. **Modifica la página Web principal** para mostrar información identificativa del servidor y del alumnado.

e. **Instala y configura MariaDB** como servidor de bases de datos.

f. **Comprueba que Apache y MariaDB están funcionando correctamente.**

g. **Comprueba los puertos y servicios** utilizados por ambos servidores.

h. **Documenta el procedimiento realizado**, incluyendo capturas de las principales comprobaciones y cualquier incidencia encontrada.

#### Resultado esperado
Al finalizar la actividad deberá estar disponible el siguiente entorno:
**Cliente → Servidor Web Apache → Aplicación Web → Base de datos MariaDB**

> **Importante:** no es necesario buscar los comandos utilizados. Todos los comandos y procedimientos necesarios para realizar la actividad aparecen en la explicación del criterio.