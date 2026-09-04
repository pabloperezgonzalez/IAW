---
title: 🌐 UP1.2. Tecnologías empleadas en aplicaciones Web - CE1.b)
---

### RA1. Prepara el entorno de desarrollo y los servidores de aplicaciones Web instalando e integrando las funcionalidades necesarias.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| b) Se han identificado las diferentes tecnologías empleadas. | Teórico | 10 % |

### 1. Introducción
Una aplicación Web está formada por diferentes **tecnologías que trabajan conjuntamente** para ofrecer un servicio al usuario. Es importante identificar estas tecnologías, conocer la función de cada una y comprender cómo se relacionan entre sí. Una arquitectura Web habitual es:

**Cliente/Navegador → HTTP/HTTPS → Servidor Web → Aplicación Web → Base de datos**

Por ejemplo:

> Cliente  
>    ↓ HTTPS  
> Servidor Web (Apache/Nginx)  
>    ↓  
> Aplicación (PHP/Java/Python/Node.js)  
>    ↓  
> SGBD (MySQL/MariaDB/PostgreSQL)

### 2. Tecnologías del lado cliente
El **lado cliente** corresponde principalmente al navegador Web y al dispositivo desde el que accede el usuario. Las principales tecnologías son:

| Tecnología | Función |
|---|---|
| HTML | Define la estructura y el contenido |
| CSS | Define el diseño y la presentación |
| JavaScript | Añade lógica e interactividad |
| Fetch/AJAX | Permite realizar peticiones al servidor |

Por ejemplo, HTML puede crear un botón:

`<button>Saludar</button>`

Mientras que JavaScript puede programar qué ocurre cuando el usuario pulsa sobre él. Estas tecnologías se ejecutan principalmente en el **navegador del usuario**.

### 3. Tecnologías del lado servidor
El **lado servidor** se encarga de procesar las peticiones recibidas desde los clientes y generar las respuestas. Entre las tecnologías más utilizadas encontramos:

| Tecnología | Uso |
|---|---|
| PHP | Desarrollo de aplicaciones Web |
| Java | Aplicaciones empresariales |
| Python | Aplicaciones Web y APIs |
| Node.js | Ejecución de JavaScript en servidor |
| ASP.NET Core | Aplicaciones basadas en .NET |

Por ejemplo, una aplicación PHP podría utilizar la siguiente arquitectura:

**Navegador → Apache → PHP → MariaDB**

El código de la aplicación se ejecuta en el servidor y el cliente recibe normalmente el resultado generado. Esto permite que operaciones como el acceso a una base de datos se realicen en el servidor y no directamente en el navegador.

### 4. Servidores Web y servidores de aplicaciones
El **servidor Web** recibe peticiones HTTP/HTTPS y proporciona recursos al cliente. Algunos servidores Web habituales son:

- Apache HTTP Server
- Nginx
- Microsoft IIS

Los **servidores de aplicaciones** proporcionan un entorno para ejecutar determinadas aplicaciones y servicios. Algunos ejemplos son:

- Apache Tomcat
- WildFly
- GlassFish

Por ejemplo, una aplicación Java puede utilizar:

**Cliente → Nginx → Tomcat → Aplicación Java → Base de datos**

Es importante distinguir entre servidor Web y servidor de aplicaciones, aunque ambos pueden trabajar conjuntamente.

### 5. Tecnologías de bases de datos
Las aplicaciones Web suelen necesitar almacenar información de forma permanente. Los principales **Sistemas Gestores de Bases de Datos (SGBD)** son:

- MySQL
- MariaDB
- PostgreSQL
- Microsoft SQL Server
- MongoDB

Podemos diferenciar dos grandes grupos:

#### 5.1. Bases de datos relacionales
Organizan la información mediante tablas relacionadas y utilizan normalmente **SQL**. Ejemplos:

- MySQL
- MariaDB
- PostgreSQL
- SQL Server

#### 5.2. Bases de datos NoSQL
Utilizan modelos de almacenamiento diferentes al modelo relacional. Ejemplos:

- MongoDB
- Redis
- Cassandra

La elección del SGBD dependerá de las características y necesidades de la aplicación.

### 6. Protocolos de comunicación
Las diferentes tecnologías Web necesitan **protocolos de comunicación** para intercambiar información. Los principales son:

| Protocolo | Función |
|---|---|
| HTTP | Comunicación entre cliente y servidor Web |
| HTTPS | Comunicación HTTP protegida mediante TLS |
| DNS | Resolución de nombres a direcciones IP |
| TCP/IP | Comunicación entre sistemas |
| SSH | Administración remota segura |
| SFTP | Transferencia segura de archivos |

Cuando un usuario accede a `https://www.ejemplo.com`, intervienen diferentes tecnologías:

**DNS → TCP/IP → TLS → HTTP**

Por tanto, una aplicación Web depende también de la infraestructura de red que permite la comunicación entre cliente y servidor.

### 7. APIs y servicios Web
Las aplicaciones actuales suelen necesitar comunicarse con otros sistemas. Para ello se utilizan las **APIs (Application Programming Interfaces)**. Una API permite que una aplicación solicite información o servicios a otra aplicación. Una tecnología muy utilizada es **REST**, que utiliza HTTP. Algunas operaciones habituales son:

| Método | Función |
|---|---|
| GET | Obtener información |
| POST | Crear información |
| PUT | Modificar información |
| DELETE | Eliminar información |

Los datos suelen intercambiarse mediante formatos como **JSON**. Ejemplo:

`{"id":25,"nombre":"Ana","rol":"administrador"}`

También existen otras tecnologías de servicios Web, como **SOAP**, utilizadas especialmente en determinados entornos empresariales.

### 8. Frameworks, librerías y dependencias
Las aplicaciones Web modernas utilizan **frameworks y librerías** para facilitar el desarrollo y evitar tener que implementar todas las funcionalidades desde cero. Algunos ejemplos son:

| Tecnología | Framework |
|---|---|
| JavaScript | React, Angular, Vue |
| PHP | Laravel, Symfony |
| Python | Django, Flask, FastAPI |
| Java | Spring Boot |
| .NET | ASP.NET Core |

Las aplicaciones también necesitan gestionar sus dependencias. Para ello existen herramientas como:

| Tecnología | Gestor de dependencias |
|---|---|
| JavaScript | npm |
| PHP | Composer |
| Python | pip |
| Java | Maven / Gradle |

Estas herramientas permiten instalar, actualizar y controlar las versiones de las librerías necesarias.

### 9. Virtualización, contenedores y Cloud
Las aplicaciones Web pueden ejecutarse sobre servidores físicos, máquinas virtuales o contenedores. Por ejemplo, una aplicación puede distribuirse mediante Docker:

**Servidor Linux**

- Contenedor Nginx
- Contenedor de la aplicación
- Contenedor MariaDB

También podemos encontrar tecnologías como:

- Máquinas virtuales.
- Docker.
- Kubernetes.
- Servicios Cloud.
- Plataformas CI/CD.

Estas tecnologías facilitan el **despliegue, aislamiento, escalabilidad y administración** de las aplicaciones Web. En entornos profesionales es habitual combinar varias de estas tecnologías.

### 10. Identificación de las tecnologías
Antes de instalar y desplegar una aplicación Web debemos identificar:

- Qué tecnologías necesita.
- Qué versiones son compatibles.
- Qué dependencias requiere.
- Qué servidor Web utiliza.
- Qué lenguaje o entorno de ejecución necesita.
- Qué SGBD utiliza.
- Qué protocolos emplea.
- Qué APIs necesita.
- Si utiliza máquinas virtuales o contenedores.
- Qué requisitos de seguridad y rendimiento existen.

Un ejemplo completo sería:

**Cliente**: HTML + CSS + JavaScript
        ↓ HTTPS
**Servidor Web**: Apache
        ↓
**Aplicación**: PHP + Laravel
        ↓
**Base de datos**: MariaDB

La relación entre las principales tecnologías puede resumirse así:
**Cliente → HTTPS → Servidor Web → Aplicación → SGBD**