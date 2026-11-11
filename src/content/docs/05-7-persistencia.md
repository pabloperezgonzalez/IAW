---
title: 🚀 UP5.7. Persistencia de información mediante sesiones y cookies - CE5.g)
---

### RA5. Genera documentos Web utilizando lenguajes de guiones de servidor.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| g) Se han establecido y utilizado mecanismos para asegurar la persistencia de la información entre distintos documentos Web relacionados. | Teórico-práctico | 15 % |

### 1. Introducción
<!-- 

# UP5.7. Persistencia de información entre documentos Web mediante PHP

## 1. Introducción a la persistencia de información en aplicaciones web

En una aplicación web, un usuario puede navegar por diferentes documentos o páginas mientras realiza una actividad. Por ejemplo, en una tienda informática puede consultar productos, añadirlos a un carrito, modificar las cantidades y finalmente confirmar un pedido.

Para que la aplicación funcione correctamente, es necesario que determinados datos se mantengan disponibles durante la navegación.

Imaginemos el siguiente proceso:

1. El usuario accede a `index.php`.
2. Consulta los productos disponibles en `productos.php`.
3. Añade un producto al carrito desde `anadir_carrito.php`.
4. Consulta su carrito en `carrito.php`.
5. Modifica las cantidades desde `actualizar_carrito.php`.
6. Confirma el pedido desde `confirmar_pedido.php`.

En este proceso intervienen varios documentos PHP. Sin embargo, necesitamos que todos ellos puedan acceder a la información que se ha ido generando durante la navegación.

### El problema: HTTP es un protocolo sin estado

El protocolo HTTP es *stateless*, es decir, no mantiene automáticamente la información de una petición a otra.

Cuando un navegador solicita una página, el servidor procesa la petición y devuelve una respuesta. Cuando posteriormente solicita otro documento, el servidor recibe una nueva petición independiente.

Por tanto, PHP no conserva automáticamente las variables creadas durante la ejecución de un documento cuando el usuario accede a otro.

Por ejemplo:

```php
<?php

$usuario = "Carlos";

echo "Bienvenido, " . $usuario;

?>
```

Si el usuario accede posteriormente a otro documento PHP, la variable `$usuario` no estará disponible automáticamente.

### ¿Qué es la persistencia de información?

La persistencia consiste en utilizar mecanismos que permiten conservar determinados datos y recuperarlos en diferentes peticiones o documentos web.

En PHP podemos utilizar diferentes mecanismos:

- **Variables de sesión:** permiten almacenar información asociada a un usuario durante su navegación.
- **Cookies:** permiten almacenar pequeños datos en el navegador del usuario.
- **Parámetros GET:** permiten transmitir información mediante la URL.
- **Campos ocultos:** permiten enviar información entre formularios.
- **Archivos:** permiten guardar información en el servidor para recuperarla posteriormente.
- **Bases de datos:** permiten almacenar información de forma estructurada y duradera.

Cada mecanismo tiene unas características y unas condiciones de uso diferentes. A lo largo de esta unidad aprenderemos a utilizarlos y a seleccionar el más adecuado según las necesidades de la aplicación.

## 2. Variables de sesión en PHP

Las sesiones son uno de los mecanismos más utilizados para mantener información de un usuario entre diferentes documentos web.

Una sesión permite almacenar datos en el servidor y recuperarlos desde diferentes páginas mientras se mantenga activa.

Por ejemplo, podemos utilizar sesiones para guardar:

- El nombre del usuario que ha iniciado sesión.
- El identificador de un usuario.
- Los productos de un carrito de compra.
- Las preferencias de navegación.
- Los permisos asociados al usuario.
- El idioma seleccionado.

### Iniciar una sesión

Para trabajar con sesiones en PHP utilizamos la función `session_start()`.

Esta función inicia una nueva sesión o recupera una sesión existente.

```php
<?php

session_start();

echo "Sesión iniciada correctamente.";

?>
```

Es importante tener en cuenta que `session_start()` debe ejecutarse antes de enviar contenido al navegador. Por tanto, debe aparecer antes de cualquier salida HTML, espacios o texto que puedan provocar el envío de cabeceras HTTP.

### Almacenar información en una sesión

PHP proporciona el array superglobal `$_SESSION` para guardar información asociada a la sesión actual.

```php
<?php

session_start();

$_SESSION["usuario"] = "Carlos";
$_SESSION["curso"] = "2 ASIR";
$_SESSION["rol"] = "administrador";

echo "Datos almacenados en la sesión.";

?>
```

Los datos almacenados en `$_SESSION` estarán disponibles desde otros documentos PHP que recuperen la misma sesión.

### Recuperar información de una sesión

En otro documento PHP podemos recuperar los datos almacenados:

```php
<?php

session_start();

echo "Usuario: " . htmlspecialchars($_SESSION["usuario"] ?? "Invitado");

echo "<br>";

echo "Curso: " . htmlspecialchars($_SESSION["curso"] ?? "No indicado");

?>
```

En este ejemplo, el segundo documento puede acceder a los valores definidos en el primero sin necesidad de volver a solicitarlos al usuario.

### Comprobar si existe una variable de sesión

Podemos utilizar `isset()` para comprobar si una variable está definida:

```php
<?php

session_start();

if (isset($_SESSION["usuario"])) {

    echo "El usuario tiene una sesión iniciada.";

} else {

    echo "No hay ningún usuario identificado.";

}

?>
```

**Importante:** debemos ejecutar `session_start()` en todos los documentos PHP que necesiten consultar o modificar la información de la sesión.

## 3. Gestión de sesiones: modificación, eliminación y finalización

Además de almacenar y recuperar datos, las sesiones permiten modificar la información y eliminar aquellos valores que ya no necesitamos.

### Modificar variables de sesión

Podemos cambiar el valor de una variable simplemente asignándole un nuevo contenido.

```php
<?php

session_start();

$_SESSION["usuario"] = "Ana";
$_SESSION["rol"] = "administrador";

echo "Datos de sesión actualizados.";

?>
```

Si anteriormente existía una variable `usuario` con otro valor, ahora contendrá «Ana».

### Eliminar una variable de sesión

Para eliminar una variable concreta utilizamos `unset()`:

```php
<?php

session_start();

unset($_SESSION["usuario"]);

echo "Se ha eliminado el usuario de la sesión.";

?>
```

El resto de las variables de sesión continuarán disponibles.

### Destruir una sesión

Cuando un usuario cierra sesión, normalmente queremos eliminar toda la información asociada a ella.

Podemos utilizar `session_unset()` y `session_destroy()`:

```php
<?php

session_start();

session_unset();

session_destroy();

echo "La sesión se ha cerrado correctamente.";

?>
```

Las funciones tienen finalidades diferentes:

| Función | Finalidad |
|:--|:--|
| `session_start()` | Inicia o recupera una sesión |
| `session_unset()` | Elimina las variables de sesión |
| `unset($_SESSION["dato"])` | Elimina una variable concreta |
| `session_destroy()` | Destruye los datos asociados a la sesión en el servidor |

Para una operación de cierre de sesión, también es conveniente eliminar la cookie que contiene el identificador de sesión del navegador.

Ejemplo:

```php
<?php

session_start();

$_SESSION = [];

if (ini_get("session.use_cookies")) {

    $parametros = session_get_cookie_params();

    setcookie(
        session_name(),
        "",
        [
            "expires" => time() - 3600,
            "path" => $parametros["path"],
            "domain" => $parametros["domain"],
            "secure" => $parametros["secure"],
            "httponly" => $parametros["httponly"],
            "samesite" => $parametros["samesite"]
        ]
    );

}

session_destroy();

header("Location: index.php");

exit;

?>
```

La función `header()` permite enviar una cabecera HTTP para redirigir al usuario a otro documento. Debe ejecutarse antes de enviar contenido al navegador.

La instrucción `exit` detiene la ejecución del documento después de realizar la redirección.

### Ejemplo de navegación entre documentos

Podemos utilizar una estructura sencilla de tres archivos:

**Archivo `index.php`:**

```php
<?php

session_start();

$_SESSION["usuario"] = "Carlos";

?>

<h1>Página principal</h1>

<p>Bienvenido, <?php echo htmlspecialchars($_SESSION["usuario"]); ?></p>

<a href="perfil.php">Consultar perfil</a>
```

**Archivo `perfil.php`:**

```php
<?php

session_start();

?>

<h1>Perfil de usuario</h1>

<?php

if (isset($_SESSION["usuario"])) {

    echo "Usuario: " . htmlspecialchars($_SESSION["usuario"]);

} else {

    echo "No se ha identificado ningún usuario.";

}

?>

<br>

<a href="index.php">Volver al inicio</a>
```

**Archivo `cerrar_sesion.php`:**

```php
<?php

session_start();

$_SESSION = [];

session_destroy();

header("Location: index.php");

exit;

?>
```

Los tres documentos trabajan con la misma sesión, por lo que pueden compartir la información almacenada en ella.

## 4. Cookies: almacenamiento de información en el navegador

Las cookies son pequeños fragmentos de información que una aplicación web puede almacenar en el navegador del usuario.

A diferencia de las sesiones, cuyos datos se almacenan principalmente en el servidor, las cookies guardan directamente información en el equipo del usuario.

El navegador puede enviar automáticamente las cookies correspondientes al servidor en las siguientes peticiones que realice al mismo sitio, siempre que se cumplan sus condiciones de dominio, ruta y seguridad.

Podemos utilizar cookies para almacenar:

- Preferencias de idioma.
- Configuración visual.
- Preferencias de navegación.
- Información sobre el consentimiento de cookies.
- Identificadores utilizados para reconocer una sesión.

No debemos almacenar contraseñas, datos bancarios ni información confidencial directamente en cookies.

### Crear una cookie mediante PHP

Para crear una cookie utilizamos la función `setcookie()`.

```php
<?php

setcookie(
    "idioma",
    "es",
    [
        "expires" => time() + 3600,
        "path" => "/",
        "secure" => true,
        "httponly" => true,
        "samesite" => "Lax"
    ]
);

echo "Cookie creada.";

?>
```

En este ejemplo:

- `idioma`: nombre de la cookie.
- `es`: valor almacenado.
- `expires`: fecha de caducidad expresada como marca de tiempo Unix.
- `path`: rutas del sitio a las que se enviará la cookie.
- `secure`: indica que solo se enviará mediante conexiones HTTPS.
- `httponly`: impide que JavaScript acceda directamente a la cookie.
- `samesite`: establece restricciones para el envío de cookies en peticiones entre sitios.

**Importante:** si utilizamos `secure => true`, debemos acceder a la aplicación mediante HTTPS para que el navegador envíe la cookie.

En un entorno local de desarrollo que utilice HTTP, esta opción puede impedir que la cookie se envíe. En ese caso, debemos adaptar la configuración al entorno, sin desactivar esta protección en producción.

### Recuperar una cookie

Para recuperar una cookie utilizamos el array superglobal `$_COOKIE`.

```php
<?php

if (isset($_COOKIE["idioma"])) {

    $idioma = $_COOKIE["idioma"];

    echo "Idioma seleccionado: " . htmlspecialchars($idioma);

} else {

    echo "No se ha seleccionado ningún idioma.";

}

?>
```

Hay que recordar que las cookies se envían en peticiones HTTP posteriores. Por tanto, después de crear una cookie mediante `setcookie()`, no debemos esperar que aparezca inmediatamente en `$_COOKIE` durante esa misma petición.

### Modificar una cookie

Para modificar una cookie simplemente volvemos a utilizar `setcookie()` con el mismo nombre y una nueva configuración.

```php
<?php

setcookie(
    "idioma",
    "en",
    [
        "expires" => time() + 3600,
        "path" => "/",
        "secure" => true,
        "httponly" => true,
        "samesite" => "Lax"
    ]
);

?>
```

El navegador recibirá una nueva instrucción para almacenar el valor actualizado.

### Eliminar una cookie

Para eliminar una cookie debemos establecer una fecha de caducidad anterior a la actual, manteniendo las mismas opciones de ruta y dominio utilizadas al crearla.

```php
<?php

setcookie(
    "idioma",
    "",
    [
        "expires" => time() - 3600,
        "path" => "/",
        "secure" => true,
        "httponly" => true,
        "samesite" => "Lax"
    ]
);

?>
```

### Diferencias entre sesiones y cookies

| Característica | Sesiones | Cookies |
|:--|:--|:--|
| Lugar de almacenamiento | Servidor | Navegador |
| Acceso desde PHP | `$_SESSION` | `$_COOKIE` |
| Duración | Según configuración y gestión de la sesión | Hasta su caducidad o eliminación |
| Información enviada | Identificador de sesión, normalmente mediante cookie | Se envían las cookies correspondientes |
| Capacidad | Adecuada para almacenar más información | Limitada, normalmente unos pocos KB por cookie |
| Seguridad | Los datos permanecen en el servidor | El usuario puede consultar y modificar su contenido |
| Uso habitual | Autenticación y carrito de compra | Preferencias y configuración |

## 5. Transmisión de información mediante URL y formularios

Aunque las sesiones y las cookies son mecanismos muy habituales, también podemos transmitir información entre documentos web utilizando parámetros GET y campos ocultos de formularios.

Estos mecanismos permiten trasladar datos de una página a otra sin necesidad de utilizar directamente una sesión.

### 5.1. Parámetros GET

El método GET permite enviar información mediante la dirección URL.

Por ejemplo:

```text
producto.php?id=25&categoria=hardware
```

El documento `producto.php` puede recuperar los datos mediante `$_GET`:

```php
<?php

$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);

$categoria = $_GET["categoria"] ?? "";

if ($id !== false && $id !== null && $id > 0) {

    echo "Identificador: " . $id;

    echo "<br>";

    echo "Categoría: " . htmlspecialchars($categoria);

} else {

    echo "Identificador no válido.";

}

?>
```

Este mecanismo es especialmente útil para:

- Consultar fichas de productos.
- Realizar búsquedas.
- Aplicar filtros.
- Navegar por páginas de resultados.
- Compartir enlaces con información de consulta.

No debemos enviar contraseñas ni información confidencial mediante GET, porque los parámetros aparecen en la URL.

### 5.2. Campos ocultos

Los formularios HTML permiten utilizar campos ocultos mediante `input type="hidden"`.

Estos campos no aparecen visualmente en el formulario, pero sus valores se envían al servidor cuando el usuario lo envía.

Ejemplo:

```html
<form action="procesar.php" method="post">

    <input type="hidden" name="id_producto" value="25">

    <label for="cantidad">Cantidad:</label>
    <input type="number" id="cantidad" name="cantidad" min="1">

    <button type="submit">Añadir al carrito</button>

</form>
```

En `procesar.php` podemos recuperar los valores:

```php
<?php

$idProducto = $_POST["id_producto"] ?? "";

$cantidad = $_POST["cantidad"] ?? "";

echo "Producto: " . htmlspecialchars($idProducto);

echo "<br>";

echo "Cantidad: " . htmlspecialchars($cantidad);

?>
```

Los campos ocultos permiten trasladar información entre documentos, pero no son un mecanismo seguro para almacenar datos importantes.

El usuario puede inspeccionar el código HTML y modificar el valor de un campo oculto antes de enviar el formulario.

Por tanto, el servidor debe comprobar siempre que los datos recibidos son válidos y que el usuario tiene permiso para realizar la operación solicitada.

### 5.3. Comparación de mecanismos

| Mecanismo | Dónde se almacena o transmite | Persistencia | Uso habitual |
|:--|:--|:--|:--|
| GET | URL | Durante la navegación mediante enlaces | Búsquedas y consultas |
| POST | Cuerpo de la petición | En el envío del formulario | Envío de datos |
| Campo oculto | Formulario HTML | Hasta que se envía el formulario | Transmitir identificadores |
| Sesión | Servidor | Entre peticiones mientras se mantenga activa | Carritos y usuarios |
| Cookie | Navegador | Hasta su caducidad o eliminación | Preferencias |

GET, POST y los campos ocultos permiten transportar información, pero no garantizan por sí mismos que esta se conserve de forma segura durante toda una navegación. Para ello debemos seleccionar mecanismos de persistencia adecuados.

## 6. Persistencia de información mediante archivos y bases de datos

Las sesiones y las cookies permiten conservar información durante la navegación, pero no siempre son suficientes.

En muchas aplicaciones necesitamos guardar datos de forma duradera, de manera que sigan disponibles aunque el usuario cierre el navegador o finalice su sesión.

Para ello podemos utilizar archivos o bases de datos.

### 6.1. Persistencia mediante archivos

PHP permite crear, leer y modificar archivos en el servidor.

Por ejemplo, podemos guardar los datos de un producto en un archivo de texto:

```php
<?php

$producto = [
    "nombre" => "Teclado mecánico",
    "precio" => 49.95,
    "unidades" => 12
];

$contenido = json_encode(
    $producto,
    JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
);

file_put_contents("producto.json", $contenido);

echo "Producto guardado correctamente.";

?>
```

En este ejemplo:

- `json_encode()` convierte un array PHP en una cadena JSON.
- `file_put_contents()` guarda el contenido en un archivo del servidor.

Para recuperar la información utilizamos `file_get_contents()` y `json_decode()`:

```php
<?php

$contenido = file_get_contents("producto.json");

$producto = json_decode($contenido, true);

echo "Producto: " . htmlspecialchars($producto["nombre"]);

echo "<br>";

echo "Precio: " . number_format($producto["precio"], 2);

?>
```

Los archivos permiten guardar información de forma sencilla, aunque debemos controlar los permisos, las rutas y el acceso concurrente cuando varios usuarios pueden modificar los mismos datos.

### 6.2. Persistencia mediante bases de datos

En aplicaciones web profesionales, las bases de datos son uno de los mecanismos principales para conservar información.

Podemos almacenar:

- Usuarios.
- Productos.
- Pedidos.
- Categorías.
- Comentarios.
- Historial de operaciones.

PHP puede conectarse a bases de datos como MySQL o MariaDB mediante PDO o MySQLi.

Por ejemplo, utilizando PDO:

```php
<?php

$conexion = new PDO(
    "mysql:host=localhost;dbname=tienda;charset=utf8mb4",
    "usuario",
    "contraseña"
);

$conexion->setAttribute(
    PDO::ATTR_ERRMODE,
    PDO::ERRMODE_EXCEPTION
);

echo "Conexión establecida correctamente.";

?>
```

Una vez establecida la conexión, podemos insertar información utilizando consultas preparadas:

```php
<?php

$consulta = $conexion->prepare(
    "INSERT INTO productos (nombre, precio) VALUES (:nombre, :precio)"
);

$consulta->execute([
    ":nombre" => "Monitor",
    ":precio" => 149.95
]);

echo "Producto almacenado correctamente.";

?>
```

También podemos recuperar información:

```php
<?php

$consulta = $conexion->prepare(
    "SELECT nombre, precio FROM productos WHERE id = :id"
);

$consulta->execute([
    ":id" => 1
]);

$producto = $consulta->fetch(PDO::FETCH_ASSOC);

if ($producto) {

    echo htmlspecialchars($producto["nombre"]);

    echo " - ";

    echo number_format($producto["precio"], 2) . " €";

} else {

    echo "Producto no encontrado.";

}

?>
```

### 6.3. Diferencias entre archivos y bases de datos

| Característica | Archivos | Bases de datos |
|:--|:--|:--|
| Organización | Ficheros | Tablas y registros |
| Consultas complejas | Más limitadas | Permiten consultas SQL |
| Relaciones entre datos | Deben gestionarse mediante programación | Permiten establecer relaciones |
| Acceso concurrente | Requiere medidas específicas | Disponen de mecanismos de concurrencia |
| Uso habitual | Configuración y datos sencillos | Aplicaciones con información estructurada |

### 6.4. ¿Qué mecanismo debemos utilizar?

La elección depende de la información que necesitamos conservar:

- Para mantener el usuario identificado durante la navegación, utilizaremos sesiones.
- Para recordar preferencias del navegador, utilizaremos cookies.
- Para transmitir identificadores entre documentos, podemos utilizar GET o campos ocultos.
- Para almacenar información sencilla en el servidor, podemos utilizar archivos.
- Para conservar información estructurada y compartida entre usuarios, utilizaremos bases de datos.

Es habitual combinar varios mecanismos en una misma aplicación.

Por ejemplo, una tienda informática puede utilizar sesiones para el carrito, cookies para las preferencias de idioma y una base de datos para almacenar productos y pedidos.

## 7. Compartir información entre documentos web: aplicación práctica con sesiones

Vamos a desarrollar un ejemplo completo para comprender cómo diferentes documentos PHP pueden compartir información mediante sesiones.

El escenario será una pequeña tienda informática que permite añadir productos a un carrito de compra.

### Estructura de archivos

```text
tienda/
│
├── index.php
├── anadir.php
├── carrito.php
├── eliminar.php
└── finalizar.php
```

Todos los documentos trabajarán con la misma sesión.

### 7.1. Página principal: `index.php`

En esta página mostraremos los productos disponibles y permitiremos añadirlos al carrito.

```php
<?php

session_start();

$productos = [
    1 => [
        "nombre" => "Teclado",
        "precio" => 25.50
    ],
    2 => [
        "nombre" => "Ratón",
        "precio" => 15.00
    ],
    3 => [
        "nombre" => "Monitor",
        "precio" => 149.95
    ]
];

?>

<h1>Tienda informática</h1>

<h2>Productos disponibles</h2>

<?php foreach ($productos as $id => $producto): ?>

    <h3><?= htmlspecialchars($producto["nombre"]) ?></h3>

    <p>Precio: <?= number_format($producto["precio"], 2) ?> €</p>

    <form action="anadir.php" method="post">

        <input type="hidden" name="id" value="<?= $id ?>">

        <label for="cantidad-<?= $id ?>">Cantidad:</label>

        <input
            type="number"
            id="cantidad-<?= $id ?>"
            name="cantidad"
            value="1"
            min="1"
            max="10"
            required
        >

        <button type="submit">Añadir al carrito</button>

    </form>

<?php endforeach; ?>

<a href="carrito.php">Consultar carrito</a>
```

### 7.2. Añadir productos: `anadir.php`

Este documento recibe los datos del formulario, comprueba su validez y almacena la información en la sesión.

```php
<?php

session_start();

$productos = [
    1 => [
        "nombre" => "Teclado",
        "precio" => 25.50
    ],
    2 => [
        "nombre" => "Ratón",
        "precio" => 15.00
    ],
    3 => [
        "nombre" => "Monitor",
        "precio" => 149.95
    ]
];

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    exit("Método de petición no permitido.");

}

$id = filter_input(INPUT_POST, "id", FILTER_VALIDATE_INT);

$cantidad = filter_input(INPUT_POST, "cantidad", FILTER_VALIDATE_INT);

if (
    $id === false ||
    $id === null ||
    !isset($productos[$id]) ||
    $cantidad === false ||
    $cantidad === null ||
    $cantidad < 1 ||
    $cantidad > 10
) {

    exit("Los datos recibidos no son válidos.");

}

if (!isset($_SESSION["carrito"])) {

    $_SESSION["carrito"] = [];

}

if (!isset($_SESSION["carrito"][$id])) {

    $_SESSION["carrito"][$id] = 0;

}

$_SESSION["carrito"][$id] += $cantidad;

header("Location: carrito.php");

exit;

?>
```

Observa que los precios y nombres se recuperan de la información almacenada en el servidor, no del formulario.

Esto evita confiar en valores que el usuario podría manipular.

### 7.3. Consultar el carrito: `carrito.php`

Este documento recupera los productos almacenados en la sesión y calcula el importe total.

```php
<?php

session_start();

$productos = [
    1 => [
        "nombre" => "Teclado",
        "precio" => 25.50
    ],
    2 => [
        "nombre" => "Ratón",
        "precio" => 15.00
    ],
    3 => [
        "nombre" => "Monitor",
        "precio" => 149.95
    ]
];

$carrito = $_SESSION["carrito"] ?? [];

$total = 0;

?>

<h1>Mi carrito</h1>

<?php if (empty($carrito)): ?>

    <p>El carrito está vacío.</p>

<?php else: ?>

    <?php foreach ($carrito as $id => $cantidad): ?>

        <?php

        if (!isset($productos[$id])) {
            continue;
        }

        $producto = $productos[$id];

        $subtotal = $producto["precio"] * $cantidad;

        $total += $subtotal;

        ?>

        <p>
            <?= htmlspecialchars($producto["nombre"]) ?>
            - Cantidad: <?= $cantidad ?>
            - Subtotal: <?= number_format($subtotal, 2) ?> €
        </p>

        <form action="eliminar.php" method="post">

            <input type="hidden" name="id" value="<?= $id ?>">

            <button type="submit">Eliminar producto</button>

        </form>

    <?php endforeach; ?>

    <h2>Total: <?= number_format($total, 2) ?> €</h2>

    <a href="finalizar.php">Finalizar compra</a>

<?php endif; ?>

<br>

<a href="index.php">Volver a la tienda</a>
```

### 7.4. Eliminar productos: `eliminar.php`

Este documento permite eliminar un producto del carrito.

```php
<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    exit("Método de petición no permitido.");

}

$id = filter_input(INPUT_POST, "id", FILTER_VALIDATE_INT);

if (
    $id === false ||
    $id === null ||
    !isset($_SESSION["carrito"][$id])
) {

    exit("Producto no válido.");

}

unset($_SESSION["carrito"][$id]);

header("Location: carrito.php");

exit;

?>
```

### 7.5. Finalizar compra: `finalizar.php`

Cuando el usuario confirma la compra, podemos mostrar un resumen y vaciar el carrito.

```php
<?php

session_start();

if (empty($_SESSION["carrito"])) {

    exit("No hay productos en el carrito.");

}

$carrito = $_SESSION["carrito"];

$_SESSION["carrito"] = [];

?>

<h1>Compra finalizada</h1>

<p>Se ha procesado la compra correctamente.</p>

<p>Se han eliminado los productos del carrito.</p>

<a href="index.php">Volver a la tienda</a>
```

### ¿Qué hemos aprendido?

En esta aplicación:

1. `index.php` muestra los productos.
2. `anadir.php` recibe los datos y modifica la sesión.
3. `carrito.php` recupera la información almacenada.
4. `eliminar.php` modifica la información de la sesión.
5. `finalizar.php` elimina el contenido del carrito.

La información se mantiene entre diferentes documentos porque todos acceden a la misma sesión.

Este ejemplo utiliza un array definido en los documentos para representar los productos disponibles. En una aplicación real, los productos y los pedidos deberían almacenarse en una base de datos.

## 8. Seguridad y buenas prácticas en los mecanismos de persistencia

La persistencia de información implica riesgos de seguridad, especialmente cuando almacenamos datos relacionados con usuarios, permisos, pedidos o información personal.

Por este motivo, debemos aplicar medidas de protección en todos los mecanismos utilizados.

### 8.1. Protección de sesiones

Las sesiones suelen utilizar un identificador que permite relacionar las peticiones del navegador con los datos almacenados en el servidor.

Si un atacante consigue obtener ese identificador, podría intentar suplantar al usuario.

Para reducir estos riesgos, debemos:

- Utilizar HTTPS.
- Activar `session.use_strict_mode`.
- Utilizar cookies de sesión con las opciones `HttpOnly` y `Secure`.
- Configurar `SameSite` adecuadamente.
- Regenerar el identificador de sesión después de iniciar sesión o cambiar los privilegios del usuario.
- Destruir la sesión cuando el usuario cierre sesión.
- Evitar mostrar o registrar identificadores de sesión.
- Establecer tiempos de inactividad razonables para las sesiones.

Ejemplo de configuración básica antes de iniciar la sesión:

```php
<?php

ini_set("session.use_strict_mode", "1");

session_set_cookie_params([
    "lifetime" => 0,
    "path" => "/",
    "secure" => true,
    "httponly" => true,
    "samesite" => "Lax"
]);

session_start();

?>
```

La opción `lifetime => 0` indica que la cookie de sesión se mantiene normalmente hasta que se cierra el navegador. Esto no significa que la sesión del servidor sea necesariamente ilimitada.

Después de comprobar correctamente las credenciales de un usuario, debemos regenerar el identificador de sesión:

```php
<?php

session_regenerate_id(true);

?>
```

Esta medida ayuda a prevenir ataques de fijación de sesión (*Session Fixation*).

### 8.2. Protección de cookies

Las cookies se almacenan en el navegador y el usuario puede consultar o modificar sus valores.

Por tanto:

- No debemos guardar contraseñas en cookies.
- No debemos almacenar permisos o roles confiando en su contenido.
- No debemos confiar en identificadores enviados por el navegador sin validarlos.
- Debemos utilizar `HttpOnly` cuando no sea necesario acceder a la cookie desde JavaScript.
- Debemos utilizar `Secure` para transmitirlas únicamente mediante HTTPS.
- Debemos configurar `SameSite` para reducir determinados ataques CSRF.
- Debemos establecer una duración adecuada.

Una cookie que almacena el idioma seleccionado puede ser una solución apropiada. Sin embargo, una cookie que almacene directamente el valor `rol=administrador` no es una forma segura de controlar los permisos.

### 8.3. Protección de información transmitida entre documentos

Los datos enviados mediante GET, POST o campos ocultos pueden ser manipulados.

Debemos:

- Validar los datos recibidos.
- Comprobar que los identificadores existen.
- Verificar que el usuario tiene permiso para realizar cada operación.
- No confiar en precios, cantidades o roles enviados por el navegador.
- Utilizar consultas preparadas cuando trabajemos con bases de datos.
- Escapar los datos cuando los mostremos en HTML.

### 8.4. Protección frente a ataques CSRF

Cuando una aplicación permite modificar información, debemos comprobar que las peticiones proceden de formularios legítimos.

Una técnica habitual es utilizar tokens CSRF almacenados en la sesión y enviados mediante campos ocultos.

El servidor debe comprobar el token antes de realizar operaciones sensibles.

### 8.5. Seguridad en archivos y bases de datos

Si utilizamos archivos:

- Debemos limitar los directorios a los que puede acceder la aplicación.
- Debemos establecer permisos adecuados.
- Debemos evitar guardar información sensible en ubicaciones públicas.
- Debemos controlar las operaciones de lectura y escritura.

Si utilizamos bases de datos:

- Debemos utilizar consultas preparadas.
- Debemos proteger las credenciales de conexión.
- Debemos aplicar permisos mínimos al usuario de la base de datos.
- Debemos realizar copias de seguridad.
- Debemos validar la información antes de almacenarla.

### 8.6. Comparación de riesgos

| Mecanismo | Riesgo principal | Medida de protección |
|:--|:--|:--|
| Sesiones | Robo o fijación del identificador | HTTPS, regeneración del ID y cookies seguras |
| Cookies | Manipulación de los valores | No confiar en los datos y utilizar atributos de seguridad |
| GET | Exposición de información en la URL | No enviar información confidencial |
| Campos ocultos | Manipulación por parte del usuario | Validar los datos en el servidor |
| Archivos | Accesos o modificaciones no autorizadas | Permisos y rutas controladas |
| Bases de datos | Inyección SQL y accesos indebidos | Consultas preparadas y permisos mínimos |

La regla fundamental es que **ningún dato recibido o almacenado en el navegador debe considerarse fiable sin comprobarlo en el servidor**.

## 9. Selección del mecanismo de persistencia y buenas prácticas de programación

En una aplicación web podemos utilizar varios mecanismos de persistencia al mismo tiempo.

La elección depende de qué información queremos conservar, durante cuánto tiempo y quién necesita acceder a ella.

### 9.1. ¿Qué mecanismo debemos elegir?

| Necesidad | Mecanismo recomendado | Ejemplo |
|:--|:--|:--|
| Mantener identificado al usuario | Sesiones | Inicio de sesión |
| Conservar un carrito durante la navegación | Sesiones | Carrito de compra |
| Recordar el idioma del navegador | Cookies | Preferencia de idioma |
| Compartir un identificador mediante un enlace | GET | Consulta de producto |
| Enviar información de un formulario | POST | Alta de productos |
| Transmitir un dato junto con un formulario | Campo oculto | Identificador del producto |
| Guardar una configuración sencilla | Archivo | Configuración de la aplicación |
| Almacenar pedidos y usuarios | Base de datos | Tienda informática |

### 9.2. Persistencia temporal y permanente

Es importante diferenciar entre conservar información durante una navegación y almacenarla de forma duradera.

**Persistencia temporal:**

- Sesiones.
- Cookies de corta duración.
- Datos transmitidos entre formularios.
- Parámetros de URL.

**Persistencia duradera:**

- Archivos.
- Bases de datos.
- Cookies con una caducidad determinada, aunque no son adecuadas para almacenar información sensible o crítica.

Por ejemplo, un carrito de compra puede mantenerse en una sesión mientras el usuario navega. Si queremos que siga disponible después de cerrar el navegador o iniciar sesión desde otro dispositivo, necesitaremos guardar su contenido en una base de datos.

### 9.3. Separar la presentación y el procesamiento

En aplicaciones pequeñas podemos tener el formulario y su procesamiento en el mismo documento. Sin embargo, cuando una aplicación crece, es recomendable organizar el código en diferentes archivos.

Por ejemplo:

```text
tienda/
│
├── index.php
├── productos.php
├── carrito.php
├── anadir.php
├── eliminar.php
├── finalizar.php
│
└── includes/
    ├── conexion.php
    ├── funciones.php
    └── seguridad.php
```

Esta organización facilita:

- La reutilización del código.
- El mantenimiento de la aplicación.
- La localización de errores.
- La separación de responsabilidades.
- La aplicación de medidas de seguridad comunes.

Podemos utilizar `require_once` para incorporar archivos PHP que contienen funciones o configuraciones necesarias.

### 9.4. Buenas prácticas con sesiones

1. Iniciar la sesión únicamente cuando sea necesario.
2. Ejecutar `session_start()` antes de generar contenido.
3. Utilizar nombres descriptivos para las variables de sesión.
4. Comprobar que las variables existen antes de utilizarlas.
5. No almacenar información innecesaria.
6. Regenerar el identificador después de autenticar al usuario.
7. Destruir la sesión cuando se cierre la sesión del usuario.
8. No confiar en datos recibidos del navegador.
9. Utilizar HTTPS en producción.
10. Proteger las operaciones que modifican información mediante controles de seguridad.

### 9.5. Buenas prácticas con cookies

1. Utilizar cookies únicamente cuando sean necesarias.
2. Establecer una fecha de caducidad adecuada.
3. Limitar su ámbito mediante `path` y `domain`.
4. Utilizar `Secure` cuando se trabaje con HTTPS.
5. Utilizar `HttpOnly` cuando no se necesite acceso desde JavaScript.
6. Configurar `SameSite` según las necesidades de la aplicación.
7. No almacenar contraseñas ni datos confidenciales.
8. No confiar en los valores recibidos.
9. Informar y obtener el consentimiento cuando sea necesario según la normativa aplicable.
10. Eliminar las cookies que ya no se utilicen.

### 9.6. Documentación y pruebas

Cuando desarrollemos una aplicación que utiliza mecanismos de persistencia, debemos comprobar su funcionamiento.

Algunas pruebas importantes son:

- Comprobar que una variable de sesión está disponible en diferentes documentos.
- Modificar una variable y comprobar que el nuevo valor se conserva.
- Eliminar una variable de sesión y comprobar que deja de existir.
- Cerrar una sesión y comprobar que no se puede seguir utilizando.
- Crear una cookie y comprobar que aparece en peticiones posteriores.
- Modificar y eliminar cookies.
- Manipular parámetros GET y campos ocultos para comprobar las validaciones.
- Cerrar el navegador y comprobar qué información se conserva.
- Verificar que los datos almacenados en archivos o bases de datos siguen disponibles.

La documentación debe explicar qué mecanismo se ha utilizado, qué información se almacena, cuánto tiempo se conserva y qué medidas de seguridad se han aplicado.

## 10. Actividades propuestas: programación de mecanismos de persistencia con PHP

### Objetivo

Desarrollar aplicaciones web que permitan mantener y recuperar información entre diferentes documentos PHP utilizando sesiones, cookies, parámetros, archivos y bases de datos.

Todas las actividades utilizarán PHP como lenguaje de guiones del servidor.

Las actividades serán progresivas y permitirán aplicar los mecanismos estudiados en los apartados anteriores.

### Actividad 1. Compartir información entre dos documentos PHP

**Contenidos:** variables de sesión y array `$_SESSION`.

Crea dos documentos PHP:

- `index.php`
- `perfil.php`

En `index.php`, solicita al usuario su nombre mediante un formulario y almacena el valor recibido en una variable de sesión.

En `perfil.php`, recupera la información y muestra un mensaje de bienvenida.

**Requisitos:**

1. Utiliza `session_start()` en ambos documentos.
2. Utiliza POST para enviar el nombre.
3. Almacena el nombre en `$_SESSION`.
4. Recupera el nombre desde `perfil.php`.
5. Comprueba que la variable existe mediante `isset()`.
6. Muestra los datos utilizando `htmlspecialchars()`.
7. Añade un enlace para volver a la página principal.

### Actividad 2. Modificación y eliminación de variables de sesión

**Contenidos:** gestión de sesiones, `unset()` y `session_destroy()`.

Amplía la actividad anterior para que el usuario pueda modificar su nombre y eliminar la información almacenada.

Crea los siguientes documentos:

- `index.php`
- `perfil.php`
- `modificar.php`
- `eliminar.php`

**Requisitos:**

1. Permite consultar el nombre almacenado.
2. Crea un formulario para modificarlo.
3. Actualiza la variable de sesión.
4. Añade una opción para eliminar únicamente el nombre.
5. Añade otra opción para cerrar completamente la sesión.
6. Comprueba que después de eliminar la información ya no aparece el nombre.
7. Muestra mensajes adecuados cuando no exista una sesión activa.

### Actividad 3. Recordar el idioma mediante cookies

**Contenidos:** creación, recuperación y eliminación de cookies.

Desarrolla una pequeña página que permita seleccionar el idioma de una aplicación.

Los idiomas disponibles serán:

- Español.
- Valenciano.
- Inglés.

Cuando el usuario seleccione un idioma, PHP deberá almacenarlo en una cookie con una duración de 30 días.

**Requisitos:**

1. Crea un formulario para seleccionar el idioma.
2. Envía la selección mediante POST.
3. Comprueba que el idioma pertenece a las opciones permitidas.
4. Crea la cookie mediante `setcookie()`.
5. Recupera la preferencia mediante `$_COOKIE`.
6. Muestra el idioma seleccionado.
7. Añade un botón para eliminar la cookie.
8. Comprueba que la preferencia continúa disponible en visitas posteriores mientras la cookie siga vigente.

### Actividad 4. Contador de visitas mediante sesiones

**Contenidos:** persistencia de variables y modificación de sesiones.

Crea una aplicación que contabilice cuántas veces ha visitado un usuario una página durante una misma sesión.

Cada vez que el usuario acceda a `contador.php`, se incrementará el valor almacenado.

**Requisitos:**

1. Inicia la sesión.
2. Comprueba si existe la variable `visitas`.
3. Si no existe, inicialízala a cero.
4. Incrementa el contador en cada acceso.
5. Muestra el número de visitas.
6. Crea un botón para reiniciar el contador.
7. Comprueba que el contador se mantiene al navegar entre diferentes documentos PHP.
8. Explica por qué el contador vuelve a empezar al utilizar una sesión nueva.

### Actividad 5. Carrito de compra mediante sesiones

**Contenidos:** arrays de sesión y persistencia entre documentos.

Desarrolla un carrito de compra para una tienda informática.

La tienda dispondrá de los siguientes productos:

| Identificador | Producto | Precio |
|:--|:--|--:|
| 1 | Teclado | 25,50 € |
| 2 | Ratón | 15,00 € |
| 3 | Monitor | 149,95 € |
| 4 | Impresora | 89,90 € |
| 5 | Disco duro | 75,00 € |

Crea los siguientes documentos:

- `index.php`
- `anadir.php`
- `carrito.php`
- `eliminar.php`
- `vaciar.php`

**Requisitos:**

1. Muestra los productos disponibles.
2. Permite seleccionar una cantidad.
3. Almacena los productos seleccionados en `$_SESSION`.
4. Permite añadir varios productos.
5. Si se añade un producto que ya existe en el carrito, incrementa su cantidad.
6. Muestra el contenido del carrito.
7. Calcula el subtotal de cada producto.
8. Calcula el importe total.
9. Permite eliminar un producto.
10. Permite vaciar completamente el carrito.

Los precios y nombres de los productos deberán recuperarse de la información definida en el servidor, sin confiar en los valores enviados por el navegador.

### Actividad 6. Gestión de preferencias mediante cookies

**Contenidos:** configuración de cookies y persistencia de preferencias.

Desarrolla una página web que permita al usuario configurar sus preferencias.

El usuario podrá seleccionar:

- Idioma.
- Número de productos mostrados por página.
- Ordenación de los productos: precio ascendente o descendente.

Al guardar las preferencias, PHP deberá almacenarlas mediante cookies.

**Requisitos:**

1. Crea un formulario con las diferentes opciones.
2. Envía los datos mediante POST.
3. Valida que las opciones recibidas sean correctas.
4. Almacena cada preferencia en una cookie.
5. Establece una duración de 30 días.
6. Recupera las preferencias en una página diferente.
7. Muestra la configuración actual.
8. Permite restablecer los valores predeterminados.
9. Explica qué información se almacena en el navegador y por qué no debe utilizarse para guardar datos sensibles.

### Actividad 7. Transmisión de información mediante GET y campos ocultos

**Contenidos:** parámetros GET y campos `hidden`.

Desarrolla una aplicación que permita consultar productos y modificar sus cantidades.

La página principal mostrará una lista de productos. Al seleccionar uno, se accederá a su ficha mediante una URL que incluya el identificador.

En la ficha se mostrará un formulario para modificar la cantidad.

**Requisitos:**

1. Utiliza GET para enviar el identificador del producto.
2. Recupera el identificador mediante `$_GET`.
3. Comprueba que el identificador existe.
4. Muestra la información del producto.
5. Incluye un campo oculto con el identificador.
6. Envía la cantidad mediante POST.
7. Comprueba que el identificador recibido corresponde a un producto existente.
8. Valida que la cantidad sea un número entero positivo.
9. Modifica la información correspondiente.
10. Explica por qué no debemos confiar en los valores de los campos ocultos.

### Actividad 8. Persistencia de información mediante archivos

**Contenidos:** lectura y escritura de archivos con PHP.

Desarrolla una aplicación que permita almacenar un pequeño inventario de productos en un archivo JSON.

El archivo se denominará `inventario.json` y contendrá los productos de la tienda.

**Requisitos:**

1. Crea un formulario para introducir productos.
2. Solicita nombre, precio y unidades.
3. Valida todos los datos mediante PHP.
4. Recupera el contenido del archivo con `file_get_contents()`.
5. Convierte el contenido JSON en un array PHP mediante `json_decode()`.
6. Añade el nuevo producto al array.
7. Convierte nuevamente el array en JSON mediante `json_encode()`.
8. Guarda los cambios mediante `file_put_contents()`.
9. Crea una página que muestre todos los productos almacenados.
10. Comprueba que la información continúa disponible después de cerrar el navegador y acceder de nuevo a la aplicación.

### Actividad 9. Persistencia de pedidos mediante una base de datos

**Contenidos:** conexión PHP con bases de datos mediante PDO y consultas preparadas.

Desarrolla una aplicación que permita registrar pedidos de una tienda informática.

La base de datos se denominará `tienda` y contendrá una tabla `pedidos` con los siguientes campos:

| Campo | Tipo orientativo | Descripción |
|:--|:--|:--|
| id | INT | Identificador del pedido |
| cliente | VARCHAR(100) | Nombre del cliente |
| producto | VARCHAR(100) | Producto solicitado |
| cantidad | INT | Unidades solicitadas |
| fecha | DATETIME | Fecha del pedido |

**Requisitos:**

1. Crea la base de datos y la tabla.
2. Establece la conexión mediante PDO.
3. Crea un formulario para registrar pedidos.
4. Envía los datos mediante POST.
5. Valida los campos recibidos.
6. Inserta los datos utilizando una consulta preparada.
7. Crea otro documento PHP para consultar los pedidos.
8. Muestra los pedidos en una tabla HTML.
9. Permite consultar un pedido mediante su identificador.
10. Comprueba que los datos continúan almacenados aunque se cierre el navegador o la sesión.

### Actividad 10. Proyecto integrador: aplicación de gestión de una tienda informática

**Contenidos:** integración de sesiones, cookies, formularios, archivos y bases de datos.

Desarrolla una aplicación web que permita gestionar una pequeña tienda informática.

El proyecto deberá integrar los mecanismos de persistencia estudiados en esta unidad y permitir que diferentes documentos PHP compartan información.

#### Estructura del proyecto

```text
UP5_7_Tienda/
│
├── index.php
├── login.php
├── logout.php
├── productos.php
├── anadir_carrito.php
├── carrito.php
├── eliminar_producto.php
├── finalizar_pedido.php
├── preferencias.php
├── guardar_preferencias.php
├── historial.php
│
├── includes/
│   ├── conexion.php
│   ├── funciones.php
│   └── seguridad.php
│
└── datos/
    └── configuracion.json
```

#### 1. Identificación del usuario

Crea un formulario de acceso que permita identificar a un usuario.

**Requisitos:**

- Solicitar nombre de usuario y contraseña.
- Validar las credenciales mediante PHP.
- Utilizar sesiones para mantener identificado al usuario.
- Regenerar el identificador de sesión después de autenticarlo correctamente.
- Permitir cerrar sesión.
- Impedir el acceso a las páginas privadas cuando no exista una sesión válida.

Para una aplicación real, las credenciales deberán almacenarse de forma segura, utilizando hashes de contraseñas y una base de datos.

#### 2. Gestión de productos

Crea una página que muestre los productos disponibles.

Cada producto deberá tener:

- Identificador.
- Nombre.
- Categoría.
- Precio.
- Unidades disponibles.

La información de los productos se almacenará en una base de datos.

#### 3. Carrito de compra

Utiliza sesiones para almacenar los productos que el usuario desea comprar.

La aplicación deberá permitir:

- Añadir productos.
- Modificar cantidades.
- Eliminar productos.
- Consultar el carrito.
- Calcular subtotales.
- Calcular el importe total.

El servidor deberá comprobar los identificadores, las cantidades y la disponibilidad de los productos antes de aceptar cada operación.

#### 4. Preferencias del usuario

Crea una página que permita seleccionar:

- Idioma.
- Número de productos por página.
- Ordenación de los productos.

Guarda estas preferencias mediante cookies y recupéralas al acceder de nuevo a la aplicación.

#### 5. Registro de pedidos

Cuando el usuario confirme una compra, almacena el pedido en una base de datos.

El pedido deberá incluir:

- Identificador del pedido.
- Usuario que realiza la compra.
- Fecha.
- Productos incluidos.
- Cantidades.
- Importe total.

El historial deberá poder consultarse desde otro documento PHP.

#### 6. Persistencia entre documentos

Comprueba que la información se mantiene correctamente cuando el usuario navega por las diferentes páginas.

Por ejemplo:

1. Inicia sesión.
2. Consulta los productos.
3. Añade varios productos al carrito.
4. Consulta el carrito.
5. Modifica las cantidades.
6. Accede a las preferencias.
7. Vuelve al carrito.
8. Finaliza el pedido.
9. Consulta el historial de pedidos.

El usuario deberá poder navegar sin perder la información que corresponda a cada mecanismo de persistencia.

#### 7. Seguridad

Aplica las siguientes medidas:

- Utiliza HTTPS en el entorno de producción.
- Configura las cookies de sesión con `HttpOnly`, `Secure` y `SameSite`.
- Regenera el identificador de sesión después de autenticar al usuario.
- Comprueba que el usuario tiene permiso para acceder a cada documento.
- Valida todos los datos recibidos.
- Utiliza consultas preparadas mediante PDO.
- Escapa los datos mostrados en HTML.
- Protege los formularios sensibles frente a ataques CSRF.
- No confíes en los precios ni en los permisos enviados por el navegador.
- Destruye correctamente la sesión al cerrar la cuenta.

#### 8. Pruebas de funcionamiento

Realiza, al menos, las siguientes pruebas:

- Iniciar sesión correctamente.
- Intentar acceder a una página privada sin iniciar sesión.
- Cerrar sesión y comprobar que se pierde el acceso.
- Añadir productos al carrito.
- Modificar las cantidades.
- Eliminar productos.
- Comprobar que el carrito se mantiene al navegar entre documentos.
- Guardar las preferencias mediante cookies.
- Cerrar y abrir el navegador para comprobar las preferencias.
- Finalizar un pedido.
- Consultar el historial de pedidos.
- Intentar manipular los identificadores o cantidades enviados desde los formularios.

#### 9. Documentación de la entrega

Entrega un documento PDF que incluya:

- Portada con los datos del alumno.
- Descripción de la aplicación.
- Estructura de archivos del proyecto.
- Explicación de los mecanismos de persistencia utilizados.
- Capturas de los formularios.
- Capturas de las diferentes páginas.
- Fragmentos de código PHP relevantes.
- Explicación del uso de sesiones y cookies.
- Descripción del almacenamiento mediante base de datos.
- Pruebas de funcionamiento.
- Medidas de seguridad aplicadas.
- Errores detectados y explicación de su resolución.
- Conclusiones personales.

Las capturas deberán estar centradas, ser legibles y acompañarse de una explicación técnica. Las imágenes finales deberán demostrar que la información se conserva correctamente al navegar entre los diferentes documentos.

### Resultado esperado

El alumno deberá ser capaz de seleccionar, implementar y utilizar mecanismos de persistencia en aplicaciones web desarrolladas con PHP.

En particular, deberá demostrar que sabe:

- Mantener información mediante sesiones.
- Almacenar y recuperar preferencias mediante cookies.
- Transmitir información entre documentos mediante GET y POST.
- Utilizar campos ocultos de forma adecuada.
- Guardar información en archivos y bases de datos.
- Compartir datos entre documentos web relacionados.
- Aplicar medidas de seguridad para proteger la información almacenada y transmitida.

**Criterio de evaluación:** g) Se han establecido y utilizado mecanismos para asegurar la persistencia de la información entre distintos documentos Web relacionados.

-->