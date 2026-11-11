---
title: 🚀 UP5.9. Aislamiento y seguridad del entorno de cada usuario - CE5.i)
---

### RA5. Genera documentos Web utilizando lenguajes de guiones de servidor.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| i) Se ha verificado el aislamiento del entorno específico de cada usuario. | Práctico | 5 % |

### 1. Introducción
<!-- 

# UP5.9. Aislamiento y seguridad del entorno de cada usuario en aplicaciones web con PHP

## 1. Introducción al aislamiento del entorno de cada usuario

En una aplicación web pueden acceder simultáneamente diferentes usuarios. Cada uno debe disponer de un entorno de trabajo propio, de manera que sus datos, archivos, preferencias y operaciones no puedan ser consultados o modificados por otros usuarios sin autorización.

El **aislamiento del entorno de cada usuario** consiste en garantizar que cada usuario accede únicamente a la información y a los recursos que le corresponden, evitando que pueda interferir en la actividad de otros usuarios.

Por ejemplo, en una tienda online desarrollada con PHP:

- Un cliente puede consultar sus propios pedidos.
- Un cliente no puede consultar los pedidos de otros clientes.
- Un cliente no puede modificar los datos de otro usuario.
- Un administrador puede consultar información de diferentes clientes, siempre que tenga autorización para ello.
- Los archivos privados de un usuario no deben estar disponibles para otros usuarios.

El aislamiento es especialmente importante cuando una aplicación utiliza sesiones, bases de datos, directorios de archivos y diferentes perfiles de usuario.

### Objetivos del aislamiento

Una aplicación web debe garantizar:

- **Privacidad:** cada usuario solamente puede acceder a sus datos.
- **Integridad:** un usuario no puede modificar información ajena.
- **Confidencialidad:** los datos privados no deben quedar expuestos.
- **Separación de recursos:** los archivos y las operaciones de cada usuario deben estar correctamente delimitados.
- **Control de acceso:** cada petición debe comprobar si el usuario tiene autorización para realizar la operación solicitada.

Es importante recordar que identificar a un usuario y comprobar que ha iniciado sesión no garantiza por sí solo su aislamiento. También hay que verificar qué recursos puede consultar y modificar.

## 2. Identificación del usuario mediante sesiones PHP

Para aislar correctamente los entornos de trabajo es necesario identificar a cada usuario durante su navegación por la aplicación.

PHP proporciona un mecanismo de gestión de sesiones mediante `$_SESSION`.

Una sesión permite conservar información de un usuario entre diferentes páginas web. Por ejemplo, después de iniciar sesión podemos guardar su identificador y utilizarlo para determinar qué información puede consultar.

### Inicio de una sesión

Para utilizar sesiones debemos ejecutar `session_start()` antes de generar contenido HTML:

```php
<?php
session_start();
?>
```

Después de autenticar correctamente al usuario, podemos almacenar sus datos básicos:

```php
<?php
session_start();

$_SESSION["usuario_id"] = 15;
$_SESSION["nombre"] = "Ana";
$_SESSION["rol"] = "cliente";
?>
```

En este ejemplo:

- `usuario_id` identifica de forma única al usuario.
- `nombre` permite mostrar su nombre en la aplicación.
- `rol` indica el tipo de permisos que tiene.

En una aplicación real, estos valores deben obtenerse de la base de datos después de comprobar las credenciales. Nunca debemos confiar en datos de identidad enviados libremente por el navegador.

### Recuperación de los datos de sesión

En cualquier página que necesite conocer la identidad del usuario podemos consultar las variables de sesión:

```php
<?php
session_start();

if (isset($_SESSION["usuario_id"])) {
    echo "Usuario identificado: " . htmlspecialchars($_SESSION["nombre"]);
} else {
    echo "No has iniciado sesión.";
}
?>
```

La función `htmlspecialchars()` evita que un dato introducido por un usuario se interprete como código HTML al mostrarlo en la página.

### Importancia de las sesiones

Cada usuario debe disponer de su propia sesión. PHP utiliza un identificador de sesión para relacionar las peticiones del navegador con los datos almacenados en el servidor.

No debemos utilizar una variable global compartida para guardar información individual de los usuarios. Los datos personales de cada sesión deben mantenerse separados.

## 3. Separación de los datos de cada usuario en la base de datos

Uno de los aspectos fundamentales del aislamiento consiste en garantizar que cada usuario solamente pueda consultar y modificar sus propios registros.

Para conseguirlo, las tablas de la base de datos deben relacionar cada registro con el usuario al que pertenece.

### Ejemplo: tabla de usuarios

Podemos utilizar una tabla denominada `usuarios`:

| id | nombre | email | rol |
|---|---|---|---|
| 1 | Ana | ana@ejemplo.com | cliente |
| 2 | Luis | luis@ejemplo.com | cliente |
| 3 | Marta | marta@ejemplo.com | administrador |

Cada usuario tiene un identificador único.

### Ejemplo: tabla de pedidos

La tabla `pedidos` debe incluir un campo que identifique al propietario de cada pedido:

| id | usuario_id | producto | importe |
|---|---|---|---|
| 1 | 1 | Portátil | 750 € |
| 2 | 2 | Monitor | 180 € |
| 3 | 1 | Teclado | 35 € |

El campo `usuario_id` permite relacionar cada pedido con su propietario.

Por tanto:

- Ana puede consultar los pedidos 1 y 3.
- Luis puede consultar el pedido 2.
- Marta, como administradora, podrá consultar todos los pedidos si sus permisos lo permiten.

### Consulta de los pedidos del usuario conectado

Cuando un usuario accede a sus pedidos, la consulta SQL debe utilizar su identificador de sesión:

```php
<?php
session_start();

require_once "conexion.php";

$usuario_id = $_SESSION["usuario_id"];

$sql = "SELECT id, producto, importe
        FROM pedidos
        WHERE usuario_id = :usuario_id";

$stmt = $conexion->prepare($sql);

$stmt->execute([
    ":usuario_id" => $usuario_id
]);

$pedidos = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($pedidos as $pedido) {
    echo "<p>";
    echo htmlspecialchars($pedido["producto"]);
    echo " - ";
    echo htmlspecialchars((string) $pedido["importe"]);
    echo " €";
    echo "</p>";
}
?>
```

La condición `WHERE usuario_id = :usuario_id` es imprescindible: limita los resultados a los registros del usuario conectado.

**Error de seguridad que debemos evitar:**

```php
$sql = "SELECT * FROM pedidos";
```

Esta consulta recupera todos los pedidos sin distinguir a quién pertenecen. Si los mostramos directamente a un cliente, estaremos exponiendo información privada.

La regla fundamental es que las consultas deben limitar los resultados según la identidad y los permisos del usuario.

## 4. Protección frente al acceso a datos de otros usuarios

Un error habitual consiste en confiar en los identificadores que llegan desde el navegador.

Por ejemplo, una aplicación puede utilizar una dirección como:

```text
detalle_pedido.php?id=25
```

El usuario podría modificar manualmente el identificador:

```text
detalle_pedido.php?id=26
```

Si la aplicación solamente comprueba que el usuario ha iniciado sesión, podría permitirle consultar el pedido de otra persona.

Este problema se conoce como **referencia directa insegura a objetos (IDOR)**.

### Ejemplo de código vulnerable

```php
<?php
session_start();

require_once "conexion.php";

$id_pedido = $_GET["id"];

$sql = "SELECT * FROM pedidos WHERE id = :id";

$stmt = $conexion->prepare($sql);

$stmt->execute([
    ":id" => $id_pedido
]);

$pedido = $stmt->fetch(PDO::FETCH_ASSOC);
?>
```

Aunque se utiliza una consulta preparada, el código no comprueba quién es el propietario del pedido.

Las consultas preparadas protegen frente a la inyección SQL, pero no garantizan por sí mismas que un usuario tenga autorización para consultar un registro.

### Ejemplo de código seguro

```php
<?php
session_start();

require_once "conexion.php";

if (!isset($_SESSION["usuario_id"])) {
    http_response_code(401);
    exit("Debes iniciar sesión.");
}

$id_pedido = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);

if ($id_pedido === false || $id_pedido === null || $id_pedido <= 0) {
    http_response_code(400);
    exit("Identificador no válido.");
}

$usuario_id = $_SESSION["usuario_id"];

$sql = "SELECT * FROM pedidos
        WHERE id = :id
        AND usuario_id = :usuario_id";

$stmt = $conexion->prepare($sql);

$stmt->execute([
    ":id" => $id_pedido,
    ":usuario_id" => $usuario_id
]);

$pedido = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$pedido) {
    http_response_code(404);
    exit("Pedido no encontrado.");
}

echo "Pedido autorizado: " . htmlspecialchars($pedido["producto"]);
?>
```

La consulta comprueba dos condiciones:

1. Que el pedido tenga el identificador solicitado.
2. Que pertenezca al usuario que ha iniciado sesión.

De esta forma, aunque el usuario modifique el identificador en la dirección del navegador, no podrá acceder a pedidos ajenos.

**Importante:** no debemos confiar en que un enlace esté oculto o que un botón no aparezca en pantalla. La autorización debe comprobarse siempre en el servidor, cada vez que se solicita un recurso protegido.

## 5. Aislamiento de archivos y directorios de cada usuario

Además de los datos almacenados en la base de datos, muchas aplicaciones web permiten que los usuarios suban documentos, imágenes o archivos personales.

Estos recursos también deben estar aislados.

Por ejemplo, en una aplicación de gestión documental, cada usuario puede disponer de un directorio propio:

```text
documentos/
├── usuario_1/
│   ├── factura.pdf
│   └── curriculum.pdf
├── usuario_2/
│   ├── contrato.pdf
│   └── imagen.jpg
└── usuario_3/
    └── informe.pdf
```

Un usuario no debe poder consultar los archivos de otro modificando una ruta o un identificador.

### Organización de directorios

Una posible estructura para almacenar los archivos sería:

```text
aplicacion/
├── public/
│   ├── index.php
│   └── documentos.php
├── privados/
│   ├── usuario_1/
│   ├── usuario_2/
│   └── usuario_3/
├── includes/
│   ├── conexion.php
│   └── seguridad.php
└── index.php
```

El directorio `privados` debe situarse fuera del directorio público del servidor web siempre que sea posible. Así evitamos que los archivos puedan descargarse directamente mediante una URL.

### Comprobación del propietario de un archivo

Antes de entregar un archivo, PHP debe comprobar que pertenece al usuario conectado.

Una solución consiste en guardar en la base de datos el identificador del archivo, su propietario y su nombre interno.

Ejemplo de tabla `archivos`:

| id | usuario_id | nombre |
|---|---|---|
| 1 | 1 | factura.pdf |
| 2 | 2 | contrato.pdf |
| 3 | 1 | curriculum.pdf |

Código simplificado para comprobar la propiedad:

```php
<?php
session_start();

require_once "conexion.php";

$archivo_id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);

if (!isset($_SESSION["usuario_id"])) {
    http_response_code(401);
    exit("Acceso no autorizado.");
}

if ($archivo_id === false || $archivo_id === null || $archivo_id <= 0) {
    http_response_code(400);
    exit("Identificador no válido.");
}

$usuario_id = $_SESSION["usuario_id"];

$sql = "SELECT id, nombre
        FROM archivos
        WHERE id = :id
        AND usuario_id = :usuario_id";

$stmt = $conexion->prepare($sql);

$stmt->execute([
    ":id" => $archivo_id,
    ":usuario_id" => $usuario_id
]);

$archivo = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$archivo) {
    http_response_code(404);
    exit("Archivo no encontrado.");
}

echo "Archivo autorizado: " . htmlspecialchars($archivo["nombre"]);
?>
```

Este ejemplo comprueba la propiedad del archivo, pero no realiza todavía su descarga.

### Buenas prácticas para los archivos

- Almacenar los archivos privados fuera del directorio público.
- Comprobar siempre el propietario antes de permitir una descarga.
- No utilizar directamente nombres de archivo enviados por el usuario como rutas.
- Generar nombres internos seguros para los archivos.
- Validar el tamaño y el tipo de los archivos subidos.
- Aplicar permisos adecuados en el sistema de archivos.
- Evitar que un usuario pueda modificar las rutas para acceder a otros directorios.

## 6. Aislamiento de sesiones y protección de la información

Las sesiones permiten mantener la identidad de cada usuario, pero también pueden convertirse en un riesgo si no se gestionan correctamente.

Por ejemplo, si una persona consigue robar el identificador de sesión de otro usuario, podría intentar suplantar su identidad.

Por ello, es necesario aplicar medidas de protección.

### Regeneración del identificador de sesión

Después de autenticar correctamente a un usuario, debemos regenerar el identificador de sesión:

```php
<?php
session_start();

// Después de verificar correctamente las credenciales:
session_regenerate_id(true);

$_SESSION["usuario_id"] = $usuario["id"];
$_SESSION["nombre"] = $usuario["nombre"];
$_SESSION["rol"] = $usuario["rol"];
?>
```

La función `session_regenerate_id(true)` genera un nuevo identificador y elimina el anterior.

Esto ayuda a prevenir ataques de fijación de sesión.

### Configuración segura de las cookies de sesión

Las sesiones utilizan normalmente una cookie para identificar al usuario. Es recomendable configurar sus opciones de seguridad antes de iniciar la sesión:

```php
<?php
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

Estas opciones permiten:

- `secure`: enviar la cookie únicamente mediante HTTPS.
- `httponly`: impedir que JavaScript pueda leer directamente la cookie.
- `samesite`: limitar determinados envíos de cookies desde otros sitios.
- `lifetime`: establecer la duración de la cookie.

La opción `secure` requiere que la aplicación funcione mediante HTTPS. En un entorno local sin HTTPS habrá que adaptar la configuración de desarrollo.

### Cierre de sesión

Cuando un usuario cierra sesión, debemos eliminar sus datos de sesión:

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
            "expires" => time() - 42000,
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

En una aplicación real, la operación de cierre de sesión debe realizarse mediante una petición POST protegida frente a CSRF.

### Separación de sesiones

Cada usuario debe tener su propia sesión. Nunca debemos almacenar datos personales de todos los usuarios en una misma variable compartida que pueda ser modificada por cualquier petición.

También debemos evitar guardar contraseñas en las variables de sesión. Una vez autenticado el usuario, normalmente basta con conservar su identificador, nombre y rol.

## 7. Control del acceso a las operaciones y recursos

El aislamiento no consiste únicamente en impedir que un usuario consulte datos ajenos. También hay que evitar que pueda ejecutar operaciones para las que no tiene permisos.

Por ejemplo, en una tienda online:

| Operación | Cliente | Administrador |
|---|---|---|
| Consultar sus pedidos | Sí | Sí |
| Consultar pedidos de otros clientes | No | Sí |
| Modificar sus datos personales | Sí | Sí |
| Eliminar usuarios | No | Sí |
| Crear productos | No | Sí |
| Modificar el catálogo | No | Sí |

El control debe realizarse en el servidor mediante PHP.

### Comprobar que el usuario ha iniciado sesión

Podemos crear una función que compruebe la existencia de una sesión autenticada:

```php
<?php
function requiereAutenticacion(): void {
    if (!isset($_SESSION["usuario_id"])) {
        header("Location: login.php");
        exit;
    }
}
?>
```

Esta función debe utilizarse después de iniciar la sesión.

### Comprobar el rol del usuario

También podemos crear una función para verificar los permisos:

```php
<?php
function requiereRol(string $rol): void {
    if (!isset($_SESSION["rol"]) || $_SESSION["rol"] !== $rol) {
        http_response_code(403);
        exit("No tienes permisos para acceder.");
    }
}
?>
```

Ejemplo de uso:

```php
<?php
session_start();

require_once "seguridad.php";

requiereAutenticacion();
requiereRol("administrador");

echo "Panel de administración";
?>
```

En este ejemplo, solamente los usuarios autenticados con el rol `administrador` podrán acceder al panel.

### Comprobar la propiedad de los recursos

Además del rol, algunas operaciones requieren comprobar la propiedad de un recurso.

Por ejemplo, un cliente puede modificar sus datos personales, pero no los de otro cliente.

Por tanto, una aplicación segura debe combinar:

- Identificación del usuario.
- Autenticación mediante credenciales.
- Autorización según el rol.
- Comprobación de propiedad de los recursos.
- Validación de las operaciones solicitadas.

No debemos confundir autenticación con autorización: saber quién es el usuario no significa que tenga permiso para realizar cualquier operación.

## 8. Aislamiento de datos enviados mediante formularios

Los formularios son una de las principales vías de comunicación entre el usuario y la aplicación web.

Un formulario puede permitir modificar datos personales, cambiar una contraseña, crear un pedido o eliminar un registro.

El problema aparece cuando confiamos en los datos enviados por el navegador.

Por ejemplo, un formulario podría enviar:

```html
<form action="modificar_pedido.php" method="post">
    <input type="hidden" name="usuario_id" value="1">
    <input type="text" name="producto" value="Portátil">
    <button type="submit">Guardar</button>
</form>
```

Un usuario podría modificar el valor de `usuario_id` utilizando las herramientas del navegador o enviando una petición manipulada.

Por tanto, nunca debemos utilizar un identificador enviado por el formulario para determinar a quién pertenece un registro.

### Ejemplo de procesamiento seguro

El identificador del usuario debe obtenerse de la sesión:

```php
<?php
session_start();

require_once "conexion.php";

if (!isset($_SESSION["usuario_id"])) {
    http_response_code(401);
    exit("Debes iniciar sesión.");
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Método no permitido.");
}

$id_pedido = filter_input(INPUT_POST, "pedido_id", FILTER_VALIDATE_INT);

if ($id_pedido === false || $id_pedido === null || $id_pedido <= 0) {
    http_response_code(400);
    exit("Pedido no válido.");
}

$producto = trim($_POST["producto"] ?? "");

if ($producto === "") {
    exit("Debes indicar un producto.");
}

$usuario_id = $_SESSION["usuario_id"];

$sql = "UPDATE pedidos
        SET producto = :producto
        WHERE id = :id
        AND usuario_id = :usuario_id";

$stmt = $conexion->prepare($sql);

$stmt->execute([
    ":producto" => $producto,
    ":id" => $id_pedido,
    ":usuario_id" => $usuario_id
]);

if ($stmt->rowCount() === 0) {
    echo "No se ha modificado ningún pedido. Comprueba que existe y te pertenece.";
} else {
    echo "Pedido actualizado correctamente.";
}
?>
```

La consulta impide que el usuario modifique pedidos que no le pertenecen.

### Protección frente a peticiones CSRF

Un ataque CSRF intenta provocar que un usuario autenticado realice una operación no deseada.

Para reducir este riesgo podemos utilizar un token asociado a la sesión.

Generación del token:

```php
<?php
session_start();

if (empty($_SESSION["csrf_token"])) {
    $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
}
?>
```

Inclusión del token en un formulario:

```php
<form action="modificar.php" method="post">
    <input
        type="hidden"
        name="csrf_token"
        value="<?php echo htmlspecialchars($_SESSION["csrf_token"]); ?>"
    >

    <button type="submit">Guardar cambios</button>
</form>
```

Comprobación del token en el procesamiento del formulario:

```php
<?php
session_start();

$token = $_POST["csrf_token"] ?? "";

if (
    !is_string($token) ||
    !hash_equals($_SESSION["csrf_token"] ?? "", $token)
) {
    http_response_code(403);
    exit("Solicitud no válida.");
}
?>
```

El token debe comprobarse junto con las verificaciones de autenticación, autorización y propiedad del recurso. Por sí solo no garantiza el aislamiento.

## 9. Verificación del aislamiento y pruebas de seguridad

Una aplicación puede parecer que funciona correctamente y, sin embargo, permitir que un usuario acceda a información de otro.

Por eso es necesario realizar pruebas específicas para comprobar que el aislamiento se cumple.

### Preparación de usuarios de prueba

Podemos crear tres cuentas:

| Usuario | Contraseña de prueba | Rol |
|---|---|---|
| ana | Ana1234! | cliente |
| luis | Luis1234! | cliente |
| admin | Admin1234! | administrador |

Las contraseñas deben almacenarse utilizando `password_hash()` y nunca en texto plano. Estas cuentas son únicamente para el entorno de prácticas.

También crearemos varios pedidos:

| Pedido | Propietario | Producto |
|---|---|---|
| 1 | ana | Portátil |
| 2 | ana | Ratón |
| 3 | luis | Monitor |
| 4 | luis | Teclado |

### Pruebas que debemos realizar

**Prueba 1. Acceso a los datos propios**

- Iniciar sesión como Ana.
- Consultar sus pedidos.
- Comprobar que aparecen únicamente los pedidos 1 y 2.

**Prueba 2. Acceso a datos ajenos**

- Iniciar sesión como Ana.
- Intentar acceder al pedido 3 modificando su identificador en la URL.
- Comprobar que la aplicación impide el acceso.

**Prueba 3. Modificación de registros**

- Iniciar sesión como Luis.
- Intentar modificar el pedido 1.
- Comprobar que no se modifica.

**Prueba 4. Acceso a operaciones administrativas**

- Iniciar sesión como Ana.
- Intentar acceder al panel de administración.
- Comprobar que aparece un mensaje de acceso denegado.

**Prueba 5. Aislamiento de archivos**

- Iniciar sesión como Ana.
- Intentar descargar un archivo propiedad de Luis.
- Comprobar que la aplicación no permite la descarga.

**Prueba 6. Separación de sesiones**

- Abrir dos navegadores o perfiles diferentes.
- Iniciar sesión con Ana en uno y Luis en otro.
- Comprobar que cada navegador mantiene su propia identidad y sus propios datos.

**Prueba 7. Acceso sin autenticación**

- Cerrar sesión.
- Intentar acceder directamente a una página privada.
- Comprobar que la aplicación redirige al inicio de sesión o deniega el acceso.

### Registro de resultados

Para documentar las pruebas podemos utilizar una tabla:

| Prueba | Resultado esperado | Resultado obtenido |
|---|---|---|
| Consulta de pedidos propios | Solo aparecen los propios | |
| Consulta de pedidos ajenos | Acceso denegado | |
| Modificación de pedidos ajenos | Operación rechazada | |
| Acceso al panel de administración | Solo administradores | |
| Descarga de archivos ajenos | Acceso denegado | |
| Separación de sesiones | Cada usuario conserva su identidad | |
| Acceso sin autenticación | Acceso denegado | |

Una aplicación habrá superado estas comprobaciones cuando cada usuario pueda trabajar con sus propios recursos y no pueda acceder ni modificar los de otros usuarios sin autorización.

## 10. Actividades propuestas: aislamiento del entorno de cada usuario con PHP

En las siguientes actividades se desarrollará progresivamente una aplicación web de gestión de una tienda informática. Se utilizará PHP, una base de datos MySQL o MariaDB y el entorno XAMPP.

El proyecto dará continuidad a los contenidos anteriores del RA5: funciones, formularios, sesiones, autenticación y control de acceso.

### Actividad 1. Identificación de usuarios mediante sesiones

**Objetivo:** utilizar sesiones PHP para identificar a los usuarios conectados.

Desarrolla una aplicación que permita:

1. Iniciar una sesión mediante `session_start()`.
2. Guardar el identificador, nombre y rol de un usuario en `$_SESSION`.
3. Mostrar un mensaje personalizado con su nombre.
4. Crear una página que compruebe si existe una sesión.
5. Crear un botón para cerrar la sesión.

**Comprobación:** al cerrar la sesión, el usuario no debe poder acceder a las páginas privadas.

### Actividad 2. Creación de usuarios y pedidos

**Objetivo:** organizar la información para poder separar los datos de cada usuario.

Crea una base de datos denominada `tienda_informatica` con las siguientes tablas:

**Tabla `usuarios`:**

- id
- nombre
- email
- password
- rol

**Tabla `pedidos`:**

- id
- usuario_id
- producto
- importe
- fecha

Introduce al menos tres usuarios y cuatro pedidos.

Cada pedido deberá estar relacionado con el usuario que lo ha realizado.

**Comprobación:** consulta los registros y verifica que cada pedido tiene asociado un propietario.

### Actividad 3. Mostrar únicamente los pedidos del usuario conectado

**Objetivo:** limitar las consultas a los registros pertenecientes al usuario autenticado.

Desarrolla una página `mis_pedidos.php` que:

1. Compruebe que existe una sesión.
2. Obtenga el identificador del usuario desde `$_SESSION`.
3. Consulte la tabla `pedidos`.
4. Muestre únicamente los pedidos del usuario conectado.
5. Utilice consultas preparadas mediante PDO.

**Comprobación:** inicia sesión con dos usuarios diferentes y verifica que cada uno visualiza únicamente sus pedidos.

### Actividad 4. Protección frente al acceso a pedidos ajenos

**Objetivo:** impedir que un usuario acceda a registros de otros usuarios modificando una URL.

Desarrolla una página `detalle_pedido.php` que reciba el identificador del pedido.

La aplicación deberá:

1. Comprobar que el usuario ha iniciado sesión.
2. Validar el identificador recibido.
3. Consultar el pedido solicitado.
4. Comprobar que pertenece al usuario conectado.
5. Mostrar sus datos únicamente si está autorizado.

Realiza pruebas modificando manualmente el identificador del pedido en la URL.

**Comprobación:** un usuario nunca debe poder consultar pedidos de otra cuenta.

### Actividad 5. Modificación segura de pedidos

**Objetivo:** garantizar que un usuario solamente puede modificar sus propios registros.

Desarrolla un formulario para modificar el producto de un pedido.

El procesamiento deberá:

- Comprobar la sesión.
- Validar los datos recibidos.
- Obtener el identificador del usuario desde la sesión.
- Utilizar una consulta preparada.
- Incluir la condición `usuario_id` en la consulta de actualización.
- Mostrar un mensaje de confirmación o error.

**Comprobación:** intenta modificar un pedido perteneciente a otro usuario y documenta el resultado.

### Actividad 6. Aislamiento de archivos de usuarios

**Objetivo:** proteger los documentos privados de cada usuario.

Amplía la aplicación para permitir que cada usuario tenga archivos asociados a su cuenta.

Crea una tabla `archivos` con los siguientes campos:

- id
- usuario_id
- nombre_original
- nombre_interno
- fecha_subida

Implementa una página que permita consultar los archivos del usuario conectado.

El sistema deberá comprobar la propiedad del archivo antes de permitir su descarga.

Los documentos privados se almacenarán fuera del directorio público del servidor siempre que sea posible.

**Comprobación:** intenta acceder desde una cuenta a un archivo perteneciente a otra.

### Actividad 7. Protección de las sesiones

**Objetivo:** aplicar medidas para proteger la identidad de los usuarios.

Modifica la aplicación para:

1. Regenerar el identificador de sesión después del inicio de sesión.
2. Configurar las cookies de sesión con las opciones de seguridad adecuadas.
3. Evitar almacenar contraseñas en las variables de sesión.
4. Destruir correctamente la sesión al cerrar sesión.
5. Impedir el acceso a páginas privadas cuando no exista una sesión autenticada.

**Comprobación:** documenta el comportamiento de la aplicación antes y después de cerrar sesión.

### Actividad 8. Control de permisos según el rol

**Objetivo:** separar las operaciones que pueden realizar los clientes y los administradores.

Configura dos tipos de usuarios:

- **Cliente:** puede consultar y modificar sus propios datos y pedidos.
- **Administrador:** puede gestionar usuarios y consultar todos los pedidos.

Desarrolla:

- Una página `area_cliente.php`.
- Una página `area_administracion.php`.
- Una función `requiereAutenticacion()`.
- Una función `requiereRol()`.

**Comprobación:** inicia sesión con ambos perfiles e intenta acceder a las páginas que no les corresponden.

### Actividad 9. Auditoría del aislamiento de usuarios

**Objetivo:** verificar que la aplicación impide accesos no autorizados.

Realiza una auditoría de seguridad sobre la aplicación desarrollada.

Deberás comprobar:

1. Que cada usuario solamente consulta sus pedidos.
2. Que no puede modificar registros ajenos.
3. Que no puede descargar archivos de otros usuarios.
4. Que los usuarios normales no acceden al panel administrativo.
5. Que las páginas privadas no son accesibles sin iniciar sesión.
6. Que las consultas a la base de datos utilizan parámetros.
7. Que las sesiones se gestionan correctamente.
8. Que los formularios comprueban los permisos y la propiedad de los recursos.

Elabora una tabla con las pruebas realizadas, los resultados esperados, los resultados obtenidos y las posibles incidencias detectadas.

Si encuentras vulnerabilidades, corrige el código y repite las pruebas.

### Actividad 10. Proyecto final: aplicación web con aislamiento completo de usuarios

**Objetivo:** desarrollar una aplicación web que garantice la separación de los datos y recursos de cada usuario.

Partiendo de las actividades anteriores, completa una tienda informática con la siguiente estructura:

```text
UP5_9_Tienda/
├── index.php
├── login.php
├── registro.php
├── logout.php
├── conexion.php
├── includes/
│   ├── seguridad.php
│   ├── funciones.php
│   └── cabecera.php
├── cliente/
│   ├── panel.php
│   ├── mis_pedidos.php
│   ├── detalle_pedido.php
│   ├── modificar_pedido.php
│   └── mis_archivos.php
├── administrador/
│   ├── panel.php
│   ├── usuarios.php
│   └── pedidos.php
└── privados/
    ├── usuario_1/
    ├── usuario_2/
    └── usuario_3/
```

La aplicación deberá cumplir los siguientes requisitos:

- Permitir registrar e iniciar sesión con diferentes usuarios.
- Almacenar las contraseñas mediante `password_hash()`.
- Mantener la identidad del usuario mediante sesiones PHP.
- Diferenciar entre clientes y administradores.
- Permitir que cada cliente consulte únicamente sus pedidos.
- Impedir que un cliente modifique pedidos de otros usuarios.
- Permitir que los clientes consulten sus propios archivos.
- Impedir la descarga de documentos de otros usuarios.
- Permitir que los administradores gestionen los usuarios.
- Permitir que los administradores consulten todos los pedidos.
- Comprobar los permisos en el servidor en todas las páginas protegidas.
- Utilizar consultas preparadas para acceder a la base de datos.
- Validar los datos recibidos mediante formularios.
- Proteger las sesiones y los formularios.
- Evitar que los usuarios puedan acceder directamente a directorios privados.

**Documentación que se debe entregar:**

1. Explicación de la estructura de la aplicación.
2. Capturas de la base de datos y sus relaciones.
3. Explicación del funcionamiento de las sesiones.
4. Capturas del acceso como cliente y administrador.
5. Capturas de los pedidos de diferentes usuarios.
6. Pruebas de intentos de acceso a datos ajenos.
7. Pruebas de modificación de registros de otros usuarios.
8. Pruebas de acceso a archivos privados.
9. Descripción de los errores encontrados y sus soluciones.
10. Conclusiones sobre la importancia del aislamiento de usuarios en aplicaciones web.

**Criterio de superación:** la aplicación debe demostrar que cada usuario dispone de un entorno independiente y que no puede consultar, modificar ni descargar información de otros usuarios sin disponer de los permisos correspondientes. Todas las comprobaciones deben realizarse en el servidor mediante PHP, sin confiar únicamente en las restricciones visuales de la interfaz.

-->