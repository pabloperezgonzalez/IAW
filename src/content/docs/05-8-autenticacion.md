---
title: 🚀 UP5.8. Autenticación y control de acceso de usuarios - CE5.h)
---

### RA5. Genera documentos Web utilizando lenguajes de guiones de servidor.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| h) Se ha identificado y asegurado a los usuarios que acceden al documento Web. | Práctico | 15 % |

### 1. Introducción
<!-- 

# UP5.8. Autenticación y control de acceso de usuarios en aplicaciones Web con PHP

## 1. Introducción a la identificación y autenticación de usuarios

En una aplicación web no todos los usuarios deben tener acceso a la misma información ni disponer de los mismos permisos. Por ejemplo, en una tienda informática podemos distinguir entre:

- **Visitantes:** pueden consultar el catálogo de productos.
- **Clientes:** pueden consultar sus datos personales, realizar pedidos y revisar su historial de compras.
- **Administradores:** pueden gestionar productos, usuarios y pedidos.

Para controlar quién puede acceder a cada documento web necesitamos implementar mecanismos que permitan identificar a los usuarios y comprobar sus permisos.

En este contexto debemos diferenciar varios conceptos fundamentales:

| Concepto | Descripción | Ejemplo |
|:--|:--|:--|
| Identificación | El usuario indica quién es | Introduce su nombre de usuario |
| Autenticación | El sistema comprueba que realmente es quien dice ser | Verifica su contraseña |
| Autorización | El sistema comprueba qué operaciones puede realizar | Permite acceder al panel de administración |
| Control de acceso | Conjunto de mecanismos que limitan el acceso a recursos | Impide que un cliente gestione otros usuarios |

### Funcionamiento general

El proceso habitual de autenticación de una aplicación web es el siguiente:

1. El usuario accede al formulario de inicio de sesión.
2. Introduce su nombre de usuario y contraseña.
3. El navegador envía los datos al servidor mediante POST.
4. PHP recibe y valida los datos.
5. La aplicación busca al usuario en la base de datos.
6. PHP comprueba la contraseña introducida.
7. Si las credenciales son correctas, se inicia una sesión.
8. Se almacena en la sesión la información necesaria para identificar al usuario.
9. En las siguientes peticiones, PHP comprueba si existe una sesión válida.
10. La aplicación permite o deniega el acceso según los permisos del usuario.

El objetivo es que cada usuario pueda acceder únicamente a los documentos y funcionalidades que le corresponden.

## 2. Almacenamiento seguro de usuarios y contraseñas

Para autenticar usuarios necesitamos disponer de un sistema que almacene sus datos de identificación.

En una aplicación real, esta información suele guardarse en una base de datos.

Podemos utilizar una tabla denominada `usuarios` con la siguiente estructura:

| Campo | Tipo orientativo | Descripción |
|:--|:--|:--|
| id | INT | Identificador único del usuario |
| nombre | VARCHAR(100) | Nombre y apellidos |
| usuario | VARCHAR(50) | Nombre de usuario |
| correo | VARCHAR(150) | Correo electrónico |
| password | VARCHAR(255) | Hash de la contraseña |
| rol | VARCHAR(20) | Tipo de usuario |
| activo | TINYINT(1) | Indica si la cuenta está habilitada |
| fecha_alta | DATETIME | Fecha de creación de la cuenta |

El campo `password` no debe almacenar la contraseña original, sino una representación criptográfica denominada *hash*.

### ¿Qué es un hash de contraseña?

Un hash es el resultado de aplicar una función criptográfica a una información de entrada. En el almacenamiento de contraseñas se utilizan algoritmos específicos que incorporan mecanismos de protección frente a ataques de fuerza bruta.

No debemos confundir el hash con el cifrado:

- **Cifrado:** permite recuperar el contenido original mediante una clave.
- **Hash:** es una transformación unidireccional; no está diseñado para recuperar la contraseña original.

PHP dispone de funciones específicas para gestionar contraseñas de forma segura.

### Generar un hash con `password_hash()`

Cuando un usuario se registra, debemos generar un hash antes de guardar su contraseña.

```php
<?php

$contraseña = "MiPasswordSegura123";

$hash = password_hash(
    $contraseña,
    PASSWORD_DEFAULT
);

echo $hash;

?>
```

La función `password_hash()` genera un hash utilizando el algoritmo recomendado por la versión de PHP y la configuración correspondiente.

No debemos generar nuestros propios sistemas de almacenamiento de contraseñas utilizando funciones como `md5()` o `sha1()`, ya que no son adecuadas para este propósito.

### Comprobar una contraseña con `password_verify()`

Cuando un usuario intenta iniciar sesión, recuperamos el hash almacenado y comprobamos si la contraseña introducida coincide.

```php
<?php

$contraseñaIntroducida = "MiPasswordSegura123";

$hashAlmacenado = '$2y$...';

if (password_verify($contraseñaIntroducida, $hashAlmacenado)) {

    echo "Contraseña correcta.";

} else {

    echo "Contraseña incorrecta.";

}

?>
```

El hash del ejemplo es ilustrativo. En una aplicación real debemos recuperar el hash completo desde la base de datos.

**Importante:** nunca debemos guardar contraseñas en texto plano ni mostrar las contraseñas almacenadas en los registros de usuarios.

## 3. Registro de usuarios mediante PHP

El registro permite que una persona cree una cuenta para acceder posteriormente a una aplicación web.

Normalmente incluye un formulario que solicita los datos necesarios y un documento PHP que valida y almacena la información.

### Crear la tabla de usuarios

Podemos utilizar la siguiente sentencia SQL para crear la tabla:

```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    correo VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(20) NOT NULL DEFAULT 'cliente',
    activo TINYINT(1) NOT NULL DEFAULT 1,
    fecha_alta DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

Los campos `usuario` y `correo` son únicos para evitar que se registren dos cuentas con los mismos valores.

El rol predeterminado será `cliente`. Un usuario no debe poder convertirse en administrador simplemente modificando un campo del formulario.

### Formulario de registro

Archivo `registro.php`:

```php
<h1>Registro de usuarios</h1>

<form action="procesar_registro.php" method="post">

    <label for="nombre">Nombre y apellidos:</label>
    <input type="text" id="nombre" name="nombre" required maxlength="100">

    <br><br>

    <label for="usuario">Nombre de usuario:</label>
    <input type="text" id="usuario" name="usuario" required minlength="4" maxlength="50">

    <br><br>

    <label for="correo">Correo electrónico:</label>
    <input type="email" id="correo" name="correo" required maxlength="150">

    <br><br>

    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required minlength="12">

    <br><br>

    <label for="confirmar">Repetir contraseña:</label>
    <input type="password" id="confirmar" name="confirmar" required>

    <br><br>

    <button type="submit">Crear cuenta</button>

</form>
```

### Procesamiento del registro

Archivo `procesar_registro.php`:

```php
<?php

require_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit("Método no permitido.");
}

$nombre = trim($_POST["nombre"] ?? "");
$usuario = trim($_POST["usuario"] ?? "");
$correo = trim($_POST["correo"] ?? "");
$password = $_POST["password"] ?? "";
$confirmar = $_POST["confirmar"] ?? "";

$errores = [];

if ($nombre === "") {
    $errores[] = "El nombre es obligatorio.";
}

if (!preg_match('/^[a-zA-Z0-9_]{4,50}$/', $usuario)) {
    $errores[] = "El usuario debe tener entre 4 y 50 caracteres alfanuméricos o guiones bajos.";
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    $errores[] = "El correo electrónico no es válido.";
}

if (strlen($password) < 12) {
    $errores[] = "La contraseña debe tener al menos 12 caracteres.";
}

if ($password !== $confirmar) {
    $errores[] = "Las contraseñas no coinciden.";
}

if (!empty($errores)) {

    foreach ($errores as $error) {
        echo "<p>" . htmlspecialchars($error, ENT_QUOTES, "UTF-8") . "</p>";
    }

    exit;
}

$hash = password_hash($password, PASSWORD_DEFAULT);

try {

    $consulta = $conexion->prepare(
        "INSERT INTO usuarios (nombre, usuario, correo, password)
         VALUES (:nombre, :usuario, :correo, :password)"
    );

    $consulta->execute([
        ":nombre" => $nombre,
        ":usuario" => $usuario,
        ":correo" => $correo,
        ":password" => $hash
    ]);

    echo "Usuario registrado correctamente.";

} catch (PDOException $e) {

    echo "No se ha podido completar el registro. Comprueba si el usuario o el correo ya existen.";

}

?>
```

En este ejemplo se presupone que `conexion.php` contiene una conexión PDO válida en la variable `$conexion`.

La aplicación:

1. Comprueba que la petición se ha realizado mediante POST.
2. Recupera los datos.
3. Valida el nombre de usuario y el correo.
4. Comprueba que las contraseñas coinciden.
5. Genera un hash seguro.
6. Inserta el usuario mediante una consulta preparada.
7. Controla los posibles errores de duplicidad.

En una aplicación real también debemos limitar los intentos de registro, aplicar protección CSRF y evitar mostrar información interna de las excepciones.

## 4. Inicio de sesión y autenticación con PHP

El inicio de sesión permite comprobar la identidad de un usuario utilizando sus credenciales.

Para ello necesitamos un formulario y un documento PHP que consulte la base de datos y verifique la contraseña.

### Formulario de acceso

Archivo `login.php`:

```php
<h1>Iniciar sesión</h1>

<form action="procesar_login.php" method="post">

    <label for="usuario">Usuario o correo electrónico:</label>
    <input type="text" id="usuario" name="usuario" required>

    <br><br>

    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required>

    <br><br>

    <button type="submit">Acceder</button>

</form>

<p><a href="registro.php">Crear una cuenta</a></p>
```

### Procesamiento de las credenciales

Archivo `procesar_login.php`:

```php
<?php

require_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit("Método no permitido.");
}

$usuario = trim($_POST["usuario"] ?? "");
$password = $_POST["password"] ?? "";

if ($usuario === "" || $password === "") {
    exit("Debes introducir el usuario y la contraseña.");
}

$consulta = $conexion->prepare(
    "SELECT id, nombre, usuario, password, rol, activo
     FROM usuarios
     WHERE usuario = :usuario OR correo = :correo
     LIMIT 1"
);

$consulta->execute([
    ":usuario" => $usuario,
    ":correo" => $usuario
]);

$datosUsuario = $consulta->fetch(PDO::FETCH_ASSOC);

if (
    !$datosUsuario ||
    !$datosUsuario["activo"] ||
    !password_verify($password, $datosUsuario["password"])
) {

    exit("Usuario o contraseña incorrectos.");

}

session_start();

session_regenerate_id(true);

$_SESSION["usuario_id"] = $datosUsuario["id"];
$_SESSION["nombre"] = $datosUsuario["nombre"];
$_SESSION["usuario"] = $datosUsuario["usuario"];
$_SESSION["rol"] = $datosUsuario["rol"];

header("Location: panel.php");

exit;

?>
```

En este ejemplo se realizan varias operaciones importantes:

- Se recuperan las credenciales mediante POST.
- Se busca el usuario mediante una consulta preparada.
- Se comprueba que la cuenta está activa.
- Se verifica la contraseña con `password_verify()`.
- Se inicia una sesión.
- Se regenera el identificador de sesión.
- Se almacenan los datos necesarios para identificar al usuario.
- Se redirige al panel correspondiente.

No debemos almacenar la contraseña original en `$_SESSION`.

### ¿Por qué regenerar el identificador de sesión?

Cuando un usuario inicia sesión correctamente, debemos utilizar `session_regenerate_id(true)` para generar un nuevo identificador de sesión.

Esta operación ayuda a prevenir ataques de fijación de sesión (*Session Fixation*), en los que un atacante intenta conseguir que la víctima utilice un identificador de sesión conocido previamente por él.

## 5. Sesiones y mantenimiento de la identidad del usuario

Una vez autenticado, el usuario necesita mantener su identidad mientras navega por diferentes documentos web.

Para conseguirlo utilizamos las sesiones de PHP.

### Comprobar si existe una sesión autenticada

Podemos crear un archivo común denominado `seguridad.php`:

```php
<?php

session_start();

function usuarioAutenticado(): bool
{
    return isset($_SESSION["usuario_id"]);
}

if (!usuarioAutenticado()) {

    header("Location: login.php");

    exit;

}

?>
```

En cualquier documento que requiera autenticación podemos incluirlo:

```php
<?php

require_once "seguridad.php";

?>

<h1>Zona privada</h1>

<p>
    Bienvenido,
    <?= htmlspecialchars($_SESSION["nombre"], ENT_QUOTES, "UTF-8") ?>
</p>
```

De esta forma no necesitamos repetir la misma comprobación en todos los documentos.

### Información que podemos almacenar en la sesión

Es recomendable almacenar únicamente la información necesaria para identificar al usuario y gestionar sus permisos.

Por ejemplo:

```php
<?php

$_SESSION["usuario_id"] = 15;
$_SESSION["nombre"] = "Carlos Pérez";
$_SESSION["rol"] = "cliente";

?>
```

No debemos almacenar:

- Contraseñas en texto plano.
- Datos bancarios innecesarios.
- Información confidencial que no sea necesaria.
- Permisos que el usuario pueda modificar desde el navegador.

### Cerrar sesión

Archivo `logout.php`:

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

header("Location: login.php");

exit;

?>
```

El cierre de sesión elimina los datos asociados a la sesión y la cookie que contiene su identificador.

En una aplicación real, la operación de cierre debe realizarse mediante una petición POST protegida contra CSRF, no mediante un simple enlace GET.

## 6. Autorización y control de acceso según los roles

Autenticar a un usuario no significa que pueda acceder a todas las funcionalidades de una aplicación.

Una vez comprobada su identidad, debemos determinar qué operaciones tiene permitidas.

Este proceso se denomina autorización.

### ¿Qué es un rol?

Un rol es una categoría que agrupa determinados permisos.

Por ejemplo, en una tienda informática podemos definir los siguientes roles:

| Rol | Permisos |
|:--|:--|
| Visitante | Consultar el catálogo público |
| Cliente | Consultar productos, gestionar su carrito y revisar sus pedidos |
| Administrador | Gestionar productos, usuarios y pedidos |

Cada usuario tendrá asignado un rol almacenado en la base de datos.

### Comprobar el rol de un usuario

Podemos ampliar el archivo `seguridad.php` para definir funciones que comprueben los permisos:

```php
<?php

session_start();

function usuarioAutenticado(): bool
{
    return isset($_SESSION["usuario_id"]);
}

function tieneRol(string $rol): bool
{
    return usuarioAutenticado()
        && isset($_SESSION["rol"])
        && $_SESSION["rol"] === $rol;
}

function requiereAutenticacion(): void
{
    if (!usuarioAutenticado()) {

        header("Location: login.php");

        exit;

    }
}

function requiereRol(string $rol): void
{
    requiereAutenticacion();

    if (!tieneRol($rol)) {

        http_response_code(403);

        exit("No tienes permisos para acceder a este recurso.");

    }
}
```

### Proteger una página para administradores

Archivo `administracion.php`:

```php
<?php

require_once "seguridad.php";

requiereRol("administrador");

?>

<h1>Panel de administración</h1>

<p>Bienvenido al panel de gestión.</p>

<a href="logout.php">Cerrar sesión</a>
```

Si el usuario no ha iniciado sesión, será redirigido al formulario de acceso.

Si ha iniciado sesión, pero no tiene el rol de administrador, recibirá una respuesta HTTP 403 (acceso prohibido).

### Proteger una página para clientes

Archivo `mis_pedidos.php`:

```php
<?php

require_once "seguridad.php";

requiereRol("cliente");

?>

<h1>Mis pedidos</h1>

<p>
    Bienvenido,
    <?= htmlspecialchars($_SESSION["nombre"], ENT_QUOTES, "UTF-8") ?>
</p>
```

### Comprobar permisos en cada operación

No es suficiente con ocultar enlaces o botones en el menú.

Por ejemplo, aunque un cliente no vea el enlace de administración, podría intentar acceder directamente a `administracion.php`.

Por eso debemos comprobar los permisos en el servidor en cada documento y operación que necesite protección.

Además, cuando un usuario accede a un recurso concreto, debemos comprobar que tiene permiso sobre ese recurso. Un cliente no debe poder consultar los pedidos de otro cliente modificando un identificador en la URL.

## 7. Protección de las aplicaciones web frente a ataques relacionados con la autenticación

Los sistemas de autenticación pueden sufrir diferentes ataques. Por ello, debemos conocer sus riesgos y aplicar medidas de protección.

### 7.1. Ataques de fuerza bruta

Consisten en probar numerosas combinaciones de contraseñas hasta conseguir acceder a una cuenta.

Medidas de protección:

- Limitar el número de intentos de acceso.
- Aplicar esperas progresivas después de varios intentos fallidos.
- Registrar los intentos sospechosos.
- Utilizar contraseñas robustas.
- Incorporar mecanismos adicionales de autenticación cuando sea necesario.

No debemos bloquear permanentemente una cuenta únicamente por recibir intentos fallidos, ya que un atacante podría utilizarlo para provocar una denegación de servicio contra un usuario legítimo.

### 7.2. Ataques de diccionario

Consisten en utilizar listas de contraseñas habituales para intentar acceder a una cuenta.

Medidas de protección:

- Exigir contraseñas suficientemente largas.
- Evitar contraseñas comunes o fáciles de adivinar.
- Utilizar almacenamiento mediante `password_hash()`.
- Aplicar limitación de intentos.

### 7.3. Robo de sesiones

Un atacante puede intentar obtener el identificador de sesión de un usuario para suplantarlo.

Medidas de protección:

- Utilizar HTTPS.
- Configurar las cookies de sesión con `Secure` y `HttpOnly`.
- Establecer `SameSite` adecuadamente.
- Regenerar el identificador después de autenticar al usuario.
- Evitar exponer identificadores de sesión.
- Cerrar las sesiones cuando corresponda.

### 7.4. Fijación de sesión

El atacante intenta que la víctima utilice un identificador de sesión que él conoce.

La principal medida de protección es regenerar el identificador después de autenticar correctamente al usuario:

```php
session_regenerate_id(true);
```

### 7.5. Inyección SQL

Se produce cuando una aplicación incorpora datos introducidos por el usuario directamente en una consulta SQL.

Nunca debemos construir consultas concatenando los datos recibidos:

```php
// Forma incorrecta: no utilizar este procedimiento.
$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
```

Debemos utilizar consultas preparadas:

```php
<?php

$consulta = $conexion->prepare(
    "SELECT id, usuario FROM usuarios WHERE usuario = :usuario"
);

$consulta->execute([
    ":usuario" => $usuario
]);

?>
```

### 7.6. Cross-Site Scripting (XSS)

Consiste en introducir contenido que el navegador puede interpretar como código ejecutable.

Cuando mostremos datos introducidos por los usuarios, debemos utilizar:

```php
htmlspecialchars($dato, ENT_QUOTES, "UTF-8");
```

### 7.7. Cross-Site Request Forgery (CSRF)

Un ataque CSRF intenta provocar que un usuario autenticado realice una operación no deseada.

Una medida habitual consiste en utilizar un token aleatorio almacenado en la sesión y enviado mediante un campo oculto.

Generación del token:

```php
<?php

session_start();

if (empty($_SESSION["csrf_token"])) {

    $_SESSION["csrf_token"] = bin2hex(random_bytes(32));

}

?>
```

Campo oculto del formulario:

```php
<input
    type="hidden"
    name="csrf_token"
    value="<?= htmlspecialchars($_SESSION["csrf_token"], ENT_QUOTES, "UTF-8") ?>"
>
```

Comprobación del token:

```php
<?php

session_start();

$token = $_POST["csrf_token"] ?? "";

if (
    !is_string($token) ||
    !hash_equals($_SESSION["csrf_token"] ?? "", $token)
) {

    http_response_code(403);

    exit("Petición no válida.");

}

?>
```

El token debe validarse en el servidor antes de ejecutar la operación solicitada.

### 7.8. Comunicaciones mediante HTTPS

Las credenciales y los identificadores de sesión deben transmitirse mediante conexiones HTTPS.

HTTPS utiliza TLS para proteger la comunicación entre el navegador y el servidor, reduciendo el riesgo de que terceros puedan interceptar o modificar los datos transmitidos.

**Importante:** HTTPS protege la comunicación, pero no sustituye a la autenticación, la autorización ni las demás medidas de seguridad.

## 8. Gestión de usuarios, permisos y buenas prácticas de seguridad

Una aplicación web debe permitir administrar las cuentas y garantizar que cada usuario tenga los permisos adecuados.

En una tienda informática, por ejemplo, el administrador puede gestionar las cuentas de los clientes y activar o desactivar usuarios.

### 8.1. Gestión de usuarios

Las operaciones habituales de administración son:

- Crear usuarios.
- Consultar usuarios.
- Modificar los datos de una cuenta.
- Cambiar el rol de un usuario.
- Activar o desactivar cuentas.
- Eliminar usuarios cuando corresponda.

Estas operaciones deben estar disponibles únicamente para usuarios autorizados.

### 8.2. No confiar en los datos enviados por el navegador

Nunca debemos permitir que el usuario seleccione libremente su propio rol en el formulario de registro.

Por ejemplo, este campo sería inseguro:

```html
<select name="rol">
    <option value="cliente">Cliente</option>
    <option value="administrador">Administrador</option>
</select>
```

Un usuario podría modificar la petición y enviar `administrador`.

El rol debe asignarse desde el servidor, utilizando un valor predeterminado o una operación administrativa protegida.

### 8.3. Principio de mínimo privilegio

Cada usuario debe disponer únicamente de los permisos necesarios para realizar sus tareas.

Por ejemplo:

- Un visitante no necesita acceder al panel de administración.
- Un cliente no necesita modificar los productos.
- Un administrador necesita permisos de gestión, pero no debe utilizarse una cuenta administrativa para las tareas habituales de navegación.

Este principio reduce las consecuencias de un acceso no autorizado.

### 8.4. Desactivar cuentas

Cuando un usuario deja de tener autorización para acceder a la aplicación, podemos desactivar su cuenta mediante el campo `activo`.

La consulta de autenticación debe comprobar este campo:

```php
if (!$datosUsuario || !$datosUsuario["activo"]) {

    exit("Usuario o contraseña incorrectos.");

}
```

También debemos comprobar que la cuenta continúa activa cuando se realizan operaciones sensibles, especialmente si una sesión puede mantenerse abierta durante mucho tiempo.

### 8.5. Renovación de hashes

Los algoritmos de almacenamiento de contraseñas pueden cambiar o mejorar con el tiempo.

PHP permite comprobar si un hash necesita actualizarse mediante `password_needs_rehash()`.

```php
<?php

if (password_needs_rehash($datosUsuario["password"], PASSWORD_DEFAULT)) {

    $nuevoHash = password_hash($password, PASSWORD_DEFAULT);

    $actualizar = $conexion->prepare(
        "UPDATE usuarios SET password = :password WHERE id = :id"
    );

    $actualizar->execute([
        ":password" => $nuevoHash,
        ":id" => $datosUsuario["id"]
    ]);

}

?>
```

Este código debe ejecutarse después de haber verificado correctamente la contraseña.

### 8.6. Buenas prácticas generales

1. Utilizar contraseñas almacenadas mediante `password_hash()`.
2. Verificar las contraseñas mediante `password_verify()`.
3. Utilizar consultas preparadas para acceder a la base de datos.
4. Utilizar HTTPS.
5. Regenerar el identificador de sesión después de autenticar al usuario.
6. Proteger las páginas privadas mediante comprobaciones en PHP.
7. Comprobar los permisos en cada operación sensible.
8. No confiar en los roles enviados por el navegador.
9. Limitar los intentos de autenticación.
10. Registrar los eventos de seguridad sin almacenar contraseñas ni identificadores de sesión.

## 9. Organización de una aplicación con autenticación y control de acceso

Para facilitar el mantenimiento de una aplicación web, es recomendable separar los documentos según sus responsabilidades.

Vamos a utilizar como ejemplo una tienda informática con tres tipos de usuarios: visitantes, clientes y administradores.

### Estructura del proyecto

```text
tienda/
│
├── index.php
├── registro.php
├── procesar_registro.php
├── login.php
├── procesar_login.php
├── logout.php
│
├── productos.php
├── mis_pedidos.php
├── administracion.php
├── gestionar_usuarios.php
│
└── includes/
    ├── conexion.php
    ├── seguridad.php
    ├── funciones.php
    └── cabecera.php
```

### 9.1. Archivo de conexión: `conexion.php`

Este documento contiene la conexión PDO con la base de datos.

```php
<?php

$servidor = "localhost";
$baseDatos = "tienda";
$usuario = "usuario";
$password = "contraseña";

try {

    $conexion = new PDO(
        "mysql:host=$servidor;dbname=$baseDatos;charset=utf8mb4",
        $usuario,
        $password
    );

    $conexion->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );

} catch (PDOException $e) {

    error_log($e->getMessage());

    exit("No se ha podido conectar con la aplicación.");

}

?>
```

En producción, las credenciales de conexión deben mantenerse fuera del directorio público y gestionarse mediante una configuración protegida.

### 9.2. Archivo de seguridad: `seguridad.php`

Centraliza las comprobaciones de autenticación y autorización.

```php
<?php

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

function requiereAutenticacion(): void
{
    if (!isset($_SESSION["usuario_id"])) {

        header("Location: login.php");

        exit;

    }
}

function requiereRol(string $rol): void
{
    requiereAutenticacion();

    if (($_SESSION["rol"] ?? "") !== $rol) {

        http_response_code(403);

        exit("Acceso prohibido.");

    }
}

?>
```

### 9.3. Panel del cliente

Archivo `mis_pedidos.php`:

```php
<?php

require_once "includes/seguridad.php";

requiereRol("cliente");

?>

<h1>Área de cliente</h1>

<p>
    Bienvenido,
    <?= htmlspecialchars($_SESSION["nombre"], ENT_QUOTES, "UTF-8") ?>
</p>

<a href="productos.php">Consultar productos</a>

<br>

<a href="logout.php">Cerrar sesión</a>
```

### 9.4. Panel del administrador

Archivo `administracion.php`:

```php
<?php

require_once "includes/seguridad.php";

requiereRol("administrador");

?>

<h1>Panel de administración</h1>

<p>Gestión de la tienda informática.</p>

<ul>
    <li><a href="gestionar_usuarios.php">Gestionar usuarios</a></li>
    <li><a href="productos.php">Consultar productos</a></li>
</ul>

<a href="logout.php">Cerrar sesión</a>
```

### 9.5. Comprobación de acceso a recursos concretos

Además de comprobar el rol, debemos verificar que el usuario puede acceder al recurso solicitado.

Por ejemplo, un cliente solo debe poder consultar sus propios pedidos.

```php
<?php

require_once "includes/seguridad.php";
require_once "includes/conexion.php";

requiereRol("cliente");

$idPedido = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);

if ($idPedido === false || $idPedido === null || $idPedido < 1) {

    http_response_code(400);

    exit("Identificador no válido.");

}

$consulta = $conexion->prepare(
    "SELECT id, fecha, total
     FROM pedidos
     WHERE id = :id AND usuario_id = :usuario_id"
);

$consulta->execute([
    ":id" => $idPedido,
    ":usuario_id" => $_SESSION["usuario_id"]
]);

$pedido = $consulta->fetch(PDO::FETCH_ASSOC);

if (!$pedido) {

    http_response_code(404);

    exit("Pedido no encontrado.");

}

echo "Pedido: " . $pedido["id"];

echo "<br>";

echo "Fecha: " . htmlspecialchars($pedido["fecha"]);

echo "<br>";

echo "Total: " . number_format($pedido["total"], 2) . " €";

?>
```

La consulta comprueba simultáneamente el identificador del pedido y el identificador del usuario autenticado.

Así evitamos que un cliente pueda consultar pedidos de otras personas modificando el parámetro `id`.

### 9.6. Pruebas de seguridad

Debemos comprobar diferentes situaciones:

| Prueba | Resultado esperado |
|:--|:--|
| Acceder a una página privada sin iniciar sesión | Redirección al formulario de acceso |
| Introducir una contraseña incorrecta | Acceso denegado |
| Iniciar sesión con una cuenta desactivada | Acceso denegado |
| Acceder al panel de administración como cliente | HTTP 403 |
| Modificar el identificador de un pedido | No se muestran pedidos de otros usuarios |
| Cerrar sesión y volver a una página privada | Se solicita autenticación |
| Introducir datos manipulados en un formulario | PHP rechaza los datos no válidos |

## 10. Actividades propuestas: autenticación y control de acceso con PHP

### Objetivo

Desarrollar un sistema de identificación, autenticación y autorización de usuarios mediante PHP, utilizando formularios, bases de datos, sesiones y mecanismos de seguridad.

Las actividades serán progresivas y permitirán construir una aplicación completa de gestión de usuarios para una tienda informática.

### Actividad 1. Registro de usuarios

**Contenidos:** formularios, validación y almacenamiento de contraseñas.

Crea un formulario de registro que solicite:

- Nombre y apellidos.
- Nombre de usuario.
- Correo electrónico.
- Contraseña.
- Confirmación de contraseña.

**Requisitos:**

1. Crea la tabla `usuarios` en una base de datos.
2. Valida los campos mediante PHP.
3. Comprueba que el nombre de usuario tenga al menos cuatro caracteres.
4. Comprueba que el correo electrónico tenga un formato válido.
5. Exige una contraseña de al menos 12 caracteres.
6. Comprueba que ambas contraseñas coincidan.
7. Genera el hash mediante `password_hash()`.
8. Almacena los datos mediante una consulta preparada.
9. Impide que se repitan los nombres de usuario y correos electrónicos.
10. Asigna automáticamente el rol `cliente`.

### Actividad 2. Inicio de sesión

**Contenidos:** autenticación y verificación de contraseñas.

Desarrolla un formulario que permita a los usuarios acceder a la aplicación mediante su nombre de usuario o correo electrónico y contraseña.

**Requisitos:**

1. Recupera los datos mediante POST.
2. Busca el usuario en la base de datos.
3. Comprueba la contraseña mediante `password_verify()`.
4. Comprueba que la cuenta está activa.
5. Inicia una sesión cuando las credenciales sean correctas.
6. Regenera el identificador de sesión.
7. Almacena el identificador del usuario, su nombre y su rol.
8. Redirige al usuario a su página correspondiente.
9. Muestra un mensaje genérico cuando las credenciales sean incorrectas.
10. No almacenes la contraseña en la sesión.

### Actividad 3. Área privada de usuarios

**Contenidos:** sesiones y protección de documentos PHP.

Crea una zona privada que únicamente pueda utilizar un usuario autenticado.

Desarrolla los documentos:

- `index.php`
- `login.php`
- `procesar_login.php`
- `privado.php`
- `logout.php`

**Requisitos:**

1. El usuario debe iniciar sesión para acceder a `privado.php`.
2. Comprueba la existencia de `$_SESSION["usuario_id"]`.
3. Si no existe una sesión válida, redirige a `login.php`.
4. Muestra el nombre del usuario autenticado.
5. Permite navegar entre diferentes documentos sin perder la identidad.
6. Implementa el cierre de sesión.
7. Comprueba que después del cierre no se puede acceder a la zona privada.
8. Evita que el usuario pueda acceder directamente a los documentos protegidos sin autenticarse.

### Actividad 4. Sistema de roles

**Contenidos:** autorización y control de acceso.

Amplía la aplicación anterior para incorporar tres roles:

- Visitante.
- Cliente.
- Administrador.

Los permisos serán:

| Operación | Visitante | Cliente | Administrador |
|:--|:--:|:--:|:--:|
| Consultar catálogo | Sí | Sí | Sí |
| Añadir productos al carrito | No | Sí | Sí |
| Consultar pedidos propios | No | Sí | Sí |
| Gestionar productos | No | No | Sí |
| Gestionar usuarios | No | No | Sí |

**Requisitos:**

1. Almacena el rol de cada usuario en la base de datos.
2. Recupera el rol durante la autenticación.
3. Almacénalo en la sesión.
4. Crea una función `requiereAutenticacion()`.
5. Crea una función `requiereRol()`.
6. Protege cada documento según los permisos necesarios.
7. Devuelve un error HTTP 403 cuando el usuario no tenga autorización.
8. Comprueba que no es posible acceder modificando directamente la URL.

### Actividad 5. Panel de administración de usuarios

**Contenidos:** gestión de cuentas y permisos.

Crea un panel exclusivo para administradores que permita gestionar los usuarios registrados.

El panel deberá permitir:

- Consultar usuarios.
- Buscar usuarios.
- Modificar el nombre y el correo.
- Cambiar el rol.
- Activar y desactivar cuentas.

**Requisitos:**

1. Protege el panel mediante el rol `administrador`.
2. Recupera los usuarios desde la base de datos.
3. Utiliza consultas preparadas.
4. Comprueba los datos antes de modificarlos.
5. Impide que un usuario se asigne permisos administrativos a sí mismo mediante un formulario no autorizado.
6. Permite desactivar cuentas.
7. Impide el acceso a los usuarios desactivados.
8. Muestra mensajes de confirmación y error.
9. Registra las operaciones administrativas relevantes.

### Actividad 6. Protección frente a intentos de acceso

**Contenidos:** seguridad de autenticación y limitación de intentos.

Amplía el sistema de inicio de sesión para controlar los intentos fallidos.

**Requisitos:**

1. Registra los intentos de autenticación fallidos.
2. Establece un límite de cinco intentos en un periodo determinado.
3. Aplica una espera temporal cuando se supere el límite.
4. Evita que el sistema revele si el usuario existe o no.
5. Registra la fecha y el resultado de los intentos.
6. No almacenes contraseñas ni identificadores de sesión en los registros.
7. Permite recuperar el acceso cuando finalice el periodo de espera.

La limitación deberá aplicarse de forma que no permita bloquear fácilmente las cuentas de otros usuarios mediante ataques de denegación de servicio.

### Actividad 7. Protección de formularios mediante tokens CSRF

**Contenidos:** sesiones y protección frente a peticiones no autorizadas.

Crea un formulario para modificar los datos personales del usuario.

**Requisitos:**

1. El usuario debe estar autenticado.
2. Genera un token mediante `random_bytes()`.
3. Guarda el token en `$_SESSION`.
4. Incluye el token en un campo oculto.
5. Recupera el token mediante POST.
6. Comprueba su validez con `hash_equals()`.
7. Rechaza las peticiones que no tengan un token válido.
8. Actualiza los datos únicamente cuando las comprobaciones sean correctas.
9. Explica qué problema de seguridad evita este mecanismo.

### Actividad 8. Gestión de permisos sobre pedidos

**Contenidos:** autorización sobre recursos concretos.

Desarrolla una aplicación que permita a los clientes consultar sus pedidos.

La base de datos deberá incluir:

- Tabla `usuarios`.
- Tabla `pedidos`.

Cada pedido estará relacionado con un usuario mediante su identificador.

**Requisitos:**

1. Crea un formulario de acceso.
2. Permite consultar los pedidos del usuario autenticado.
3. Recupera los pedidos mediante una consulta preparada.
4. Comprueba que cada pedido pertenece al usuario que realiza la consulta.
5. Utiliza el identificador de sesión para determinar el usuario.
6. No confíes en el identificador de usuario recibido mediante GET o POST.
7. Intenta acceder a un pedido perteneciente a otro usuario.
8. Comprueba que el acceso es denegado.

### Actividad 9. Auditoría de seguridad del sistema de autenticación

**Contenidos:** identificación de vulnerabilidades y comprobación de medidas de protección.

Realiza una auditoría del sistema de autenticación desarrollado en las actividades anteriores.

Comprueba los siguientes aspectos:

- Almacenamiento de contraseñas mediante hashes.
- Uso de consultas preparadas.
- Regeneración del identificador de sesión.
- Protección de documentos privados.
- Comprobación de roles.
- Control de cuentas desactivadas.
- Protección frente a ataques CSRF.
- Uso de HTTPS en el entorno de producción.
- Cierre correcto de sesión.
- Protección de los pedidos y datos personales.

**Entrega:**

Elabora un informe que incluya:

1. Descripción de la aplicación analizada.
2. Medidas de seguridad implementadas.
3. Pruebas realizadas.
4. Vulnerabilidades detectadas.
5. Riesgos asociados.
6. Soluciones aplicadas.
7. Capturas de las pruebas.
8. Conclusiones.

### Actividad 10. Proyecto integrador: sistema de autenticación y gestión de usuarios de una tienda informática

**Contenidos:** integración de identificación, autenticación, autorización, sesiones, roles y seguridad.

Desarrolla un sistema completo de gestión de usuarios para la tienda informática que has ido construyendo en las actividades anteriores.

#### Estructura del proyecto

```text
UP5_8_Tienda/
│
├── index.php
├── registro.php
├── procesar_registro.php
├── login.php
├── procesar_login.php
├── logout.php
│
├── perfil.php
├── productos.php
├── mis_pedidos.php
├── administracion.php
├── gestionar_usuarios.php
│
└── includes/
    ├── conexion.php
    ├── seguridad.php
    ├── funciones.php
    └── cabecera.php
```

#### Funcionalidades obligatorias

**1. Registro de usuarios**

- Permite crear cuentas.
- Valida los datos recibidos.
- Almacena las contraseñas mediante hashes.
- Asigna el rol `cliente` por defecto.

**2. Autenticación**

- Permite iniciar sesión.
- Comprueba las credenciales.
- Comprueba que la cuenta está activa.
- Regenera el identificador de sesión.
- Mantiene la identidad del usuario durante la navegación.

**3. Perfil de usuario**

- Permite consultar los datos personales.
- Permite modificar el nombre y el correo.
- Impide que el usuario modifique su propio rol.
- Protege las operaciones mediante autenticación y token CSRF.

**4. Control de acceso**

- Permite consultar el catálogo a todos los visitantes.
- Permite a los clientes gestionar su carrito y consultar sus pedidos.
- Permite a los administradores gestionar productos y usuarios.
- Comprueba los permisos en el servidor.

**5. Gestión administrativa**

- Permite consultar usuarios.
- Permite modificar los datos de las cuentas.
- Permite cambiar los roles.
- Permite activar y desactivar usuarios.
- Impide que usuarios no autorizados accedan al panel.

**6. Cierre de sesión**

- Elimina las variables de sesión.
- Destruye la sesión.
- Elimina la cookie de sesión.
- Impide continuar accediendo a las páginas privadas.

#### Pruebas obligatorias

Realiza, al menos, las siguientes pruebas:

1. Registrar un usuario nuevo.
2. Intentar registrar un usuario duplicado.
3. Iniciar sesión con credenciales correctas.
4. Intentar acceder con una contraseña incorrecta.
5. Intentar acceder a una página privada sin autenticación.
6. Acceder al panel de administración como cliente.
7. Acceder al panel de administración como administrador.
8. Intentar modificar el rol desde un formulario de registro.
9. Desactivar un usuario e intentar iniciar sesión con él.
10. Intentar consultar el pedido de otro usuario.
11. Enviar un formulario sin un token CSRF válido.
12. Cerrar sesión e intentar acceder de nuevo a una página protegida.

#### Entrega del proyecto

Entrega un documento PDF que incluya:

- Portada con los datos del alumno.
- Descripción de la aplicación.
- Estructura de archivos.
- Diseño de la base de datos.
- Explicación del proceso de registro.
- Explicación del proceso de autenticación.
- Descripción de los roles y permisos.
- Fragmentos relevantes del código PHP.
- Capturas de las diferentes funcionalidades.
- Pruebas de seguridad.
- Errores encontrados y resolución individual.
- Conclusiones personales.

Las capturas deberán estar centradas, ser legibles y acompañarse de una descripción técnica. Se deberán demostrar tanto los accesos permitidos como los accesos denegados.

### Resultado esperado

El alumno deberá ser capaz de desarrollar un sistema de identificación, autenticación y autorización de usuarios utilizando PHP.

En particular, deberá demostrar que sabe:

- Identificar a los usuarios mediante credenciales.
- Almacenar contraseñas de forma segura.
- Verificar las credenciales recibidas.
- Mantener la identidad mediante sesiones.
- Diferenciar autenticación y autorización.
- Gestionar roles y permisos.
- Proteger documentos web y operaciones sensibles.
- Aplicar medidas de seguridad frente a ataques habituales.

**Criterio de evaluación:** h) Se ha identificado y asegurado a los usuarios que acceden al documento Web.

-->