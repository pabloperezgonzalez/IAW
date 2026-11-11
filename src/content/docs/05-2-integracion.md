---
title: 🚀 UP5.2. Integración de PHP con HTML y generación dinámica de documentos Web - CE5.b)
---

### RA5. Genera documentos Web utilizando lenguajes de guiones de servidor.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| b) Se ha reconocido la relación entre los lenguajes de guiones de servidor y los lenguajes de marcas utilizados en los clientes. | Teórico | 10 % |

### 1. Introducción
<!-- 

# UP5.2. Integración de PHP con HTML y generación dinámica de documentos Web

## 1. Introducción: relación entre cliente y servidor

Las aplicaciones web actuales combinan diferentes tecnologías para ofrecer páginas dinámicas e interactivas. Entre ellas destacan los **lenguajes de marcas utilizados en el cliente** y los **lenguajes de guiones ejecutados en el servidor**.

Cada tecnología tiene una función diferente:

- **HTML:** define la estructura y el contenido de una página web.
- **CSS:** establece el diseño y la presentación visual.
- **JavaScript:** permite incorporar interactividad y ejecutar instrucciones en el navegador.
- **PHP:** ejecuta instrucciones en el servidor y permite generar contenido dinámico que posteriormente se envía al navegador.

La relación entre estas tecnologías es fundamental para desarrollar aplicaciones web completas.

Por ejemplo, imaginemos una tienda online. Cuando un usuario accede a la página de un producto:

1. El navegador solicita la página al servidor.
2. El servidor ejecuta el código PHP correspondiente.
3. PHP consulta la base de datos para obtener la información del producto.
4. PHP genera un documento HTML con los datos recuperados.
5. El servidor envía el documento HTML al navegador.
6. El navegador interpreta el HTML y aplica los estilos CSS.
7. JavaScript puede añadir funcionalidades interactivas.

El resultado es una página web cuyo contenido se ha generado en función de la información disponible en el servidor.

## 2. Los lenguajes de marcas utilizados en el cliente

Un lenguaje de marcas permite describir la estructura y organización de un documento mediante etiquetas y atributos.

En el desarrollo web, el principal lenguaje de marcas es **HTML (HyperText Markup Language)**.

HTML no es un lenguaje de programación, ya que no dispone de estructuras de control o mecanismos de ejecución como los lenguajes de programación tradicionales. Su función es organizar el contenido que se mostrará en el navegador.

Por ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi primera página</title>
</head>
<body>
    <h1>Bienvenido</h1>
    <p>Esta es mi primera página web.</p>
</body>
</html>
```

En este ejemplo:

- `<!DOCTYPE html>` indica que se utiliza HTML5.
- `<html>` contiene todo el documento.
- `<head>` incluye información sobre la página.
- `<title>` establece el título de la pestaña.
- `<body>` contiene el contenido visible.
- `<h1>` representa un encabezado principal.
- `<p>` define un párrafo.

HTML es el resultado que habitualmente recibe el navegador después de que el servidor haya procesado una petición mediante PHP.

También debemos recordar que CSS y JavaScript complementan a HTML:

- CSS permite definir colores, tamaños, márgenes, distribuciones y otros aspectos visuales.
- JavaScript permite modificar el contenido de la página, responder a eventos y realizar peticiones a otros servicios.

## 3. ¿Cómo se relacionan PHP y HTML?

PHP permite generar documentos HTML de forma dinámica. Para ello, podemos incluir instrucciones PHP dentro de un documento que contiene código HTML.

El servidor interpreta las instrucciones PHP y genera el resultado correspondiente. Posteriormente, envía el HTML resultante al navegador.

Por ejemplo, podemos crear un archivo llamado `bienvenida.php`:

```php
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Bienvenida</title>
</head>
<body>

    <h1>Bienvenido a mi página web</h1>

    <?php
        echo "<p>Este contenido ha sido generado mediante PHP.</p>";
    ?>

</body>
</html>
```

Cuando el navegador solicita este archivo al servidor:

1. Apache recibe la petición.
2. El servidor identifica que se trata de un archivo PHP.
3. PHP ejecuta las instrucciones incluidas en el documento.
4. La instrucción `echo` genera un párrafo HTML.
5. El servidor envía el documento HTML resultante.

El navegador recibe un resultado equivalente a:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Bienvenida</title>
</head>
<body>

    <h1>Bienvenido a mi página web</h1>

    <p>Este contenido ha sido generado mediante PHP.</p>

</body>
</html>
```

**Importante:** el navegador no recibe el código PHP original. Recibe el resultado que ha generado el servidor después de ejecutarlo.

Esta característica permite ocultar la lógica interna de la aplicación y centralizar en el servidor operaciones como el acceso a bases de datos o la comprobación de permisos.

## 4. Integración de código PHP dentro de documentos HTML

Para insertar código PHP en un documento se utilizan las etiquetas de apertura y cierre:

```php
<?php
    // Instrucciones PHP
?>
```

Todo lo que se encuentre dentro de estas etiquetas será interpretado por el motor de PHP.

Podemos combinar código HTML y PHP de diferentes formas.

**Ejemplo 1. Generar un contenido mediante `echo`:**

```php
<?php
    echo "<h1>Panel de administración</h1>";
    echo "<p>Bienvenido al sistema.</p>";
?>
```

**Ejemplo 2. Insertar el resultado de una variable dentro de HTML:**

```php
<?php
    $nombre = "Laura";
?>

<h1>Bienvenida, <?php echo $nombre; ?></h1>
```

**Ejemplo 3. Utilizar la sintaxis abreviada de impresión:**

```php
<?php
    $nombre = "Laura";
?>

<h1>Bienvenida, <?= $nombre ?></h1>
```

La expresión `<?= $nombre ?>` es una forma abreviada de escribir `<?php echo $nombre; ?>`.

Los tres ejemplos permiten generar contenido HTML utilizando información almacenada en variables PHP.

**Recomendación:** cuando una aplicación contiene mucho código HTML, suele resultar más sencillo mantener la estructura HTML y utilizar pequeños bloques PHP para introducir los datos dinámicos.

## 5. Generación dinámica de contenido HTML

Una de las principales ventajas de PHP es que permite generar diferentes contenidos HTML dependiendo de los datos disponibles.

Por ejemplo, podemos utilizar variables para mostrar información personalizada.

```php
<?php
    $nombre = "Carlos";
    $curso = "2º ASIR";
    $modulo = "Implantación de Aplicaciones Web";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Datos del alumno</title>
</head>
<body>

    <h1>Ficha del alumno</h1>

    <p>Nombre: <?= htmlspecialchars($nombre) ?></p>
    <p>Curso: <?= htmlspecialchars($curso) ?></p>
    <p>Módulo: <?= htmlspecialchars($modulo) ?></p>

</body>
</html>
```

En este caso, PHP utiliza variables para generar los datos que aparecerán en el documento HTML.

La función `htmlspecialchars()` convierte determinados caracteres especiales en entidades HTML. Esto ayuda a evitar que datos introducidos por usuarios se interpreten como código HTML o JavaScript cuando se muestran en la página.

El contenido generado puede variar dependiendo de:

- La información almacenada en variables.
- Los datos recuperados de una base de datos.
- La información enviada mediante formularios.
- La identidad del usuario que ha iniciado sesión.
- Las condiciones establecidas en el programa.
- La fecha, hora u otras circunstancias de la petición.

Por ejemplo, una aplicación puede mostrar un mensaje diferente según la hora del día:

```php
<?php
    $hora = date("H");

    if ($hora < 12) {
        $mensaje = "Buenos días";
    } elseif ($hora < 20) {
        $mensaje = "Buenas tardes";
    } else {
        $mensaje = "Buenas noches";
    }
?>

<h1><?= htmlspecialchars($mensaje) ?></h1>
```

El servidor ejecuta el código PHP y genera el HTML correspondiente al mensaje seleccionado.

## 6. Generación de elementos HTML mediante estructuras repetitivas

PHP también permite generar elementos HTML de forma automática mediante estructuras de control.

Esto resulta especialmente útil cuando tenemos que mostrar listas de productos, usuarios, noticias o cualquier conjunto de registros.

Por ejemplo, podemos definir un array con varios productos:

```php
<?php
    $productos = [
        "Teclado",
        "Ratón",
        "Monitor",
        "Impresora"
    ];
?>

<h1>Catálogo de productos</h1>

<ul>
    <?php foreach ($productos as $producto): ?>
        <li><?= htmlspecialchars($producto) ?></li>
    <?php endforeach; ?>
</ul>
```

El navegador recibirá un documento HTML equivalente a:

```html
<h1>Catálogo de productos</h1>

<ul>
    <li>Teclado</li>
    <li>Ratón</li>
    <li>Monitor</li>
    <li>Impresora</li>
</ul>
```

En este ejemplo:

- PHP almacena los productos en un array.
- `foreach` recorre todos los elementos del array.
- Por cada producto se genera una etiqueta `<li>`.
- El navegador recibe la lista HTML completa.

Esta técnica permite generar páginas web a partir de cantidades variables de información sin tener que escribir manualmente cada elemento HTML.

En aplicaciones reales, los datos podrían proceder de una base de datos en lugar de estar escritos directamente en el código.

## 7. Separación de responsabilidades: HTML, CSS, JavaScript y PHP

Aunque estas tecnologías pueden trabajar conjuntamente, es importante comprender que cada una tiene una responsabilidad diferente.

| Tecnología | Entorno de ejecución | Función principal | Ejemplo |
|:--|:--|:--|:--|
| HTML | Navegador | Estructurar el contenido | Crear títulos, párrafos y formularios |
| CSS | Navegador | Presentar visualmente el contenido | Definir colores y distribución |
| JavaScript | Navegador | Añadir interactividad | Validar campos y responder a eventos |
| PHP | Servidor | Procesar información y generar contenido | Consultar una base de datos y generar HTML |

En una aplicación correctamente organizada, cada tecnología debe utilizarse para las tareas que le corresponden.

Por ejemplo, imaginemos un formulario de acceso:

- HTML crea los campos para introducir el usuario y la contraseña.
- CSS establece el diseño del formulario.
- JavaScript puede comprobar que los campos no estén vacíos antes de enviarlos.
- PHP recibe los datos, valida la información y comprueba las credenciales.
- El servidor devuelve una respuesta HTML indicando si el acceso ha sido correcto.

Debemos evitar realizar operaciones críticas únicamente mediante JavaScript, porque el usuario puede modificar el código que se ejecuta en su navegador.

La autenticación, la autorización y la validación definitiva de los datos deben realizarse en el servidor.

## 8. Comunicación entre el navegador y el servidor: protocolo HTTP

La comunicación entre el cliente y el servidor se realiza habitualmente mediante el protocolo HTTP o su versión segura HTTPS.

Cuando un usuario accede a una página web, el navegador envía una petición HTTP al servidor. Este procesa la petición y devuelve una respuesta.

Podemos distinguir dos elementos principales:

**Petición HTTP:**

Es el mensaje que envía el navegador al servidor. Puede incluir:

- Método HTTP utilizado.
- Dirección del recurso solicitado.
- Cabeceras de la petición.
- Parámetros o datos enviados.
- Cookies, si existen.

**Respuesta HTTP:**

Es el mensaje que devuelve el servidor. Puede incluir:

- Código de estado HTTP.
- Cabeceras de respuesta.
- Tipo de contenido.
- Documento HTML generado.
- Otros recursos o datos.

Por ejemplo, cuando un usuario solicita `http://localhost/IAW/bienvenida.php`, Apache recibe la petición y ejecuta el archivo PHP correspondiente.

El flujo simplificado sería:

```text
NAVEGADOR
    |
    | 1. Petición HTTP
    v
SERVIDOR WEB (APACHE)
    |
    | 2. Ejecuta el archivo PHP
    v
INTERPRETADOR PHP
    |
    | 3. Genera el contenido HTML
    v
SERVIDOR WEB (APACHE)
    |
    | 4. Respuesta HTTP con HTML
    v
NAVEGADOR
    |
    | 5. Interpreta HTML, CSS y JavaScript
    v
PÁGINA WEB MOSTRADA AL USUARIO
```

Este proceso se repite cada vez que el navegador realiza una nueva petición al servidor.

Es importante destacar que PHP no necesita enviar siempre HTML. También puede generar respuestas en otros formatos, como JSON, que se utilizan habitualmente para comunicar aplicaciones y APIs.

## 9. Seguridad y buenas prácticas al generar HTML desde PHP

La integración de PHP y HTML requiere prestar atención a la seguridad. Los datos que se muestran en una página pueden proceder de usuarios, formularios, bases de datos o servicios externos.

Si esos datos se incorporan directamente al HTML sin tratarlos adecuadamente, pueden aparecer vulnerabilidades.

Una de las más habituales es el **Cross-Site Scripting (XSS)**.

Este ataque se produce cuando una aplicación muestra datos no confiables como contenido ejecutable en el navegador.

Por ejemplo, imaginemos que un usuario introduce el siguiente contenido en un formulario:

```html
<script>alert('Ataque XSS')</script>
```

Si la aplicación muestra ese contenido directamente sin aplicar las medidas necesarias, el navegador podría ejecutar el código JavaScript.

Para evitarlo, debemos utilizar funciones como `htmlspecialchars()` cuando mostramos datos como texto dentro de un documento HTML.

**Ejemplo incorrecto:**

```php
<?php
    $nombre = $_GET["nombre"];
?>

<h1>Bienvenido, <?= $nombre ?></h1>
```

**Ejemplo mejorado:**

```php
<?php
    $nombre = $_GET["nombre"] ?? "";
?>

<h1>Bienvenido, <?= htmlspecialchars($nombre, ENT_QUOTES, "UTF-8") ?></h1>
```

En el segundo ejemplo:

- `$_GET` obtiene un parámetro enviado mediante la URL.
- `?? ""` establece una cadena vacía si el parámetro no existe.
- `htmlspecialchars()` transforma caracteres especiales para evitar que se interpreten como etiquetas o código ejecutable.
- `ENT_QUOTES` permite tratar también las comillas.
- `UTF-8` establece la codificación utilizada.

Además, debemos aplicar otras buenas prácticas:

1. Validar los datos recibidos en el servidor.
2. Escapar los datos según el contexto en el que se muestran.
3. Utilizar consultas preparadas para acceder a bases de datos.
4. No mostrar contraseñas ni información sensible.
5. No incluir credenciales directamente en el código fuente público.
6. Utilizar HTTPS para proteger las comunicaciones.
7. Mantener PHP, el servidor web y sus componentes actualizados.

**Importante:** escapar los datos para HTML no sustituye a la validación. Son medidas complementarias y cada una cumple una función diferente.

## 10. Actividad propuesta: creación de una página web dinámica con PHP y HTML

### Objetivo

Comprender cómo se relacionan los lenguajes de guiones de servidor con los lenguajes de marcas utilizados en el cliente, creando una página web que genere contenido HTML mediante PHP.

### Escenario

Una empresa necesita una pequeña página web para presentar información sobre sus servicios informáticos.

La página deberá mostrar información estática y dinámica, utilizando HTML para estructurar el contenido y PHP para generar los datos que aparecen en el documento.

Se utilizará el entorno XAMPP instalado y configurado en las unidades anteriores.

### Desarrollo de la actividad

**1. Crear el proyecto**

Dentro de la carpeta `htdocs` de XAMPP, crea una carpeta llamada `UP5_2`.

Dentro de ella, crea el archivo `index.php`.

**2. Crear la estructura HTML**

El documento deberá contener:

- Un encabezado principal con el nombre de la empresa.
- Un menú de navegación.
- Una sección de presentación.
- Una sección de servicios.
- Un apartado de contacto.
- Un pie de página.

**3. Incorporar código PHP**

Define las siguientes variables PHP:

- Nombre de la empresa.
- Nombre del responsable.
- Ciudad.
- Correo electrónico.
- Año actual.

Utiliza estas variables para generar los contenidos correspondientes dentro del documento HTML.

**4. Generar una lista dinámica**

Crea un array PHP con, al menos, cinco servicios informáticos que ofrece la empresa.

Utiliza una estructura `foreach` para generar automáticamente una lista HTML con todos los servicios.

**5. Incorporar contenido condicional**

Utiliza una estructura `if` para mostrar un mensaje diferente dependiendo de la hora del día:

- De 06:00 a 11:59: Buenos días.
- De 12:00 a 19:59: Buenas tardes.
- De 20:00 a 05:59: Buenas noches.

**6. Añadir una hoja de estilos CSS**

Crea un archivo `estilos.css` y enlázalo desde el documento HTML.

Aplica estilos al encabezado, menú, secciones, lista de servicios y pie de página.

**7. Comprobar el funcionamiento**

Inicia Apache desde el panel de control de XAMPP y accede a:

`http://localhost/UP5_2/`

Comprueba que:

- La página se muestra correctamente.
- Los datos definidos en PHP aparecen en el documento.
- La lista de servicios se genera automáticamente.
- El mensaje cambia según la hora del servidor.
- Los estilos CSS se aplican correctamente.

**8. Comprobar el código recibido por el navegador**

Abre las herramientas de desarrollo del navegador o utiliza la opción «Ver código fuente de la página».

Comprueba que:

- Se muestran las etiquetas HTML generadas.
- Aparecen los datos resultantes de ejecutar PHP.
- No aparece el código PHP original.
- La estructura HTML es correcta.

### Entrega

Entrega un documento PDF que incluya:

- Portada con los datos del alumno.
- Breve explicación del funcionamiento de la aplicación.
- Código completo de `index.php`.
- Código completo de `estilos.css`.
- Capturas de la página web funcionando.
- Capturas del código fuente recibido por el navegador.
- Explicación de cómo se relacionan PHP y HTML en el proyecto.
- Conclusiones personales.

Las capturas deberán estar centradas, ser legibles y acompañarse de una descripción técnica que explique qué se está mostrando y qué se pretende demostrar.

**Criterio de evaluación:** b) Se ha reconocido la relación entre los lenguajes de guiones de servidor y los lenguajes de marcas utilizados en los clientes.

**Resultado esperado:** el alumno debe comprender que PHP se ejecuta en el servidor y genera documentos HTML que posteriormente recibe e interpreta el navegador, diferenciando las responsabilidades de cada tecnología.

-->