---
title: 🚀 UP5.1. Introducción a los lenguajes de guiones de servidor - CE5.a)
---

### RA5. Genera documentos Web utilizando lenguajes de guiones de servidor.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|


### 1. Introducción
<!--

Los lenguajes de guiones de servidor (*server-side scripting languages*) permiten ejecutar instrucciones en un servidor web para generar contenido dinámico que posteriormente se envía al navegador del usuario.

A diferencia de los lenguajes que se ejecutan directamente en el navegador, los lenguajes de servidor procesan las peticiones antes de enviar la respuesta al cliente.

Por ejemplo, cuando un usuario accede a una página web que muestra sus datos personales, el servidor puede:

1. Recibir la petición del navegador.
2. Ejecutar un programa escrito en un lenguaje de servidor.
3. Consultar una base de datos para recuperar la información del usuario.
4. Generar un documento HTML con los datos obtenidos.
5. Enviar el documento HTML al navegador.

El usuario recibe el resultado del procesamiento, pero normalmente no puede ver el código fuente del programa que se ha ejecutado en el servidor.

**Ejemplo:** una página que muestra los productos disponibles en una tienda online puede generar su contenido consultando una base de datos cada vez que un usuario accede a ella.

## 2. Diferencias entre programación del cliente y programación del servidor

En una aplicación web podemos distinguir dos entornos de ejecución:

- **Cliente:** normalmente es el navegador web del usuario. Ejecuta código que se procesa en el dispositivo del usuario.
- **Servidor:** es el equipo que recibe las peticiones HTTP y ejecuta los programas necesarios para generar las respuestas.

La principal diferencia está en dónde se ejecuta el código y qué responsabilidades tiene cada entorno.

| Característica | Lenguajes del cliente | Lenguajes del servidor |
|:--|:--|:--|
| Lugar de ejecución | Navegador del usuario | Servidor web o entorno de ejecución del servidor |
| Momento de ejecución | Después de recibir la página | Al procesar una petición |
| Acceso a bases de datos | Normalmente mediante una API | Puede acceder directamente a las bases de datos autorizadas |
| Código fuente | Puede consultarse desde el navegador | No se envía normalmente al cliente |
| Responsabilidad | Interactividad y presentación | Lógica de negocio, acceso a datos y generación de contenido |
| Ejemplos | JavaScript | PHP, Python, Java, C# y JavaScript con Node.js |

Es importante comprender que ambos entornos pueden trabajar conjuntamente.

Por ejemplo, en un formulario de registro:

- HTML define los campos del formulario.
- CSS establece su presentación.
- JavaScript puede comprobar que los campos no estén vacíos.
- PHP recibe los datos, comprueba su validez y los almacena en una base de datos.

**Importante:** las comprobaciones realizadas en el navegador no sustituyen a las validaciones del servidor. Un usuario puede modificar o evitar el código ejecutado en su propio navegador.

## 3. ¿Por qué necesitamos lenguajes de servidor?

Una página web estática contiene información que permanece igual mientras no se modifica manualmente su archivo.

En cambio, una página web dinámica puede generar diferentes contenidos dependiendo de las peticiones recibidas, los datos almacenados o la identidad del usuario.

Los lenguajes de servidor permiten desarrollar funcionalidades como:

- **Autenticación:** comprobar la identidad de los usuarios mediante un nombre de usuario y una contraseña.
- **Gestión de usuarios:** registrar usuarios, modificar sus datos y administrar sus permisos.
- **Acceso a bases de datos:** consultar, insertar, modificar y eliminar información.
- **Procesamiento de formularios:** recibir y validar los datos introducidos por los visitantes.
- **Gestión de sesiones:** mantener información relacionada con un usuario durante su navegación.
- **Generación de contenido dinámico:** mostrar información diferente según las circunstancias de cada petición.
- **Control de acceso:** permitir o impedir el acceso a determinadas páginas y funcionalidades.
- **Integración con otros servicios:** comunicarse con APIs y aplicaciones externas.

Por ejemplo, en una plataforma educativa, el servidor puede identificar al alumno que ha iniciado sesión y mostrar únicamente sus asignaturas, actividades y calificaciones.

## 4. PHP: uno de los lenguajes más utilizados en desarrollo web

**PHP (PHP: Hypertext Preprocessor)** es un lenguaje de programación especialmente utilizado para desarrollar aplicaciones web del lado del servidor.

Se ejecuta en el servidor y permite generar documentos HTML de forma dinámica.

Entre sus principales características destacan:

- Es un lenguaje de código abierto.
- Está especialmente orientado al desarrollo web.
- Se integra fácilmente con HTML.
- Puede conectarse con diferentes sistemas gestores de bases de datos.
- Dispone de mecanismos para gestionar sesiones y cookies.
- Puede ejecutarse en diferentes sistemas operativos.
- Es compatible con servidores web como Apache y Nginx.

PHP se utiliza en numerosos proyectos web y es la tecnología principal de gestores de contenidos como WordPress.

**Ejemplo de código PHP:**

```php
<?php
$nombre = "Carlos";
echo "Bienvenido a nuestra página web, " . $nombre;
?>
```

El código anterior se ejecuta en el servidor. El resultado que recibiría el navegador sería:

```html
Bienvenido a nuestra página web, Carlos
```

El navegador no recibe las instrucciones PHP, sino el contenido generado por ellas.

**Entorno de trabajo:** durante este módulo utilizaremos PHP para aprender programación del lado del servidor. Podremos ejecutar nuestros programas mediante el entorno XAMPP, que incluye Apache, PHP y MariaDB.

## 5. Python: desarrollo web mediante frameworks

**Python** es un lenguaje de programación de propósito general que también permite desarrollar aplicaciones web del lado del servidor.

Destaca por tener una sintaxis sencilla y legible, por lo que resulta adecuado para aprender conceptos de programación y desarrollar aplicaciones de diferentes tipos.

Para desarrollar aplicaciones web con Python se utilizan habitualmente frameworks, que proporcionan herramientas y estructuras para organizar el código.

Algunos de los más conocidos son:

- **Django:** framework completo que incorpora herramientas para gestionar usuarios, bases de datos, formularios y administración de aplicaciones.
- **Flask:** framework ligero que permite desarrollar aplicaciones web pequeñas y construir soluciones personalizadas.
- **FastAPI:** framework orientado al desarrollo de APIs modernas, con soporte para operaciones asíncronas y validación de datos.

**Ejemplo de código Python:**

```python
nombre = "Carlos"
print("Bienvenido a nuestra página web, " + nombre)
```

Este ejemplo muestra una instrucción sencilla de Python. Para utilizarlo en una aplicación web, necesitaríamos integrarlo en un entorno de servidor, como Flask o Django.

**Aplicaciones habituales:**

- Desarrollo de aplicaciones web.
- Creación de servicios web y APIs.
- Automatización de tareas.
- Procesamiento de datos.
- Integración de aplicaciones.

## 6. Java: aplicaciones web empresariales

**Java** es un lenguaje de programación orientado a objetos que se utiliza para desarrollar aplicaciones de diferentes tipos, incluidas aplicaciones web empresariales.

Su ejecución se basa en la máquina virtual de Java (JVM), que permite ejecutar programas Java en diferentes sistemas operativos siempre que exista un entorno compatible.

En el desarrollo web se utilizan tecnologías y frameworks como:

- **Jakarta Servlet:** permite procesar peticiones y generar respuestas HTTP.
- **Jakarta Server Pages (JSP):** permite generar contenido dinámico integrando código Java en páginas.
- **Spring Boot:** facilita la creación de aplicaciones y servicios web.
- **Jakarta EE:** proporciona un conjunto de especificaciones para desarrollar aplicaciones empresariales.

Java destaca por:

- Su orientación a objetos.
- Su independencia respecto al sistema operativo, gracias a la JVM.
- Sus herramientas para desarrollar aplicaciones empresariales.
- Su capacidad para trabajar con bases de datos.
- Su ecosistema de bibliotecas y frameworks.

**Ejemplo simplificado de código Java:**

```java
public class Bienvenida {
    public static void main(String[] args) {
        String nombre = "Carlos";
        System.out.println("Bienvenido, " + nombre);
    }
}
```

Este ejemplo muestra una instrucción Java básica. Para utilizar Java en una aplicación web se necesita integrarlo en un entorno web, por ejemplo, mediante Spring Boot o Jakarta EE.

**Aplicaciones habituales:**

- Aplicaciones empresariales.
- Plataformas de gestión.
- Sistemas bancarios.
- Servicios web.
- Aplicaciones distribuidas.

## 7. JavaScript en el servidor: Node.js

Tradicionalmente, JavaScript se ha utilizado principalmente en el navegador para añadir interactividad a las páginas web.

Sin embargo, mediante **Node.js** también puede ejecutarse JavaScript fuera del navegador, por ejemplo, en un servidor.

Node.js es un entorno de ejecución que permite desarrollar aplicaciones de servidor utilizando JavaScript.

Entre sus características destacan:

- Permite utilizar JavaScript tanto en el cliente como en el servidor.
- Está basado en un modelo de ejecución orientado a eventos.
- Facilita la gestión de múltiples conexiones.
- Dispone de un amplio ecosistema de paquetes mediante npm.
- Se utiliza frecuentemente para desarrollar APIs y aplicaciones web.

Algunos frameworks y herramientas habituales son:

- **Express:** framework minimalista para crear servidores y APIs.
- **NestJS:** framework estructurado para desarrollar aplicaciones de servidor.
- **Fastify:** framework orientado al desarrollo de servidores web eficientes.

**Ejemplo de código con Node.js:**

```javascript
const http = require("http");

const servidor = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    respuesta.end("<h1>Hola desde Node.js</h1>");
});

servidor.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});
```

Este programa crea un servidor HTTP que escucha en el puerto 3000 y responde con un documento HTML.

**Aplicaciones habituales:**

- APIs REST.
- Aplicaciones web en tiempo real.
- Chats y sistemas de notificaciones.
- Servicios web.
- Aplicaciones que gestionan numerosas conexiones simultáneas.

## 8. C# y ASP.NET Core

**C# (C Sharp)** es un lenguaje de programación desarrollado por Microsoft que se utiliza para crear aplicaciones de escritorio, servicios, videojuegos y aplicaciones web.

Para el desarrollo web se utiliza principalmente **ASP.NET Core**, un framework multiplataforma que permite crear aplicaciones y servicios web.

Entre sus características destacan:

- Programación orientada a objetos.
- Integración con el ecosistema .NET.
- Compatibilidad con Windows, Linux y macOS.
- Herramientas para crear APIs y aplicaciones web.
- Integración con sistemas de autenticación y autorización.
- Acceso a bases de datos mediante diferentes tecnologías.

**Ejemplo simplificado de código C#:**

```csharp
string nombre = "Carlos";

Console.WriteLine("Bienvenido, " + nombre);
```

Este ejemplo muestra una instrucción básica de C#. Para desarrollar una aplicación web se utilizaría ASP.NET Core y su infraestructura de servidor.

**Aplicaciones habituales:**

- Aplicaciones empresariales.
- Servicios web y APIs.
- Plataformas de gestión.
- Aplicaciones conectadas a bases de datos.
- Sistemas integrados en infraestructuras Microsoft.

## 9. Comparativa y elección del lenguaje de servidor

No existe un único lenguaje de servidor que sea el mejor para todos los proyectos. La elección depende de los requisitos de la aplicación, la experiencia del equipo, la infraestructura disponible y las necesidades de mantenimiento.

| Lenguaje | Entorno o framework habitual | Características principales | Usos frecuentes |
|:--|:--|:--|:--|
| PHP | PHP, Laravel, Symfony | Especializado en desarrollo web e integración con HTML | Gestores de contenidos y aplicaciones web |
| Python | Django, Flask, FastAPI | Sintaxis sencilla y gran versatilidad | Aplicaciones web, APIs y procesamiento de datos |
| Java | Spring Boot, Jakarta EE | Orientación a objetos y ecosistema empresarial | Aplicaciones empresariales y servicios web |
| JavaScript | Node.js, Express, NestJS | Permite utilizar JavaScript en cliente y servidor | APIs y aplicaciones en tiempo real |
| C# | ASP.NET Core | Integración con .NET y herramientas empresariales | Aplicaciones web y servicios empresariales |

Para elegir un lenguaje de servidor debemos tener en cuenta diferentes factores:

1. **Tipo de aplicación:** no requiere las mismas tecnologías una página corporativa que una plataforma bancaria.
2. **Experiencia del equipo:** es importante que los desarrolladores conozcan las tecnologías utilizadas.
3. **Rendimiento:** debemos valorar las necesidades de procesamiento y el número de usuarios simultáneos.
4. **Seguridad:** el lenguaje y su ecosistema deben proporcionar herramientas adecuadas para proteger la aplicación.
5. **Mantenimiento:** conviene utilizar tecnologías con documentación, soporte y comunidades activas.
6. **Infraestructura:** debemos comprobar que el servidor dispone de los requisitos necesarios para ejecutar la aplicación.
7. **Integración:** el lenguaje debe poder comunicarse con las bases de datos y servicios que necesita el proyecto.

En este módulo utilizaremos PHP como lenguaje principal para aprender programación del lado del servidor. Los conocimientos adquiridos sobre variables, estructuras de control, funciones, formularios y sesiones son aplicables conceptualmente a otros lenguajes.

## 10. Actividad propuesta: investigación y comparación de lenguajes de servidor

### Objetivo

Identificar los principales lenguajes de guiones de servidor, conocer sus características y comprender en qué situaciones resulta adecuado utilizar cada uno.

### Desarrollo de la actividad

Realiza una investigación sobre los cinco lenguajes estudiados:

- PHP.
- Python.
- Java.
- JavaScript con Node.js.
- C# con ASP.NET Core.

A partir de la información de los apartados anteriores y de la documentación oficial de cada tecnología, elabora un documento técnico que incluya los siguientes puntos:

**1. Identificación de los lenguajes**

Explica qué es un lenguaje de guiones de servidor y qué función desempeña dentro de una aplicación web.

**2. Comparación técnica**

Elabora una tabla comparativa que incluya, como mínimo:

- Lenguaje de programación.
- Entorno de ejecución.
- Framework o tecnología web habitual.
- Sistema operativo compatible.
- Sistemas gestores de bases de datos con los que puede trabajar.
- Aplicaciones habituales.

**3. Ejemplos de utilización**

Busca una aplicación, plataforma o proyecto real desarrollado con cada uno de los cinco lenguajes. Indica su nombre y explica brevemente para qué se utiliza.

**4. Ventajas e inconvenientes**

Indica dos ventajas y dos inconvenientes de cada lenguaje desde el punto de vista del desarrollo y administración de aplicaciones web.

**5. Elección tecnológica**

Imagina que una empresa necesita desarrollar una aplicación web para gestionar clientes, productos, pedidos y usuarios.

Indica qué lenguaje elegirías para desarrollar el proyecto y justifica tu decisión teniendo en cuenta:

- Facilidad de desarrollo.
- Integración con bases de datos.
- Seguridad.
- Mantenimiento.
- Disponibilidad de herramientas y documentación.

### Entrega

Entrega un documento PDF que contenga:

- Portada con los datos del alumno.
- Introducción.
- Tabla comparativa.
- Investigación de los cinco lenguajes.
- Ventajas e inconvenientes.
- Justificación de la tecnología elegida.
- Conclusiones personales.
- Fuentes de información consultadas.

### Recursos recomendados

Consulta preferentemente la documentación oficial:

- PHP: https://www.php.net/manual/es/
- Python: https://docs.python.org/es/3/
- Java: https://dev.java/learn/
- Node.js: https://nodejs.org/docs/latest/api/
- ASP.NET Core: https://learn.microsoft.com/es-es/aspnet/core/

**Criterio de evaluación:** a) Se han identificado los lenguajes de guiones de servidor más relevantes.

**Resultado esperado:** el alumno debe ser capaz de reconocer los principales lenguajes utilizados en el desarrollo web del lado del servidor, explicar sus características y distinguir sus ámbitos de aplicación.
-->