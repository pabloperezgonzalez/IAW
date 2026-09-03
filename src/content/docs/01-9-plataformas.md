---
title: 🌐 UP1.9. Plataformas integradas para desarrollo y pruebas - CE1.h)
---

### RA1. Prepara el entorno de desarrollo y los servidores de aplicaciones Web instalando e integrando las funcionalidades necesarias.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| h) Se han utilizado plataformas integradas orientadas a la prueba y desarrollo de aplicaciones Web. | Práctico | 5 % |

### 1. Introducción
El desarrollo de una aplicación Web requiere diferentes herramientas para **programar, probar, depurar y desplegar** la aplicación. Las plataformas integradas permiten reunir varios de estos componentes en un mismo entorno de trabajo, facilitando el desarrollo y las pruebas. Algunas soluciones habituales son:

- XAMPP.
- WampServer.
- Docker.
- Visual Studio Code.
- IDEs como IntelliJ IDEA o Eclipse.
- Entornos Cloud de desarrollo.

El objetivo es disponer de un entorno donde podamos desarrollar y comprobar una aplicación antes de llevarla a producción.

### 2. ¿Qué es una plataforma integrada?
Una plataforma integrada reúne diferentes herramientas y servicios necesarios para trabajar con aplicaciones Web. Por ejemplo, una plataforma puede incluir:

| Componente | Función |
|---|---|
| Servidor Web | Atiende las peticiones HTTP/HTTPS |
| Lenguaje | Ejecuta el código de la aplicación |
| SGBD | Almacena los datos |
| Herramientas de desarrollo | Permiten escribir y modificar código |
| Herramientas de prueba | Permiten comprobar el funcionamiento |
| Herramientas de administración | Facilitan la gestión del entorno |

La principal ventaja es disponer de un **entorno preparado para desarrollar y probar** sin tener que configurar manualmente todos los componentes desde cero.

### 3. XAMPP
**XAMPP** es una plataforma muy utilizada para crear entornos locales de desarrollo Web. Incluye habitualmente:

- Apache.
- MariaDB.
- PHP.
- Perl.
- Herramientas de administración.

Su funcionamiento puede representarse como:

**Navegador → Apache → PHP → MariaDB**

XAMPP resulta especialmente útil para realizar prácticas porque permite disponer rápidamente de un servidor Web y una base de datos en un ordenador local. No obstante, un entorno de desarrollo como XAMPP no debe confundirse con una configuración de producción.

### 4. WampServer y otras plataformas locales
Otra solución habitual en Windows es **WampServer**, que proporciona un entorno para desarrollar aplicaciones Web utilizando tecnologías como:

- Apache.
- PHP.
- MySQL/MariaDB.

La arquitectura sería similar a:

**Navegador → Apache → PHP → MySQL/MariaDB**

Estas plataformas permiten realizar pruebas sin necesidad de disponer inicialmente de un servidor remoto. Son especialmente útiles en las primeras fases del desarrollo, cuando necesitamos comprobar rápidamente que una aplicación funciona correctamente.

### 5. Entornos de desarrollo integrados
Los **IDE (Integrated Development Environment)** proporcionan herramientas para escribir y gestionar código. Algunas funcionalidades habituales son:

- Editor de código.
- Autocompletado.
- Depuración.
- Gestión de proyectos.
- Integración con Git.
- Terminal.
- Extensiones.
- Gestión de dependencias.

Ejemplos:

- Visual Studio Code.
- IntelliJ IDEA.
- Eclipse.
- Visual Studio.

Estas herramientas facilitan el desarrollo y permiten detectar errores antes de desplegar la aplicación.

### 6. Contenedores con Docker
**Docker** permite crear entornos aislados llamados **contenedores**. En lugar de instalar todos los componentes directamente en el sistema operativo, podemos separar los servicios:

**Servidor**

- Contenedor Apache/Nginx.
- Contenedor PHP/Node.js.
- Contenedor MariaDB/PostgreSQL.

Por ejemplo:

**Navegador → Nginx → Aplicación → PostgreSQL**

Docker permite reproducir el mismo entorno en diferentes equipos y facilita la instalación y eliminación de los servicios utilizados durante las pruebas.

### 7. Pruebas y depuración
Las plataformas de desarrollo deben permitir comprobar que la aplicación funciona correctamente. Podemos realizar diferentes tipos de pruebas:

- Pruebas funcionales.
- Pruebas de conectividad.
- Pruebas de formularios.
- Pruebas de acceso a bases de datos.
- Pruebas de APIs.
- Pruebas de seguridad.
- Pruebas de rendimiento.

También podemos utilizar herramientas como:

`curl`
`Postman`
`DevTools del navegador`

Por ejemplo:

`curl -I http://localhost`

permite comprobar la respuesta HTTP de un servidor Web.

### 8. Entornos de desarrollo, pruebas y producción
Es recomendable separar los diferentes entornos utilizados durante el ciclo de vida de una aplicación.

| Entorno | Objetivo |
|---|---|
| Desarrollo | Crear y modificar la aplicación |
| Pruebas | Comprobar su funcionamiento |
| Preproducción | Validar una configuración similar a producción |
| Producción | Ofrecer el servicio a los usuarios |

Una posible evolución sería:

**Desarrollo → Pruebas → Preproducción → Producción**

Esto permite detectar problemas antes de que lleguen a los usuarios finales.

### 9. Integración con Git y despliegue
Las plataformas de desarrollo pueden integrarse con sistemas de **control de versiones**, especialmente Git. Un flujo habitual es:

**Desarrollador → Git → Pruebas → Despliegue**

Git permite:

- Registrar cambios.
- Recuperar versiones anteriores.
- Trabajar con ramas.
- Colaborar con otros desarrolladores.
- Revisar modificaciones.

Además, los proyectos pueden utilizar procesos de **Integración Continua y Despliegue Continuo (CI/CD)** para automatizar las pruebas y el despliegue.

### 10. Actividad práctica: Desarrollo y prueba de una aplicación Web con XAMPP
La empresa quiere disponer de un entorno de desarrollo local que permita crear y probar una aplicación Web antes de desplegarla en un servidor de producción. Utiliza **XAMPP** para preparar el entorno y realiza las siguientes acciones:

a. **Instala XAMPP** en el equipo de desarrollo.
b. **Comprueba que Apache y MariaDB** están correctamente instalados y funcionando desde el panel de control de XAMPP.
c. **Crea un proyecto Web** dentro del directorio de publicación de XAMPP.
d. **Crea una página PHP sencilla** que permita comprobar que el servidor Web está procesando correctamente el código.
e. **Crea una base de datos** para la aplicación utilizando MariaDB.
f. **Realiza pruebas de funcionamiento** accediendo a la aplicación desde un navegador.
g. **Utiliza las herramientas disponibles en XAMPP y en el navegador** para comprobar y solucionar posibles errores.
h. **Documenta el entorno utilizado**, la configuración realizada, las pruebas y los resultados obtenidos.

#### Resultado esperado

Al finalizar la actividad, se deberá disponer de un entorno local de desarrollo y pruebas funcionando con XAMPP:

**Navegador → Apache → PHP → MariaDB**

La aplicación deberá poder ejecutarse desde el navegador y acceder correctamente a la base de datos.