---
title: 🚀 UP5.6. Formularios HTML y procesamiento de datos con PHP - CE5.f)
---

### RA5. Genera documentos Web utilizando lenguajes de guiones de servidor.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| f) Se han utilizado formularios para introducir información. | Práctico | 10 % |

### 1. Introducción
<!-- 

# UP5.6. Formularios HTML y procesamiento de datos con PHP

## 1. Introducción a los formularios en aplicaciones web

Los formularios son uno de los mecanismos fundamentales para introducir información en una aplicación web. Permiten que los usuarios envíen datos al servidor para realizar diferentes operaciones, como registrarse, iniciar sesión, buscar información, realizar pedidos o modificar sus datos personales.

En una aplicación web, el procesamiento de un formulario se realiza mediante la colaboración de dos partes:

- **Cliente:** presenta el formulario al usuario mediante elementos HTML y permite introducir los datos.
- **Servidor:** recibe los datos enviados, los procesa mediante PHP y genera una respuesta que se devuelve al navegador.

Por ejemplo, en una tienda informática podemos utilizar un formulario para que un usuario introduzca el nombre de un producto, su precio y las unidades disponibles. PHP recibirá esos datos, comprobará que sean correctos y mostrará la información procesada.

El funcionamiento general es el siguiente:

1. El usuario accede a una página que contiene un formulario.
2. El navegador muestra los campos que permiten introducir información.
3. El usuario completa los campos y pulsa el botón de envío.
4. El navegador envía los datos al servidor.
5. PHP recibe y procesa la información.
6. El servidor devuelve una respuesta que el navegador muestra al usuario.

Es importante comprender que **HTML permite construir el formulario, mientras que PHP se encarga de recibir y procesar la información en el servidor**.

En esta unidad aprenderemos a crear formularios HTML, enviar información mediante los métodos GET y POST, recuperar los datos con PHP, validar las entradas y mostrar los resultados de forma segura.

## 2. Creación de formularios con HTML

Los formularios se crean mediante la etiqueta `<form>`. Dentro de ella se incluyen los diferentes campos que permiten al usuario introducir información.

La estructura básica es:

```html
<form action="procesar.php" method="post">

    <!-- Campos del formulario -->
<!--
    <button type="submit">Enviar</button>

</form>
```

Los atributos principales de la etiqueta `<form>` son:

| Atributo | Función |
|:--|:--|
| `action` | Indica el documento del servidor que recibirá los datos. |
| `method` | Especifica el método utilizado para enviar la información. |
| `enctype` | Define cómo se codifican los datos enviados. |
| `autocomplete` | Permite activar o desactivar el autocompletado del navegador. |

El atributo `action` puede indicar una ruta relativa, como `procesar.php`. Si se omite, el formulario se envía al documento actual.

El atributo `method` puede utilizar principalmente dos valores:

- `get`: envía los datos como parte de la dirección URL.
- `post`: envía los datos en el cuerpo de la petición HTTP.

### Campos de entrada

Para introducir información utilizamos principalmente la etiqueta `<input>`.

El atributo `type` determina el tipo de dato que puede introducir el usuario.

| Tipo | Utilidad | Ejemplo |
|:--|:--|:--|
| `text` | Introducir texto | Nombre |
| `password` | Introducir contraseñas | Contraseña |
| `email` | Introducir direcciones de correo | Correo electrónico |
| `number` | Introducir números | Edad |
| `date` | Seleccionar una fecha | Fecha de nacimiento |
| `checkbox` | Seleccionar opciones independientes | Aceptar condiciones |
| `radio` | Seleccionar una opción entre varias | Tipo de usuario |
| `file` | Seleccionar un archivo | Fotografía |
| `hidden` | Enviar un dato no visible en el formulario | Identificador |
| `submit` | Enviar el formulario | Enviar |

También podemos utilizar otros elementos:

- `<textarea>`: permite introducir textos largos.
- `<select>`: permite seleccionar una opción de una lista.
- `<option>`: define las opciones disponibles en una lista desplegable.
- `<button>`: crea un botón que puede enviar el formulario.

### Ejemplo de formulario

```html
<form action="procesar.php" method="post">

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>

    <br><br>

    <label for="correo">Correo electrónico:</label>
    <input type="email" id="correo" name="correo" required>

    <br><br>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" min="16" max="100">

    <br><br>

    <button type="submit">Enviar datos</button>

</form>
```

**Importante:** el atributo `name` es imprescindible para identificar los datos que se enviarán al servidor. El atributo `id` permite identificar el elemento dentro del documento y asociarlo con su etiqueta `<label>`.

No debemos confundir `name` con `id`: PHP utilizará el atributo `name` para recuperar los datos enviados.

## 3. Métodos GET y POST para enviar información

Cuando un formulario envía información al servidor, puede utilizar diferentes métodos HTTP. Los dos más habituales son GET y POST.

### Método GET

El método GET envía los datos como parámetros de la dirección URL.

**Formulario:**

```html
<form action="buscar.php" method="get">

    <label for="producto">Producto:</label>
    <input type="text" id="producto" name="producto">

    <button type="submit">Buscar</button>

</form>
```

Si el usuario introduce «teclado», el navegador enviará una petición similar a:

```text
buscar.php?producto=teclado
```

Los datos aparecen en la URL, por lo que pueden quedar registrados en el historial del navegador, en registros del servidor o en otros sistemas de seguimiento.

GET se utiliza habitualmente para:

- Realizar búsquedas.
- Aplicar filtros.
- Consultar información.
- Navegar por diferentes páginas.
- Compartir enlaces con parámetros de consulta.

No debe utilizarse para enviar contraseñas u otra información confidencial.

### Método POST

El método POST envía los datos en el cuerpo de la petición HTTP, en lugar de incorporarlos a la URL.

**Formulario:**

```html
<form action="registrar.php" method="post">

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">

    <label for="correo">Correo:</label>
    <input type="email" id="correo" name="correo">

    <button type="submit">Registrar</button>

</form>
```

En este caso, los datos no aparecen directamente en la dirección URL.

POST se utiliza habitualmente para:

- Registrar usuarios.
- Iniciar sesión.
- Enviar formularios de contacto.
- Crear o modificar registros.
- Enviar información que no queremos incluir en la URL.

**Importante:** POST no cifra la información. Para proteger los datos durante su transmisión es necesario utilizar HTTPS. Además, debemos validar los datos en el servidor y aplicar los controles de seguridad correspondientes.

### Comparación entre GET y POST

| Característica | GET | POST |
|:--|:--|:--|
| Ubicación de los datos | URL | Cuerpo de la petición |
| Visibilidad en la URL | Sí | No |
| Uso habitual | Consultas y búsquedas | Envío y modificación de información |
| Compartir mediante enlaces | Sí, con sus parámetros | No de la misma manera |
| Información confidencial | No es adecuado | Puede utilizarse con HTTPS, pero requiere protección adicional |
| Modificar datos en el servidor | No debería utilizarse para ello | Es adecuado para estas operaciones |

## 4. Recepción de datos mediante PHP: `$_GET` y `$_POST`

Cuando un formulario se envía, PHP proporciona mecanismos para recuperar la información recibida.

Los principales son:

- `$_GET`: permite acceder a los datos enviados mediante GET.
- `$_POST`: permite acceder a los datos enviados mediante POST.

Ambos son arrays superglobales asociativos. Esto significa que podemos acceder a sus elementos utilizando el nombre del campo definido en el atributo `name`.

### Recuperar datos mediante GET

Supongamos que tenemos el siguiente formulario:

```html
<form action="buscar.php" method="get">

    <label for="usuario">Usuario:</label>
    <input type="text" id="usuario" name="usuario">

    <button type="submit">Buscar</button>

</form>
```

En el archivo `buscar.php` podemos recuperar el valor introducido:

```php
<?php

$usuario = $_GET["usuario"];

echo "El usuario buscado es: " . htmlspecialchars($usuario);

?>
```

Si el usuario introduce «Carlos», PHP recuperará ese valor y lo almacenará en `$usuario`.

### Recuperar datos mediante POST

Formulario:

```html
<form action="procesar.php" method="post">

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">

    <button type="submit">Enviar</button>

</form>
```

Archivo `procesar.php`:

```php
<?php

$nombre = $_POST["nombre"];

echo "Bienvenido, " . htmlspecialchars($nombre);

?>
```

PHP recupera el dato utilizando el mismo nombre que se ha definido en el atributo `name`.

### Comprobar si se ha enviado un formulario

No debemos intentar recuperar directamente un dato sin comprobar antes si existe.

Podemos utilizar `isset()` para comprobar si se ha recibido un campo:

```php
<?php

if (isset($_POST["nombre"])) {

    $nombre = $_POST["nombre"];

    echo "Nombre recibido: " . htmlspecialchars($nombre);

} else {

    echo "No se ha enviado el nombre.";

}

?>
```

También podemos utilizar `$_SERVER["REQUEST_METHOD"]` para comprobar el método HTTP de la petición:

```php
<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    echo "El formulario se ha enviado mediante POST.";

} else {

    echo "No se ha enviado el formulario mediante POST.";

}

?>
```

Esta comprobación permite separar la presentación inicial del formulario del procesamiento de los datos recibidos.

## 5. Procesamiento de formularios y recuperación segura de los datos

Recibir información mediante PHP no significa que los datos sean correctos o seguros.

Un usuario puede introducir valores inesperados, dejar campos vacíos o enviar información manipulada. Por este motivo, debemos comprobar los datos antes de utilizarlos.

### Comprobar si un campo existe

La función `isset()` permite comprobar si una variable está definida y no contiene el valor `null`.

```php
<?php

if (isset($_POST["correo"])) {

    $correo = $_POST["correo"];

    echo htmlspecialchars($correo);

}

?>
```

### Comprobar si un campo está vacío

La función `empty()` permite comprobar si una variable está vacía.

```php
<?php

if (empty($_POST["nombre"])) {

    echo "El nombre es obligatorio.";

} else {

    echo "Nombre recibido correctamente.";

}

?>
```

Hay que tener en cuenta que `empty()` también considera vacíos valores como `"0"` y `0`. Por tanto, debemos elegir el mecanismo de comprobación adecuado para cada campo.

### Limpiar espacios innecesarios

La función `trim()` permite eliminar los espacios en blanco situados al principio y al final de una cadena.

```php
<?php

$nombre = trim($_POST["nombre"] ?? "");

?>
```

El operador `??` proporciona un valor alternativo cuando la variable o el índice no existe o contiene `null`.

### Validar direcciones de correo electrónico

PHP dispone de funciones que permiten comprobar si un dato tiene un formato válido.

Por ejemplo, `filter_var()` permite validar una dirección de correo:

```php
<?php

$correo = trim($_POST["correo"] ?? "");

if (filter_var($correo, FILTER_VALIDATE_EMAIL)) {

    echo "Correo electrónico válido.";

} else {

    echo "El correo electrónico no tiene un formato válido.";

}

?>
```

### Convertir datos a tipos adecuados

Los datos recibidos mediante un formulario llegan normalmente como cadenas de texto.

Si necesitamos realizar operaciones matemáticas, debemos comprobar y convertir los valores al tipo correspondiente.

```php
<?php

$edadTexto = $_POST["edad"] ?? "";

if (filter_var($edadTexto, FILTER_VALIDATE_INT) !== false) {

    $edad = (int) $edadTexto;

    echo "Edad recibida: " . $edad;

} else {

    echo "La edad debe ser un número entero.";

}

?>
```

### Validar no es lo mismo que mostrar de forma segura

Debemos diferenciar dos operaciones:

- **Validación:** comprueba si el dato cumple las condiciones que necesita nuestra aplicación.
- **Escape de salida:** transforma los caracteres especiales para evitar que se interpreten como código HTML.

Cuando mostramos datos introducidos por un usuario dentro de una página HTML, debemos utilizar `htmlspecialchars()`:

```php
<?php

$nombre = $_POST["nombre"] ?? "";

echo "Nombre: " . htmlspecialchars($nombre, ENT_QUOTES, "UTF-8");

?>
```

Esto ayuda a prevenir ataques XSS (Cross-Site Scripting), evitando que el navegador interprete como HTML o código ejecutable el contenido introducido por el usuario.

**Importante:** nunca debemos confiar únicamente en las validaciones del navegador. Toda comprobación importante debe repetirse en PHP, en el servidor.

## 6. Diferentes tipos de campos y procesamiento de formularios

Los formularios pueden incluir diferentes tipos de controles dependiendo de la información que necesitemos recoger.

A continuación, veremos cómo recuperar mediante PHP los principales tipos de campos.

### Campos de texto

```html
<input type="text" name="nombre">
```

PHP recupera el valor mediante:

```php
$nombre = trim($_POST["nombre"] ?? "");
```

### Áreas de texto

El elemento `<textarea>` permite introducir textos más extensos, por ejemplo, una descripción o un comentario.

```html
<textarea name="descripcion" rows="5" cols="40"></textarea>
```

PHP recupera la información:

```php
$descripcion = trim($_POST["descripcion"] ?? "");
```

Al mostrar el contenido debemos utilizar `htmlspecialchars()`.

### Listas desplegables

El elemento `<select>` permite seleccionar una opción entre varias.

```html
<select name="categoria">

    <option value="hardware">Hardware</option>
    <option value="software">Software</option>
    <option value="redes">Redes</option>

</select>
```

PHP recibe el valor seleccionado:

```php
$categoria = $_POST["categoria"] ?? "";
```

Debemos comprobar que el valor recibido pertenece a las opciones permitidas.

### Botones de selección: radio

Los botones `radio` permiten seleccionar una única opción dentro de un grupo.

```html
<label>
    <input type="radio" name="tipo" value="particular">
    Particular
</label>

<label>
    <input type="radio" name="tipo" value="empresa">
    Empresa
</label>
```

PHP recupera la opción seleccionada:

```php
$tipo = $_POST["tipo"] ?? "";
```

### Casillas de verificación: checkbox

Los elementos `checkbox` permiten seleccionar opciones independientes.

```html
<label>
    <input type="checkbox" name="servicios[]" value="instalacion">
    Instalación
</label>

<label>
    <input type="checkbox" name="servicios[]" value="mantenimiento">
    Mantenimiento
</label>

<label>
    <input type="checkbox" name="servicios[]" value="reparacion">
    Reparación
</label>
```

Al utilizar `servicios[]`, PHP recibirá un array con las opciones seleccionadas.

```php
$servicios = $_POST["servicios"] ?? [];

if (is_array($servicios)) {

    foreach ($servicios as $servicio) {

        echo htmlspecialchars($servicio) . "<br>";

    }

}
```

Si el usuario no selecciona ninguna opción, el campo puede no enviarse. Por eso utilizamos `?? []` para establecer un array vacío como valor predeterminado.

### Campos numéricos y fechas

```html
<label for="precio">Precio:</label>
<input type="number" id="precio" name="precio" min="0" step="0.01">

<label for="fecha">Fecha:</label>
<input type="date" id="fecha" name="fecha">
```

PHP recibe ambos valores como cadenas y debe comprobar que cumplen el formato y las condiciones necesarias antes de utilizarlos.

## 7. Validación de formularios en el servidor

La validación es una parte fundamental del procesamiento de formularios. Permite comprobar que los datos introducidos cumplen las condiciones necesarias para que la aplicación funcione correctamente.

Podemos distinguir dos niveles de validación:

- **Validación en el cliente:** se realiza en el navegador mediante atributos HTML como `required`, `min`, `max`, `maxlength` o `type="email"`.
- **Validación en el servidor:** se realiza mediante PHP después de recibir los datos.

La validación en el navegador mejora la experiencia del usuario, pero no garantiza la seguridad. Un usuario puede desactivar las comprobaciones del navegador o enviar una petición manipulada. Por ello, PHP debe validar siempre los datos.

### Atributos HTML para validar formularios

| Atributo | Función |
|:--|:--|
| `required` | Obliga a rellenar un campo |
| `min` | Establece el valor mínimo |
| `max` | Establece el valor máximo |
| `minlength` | Establece la longitud mínima |
| `maxlength` | Establece la longitud máxima |
| `pattern` | Define un patrón que debe cumplir el dato |
| `step` | Establece los incrementos permitidos |

Ejemplo:

```html
<form action="registrar.php" method="post">

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required minlength="3" maxlength="50">

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" min="18" max="100" required>

    <label for="correo">Correo:</label>
    <input type="email" id="correo" name="correo" required>

    <button type="submit">Registrar</button>

</form>
```

### Validación de varios campos con PHP

Podemos comprobar todos los campos recibidos y acumular los errores para mostrarlos al usuario.

```php
<?php

$errores = [];

$nombre = trim($_POST["nombre"] ?? "");
$correo = trim($_POST["correo"] ?? "");
$edadTexto = $_POST["edad"] ?? "";

// Validar nombre
if ($nombre === "") {

    $errores[] = "El nombre es obligatorio.";

} elseif (strlen($nombre) < 3) {

    $errores[] = "El nombre debe tener al menos 3 caracteres.";

}

// Validar correo
if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {

    $errores[] = "El correo electrónico no es válido.";

}

// Validar edad
$edad = filter_var($edadTexto, FILTER_VALIDATE_INT);

if ($edad === false || $edad < 18 || $edad > 100) {

    $errores[] = "La edad debe ser un número entero entre 18 y 100.";

}

// Mostrar resultados
if (count($errores) > 0) {

    foreach ($errores as $error) {

        echo "<p>" . htmlspecialchars($error) . "</p>";

    }

} else {

    echo "Los datos se han validado correctamente.";

}

?>
```

Este ejemplo permite comprobar varios campos y mostrar todos los errores detectados en lugar de detenerse en el primero.

### Validación de opciones permitidas

Cuando utilizamos listas desplegables, botones `radio` o casillas de verificación, no debemos asumir que el usuario ha enviado una de las opciones que aparecen en el formulario.

Por ejemplo:

```php
<?php

$categoria = $_POST["categoria"] ?? "";

$categoriasPermitidas = [
    "hardware",
    "software",
    "redes"
];

if (in_array($categoria, $categoriasPermitidas, true)) {

    echo "Categoría válida.";

} else {

    echo "Categoría no permitida.";

}

?>
```

De esta forma evitamos aceptar valores que no deberían estar disponibles en la aplicación.

## 8. Envío de archivos mediante formularios PHP

Los formularios también permiten enviar archivos desde el equipo del usuario al servidor.

Esta funcionalidad se utiliza habitualmente para:

- Subir fotografías de perfil.
- Adjuntar documentos.
- Incorporar imágenes a una aplicación web.
- Enviar archivos relacionados con una incidencia.
- Publicar documentos en un gestor de contenidos.

Para permitir la subida de archivos necesitamos dos elementos importantes:

1. El atributo `enctype="multipart/form-data"` en la etiqueta `<form>`.
2. Un campo `<input type="file">` para seleccionar el archivo.

### Crear un formulario para subir archivos

```html
<form action="subir.php" method="post" enctype="multipart/form-data">

    <label for="archivo">Selecciona una imagen:</label>

    <input type="file" id="archivo" name="archivo" accept="image/*" required>

    <button type="submit">Subir imagen</button>

</form>
```

### Recuperar archivos mediante PHP

PHP proporciona el array superglobal `$_FILES`, que contiene información sobre los archivos enviados.

Entre sus elementos encontramos:

| Elemento | Información |
|:--|:--|
| `name` | Nombre original del archivo |
| `type` | Tipo MIME declarado en la petición |
| `tmp_name` | Ubicación temporal del archivo en el servidor |
| `error` | Código de error de la subida |
| `size` | Tamaño del archivo en bytes |

### Ejemplo de subida de una imagen

```php
<?php

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["archivo"])) {

    $archivo = $_FILES["archivo"];

    if ($archivo["error"] !== UPLOAD_ERR_OK) {

        echo "Se ha producido un error al subir el archivo.";

    } else {

        $tamanioMaximo = 2 * 1024 * 1024;

        if ($archivo["size"] > $tamanioMaximo) {

            echo "El archivo supera el tamaño máximo de 2 MB.";

        } else {

            $tiposPermitidos = [
                "image/jpeg",
                "image/png",
                "image/webp"
            ];

            $finfo = new finfo(FILEINFO_MIME_TYPE);
            $tipoReal = $finfo->file($archivo["tmp_name"]);

            if (!in_array($tipoReal, $tiposPermitidos, true)) {

                echo "El tipo de archivo no está permitido.";

            } else {

                $extension = match ($tipoReal) {
                    "image/jpeg" => "jpg",
                    "image/png" => "png",
                    "image/webp" => "webp"
                };

                $nombreArchivo = bin2hex(random_bytes(16)) . "." . $extension;

                $directorio = __DIR__ . "/uploads/";

                if (!is_dir($directorio)) {
                    mkdir($directorio, 0755, true);
                }

                $destino = $directorio . $nombreArchivo;

                if (move_uploaded_file($archivo["tmp_name"], $destino)) {

                    echo "Imagen subida correctamente.";

                } else {

                    echo "No se ha podido guardar el archivo.";

                }

            }

        }

    }

}

?>
```

### Medidas de seguridad para la subida de archivos

La subida de archivos puede representar un riesgo importante para el servidor.

Debemos aplicar medidas como:

- Limitar el tamaño máximo permitido.
- Comprobar el tipo real del archivo mediante herramientas como `finfo`.
- No confiar únicamente en el nombre o la extensión del archivo.
- Generar nombres de archivo propios para evitar conflictos y nombres manipulados.
- Guardar los archivos en directorios controlados.
- Evitar que el directorio de subida permita ejecutar scripts.
- Establecer permisos adecuados.
- Comprobar los errores de subida antes de procesar el archivo.

**Importante:** el atributo HTML `accept` únicamente ayuda a filtrar los archivos que muestra el selector del navegador. No sustituye las comprobaciones de seguridad realizadas por PHP.

## 9. Seguridad, buenas prácticas y tratamiento de formularios

Los formularios son una de las principales vías de entrada de información en una aplicación web. Por este motivo, debemos aplicar medidas de seguridad desde el momento en que recibimos los datos hasta que los utilizamos o mostramos.

### 9.1. No confiar en los datos recibidos

Cualquier dato enviado por un formulario puede ser manipulado.

Aunque utilicemos `required`, `min`, `max` o `type="email"` en HTML, debemos repetir las comprobaciones en PHP.

Nunca debemos considerar que un dato es correcto únicamente porque el navegador haya permitido enviarlo.

### 9.2. Prevenir ataques XSS

Un atacante podría introducir código HTML o JavaScript en un campo de texto para intentar que se ejecute en el navegador de otros usuarios.

Para reducir este riesgo, debemos escapar los datos cuando los mostramos dentro de HTML.

```php
<?php

$comentario = $_POST["comentario"] ?? "";

echo htmlspecialchars($comentario, ENT_QUOTES, "UTF-8");

?>
```

### 9.3. Prevenir inyecciones SQL

Si posteriormente utilizamos los datos recibidos para consultar o modificar una base de datos, nunca debemos construir consultas SQL concatenando directamente los valores introducidos por el usuario.

Debemos utilizar consultas preparadas mediante mecanismos como PDO o MySQLi.

La validación de los datos no sustituye a las consultas preparadas: ambas medidas cumplen funciones diferentes y complementarias.

### 9.4. Proteger los formularios frente a ataques CSRF

Un ataque CSRF intenta conseguir que un usuario autenticado realice una acción no deseada en una aplicación web.

Una medida habitual consiste en utilizar un token de seguridad asociado a la sesión del usuario.

Ejemplo simplificado de generación del token:

```php
<?php

session_start();

if (empty($_SESSION["csrf_token"])) {

    $_SESSION["csrf_token"] = bin2hex(random_bytes(32));

}

?>
```

En el formulario incluimos el token mediante un campo oculto:

```php
<input
    type="hidden"
    name="csrf_token"
    value="<?= htmlspecialchars($_SESSION["csrf_token"], ENT_QUOTES, "UTF-8") ?>"
>
```

Al recibir el formulario, PHP debe comprobar que el token enviado coincide con el almacenado en la sesión:

```php
<?php

session_start();

$tokenRecibido = $_POST["csrf_token"] ?? "";

if (
    !is_string($tokenRecibido) ||
    !hash_equals($_SESSION["csrf_token"] ?? "", $tokenRecibido)
) {

    exit("Petición no válida.");

}

?>
```

El token debe generarse y validarse en el servidor. El campo oculto no es seguro por sí mismo: su protección depende de la comprobación realizada por PHP.

### 9.5. Utilizar HTTPS

Cuando los formularios envían información sensible, debemos utilizar HTTPS para proteger la comunicación entre el navegador y el servidor.

HTTPS cifra la comunicación y ayuda a evitar que terceros puedan leer o modificar los datos durante su transmisión.

No obstante, HTTPS no sustituye a la validación de datos ni a las medidas de seguridad de la aplicación.

### 9.6. Evitar mostrar errores internos

No debemos mostrar al usuario información técnica sensible, como rutas internas del servidor, consultas SQL, contraseñas o trazas de errores.

Los errores deben registrarse de forma controlada en los registros del servidor y mostrarse al usuario mediante mensajes comprensibles.

### 9.7. Buenas prácticas generales

1. Utilizar nombres descriptivos para los campos.
2. Asociar cada campo con su etiqueta `<label>`.
3. Indicar claramente qué información debe introducirse.
4. Utilizar GET para consultas y POST para enviar o modificar información.
5. Comprobar en PHP que los datos existen.
6. Validar los datos recibidos en el servidor.
7. Escapar los datos antes de mostrarlos en HTML.
8. Limitar y validar los archivos enviados.
9. Proteger las operaciones sensibles mediante controles de seguridad.
10. Separar el código que presenta los formularios del código que procesa los datos cuando la aplicación crezca.

## 10. Actividades propuestas: programación de formularios con PHP

### Objetivo

Desarrollar formularios HTML y procesar la información recibida mediante PHP, aplicando métodos de envío, validaciones, tratamiento de datos y medidas básicas de seguridad.

Todas las actividades se realizarán utilizando PHP para el procesamiento en el servidor. No será necesario utilizar ningún otro lenguaje de guiones.

### Actividad 1. Formulario de datos personales

**Contenidos:** creación de formularios y recepción mediante POST.

Crea un formulario que solicite:

- Nombre.
- Apellidos.
- Edad.
- Correo electrónico.
- Localidad.

El formulario enviará los datos a un archivo `procesar.php` mediante POST.

En el archivo PHP deberás recuperar los datos y mostrarlos en una página HTML.

**Requisitos:**

1. Utiliza etiquetas `<label>` para identificar los campos.
2. Utiliza el atributo `name` correctamente.
3. Comprueba mediante PHP que se han recibido los datos.
4. Muestra la información utilizando `htmlspecialchars()`.
5. Si algún campo está vacío, muestra un mensaje indicando que debe completarse.

### Actividad 2. Buscador de productos

**Contenidos:** método GET y array `$_GET`.

Crea un formulario que permita buscar productos informáticos mediante su nombre.

El formulario deberá enviar la información mediante GET a `buscar.php`.

Define en PHP un array con los siguientes productos:

- Teclado.
- Ratón.
- Monitor.
- Impresora.
- Disco duro.
- Memoria RAM.
- Tarjeta gráfica.

El programa deberá comprobar si el producto introducido existe en el array.

**Requisitos:**

1. Recupera el nombre mediante `$_GET`.
2. Comprueba que se ha introducido un valor.
3. Busca el producto utilizando `in_array()`.
4. Muestra un mensaje indicando si existe o no.
5. Muestra el término buscado de forma segura.

### Actividad 3. Formulario de registro de alumnos

**Contenidos:** campos de texto, listas desplegables, radio y checkbox.

Crea un formulario para registrar alumnos de un ciclo formativo.

Deberá incluir:

- Nombre y apellidos.
- Correo electrónico.
- Curso: 1º ASIR o 2º ASIR.
- Turno: mañana o tarde.
- Módulos en los que está matriculado, seleccionando entre varias opciones.
- Aceptación de las condiciones de uso.

Procesa los datos mediante PHP.

**Requisitos:**

1. Utiliza un `<select>` para seleccionar el curso.
2. Utiliza botones `radio` para seleccionar el turno.
3. Utiliza `checkbox` para seleccionar los módulos.
4. Comprueba que se ha aceptado la casilla de condiciones.
5. Muestra los datos recibidos en una página HTML.
6. Comprueba que los valores seleccionados pertenecen a las opciones permitidas.

### Actividad 4. Calculadora de precios

**Contenidos:** formularios numéricos, validación y procesamiento mediante PHP.

Crea un formulario que solicite:

- Nombre del producto.
- Precio sin IVA.
- Porcentaje de IVA.
- Porcentaje de descuento.

PHP deberá calcular:

- Importe del IVA.
- Importe del descuento.
- Precio final del producto.

**Requisitos:**

1. Comprueba que el precio es numérico y no negativo.
2. Comprueba que el IVA está entre 0 y 100.
3. Comprueba que el descuento está entre 0 y 100.
4. Realiza los cálculos mediante funciones PHP.
5. Muestra los resultados con dos decimales.

### Actividad 5. Formulario de contacto

**Contenidos:** textarea, validación de datos y mensajes de error.

Desarrolla un formulario de contacto para una empresa informática.

Deberá solicitar:

- Nombre.
- Correo electrónico.
- Asunto.
- Tipo de consulta.
- Descripción de la incidencia.

El archivo PHP deberá comprobar que todos los campos obligatorios están completos.

**Requisitos:**

1. Comprueba que el nombre tiene al menos tres caracteres.
2. Valida el formato del correo electrónico.
3. Comprueba que se ha seleccionado un tipo de consulta permitido.
4. Comprueba que la descripción no está vacía.
5. Acumula los errores encontrados en un array.
6. Muestra todos los errores detectados.
7. Si no existen errores, muestra un resumen de la consulta recibida.

### Actividad 6. Encuesta sobre servicios informáticos

**Contenidos:** checkbox, radio, select y arrays.

Crea una encuesta para conocer la opinión de los usuarios sobre los servicios informáticos de una empresa.

El formulario deberá incluir:

- Valoración general: de 1 a 5.
- Servicio utilizado: instalación, mantenimiento, reparación o asesoramiento.
- Servicios adicionales que podrían interesar al usuario.
- Comentarios y sugerencias.

PHP deberá recuperar las respuestas y mostrarlas de forma organizada.

**Requisitos:**

1. Utiliza botones `radio` para la valoración.
2. Utiliza una lista desplegable para el servicio utilizado.
3. Utiliza `checkbox` para los servicios adicionales.
4. Utiliza `textarea` para los comentarios.
5. Comprueba que los valores recibidos son válidos.
6. Muestra todas las respuestas en una tabla HTML.

### Actividad 7. Formulario de alta de productos

**Contenidos:** formularios POST, validación de datos y generación dinámica de HTML.

Crea un formulario para introducir productos en el inventario de una tienda informática.

Cada producto deberá incluir:

- Nombre.
- Categoría.
- Precio.
- Unidades disponibles.
- Descripción.

PHP deberá comprobar los datos y mostrar una ficha del producto introducido.

**Requisitos:**

1. El nombre será obligatorio y tendrá entre 3 y 50 caracteres.
2. La categoría deberá seleccionarse entre las opciones permitidas.
3. El precio deberá ser un número positivo.
4. Las unidades deberán ser un número entero igual o superior a cero.
5. La descripción tendrá una longitud máxima establecida.
6. Los datos se mostrarán mediante una ficha HTML.
7. Toda la información recibida deberá tratarse de forma segura.

### Actividad 8. Subida de imágenes de productos

**Contenidos:** formularios multipart y array `$_FILES`.

Crea un formulario que permita subir una imagen para un producto informático.

El formulario deberá solicitar:

- Nombre del producto.
- Descripción.
- Imagen del producto.

PHP deberá comprobar el archivo recibido y almacenarlo en un directorio denominado `uploads`.

**Requisitos:**

1. Utiliza `enctype="multipart/form-data"`.
2. Recupera el archivo mediante `$_FILES`.
3. Comprueba que no se ha producido ningún error durante la subida.
4. Limita el tamaño máximo a 2 MB.
5. Permite únicamente imágenes JPEG, PNG y WebP.
6. Comprueba el tipo MIME real del archivo.
7. Genera un nombre de archivo seguro.
8. Utiliza `move_uploaded_file()` para guardar la imagen.
9. Muestra la imagen subida en una ficha del producto.
10. Explica las medidas de seguridad aplicadas.

### Actividad 9. Formulario de acceso y validación de credenciales

**Contenidos:** formularios POST y validación de información.

Crea un formulario de acceso para una aplicación de gestión informática.

Deberá solicitar:

- Nombre de usuario.
- Contraseña.

Para realizar la práctica, define dos usuarios de prueba almacenados en el servidor. Las contraseñas no deberán guardarse en texto plano, sino mediante hashes generados con `password_hash()`.

Cuando se envíe el formulario:

1. Comprueba que se han introducido ambos campos.
2. Busca el usuario correspondiente.
3. Comprueba la contraseña mediante `password_verify()`.
4. Muestra un mensaje de acceso correcto o de credenciales incorrectas.
5. No muestres nunca la contraseña recibida.
6. Evita revelar si el error se debe al nombre de usuario o a la contraseña.

**Importante:** esta actividad sirve para practicar la validación de credenciales. Una aplicación de autenticación real deberá incorporar también sesiones, protección frente a ataques CSRF, limitación de intentos y otras medidas de seguridad.

### Actividad 10. Proyecto integrador: panel de administración de una tienda informática

**Contenidos:** creación de formularios, métodos GET y POST, validación, procesamiento de datos y seguridad.

Desarrolla una pequeña aplicación web que permita introducir y consultar productos de una tienda informática.

La aplicación deberá continuar el trabajo realizado en las actividades anteriores y organizarse en diferentes archivos PHP.

#### Estructura del proyecto

```text
UP5_6_Tienda/
│
├── index.php
├── alta_producto.php
├── procesar_producto.php
├── buscar_producto.php
├── subir_imagen.php
├── procesar_imagen.php
│
└── uploads/
```

#### 1. Página principal

Crea `index.php` con un menú que permita acceder a las diferentes funcionalidades:

- Dar de alta un producto.
- Buscar productos.
- Subir imágenes.
- Consultar las instrucciones de uso.

#### 2. Formulario de alta de productos

En `alta_producto.php`, crea un formulario con los siguientes campos:

- Identificador.
- Nombre.
- Categoría.
- Precio.
- Unidades disponibles.
- Descripción.

Envía los datos mediante POST a `procesar_producto.php`.

#### 3. Procesamiento de productos

En `procesar_producto.php`:

- Comprueba que la petición se ha realizado mediante POST.
- Recupera los datos enviados.
- Valida todos los campos.
- Comprueba que el identificador no esté vacío.
- Comprueba que el precio sea positivo.
- Comprueba que las unidades sean un número entero igual o superior a cero.
- Comprueba que la categoría pertenece a las opciones permitidas.
- Muestra los errores encontrados o una ficha del producto si los datos son correctos.

#### 4. Buscador de productos

En `buscar_producto.php`, crea un formulario que permita buscar productos por:

- Identificador.
- Nombre.
- Categoría.

Utiliza GET para realizar las consultas y muestra los criterios de búsqueda en la URL.

Comprueba los valores recibidos y muestra un mensaje cuando no se encuentre ningún producto.

#### 5. Subida de imágenes

Permite asociar una imagen a cada producto.

Aplica las comprobaciones de seguridad de la actividad 8 y almacena las imágenes en el directorio `uploads`.

#### 6. Seguridad y validación

La aplicación deberá:

- Validar todos los datos en PHP.
- Escapar los datos mostrados en HTML.
- Comprobar que las opciones recibidas son válidas.
- Limitar el tamaño y tipo de las imágenes.
- Evitar utilizar directamente datos del usuario en rutas o nombres de archivos.
- Mostrar mensajes de error comprensibles sin revelar información interna del servidor.

#### 7. Pruebas de funcionamiento

Realiza, al menos, las siguientes pruebas:

- Dar de alta un producto con datos correctos.
- Intentar dar de alta un producto con campos vacíos.
- Introducir un precio negativo.
- Introducir unidades no numéricas.
- Seleccionar una categoría no permitida mediante una petición manipulada.
- Buscar un producto existente.
- Buscar un producto inexistente.
- Subir una imagen válida.
- Intentar subir un archivo que no sea una imagen.
- Intentar subir un archivo que supere el tamaño máximo.

Documenta los resultados y explica cómo has solucionado los errores detectados.

### Entrega de las actividades

Entrega un documento PDF que incluya:

- Portada con los datos del alumno.
- Código HTML de los formularios.
- Código PHP utilizado para procesar los datos.
- Capturas de pantalla de los formularios.
- Capturas de los resultados obtenidos.
- Explicación de los métodos GET y POST utilizados.
- Descripción de las validaciones realizadas.
- Identificación de las medidas de seguridad aplicadas.
- Errores encontrados y explicación de su resolución.
- Conclusiones personales.

Las capturas deberán estar centradas, ser legibles y acompañarse de una descripción técnica. En el proyecto integrador deberán mostrarse todas las funcionalidades y las pruebas de validación realizadas.

**Criterio de evaluación:** f) Se han utilizado formularios para introducir información.

**Resultado esperado:** el alumno debe ser capaz de crear formularios HTML, enviar información al servidor mediante GET y POST, recuperar y procesar los datos mediante PHP, validar las entradas y aplicar medidas básicas de seguridad para desarrollar aplicaciones web interactivas.

-->