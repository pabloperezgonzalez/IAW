---
title: 🌐 UP1.1. Software necesario para un entorno Web - CE1.a)
---

### RA1. Prepara el entorno de desarrollo y los servidores de aplicaciones Web instalando e integrando las funcionalidades necesarias.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| a) Se ha identificado el software necesario para su funcionamiento. | Teórico | 5 % |

### 1. Introducción
Una aplicación Web no está formada únicamente por su código fuente. Para funcionar necesita diferentes componentes software que trabajan conjuntamente. Un entorno Web típico puede estar formado por:

```text
┌─────────────────┐
│     CLIENTE     │
│   Navegador Web │
└────────┬────────┘
         │ HTTP/HTTPS
         ▼
┌─────────────────┐
│   SERVIDOR WEB  │
│ Apache / Nginx  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     RUNTIME     │
│ PHP / Java /    │
│ Python / Node   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│       SGBD      │
│ MariaDB / MySQL │
│ PostgreSQL      │
└─────────────────┘
```

El objetivo de este criterio es aprender a **identificar el software necesario para que una aplicación Web pueda ejecutarse correctamente**, teniendo en cuenta sus requisitos y la compatibilidad entre los diferentes componentes.

### 2. Sistema operativo
El sistema operativo proporciona la plataforma sobre la que se ejecutarán los servicios Web. En servidores podemos encontrar:

- Ubuntu Server.
- Debian.
- Rocky Linux.
- AlmaLinux.
- Windows Server.

El sistema operativo gestiona aspectos fundamentales como los procesos, memoria, almacenamiento, usuarios, permisos y red. Por ejemplo:

```text
Ubuntu Server
     │
     ├── Apache
     ├── PHP
     ├── MariaDB
     └── SSH
```

La elección del sistema operativo debe tener en cuenta los requisitos de la aplicación y del resto del software.

### 3. Servidor Web
El **servidor Web** recibe las peticiones HTTP/HTTPS de los clientes y proporciona las respuestas correspondientes. Los servidores Web más utilizados son:

- **Apache HTTP Server**.
- **Nginx**.
- Microsoft IIS.

Por ejemplo:

```text
Navegador
    │
    │ GET /index.html
    ▼
Apache
    │
    ▼
Archivo solicitado
    │
    ▼
Respuesta HTTP
```

Además de servir contenido, puede encargarse de HTTPS, hosts virtuales, registros, redirecciones y actuar como proxy inverso.

### 4. Entorno de ejecución y servidor de aplicaciones
Las aplicaciones Web dinámicas necesitan un entorno que permita ejecutar el código en el servidor. Algunos ejemplos son:

| Tecnología | Entorno |
|---|---|
| PHP | PHP |
| Java | JVM |
| Python | Python + WSGI/ASGI |
| JavaScript | Node.js |
| ASP.NET Core | .NET |

En determinadas aplicaciones también se utilizan **servidores de aplicaciones**, como Apache Tomcat o WildFly. Por ejemplo:

```text
Navegador
    ↓
Servidor Web
    ↓
Servidor de aplicaciones
    ↓
Aplicación
```

### 5. Sistemas gestores de bases de datos
Muchas aplicaciones Web necesitan almacenar información de forma permanente. Para ello utilizan un **Sistema Gestor de Bases de Datos (SGBD)**. Algunos ejemplos son:

- MariaDB.
- MySQL.
- PostgreSQL.
- Microsoft SQL Server.
- MongoDB.

La aplicación se comunica con el SGBD para consultar y modificar los datos:

```text
Aplicación Web
      │
      │ SQL
      ▼
     SGBD
      │
      ▼
Base de datos
```

Debemos comprobar qué SGBD necesita la aplicación y qué versiones son compatibles.

### 6. Módulos, librerías y dependencias
Las aplicaciones suelen necesitar componentes adicionales para funcionar correctamente. Entre ellos encontramos:

- Módulos.
- Extensiones.
- Librerías.
- Drivers.
- Frameworks.
- Dependencias.

Los gestores de dependencias facilitan su instalación y mantenimiento:

| Tecnología | Gestor |
|---|---|
| PHP | Composer |
| JavaScript | npm |
| Python | pip |
| Java | Maven / Gradle |

Por ejemplo, una aplicación PHP puede necesitar determinadas extensiones para conectarse a una base de datos.

### 7. Herramientas de desarrollo y administración
Durante el desarrollo y administración necesitaremos herramientas específicas.

#### 7.1. Desarrollo

- Visual Studio Code.
- IDE.
- Git.
- Herramientas de depuración.
- Clientes de bases de datos.

#### 7.2. Administración

- SSH.
- `systemctl`.
- `journalctl`.
- `ss`.
- `curl`.

Por ejemplo:

```bash
systemctl status apache2
```

permite comprobar el estado del servicio Apache.
Estas herramientas facilitan la configuración, mantenimiento y diagnóstico del servidor.

### 8. Software de seguridad y pruebas
La seguridad debe formar parte del diseño del entorno Web. Podemos utilizar:

- Firewall.
- OpenSSL.
- HTTPS/TLS.
- Herramientas de análisis de logs.
- Sistemas de protección frente a ataques.

También necesitamos herramientas para comprobar el funcionamiento:

```bash
curl -I https://www.ejemplo.com
```

Con estas herramientas podemos verificar aspectos como:

- Disponibilidad.
- Respuestas HTTP.
- Certificados.
- Conectividad.
- Puertos abiertos.

### 9. Identificación de requisitos y compatibilidad
Antes de instalar el software debemos analizar los requisitos de la aplicación. Debemos comprobar:

1. Sistema operativo necesario.
2. Servidor Web.
3. Lenguaje y versión.
4. Runtime.
5. SGBD.
6. Extensiones y dependencias.
7. Framework.
8. Requisitos de seguridad.
9. Versiones compatibles.
10. Estado de mantenimiento del software.

Por ejemplo:

```text
Aplicación
    │
    ├── PHP 8.x
    ├── Apache
    ├── MariaDB
    ├── Extensiones PHP
    └── Composer
```

No debemos instalar versiones al azar. Una actualización de un componente puede provocar incompatibilidades con la aplicación o sus dependencias.

### 10. Ejemplo y resumen
Supongamos una aplicación desarrollada con **PHP y MariaDB**. El entorno podría estar formado por:

```text
                    CLIENTE
                       │
                     HTTPS
                       │
                       ▼
                  ┌─────────┐
                  │ Apache  │
                  └────┬────┘
                       │
                       ▼
                  ┌─────────┐
                  │   PHP   │
                  └────┬────┘
                       │
                       ▼
                  ┌─────────┐
                  │ MariaDB │
                  └─────────┘
```

| Componente | Función |
|---|---|
| Sistema operativo | Proporciona la plataforma |
| Servidor Web | Atiende peticiones HTTP/HTTPS |
| Runtime | Ejecuta el código del servidor |
| Servidor de aplicaciones | Proporciona servicios para determinadas aplicaciones |
| SGBD | Gestiona los datos |
| Módulos y librerías | Añaden funcionalidades |
| Dependencias | Componentes necesarios para la aplicación |
| Herramientas de administración | Permiten gestionar el servidor |
| Software de seguridad | Protege el entorno |
| Herramientas de pruebas | Permiten verificar el funcionamiento |

> **Idea clave:** antes de implantar una aplicación Web debemos identificar todos los componentes software que necesita, comprobar su compatibilidad y seleccionar únicamente aquellos que sean necesarios para su funcionamiento.