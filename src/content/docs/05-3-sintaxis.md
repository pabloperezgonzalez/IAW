---
title: 🚀 UP5.3. Sintaxis básica de PHP y gestión de datos - CE5.c)
---

### RA5. Genera documentos Web utilizando lenguajes de guiones de servidor.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| c) Se ha reconocido la sintaxis básica de un lenguaje de guiones concreto. | Teórico-práctico | 15 % |

### 1. Introducción
<!-- 

# UP5.3. Sintaxis básica de PHP y gestión de datos

## 1. Introducción a PHP y su sintaxis

PHP (*PHP: Hypertext Preprocessor*) es un lenguaje de programación que se ejecuta en el servidor y permite desarrollar aplicaciones web dinámicas.

A diferencia de HTML, que se utiliza para definir la estructura de una página web, PHP permite ejecutar instrucciones, almacenar información, realizar operaciones y generar contenido dinámico.

Para trabajar con PHP necesitamos:

- Un servidor web, como Apache.
- El intérprete de PHP.
- Un editor de código.
- Un navegador web para comprobar los resultados.

En este módulo utilizaremos XAMPP, que incorpora Apache, PHP y MariaDB.

Los archivos PHP utilizan la extensión `.php`. Para que el código se ejecute correctamente, debemos acceder a ellos a través del servidor web y no abrirlos directamente desde el explorador de archivos.

Por ejemplo, si creamos el archivo `index.php` dentro de la carpeta `htdocs/UP5_3`, podremos acceder a él mediante:

`http://localhost/UP5_3/`

La estructura básica de un archivo PHP es la siguiente:

```php
<?php
    // Aquí escribiremos las instrucciones PHP
?>
```

Las etiquetas `<?php` y `?>` indican el inicio y el final de un bloque de código PHP.

Cuando combinamos PHP con HTML, podemos alternar ambos tipos de contenido dentro del mismo archivo.

```php
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi primera página PHP</title>
</head>
<body>

    <h1>Mi primera aplicación</h1>

    <?php
        echo "Hola, mundo. Estoy utilizando PHP.";
    ?>

</body>
</html>
```

En este ejemplo, el servidor ejecuta la instrucción PHP y genera el contenido que posteriormente recibirá el navegador.

## 2. Comentarios, instrucciones y delimitación del código

Los comentarios permiten añadir explicaciones dentro del código sin que estas se ejecuten.

Son especialmente útiles para documentar los programas, explicar operaciones complejas y facilitar su mantenimiento.

PHP admite tres formas habituales de escribir comentarios:

**Comentarios de una línea con `//`:**

```php
<?php
    // Este es un comentario de una línea
    echo "Bienvenido a PHP";
?>
```

**Comentarios de una línea con `#`:**

```php
<?php
    # También podemos utilizar la almohadilla
    echo "Aprendiendo PHP";
?>
```

**Comentarios de varias líneas con `/* */`:**

```php
<?php
    /*
        Este comentario ocupa
        varias líneas.
        Podemos explicar aquí
        el funcionamiento del programa.
    */

    echo "Programa iniciado";
?>
```

Las instrucciones PHP suelen terminar con un punto y coma (`;`).

```php
<?php
    echo "Primera instrucción";
    echo "Segunda instrucción";
    echo "Tercera instrucción";
?>
```

Si olvidamos determinados puntos y coma, paréntesis o llaves, podemos provocar errores de sintaxis que impedirán ejecutar correctamente el programa.

También debemos tener en cuenta algunas reglas generales:

- PHP distingue entre mayúsculas y minúsculas en los nombres de las variables.
- Las palabras reservadas del lenguaje no deben utilizarse como nombres de variables.
- Las cadenas de texto se escriben entre comillas simples o dobles.
- Las instrucciones deben respetar las reglas sintácticas del lenguaje.
- Los bloques de código se delimitan normalmente mediante llaves `{ }`.

**Importante:** los nombres de las funciones y las palabras reservadas de PHP no distinguen entre mayúsculas y minúsculas, pero los nombres de las variables sí.

## 3. Variables y constantes

Las variables permiten almacenar información durante la ejecución de un programa.

En PHP, todas las variables comienzan con el símbolo `$`, seguido de un nombre.

Por ejemplo:

```php
<?php
    $nombre = "Carlos";
    $edad = 25;
    $altura = 1.80;

    echo $nombre;
    echo $edad;
    echo $altura;
?>
```

En este ejemplo hemos creado tres variables:

- `$nombre`: almacena una cadena de texto.
- `$edad`: almacena un número entero.
- `$altura`: almacena un número decimal.

### Reglas para nombrar variables

Los nombres de las variables deben cumplir las siguientes condiciones:

- Deben comenzar con el símbolo `$`.
- Después del símbolo `$`, deben comenzar por una letra o guion bajo (`_`).
- No pueden comenzar por un número.
- Pueden contener letras, números y guiones bajos.
- No pueden contener espacios.
- Distinguen entre mayúsculas y minúsculas.

Por ejemplo:

```php
<?php
    $nombre = "Ana";
    $nombreCompleto = "Ana García";
    $_contador = 10;
    $precio_producto = 25.50;

    // Incorrecto:
    // $2nombre = "Ana";
    // $nombre completo = "Ana García";
?>
```

### Modificación del valor de una variable

El contenido de una variable puede cambiar durante la ejecución del programa.

```php
<?php
    $contador = 1;

    echo $contador;

    $contador = 2;

    echo $contador;
?>
```

### Constantes

Las constantes almacenan valores que no deben modificarse durante la ejecución del programa.

Se pueden definir mediante la función `define()` o mediante la palabra reservada `const`.

```php
<?php
    define("IVA", 0.21);

    const NOMBRE_EMPRESA = "Informática Pérez";

    echo IVA;
    echo NOMBRE_EMPRESA;
?>
```

Las constantes definidas de esta forma no llevan el símbolo `$` cuando se utilizan.

Se recomienda utilizar nombres descriptivos y, habitualmente, mayúsculas para distinguirlas de las variables.

## 4. Tipos de datos en PHP

PHP permite trabajar con diferentes tipos de datos. Aunque es un lenguaje de tipado dinámico, resulta importante conocer qué información puede almacenar cada variable.

Los principales tipos de datos son:

| Tipo de dato | Descripción | Ejemplo |
|:--|:--|:--|
| Integer | Números enteros | `25` |
| Float | Números decimales | `19.95` |
| String | Cadenas de texto | `"Hola"` |
| Boolean | Valores verdadero o falso | `true` o `false` |
| Array | Conjunto de valores | `[10, 20, 30]` |
| Null | Ausencia de valor | `null` |

### Ejemplos de tipos de datos

```php
<?php
    $edad = 20;
    $precio = 15.75;
    $nombre = "Laura";
    $activo = true;
    $notas = [7, 8, 9];
    $telefono = null;
?>
```

PHP permite conocer el tipo de una variable mediante la función `gettype()`.

```php
<?php
    $edad = 20;
    $nombre = "Laura";

    echo gettype($edad);
    echo gettype($nombre);
?>
```

También podemos mostrar información sobre una variable mediante `var_dump()`.

```php
<?php
    $precio = 25.50;

    var_dump($precio);
?>
```

El resultado permitirá conocer tanto el tipo de dato como su valor.

### Conversión de tipos

En determinadas situaciones necesitamos convertir un valor de un tipo a otro.

```php
<?php
    $numeroTexto = "25";

    $numero = (int) $numeroTexto;

    var_dump($numero);
?>
```

En este caso, `(int)` convierte el contenido a un número entero.

Otras conversiones habituales son:

- `(int)`: convierte a entero.
- `(float)`: convierte a decimal.
- `(string)`: convierte a cadena de texto.
- `(bool)`: convierte a booleano.

Debemos tener cuidado al realizar conversiones, porque algunos valores pueden perder información o producir resultados inesperados.

## 5. Operadores en PHP

Los operadores permiten realizar operaciones con variables y valores.

PHP dispone de diferentes tipos de operadores.

### Operadores aritméticos

Se utilizan para realizar operaciones matemáticas.

| Operador | Operación | Ejemplo |
|:--:|:--|:--|
| `+` | Suma | `$a + $b` |
| `-` | Resta | `$a - $b` |
| `*` | Multiplicación | `$a * $b` |
| `/` | División | `$a / $b` |
| `%` | Resto de la división | `$a % $b` |
| `**` | Potencia | `$a ** $b` |

Ejemplo:

```php
<?php
    $numero1 = 20;
    $numero2 = 5;

    echo $numero1 + $numero2;
    echo $numero1 - $numero2;
    echo $numero1 * $numero2;
    echo $numero1 / $numero2;
?>
```

### Operadores de asignación

Permiten asignar valores a las variables o modificar su contenido.

| Operador | Ejemplo | Equivalencia |
|:--:|:--|:--|
| `=` | `$a = 10` | Asignación |
| `+=` | `$a += 5` | `$a = $a + 5` |
| `-=` | `$a -= 5` | `$a = $a - 5` |
| `*=` | `$a *= 2` | `$a = $a * 2` |
| `/=` | `$a /= 2` | `$a = $a / 2` |
| `%=` | `$a %= 2` | `$a = $a % 2` |

### Operadores de comparación

Permiten comparar dos valores y obtener un resultado booleano.

| Operador | Significado |
|:--:|:--|
| `==` | Igualdad de valores |
| `===` | Igualdad de valor y tipo |
| `!=` | Distinto |
| `!==` | Distinto valor o tipo |
| `>` | Mayor que |
| `<` | Menor que |
| `>=` | Mayor o igual que |
| `<=` | Menor o igual que |

Es especialmente importante distinguir entre `==` y `===`.

```php
<?php
    $numero = 10;
    $texto = "10";

    var_dump($numero == $texto);
    var_dump($numero === $texto);
?>
```

La primera comparación devuelve `true`, porque los valores se consideran iguales después de la conversión de tipos correspondiente.

La segunda devuelve `false`, porque los tipos de datos son diferentes.

### Operadores lógicos

Permiten combinar varias condiciones.

| Operador | Significado |
|:--:|:--|
| `&&` | AND: se deben cumplir ambas condiciones |
| `||` | OR: debe cumplirse al menos una condición |
| `!` | NOT: invierte el resultado |

Ejemplo:

```php
<?php
    $edad = 25;
    $tienePermiso = true;

    var_dump($edad >= 18 && $tienePermiso);
?>
```

El resultado será `true` porque se cumplen las dos condiciones.

### Operador de concatenación

El operador punto (`.`) permite unir cadenas de texto.

```php
<?php
    $nombre = "Carlos";
    $apellidos = "García";

    $nombreCompleto = $nombre . " " . $apellidos;

    echo $nombreCompleto;
?>
```

El resultado será:

`Carlos García`

## 6. Cadenas de texto y funciones básicas

Las cadenas de texto (*strings*) permiten almacenar nombres, direcciones, mensajes y cualquier otra información textual.

En PHP se pueden definir mediante comillas simples o dobles.

```php
<?php
    $nombre = "María";
    $mensaje = 'Bienvenida a nuestra aplicación';

    echo $nombre;
    echo $mensaje;
?>
```

Las comillas dobles permiten interpretar determinadas variables y secuencias especiales dentro de la cadena.

```php
<?php
    $nombre = "Carlos";

    echo "Bienvenido, $nombre";
?>
```

También podemos utilizar la concatenación:

```php
<?php
    $nombre = "Carlos";

    echo "Bienvenido, " . $nombre;
?>
```

PHP incorpora numerosas funciones para trabajar con cadenas.

| Función | Utilidad | Ejemplo |
|:--|:--|:--|
| `strlen()` | Obtiene la longitud de una cadena en bytes | `strlen("Hola")` |
| `strtoupper()` | Convierte a mayúsculas | `strtoupper("hola")` |
| `strtolower()` | Convierte a minúsculas | `strtolower("HOLA")` |
| `ucfirst()` | Convierte a mayúscula la primera letra | `ucfirst("hola")` |
| `trim()` | Elimina espacios al principio y al final | `trim(" hola ")` |
| `str_replace()` | Sustituye una parte del texto | `str_replace("a", "o", "casa")` |
| `strpos()` | Busca la posición de una cadena | `strpos("Hola", "o")` |
| `substr()` | Extrae una parte de una cadena | `substr("Informática", 0, 4)` |

Ejemplo práctico:

```php
<?php
    $nombre = "  carlos garcia  ";

    $nombre = trim($nombre);
    $nombre = ucfirst($nombre);

    echo $nombre;
?>
```

**Importante:** PHP trabaja habitualmente con cadenas codificadas en UTF-8. Algunas funciones, como `strlen()`, cuentan bytes y no necesariamente caracteres. Para trabajar correctamente con caracteres multibyte, como las letras acentuadas o la ñ, podemos utilizar funciones como `mb_strlen()`.

## 7. Arrays: almacenamiento de varios valores

Un array permite almacenar varios valores dentro de una misma variable.

Son especialmente útiles para gestionar listas de usuarios, productos, asignaturas, direcciones o cualquier conjunto de datos.

PHP dispone de diferentes formas de trabajar con arrays.

### Arrays indexados

Los arrays indexados utilizan posiciones numéricas para identificar cada elemento.

```php
<?php
    $frutas = ["Manzana", "Pera", "Naranja"];

    echo $frutas[0];
    echo $frutas[1];
    echo $frutas[2];
?>
```

Las posiciones comienzan normalmente en cero.

Podemos añadir nuevos elementos:

```php
<?php
    $frutas = ["Manzana", "Pera"];

    $frutas[] = "Naranja";

    print_r($frutas);
?>
```

### Arrays asociativos

Los arrays asociativos utilizan claves para identificar los elementos.

```php
<?php
    $alumno = [
        "nombre" => "Carlos",
        "edad" => 20,
        "curso" => "2º ASIR"
    ];

    echo $alumno["nombre"];
    echo $alumno["edad"];
    echo $alumno["curso"];
?>
```

Este tipo de array resulta especialmente útil para representar registros con diferentes campos.

### Arrays multidimensionales

Permiten almacenar arrays dentro de otros arrays.

```php
<?php
    $alumnos = [
        [
            "nombre" => "Carlos",
            "nota" => 8
        ],
        [
            "nombre" => "Laura",
            "nota" => 9
        ],
        [
            "nombre" => "Miguel",
            "nota" => 7
        ]
    ];

    echo $alumnos[0]["nombre"];
    echo $alumnos[1]["nota"];
?>
```

Podemos mostrar todos los elementos de un array mediante `print_r()` o `var_dump()`, especialmente durante el desarrollo y las pruebas.

## 8. Entrada y salida de información

Un programa necesita mecanismos para mostrar información y, en muchas ocasiones, recibir datos externos.

En PHP podemos utilizar diferentes instrucciones y funciones para realizar estas operaciones.

### Mostrar información con echo

`echo` permite mostrar una o varias cadenas de texto.

```php
<?php
    echo "Bienvenido a PHP";
    echo "<h1>Panel de administración</h1>";
?>
```

También podemos mostrar el contenido de variables:

```php
<?php
    $nombre = "Laura";
    $edad = 22;

    echo "Nombre: " . $nombre;
    echo "Edad: " . $edad;
?>
```

### Mostrar información con print

`print` también permite mostrar información.

```php
<?php
    print "Hola, mundo";
?>
```

La diferencia principal es que `print` devuelve el valor entero `1`, mientras que `echo` no devuelve ningún valor. En el uso habitual para mostrar contenido, ambos cumplen una función similar.

### Obtener información del servidor

PHP proporciona variables predefinidas que permiten consultar información sobre la petición y el entorno de ejecución.

Por ejemplo:

```php
<?php
    echo $_SERVER["SERVER_NAME"];
    echo $_SERVER["PHP_SELF"];
    echo $_SERVER["REQUEST_METHOD"];
?>
```

Algunos índices habituales de `$_SERVER` son:

| Índice | Información |
|:--|:--|
| `SERVER_NAME` | Nombre del servidor |
| `SERVER_SOFTWARE` | Software del servidor web |
| `PHP_SELF` | Ruta del archivo PHP ejecutado |
| `REQUEST_METHOD` | Método HTTP utilizado |
| `HTTP_HOST` | Valor de la cabecera Host recibida |

El contenido de estas variables depende de la petición y de la configuración del servidor.

### Depuración básica

Durante el desarrollo es necesario comprobar el valor de las variables y detectar posibles errores.

Podemos utilizar:

- `var_dump()`: muestra el tipo y el valor de una variable.
- `print_r()`: muestra información legible sobre arrays y objetos.
- `error_reporting()`: permite configurar qué errores se notifican.
- `ini_set()`: permite modificar determinadas opciones de configuración durante la ejecución.

Ejemplo:

```php
<?php
    error_reporting(E_ALL);
    ini_set("display_errors", "1");

    $usuario = [
        "nombre" => "Carlos",
        "edad" => 20
    ];

    var_dump($usuario);
?>
```

La visualización de errores debe limitarse al entorno de desarrollo. En producción, los errores deben registrarse de forma controlada y no mostrarse directamente a los visitantes.

## 9. Organización, estilo y errores básicos en PHP

Un código correctamente organizado facilita su comprensión, mantenimiento y ampliación.

Aunque PHP permite escribir instrucciones de diferentes formas, es recomendable seguir unas normas de estilo.

### Utilizar nombres descriptivos

Los nombres de variables deben indicar claramente qué información almacenan.

```php
<?php
    // Poco recomendable
    $x = 250;

    // Más recomendable
    $precioProducto = 250;
?>
```

### Mantener una indentación correcta

La indentación permite visualizar los bloques de código y comprender su estructura.

```php
<?php
    $nombre = "Laura";

    if ($nombre !== "") {
        echo "Bienvenida, " . $nombre;
    }
?>
```

### Evitar repetir código innecesariamente

Cuando una operación se repite, conviene estudiar si puede organizarse de una manera más eficiente. En el siguiente criterio se profundizará en la creación y utilización de funciones.

### Errores habituales de sintaxis

| Error | Ejemplo incorrecto | Corrección |
|:--|:--|:--|
| Olvidar `$` en una variable | `nombre = "Ana";` | `$nombre = "Ana";` |
| Olvidar `;` | `echo "Hola"` | `echo "Hola";` |
| Olvidar cerrar una cadena | `$nombre = "Ana;` | `$nombre = "Ana";` |
| Utilizar una variable con otro nombre | `$Nombre` en lugar de `$nombre` | Respetar las mayúsculas y minúsculas |
| Olvidar una llave | `if ($edad > 18) {` | Cerrar el bloque con `}` |
| Utilizar `=` en una comparación | `if ($edad = 18)` | Utilizar `==` o `===` según corresponda |

### Tipos de errores

Durante el desarrollo podemos encontrar diferentes tipos de errores:

- **Errores de sintaxis:** se producen cuando el código no respeta las reglas del lenguaje.
- **Errores en tiempo de ejecución:** aparecen mientras se ejecuta el programa, por ejemplo, al intentar realizar una operación no válida.
- **Errores lógicos:** el programa se ejecuta, pero los resultados no son los esperados.

Para desarrollar aplicaciones profesionales debemos aprender a identificar, interpretar y corregir estos errores.

## 10. Actividad propuesta: creación de una ficha técnica de una empresa informática

### Objetivo

Aplicar la sintaxis básica de PHP mediante la creación de un pequeño programa que utilice variables, constantes, tipos de datos, operadores, cadenas de texto y arrays.

### Escenario

Una empresa informática necesita una página web que muestre su información corporativa y un pequeño catálogo de servicios.

Deberás desarrollar el archivo `index.php` utilizando PHP y HTML. La información principal deberá almacenarse en variables y arrays PHP para generar dinámicamente el contenido de la página.

### Desarrollo de la actividad

**1. Crear el proyecto**

Dentro de la carpeta `htdocs` de XAMPP, crea una carpeta llamada `UP5_3`.

Dentro de ella, crea el archivo `index.php`.

**2. Definir constantes**

Crea las siguientes constantes:

- `NOMBRE_EMPRESA`: nombre de la empresa.
- `IVA`: porcentaje de IVA que aplica la empresa.
- `CIUDAD`: localidad donde se encuentra la empresa.

**3. Crear variables**

Define las siguientes variables:

- Nombre del responsable.
- Correo electrónico.
- Teléfono de contacto.
- Año de creación.
- Número de empleados.
- Estado de actividad de la empresa.

Utiliza tipos de datos adecuados para almacenar cada información.

**4. Realizar operaciones**

Define una variable con el precio de un servicio informático.

Calcula:

- El importe del IVA.
- El precio final con IVA incluido.
- El precio de dos servicios iguales.
- El precio medio de tres servicios con diferentes importes.

Muestra todos los resultados en la página.

**5. Trabajar con cadenas de texto**

Crea una variable con el nombre del responsable y realiza las siguientes operaciones:

- Elimina los espacios sobrantes.
- Muestra el nombre en mayúsculas.
- Muestra el nombre en minúsculas.
- Calcula la longitud de la cadena.
- Concatena el nombre y los apellidos.

**6. Crear un array indexado**

Define un array con, al menos, cinco servicios informáticos ofrecidos por la empresa.

Muestra todos sus elementos en una lista HTML utilizando `print_r()` o accediendo individualmente a sus posiciones.

**7. Crear un array asociativo**

Crea un array que almacene los datos de un empleado:

- Nombre.
- Apellidos.
- Departamento.
- Puesto.
- Correo electrónico.

Muestra la información en una tabla HTML.

**8. Utilizar información del servidor**

Muestra en la página los siguientes datos:

- Nombre del servidor.
- Ruta del archivo PHP ejecutado.
- Método HTTP de la petición.

Utiliza las variables predefinidas de PHP correspondientes.

**9. Comprobar los resultados**

Accede a la aplicación mediante:

`http://localhost/UP5_3/`

Comprueba que:

- Todas las variables muestran su contenido correctamente.
- Las constantes se utilizan correctamente.
- Las operaciones matemáticas ofrecen los resultados esperados.
- Las funciones de cadenas realizan las operaciones solicitadas.
- Los arrays almacenan y muestran correctamente la información.
- Los datos del servidor aparecen en la página.

### Entrega

Entrega un documento PDF que incluya:

- Portada con los datos del alumno.
- Explicación de la estructura del programa.
- Código completo de `index.php`.
- Capturas de pantalla del resultado obtenido.
- Explicación de las variables y constantes utilizadas.
- Justificación de los tipos de datos seleccionados.
- Explicación de las operaciones realizadas.
- Conclusiones personales.

Las capturas deberán estar centradas, ser legibles y acompañarse de una descripción técnica. Debe incluirse una captura final donde se aprecie el resultado completo de la aplicación.

**Criterio de evaluación:** c) Se ha reconocido la sintaxis básica de un lenguaje de guiones concreto.

**Resultado esperado:** el alumno debe ser capaz de interpretar y escribir código PHP básico, utilizando correctamente sus etiquetas, comentarios, instrucciones, variables, constantes, tipos de datos, operadores, cadenas de texto y arrays.

-->