---
title: 🌐 UP1.7. Acceso de las aplicaciones Web a bases de datos - CE1.f)
---

### RA1. Prepara el entorno de desarrollo y los servidores de aplicaciones Web instalando e integrando las funcionalidades necesarias.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| f) Se ha instalado y configurado el acceso a bases de datos. | Práctico | 15 % |

### 1. Introducción
Las aplicaciones Web suelen necesitar almacenar y consultar información de forma permanente. Para ello utilizan un **Sistema Gestor de Bases de Datos (SGBD)** y los componentes necesarios para que la aplicación pueda comunicarse con él. No basta con instalar el SGBD. También es necesario configurar:

- La base de datos.
- Los usuarios.
- Los permisos.
- El acceso desde la aplicación.
- Los controladores o extensiones necesarios.
- La seguridad de las conexiones.

Una arquitectura habitual es:
**Cliente → Servidor Web → Aplicación → Controlador → SGBD → Base de datos**

### 2. Sistemas gestores de bases de datos
Un **SGBD** es el software encargado de gestionar las bases de datos. Algunos de los más utilizados son:

| SGBD | Características |
|---|---|
| MariaDB | SGBD relacional libre |
| MySQL | SGBD relacional muy utilizado en aplicaciones Web |
| PostgreSQL | SGBD relacional avanzado |
| SQL Server | SGBD de Microsoft |
| MongoDB | Base de datos orientada a documentos |

En aplicaciones Web tradicionales son muy habituales **MariaDB, MySQL y PostgreSQL**. La aplicación no accede directamente a los archivos internos del SGBD, sino que utiliza los mecanismos de comunicación proporcionados por este.

### 3. Instalación del SGBD
En Ubuntu Server podemos instalar MariaDB mediante:

`sudo apt update`
`sudo apt install mariadb-server`

Comprobamos que el servicio está funcionando:

`sudo systemctl status mariadb`

También podemos controlar el servicio mediante:

`sudo systemctl start mariadb`
`sudo systemctl stop mariadb`
`sudo systemctl restart mariadb`

Y configurarlo para que se inicie automáticamente:

`sudo systemctl enable mariadb`

Una vez instalado, debemos realizar las comprobaciones y configuraciones de seguridad necesarias.

### 4. Creación de la base de datos
La aplicación necesita una base de datos donde almacenar su información. Podemos acceder al SGBD mediante:

`sudo mariadb`

Y crear una base de datos:

`CREATE DATABASE aplicacion;`

Podemos comprobar las bases de datos disponibles:

`SHOW DATABASES;`

Una aplicación puede tener tablas como:

**usuarios → productos → pedidos**

El diseño de la base de datos debe realizarse de acuerdo con las necesidades de la aplicación.

### 5. Usuarios y permisos
Es recomendable crear un **usuario específico para la aplicación**.

Por ejemplo:

`CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'ContraseñaSegura';`

Después podemos concederle únicamente los permisos necesarios:

`GRANT SELECT, INSERT, UPDATE, DELETE ON aplicacion.* TO 'appuser'@'localhost';`

Finalmente:

`FLUSH PRIVILEGES;`

De esta forma, la aplicación no necesita utilizar el usuario administrador del SGBD. Debemos aplicar siempre el principio de **mínimo privilegio**.

### 6. Controladores y conectores
La aplicación necesita un mecanismo para comunicarse con el SGBD. Para ello utiliza **controladores, extensiones o conectores**. Algunos ejemplos son:

| Tecnología | Acceso a bases de datos |
|---|---|
| PHP | PDO, MySQLi |
| Java | JDBC |
| Python | DB-API, psycopg |
| Node.js | mysql2, pg |
| .NET | ADO.NET, proveedores específicos |

Por ejemplo, una aplicación PHP que utiliza MariaDB puede necesitar la extensión:

`php-mysql`

Podemos instalarla mediante:

`sudo apt install php-mysql`

Y comprobar las extensiones instaladas:

`php -m`

### 7. Configuración de la conexión
La aplicación necesita conocer los parámetros necesarios para conectarse al SGBD. Normalmente se utilizan:

| Parámetro | Ejemplo |
|---|---|
| Servidor | localhost |
| Puerto | 3306 |
| Base de datos | aplicacion |
| Usuario | appuser |
| Contraseña | ContraseñaSegura |

Una conexión podría representarse como:

**Aplicación → localhost:3306 → MariaDB → aplicacion**

En aplicaciones reales, las credenciales no deberían escribirse directamente en el código fuente. Es preferible utilizar **variables de entorno o archivos de configuración protegidos**.

### 8. Acceso remoto y seguridad
Si el SGBD está en otro servidor, la aplicación debe poder comunicarse con él a través de la red.

Por ejemplo:

**Servidor Web → Red → Servidor de bases de datos**

En MariaDB/MySQL se utiliza habitualmente el puerto:

**3306/TCP**

El acceso remoto debe configurarse cuidadosamente. Debemos:

- Limitar las direcciones IP permitidas.
- Utilizar el firewall.
- Evitar exponer el SGBD directamente a Internet.
- Utilizar contraseñas seguras.
- Utilizar conexiones cifradas cuando sea necesario.
- Conceder únicamente los permisos necesarios.

Una arquitectura más segura sería:

**Internet → Servidor Web → Red privada → Servidor SGBD**

### 9. Pruebas y resolución de problemas
Una vez configurado el acceso debemos comprobar que la aplicación puede comunicarse correctamente con la base de datos. Podemos realizar diferentes pruebas:

- Comprobar que el servicio está activo.
- Comprobar que el puerto está disponible.
- Probar la conexión con el usuario de la aplicación.
- Ejecutar consultas.
- Comprobar los logs.
- Probar la aplicación Web.

Por ejemplo:

`sudo systemctl status mariadb`
`sudo ss -lntp | grep 3306`

Si existe un problema, debemos revisar:

**Aplicación → Controlador → Red → SGBD → Usuario/Permisos → Base de datos**

Esto facilita localizar dónde se encuentra el error.

### 10. Actividad práctica: Instalación y configuración del acceso a bases de datos
La aplicación Web necesita acceder a una base de datos para almacenar y consultar información. Prepara el servidor para que la aplicación pueda realizar esta comunicación correctamente. Realiza las siguientes acciones:

a. **Comprueba que MariaDB está instalado y funcionando** correctamente.

b. **Crea una base de datos** destinada a la aplicación Web.

c. **Crea las tablas necesarias** para almacenar la información de la aplicación.

d. **Crea un usuario específico 'admin' para la aplicación**.

e. **Asigna al usuario los permisos necesarios** sobre la base de datos.

f. **Instala el controlador o extensión necesario** para que PHP pueda conectarse con MariaDB.

g. **Configura los parámetros de conexión** de la aplicación: servidor, puerto, base de datos, usuario y contraseña.

h. **Comprueba que las acciones anteriores funcionan** correctamente.

i. **Documenta el procedimiento realizado**, incluyendo capturas de las principales comprobaciones y las incidencias encontradas.

#### Resultado esperado
Al finalizar la actividad, la aplicación Web deberá poder comunicarse correctamente con MariaDB:

**Cliente → Apache → PHP → MariaDB**

> **Importante:** no es necesario buscar los comandos utilizados. Todos los comandos y procedimientos necesarios para realizar la actividad aparecen en la explicación del criterio.