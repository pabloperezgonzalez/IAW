---
title: 🚀 UP5.5. Funciones y organización del código PHP - CE5.e)
---

### RA5. Genera documentos Web utilizando lenguajes de guiones de servidor.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| e) Se han definido y utilizado funciones. | Práctico | 10 % |

### 1. Introducción
<!-- 

# UP5.5. Funciones y organización del código PHP

## 1. Introducción a las funciones en PHP

Cuando desarrollamos aplicaciones web, es habitual que determinadas operaciones tengan que realizarse varias veces. Por ejemplo, calcular el precio de un producto con IVA, comprobar los datos de un usuario, mostrar información o realizar cálculos matemáticos.

Si escribimos las mismas instrucciones repetidamente, nuestro código puede hacerse demasiado extenso y difícil de mantener.

Para solucionar este problema, PHP permite definir **funciones**, que son bloques de código diseñados para realizar una tarea concreta y que pueden ejecutarse tantas veces como sea necesario.

Las funciones permiten:

- Reutilizar código sin tener que escribirlo repetidamente.
- Organizar los programas en bloques independientes.
- Facilitar la lectura y comprensión del código.
- Reducir los errores derivados de repetir instrucciones.
- Simplificar el mantenimiento de las aplicaciones.
- Separar las diferentes responsabilidades de un programa.

Por ejemplo, imaginemos que una tienda informática necesita calcular el precio final de varios productos aplicando un IVA del 21 %.

Sin utilizar funciones, tendríamos que repetir las operaciones para cada producto. En cambio, podemos crear una función que realice el cálculo y utilizarla tantas veces como necesitemos.

En esta unidad aprenderemos a definir, utilizar y organizar funciones en PHP, trabajando con parámetros, argumentos, valores de retorno, ámbito de las variables y funciones incorporadas en el lenguaje.

## 2. Definición y llamada de funciones

En PHP, una función se define mediante la palabra reservada `function`, seguida del nombre de la función y unos paréntesis.

La sintaxis básica es:

```php
function nombreFuncion() {
    // Instrucciones que realizará la función
}
```

Una vez definida, podemos ejecutar la función escribiendo su nombre seguido de paréntesis.

A esta operación se le denomina **llamada a la función**.

**Ejemplo:**

```php
<?php
    function mostrarBienvenida() {
        echo "Bienvenido a nuestra aplicación web";
    }

    // Llamada a la función
    mostrarBienvenida();
?>
```

En este ejemplo:

1. Se define la función `mostrarBienvenida()`.
2. Dentro de ella se incluye una instrucción `echo`.
3. Posteriormente se llama a la función.
4. PHP ejecuta las instrucciones que contiene.
5. Se muestra el mensaje en pantalla.

Una función puede llamarse tantas veces como sea necesario.

```php
<?php
    function mostrarBienvenida() {
        echo "<p>Bienvenido a nuestra tienda informática</p>";
    }

    mostrarBienvenida();
    mostrarBienvenida();
    mostrarBienvenida();
?>
```

El mensaje aparecerá tres veces.

### Reglas para nombrar funciones

Los nombres de las funciones deben cumplir determinadas reglas:

- Deben comenzar por una letra o un guion bajo (`_`).
- Pueden contener letras, números y guiones bajos.
- No pueden comenzar por un número.
- No pueden contener espacios.
- No deben coincidir con nombres de funciones ya existentes.

Es recomendable utilizar nombres descriptivos que indiquen claramente la tarea que realiza cada función.

Por ejemplo:

```php
<?php
    function calcularPrecioFinal() {
        // Código de la función
    }

    function comprobarUsuario() {
        // Código de la función
    }

    function mostrarProductos() {
        // Código de la función
    }
?>
```

Una buena elección de nombres facilita la comprensión y el mantenimiento de los programas.

## 3. Funciones con parámetros y argumentos

En muchas ocasiones necesitamos que una función trabaje con información diferente cada vez que se ejecuta.

Para ello utilizamos los **parámetros**, que permiten recibir datos desde el lugar donde se llama a la función.

Un parámetro es una variable definida en la declaración de la función.

Un argumento es el valor concreto que se proporciona cuando se realiza la llamada.

La sintaxis es:

```php
function nombreFuncion($parametro1, $parametro2) {
    // Instrucciones que utilizan los parámetros
}
```

**Ejemplo: función que muestra un saludo personalizado.**

```php
<?php
    function saludarUsuario($nombre) {
        echo "Bienvenido, " . htmlspecialchars($nombre);
    }

    saludarUsuario("Carlos");
    saludarUsuario("Laura");
    saludarUsuario("Miguel");
?>
```

En este caso:

- `$nombre` es el parámetro.
- `"Carlos"`, `"Laura"` y `"Miguel"` son los argumentos.
- La misma función puede utilizarse con diferentes valores.

### Funciones con varios parámetros

Una función puede recibir tantos parámetros como necesite.

```php
<?php
    function mostrarDatosAlumno($nombre, $curso, $modulo) {
        echo "Nombre: " . htmlspecialchars($nombre) . "<br>";
        echo "Curso: " . htmlspecialchars($curso) . "<br>";
        echo "Módulo: " . htmlspecialchars($modulo) . "<br>";
    }

    mostrarDatosAlumno(
        "Carlos",
        "2º ASIR",
        "Implantación de Aplicaciones Web"
    );
?>
```

Esta función recibe tres parámetros y muestra la información correspondiente.

### Parámetros con valores predeterminados

PHP permite establecer valores predeterminados para determinados parámetros.

Si al llamar a la función no se proporciona ese argumento, se utilizará el valor establecido.

```php
<?php
    function mostrarMensaje($nombre, $mensaje = "Bienvenido") {
        echo $mensaje . ", " . htmlspecialchars($nombre);
    }

    mostrarMensaje("Carlos");
    echo "<br>";

    mostrarMensaje("Laura", "Buenas tardes");
?>
```

El primer caso utilizará el mensaje predeterminado. En el segundo, se utilizará el mensaje proporcionado en la llamada.

Los parámetros opcionales deben situarse después de los parámetros obligatorios para evitar problemas de uso.

## 4. Valores de retorno: `return`

Hasta ahora hemos creado funciones que ejecutan instrucciones, por ejemplo, mostrando mensajes mediante `echo`.

Sin embargo, muchas funciones necesitan realizar un cálculo y devolver el resultado para que pueda utilizarse posteriormente.

Para ello utilizamos la instrucción `return`.

La sintaxis básica es:

```php
function nombreFuncion($parametro) {
    // Operaciones

    return resultado;
}
```

La instrucción `return` finaliza la ejecución de la función y devuelve un valor al lugar desde el que se realizó la llamada.

**Ejemplo: calcular el precio con IVA.**

```php
<?php
    function calcularPrecioConIVA($precio) {
        $iva = 0.21;

        $precioFinal = $precio + ($precio * $iva);

        return $precioFinal;
    }

    $resultado = calcularPrecioConIVA(100);

    echo "Precio final: " . $resultado . " €";
?>
```

El funcionamiento es el siguiente:

1. Se llama a `calcularPrecioConIVA(100)`.
2. La función recibe el valor `100` en el parámetro `$precio`.
3. Calcula el importe del IVA.
4. Calcula el precio final.
5. Devuelve el resultado mediante `return`.
6. El valor devuelto se almacena en `$resultado`.
7. Finalmente, se muestra el resultado.

### Diferencia entre `echo` y `return`

Es importante distinguir ambas instrucciones:

| `echo` | `return` |
|:--|:--|
| Muestra información en la salida | Devuelve un valor al código que llamó a la función |
| No proporciona un resultado para almacenarlo directamente | Permite almacenar el resultado en una variable |
| Se utiliza para mostrar contenido | Se utiliza para obtener resultados de operaciones |
| No finaliza necesariamente la función | Finaliza la ejecución de la función |

**Ejemplo comparativo:**

```php
<?php
    function mostrarSuma($a, $b) {
        echo $a + $b;
    }

    function calcularSuma($a, $b) {
        return $a + $b;
    }

    mostrarSuma(10, 5);

    $resultado = calcularSuma(10, 5);

    echo "<br>El resultado almacenado es: " . $resultado;
?>
```

La segunda función resulta más flexible porque podemos utilizar el resultado en otras operaciones.

Por ejemplo:

```php
<?php
    $resultado = calcularSuma(10, 5);

    $doble = $resultado * 2;

    echo $doble;
?>
```

**Recomendación:** cuando una función realiza cálculos o procesa información, suele ser preferible devolver el resultado mediante `return` en lugar de mostrarlo directamente.

## 5. Tipos de parámetros y paso de argumentos

PHP permite pasar información a las funciones de diferentes maneras.

Los dos mecanismos principales son:

- Paso por valor.
- Paso por referencia.

### Paso por valor

Por defecto, los argumentos se pasan por valor.

Esto significa que la función recibe una copia del valor de la variable. Las modificaciones realizadas dentro de la función no alteran la variable original.

**Ejemplo:**

```php
<?php
    function incrementar($numero) {
        $numero++;
        echo "Dentro de la función: " . $numero . "<br>";
    }

    $valor = 10;

    incrementar($valor);

    echo "Fuera de la función: " . $valor;
?>
```

El resultado será:

```text
Dentro de la función: 11
Fuera de la función: 10
```

La variable original mantiene su valor porque la función ha trabajado con una copia.

### Paso por referencia

Cuando necesitamos que una función modifique directamente una variable original, podemos utilizar el símbolo `&` delante del parámetro.

**Ejemplo:**

```php
<?php
    function incrementar(&$numero) {
        $numero++;
    }

    $valor = 10;

    incrementar($valor);

    echo $valor;
?>
```

El resultado será:

```text
11
```

En este caso, la función ha modificado la variable original.

### Comparación

| Característica | Paso por valor | Paso por referencia |
|:--|:--|:--|
| Sintaxis | `function ejemplo($dato)` | `function ejemplo(&$dato)` |
| Qué recibe | El valor del argumento | Una referencia a la variable |
| Modifica la variable original | No, en el caso habitual | Sí |
| Uso habitual | Procesar datos sin modificar el original | Modificar directamente una variable |

El paso por referencia debe utilizarse cuando sea necesario modificar el valor original. Si no necesitamos hacerlo, es preferible utilizar el paso por valor para que el comportamiento de la función sea más sencillo de comprender.

## 6. Ámbito de las variables: locales y globales

El ámbito de una variable determina desde qué partes del programa puede utilizarse.

En PHP debemos distinguir principalmente entre variables locales y variables globales.

### Variables locales

Una variable local es aquella que se define dentro de una función y únicamente puede utilizarse dentro de ella.

```php
<?php
    function mostrarNombre() {
        $nombre = "Carlos";

        echo $nombre;
    }

    mostrarNombre();
?>
```

La variable `$nombre` existe dentro de la función y no puede utilizarse directamente fuera de ella.

### Variables globales

Una variable global es aquella que se define fuera de una función.

Por defecto, no está disponible directamente dentro del ámbito de una función.

```php
<?php
    $empresa = "Informática Pérez";

    function mostrarEmpresa() {
        echo $empresa;
    }

    mostrarEmpresa();
?>
```

Este ejemplo no funciona como se espera, porque la función no tiene acceso directo a la variable global `$empresa`.

Podemos acceder a ella mediante la palabra reservada `global`:

```php
<?php
    $empresa = "Informática Pérez";

    function mostrarEmpresa() {
        global $empresa;

        echo $empresa;
    }

    mostrarEmpresa();
?>
```

También podemos utilizar el array superglobal `$GLOBALS`:

```php
<?php
    $empresa = "Informática Pérez";

    function mostrarEmpresa() {
        echo $GLOBALS["empresa"];
    }

    mostrarEmpresa();
?>
```

### Variables estáticas

Las variables locales habituales se crean al entrar en una función y dejan de estar disponibles al finalizar su ejecución.

Si necesitamos que una variable local conserve su valor entre distintas llamadas a una función, podemos utilizar `static`.

```php
<?php
    function contadorVisitas() {
        static $contador = 0;

        $contador++;

        echo "Visitas: " . $contador . "<br>";
    }

    contadorVisitas();
    contadorVisitas();
    contadorVisitas();
?>
```

El resultado será:

```text
Visitas: 1
Visitas: 2
Visitas: 3
```

La variable estática conserva su valor entre llamadas a la función durante la misma ejecución del programa.

**Buenas prácticas:** es recomendable utilizar parámetros y valores de retorno para intercambiar información entre funciones. El uso excesivo de variables globales puede dificultar el mantenimiento y la comprensión del código.

## 7. Funciones incorporadas en PHP

PHP dispone de una gran cantidad de funciones incorporadas que permiten realizar operaciones habituales sin tener que programarlas desde cero.

Estas funciones forman parte del propio lenguaje y pueden utilizarse directamente.

A continuación, se muestran algunas de las más utilizadas.

### Funciones matemáticas

| Función | Utilidad | Ejemplo |
|:--|:--|:--|
| `round()` | Redondea un número | `round(15.678, 2)` |
| `ceil()` | Redondea hacia arriba | `ceil(15.2)` |
| `floor()` | Redondea hacia abajo | `floor(15.8)` |
| `abs()` | Obtiene el valor absoluto | `abs(-20)` |
| `max()` | Obtiene el valor máximo | `max(10, 20, 30)` |
| `min()` | Obtiene el valor mínimo | `min(10, 20, 30)` |
| `rand()` | Genera un número aleatorio | `rand(1, 100)` |

### Funciones para cadenas de texto

| Función | Utilidad |
|:--|:--|
| `strlen()` | Obtiene la longitud en bytes de una cadena |
| `strtoupper()` | Convierte una cadena a mayúsculas |
| `strtolower()` | Convierte una cadena a minúsculas |
| `trim()` | Elimina espacios al principio y al final |
| `str_replace()` | Sustituye partes de una cadena |
| `substr()` | Extrae una parte de una cadena |
| `htmlspecialchars()` | Convierte caracteres especiales para mostrarlos de forma segura en HTML |

### Funciones para arrays

| Función | Utilidad |
|:--|:--|
| `count()` | Cuenta los elementos de un array |
| `array_push()` | Añade elementos al final de un array |
| `array_pop()` | Elimina el último elemento |
| `sort()` | Ordena un array por valores |
| `in_array()` | Comprueba si un valor existe en un array |
| `array_sum()` | Calcula la suma de los valores |

### Funciones relacionadas con fechas

| Función | Utilidad |
|:--|:--|
| `date()` | Formatea una fecha y hora |
| `time()` | Obtiene la marca de tiempo actual |
| `strtotime()` | Convierte una expresión de fecha en una marca de tiempo |

### Ejemplo práctico

```php
<?php
    $precios = [25.50, 15.75, 100, 49.99];

    $cantidad = count($precios);
    $total = array_sum($precios);
    $precioMedio = $total / $cantidad;

    echo "Productos: " . $cantidad . "<br>";
    echo "Importe total: " . round($total, 2) . " €<br>";
    echo "Precio medio: " . round($precioMedio, 2) . " €<br>";

    echo "Fecha actual: " . date("d/m/Y");
?>
```

Estas funciones permiten simplificar el código y aprovechar herramientas que PHP ya proporciona.

Antes de programar una función desde cero, conviene comprobar si PHP incorpora alguna que realice la operación que necesitamos.

## 8. Funciones con arrays, tipos de datos y parámetros variables

Cuando desarrollamos aplicaciones web, es habitual que las funciones tengan que trabajar con estructuras de datos más complejas o recibir diferentes cantidades de información.

PHP proporciona mecanismos para trabajar con estos casos.

### Devolver arrays mediante `return`

Una función puede devolver un array completo, no solamente un número o una cadena de texto.

```php
<?php
    function obtenerDatosEmpresa() {
        $empresa = [
            "nombre" => "Informática Pérez",
            "ciudad" => "Valencia",
            "empleados" => 12
        ];

        return $empresa;
    }

    $datos = obtenerDatosEmpresa();

    echo $datos["nombre"] . "<br>";
    echo $datos["ciudad"] . "<br>";
    echo $datos["empleados"];
?>
```

Esto permite agrupar información relacionada y devolverla en una única operación.

### Declaración de tipos de parámetros y retorno

PHP permite indicar qué tipos de datos esperamos recibir y qué tipo de dato debe devolver una función.

Esto se conoce como declaración de tipos.

```php
<?php
    function calcularArea(float $base, float $altura): float {
        return ($base * $altura) / 2;
    }

    $area = calcularArea(10, 5);

    echo $area;
?>
```

En este ejemplo:

- `float $base` indica que el parámetro espera un número decimal.
- `float $altura` indica lo mismo para el segundo parámetro.
- `: float` indica que la función debe devolver un valor decimal.

Algunos tipos que podemos utilizar son:

| Tipo | Descripción |
|:--|:--|
| `int` | Número entero |
| `float` | Número decimal |
| `string` | Cadena de texto |
| `bool` | Valor verdadero o falso |
| `array` | Array |
| `void` | La función no devuelve un valor |
| `mixed` | Permite distintos tipos de datos |

También podemos declarar que una función no devuelve ningún valor:

```php
<?php
    function mostrarAviso(string $mensaje): void {
        echo htmlspecialchars($mensaje);
    }

    mostrarAviso("Operación completada");
?>
```

### Parámetros variables

En ocasiones no sabemos cuántos argumentos recibirá una función.

PHP permite utilizar el operador `...` para recibir un número variable de argumentos.

```php
<?php
    function calcularSuma(...$numeros): int|float {
        $total = 0;

        foreach ($numeros as $numero) {
            $total += $numero;
        }

        return $total;
    }

    echo calcularSuma(10, 20);
    echo "<br>";

    echo calcularSuma(10, 20, 30, 40);
?>
```

En este ejemplo, la función puede recibir dos, tres, cuatro o más números y calcular su suma.

El parámetro `...$numeros` recoge los argumentos en un array.

### Funciones anónimas

PHP también permite crear funciones sin asignarles un nombre directamente.

Estas funciones se conocen como funciones anónimas y pueden almacenarse en variables.

```php
<?php
    $saludar = function($nombre) {
        return "Bienvenido, " . $nombre;
    };

    echo $saludar("Carlos");
?>
```

Son útiles cuando necesitamos definir una operación que se utilizará en un contexto concreto, aunque en esta unidad daremos prioridad a las funciones tradicionales con nombre.

## 9. Organización del código mediante funciones y buenas prácticas

En una aplicación web real podemos llegar a tener cientos o miles de líneas de código.

Por ello, es fundamental organizar correctamente las funciones y separar las diferentes responsabilidades del programa.

### Separar funciones en archivos

PHP permite guardar las funciones en archivos independientes y utilizarlas desde otros documentos.

Por ejemplo, podemos crear la siguiente estructura:

```text
UP5_5/
│
├── index.php
│
└── funciones.php
```

En el archivo `funciones.php` definiremos las funciones que utilizaremos en la aplicación:

```php
<?php

function calcularPrecioConIVA(float $precio): float {
    return $precio * 1.21;
}

function calcularDescuento(float $precio, float $descuento): float {
    return $precio - ($precio * $descuento / 100);
}

function mostrarProducto(string $nombre, float $precio): void {
    echo "<p>";
    echo htmlspecialchars($nombre);
    echo ": ";
    echo number_format($precio, 2) . " €";
    echo "</p>";
}

?>
```

En el archivo `index.php` incluiremos las funciones:

```php
<?php
    require_once "funciones.php";

    $precio = 100;

    $precioFinal = calcularPrecioConIVA($precio);

    mostrarProducto("Teclado", $precioFinal);
?>
```

La instrucción `require_once` incorpora el contenido del archivo indicado una sola vez durante la ejecución del programa.

### Diferencias entre `include`, `require`, `include_once` y `require_once`

| Instrucción | Funcionamiento |
|:--|:--|
| `include` | Incorpora un archivo. Si no se encuentra, genera una advertencia y la ejecución puede continuar |
| `require` | Incorpora un archivo. Si no se encuentra, genera un error que impide continuar normalmente |
| `include_once` | Incorpora un archivo una sola vez |
| `require_once` | Incorpora un archivo obligatorio una sola vez |

Cuando un archivo contiene funciones imprescindibles para que la aplicación funcione, suele ser recomendable utilizar `require_once`.

### Buenas prácticas al definir funciones

Para desarrollar aplicaciones mantenibles debemos seguir algunas recomendaciones:

1. Cada función debería realizar una tarea concreta.
2. Los nombres deben describir claramente su finalidad.
3. Es recomendable utilizar parámetros para recibir información.
4. Es preferible utilizar `return` para devolver resultados.
5. Debemos evitar depender innecesariamente de variables globales.
6. Hay que evitar duplicar código.
7. Las funciones deben tener una responsabilidad bien definida.
8. Es conveniente indicar los tipos de parámetros y de retorno cuando resulte adecuado.
9. Debemos documentar las funciones más importantes.
10. Es necesario comprobar su funcionamiento con diferentes valores.

### Documentar funciones

Podemos utilizar comentarios PHPDoc para explicar la finalidad de una función, sus parámetros y el valor que devuelve.

```php
<?php

/**
 * Calcula el precio de un producto aplicando el IVA.
 *
 * @param float $precio Precio sin IVA.
 * @return float Precio final con IVA.
 */
function calcularPrecioConIVA(float $precio): float {
    return $precio * 1.21;
}

?>
```

Una buena organización del código facilita que otros desarrolladores puedan comprender y mantener nuestra aplicación.

## 10. Actividades propuestas: programación con funciones en PHP

### Objetivo

Aprender a definir, utilizar y organizar funciones en PHP mediante diferentes ejercicios prácticos que permitan reutilizar código, trabajar con parámetros y devolver resultados.

Todas las actividades se realizarán utilizando PHP y podrán combinarse con HTML para mostrar los resultados en el navegador.

### Actividad 1. Función de bienvenida

**Contenidos:** definición y llamada de funciones.

Crea un archivo `actividad1.php` y define una función llamada `mostrarBienvenida()`.

La función deberá mostrar un mensaje de bienvenida a la aplicación.

Realiza cinco llamadas a la función y comprueba que el mensaje aparece cinco veces.

**Ampliación:** crea otra función que muestre el nombre del módulo profesional y el curso.

### Actividad 2. Saludo personalizado

**Contenidos:** parámetros y argumentos.

Define una función llamada `saludarUsuario()` que reciba un nombre como parámetro.

La función deberá mostrar un mensaje personalizado.

Realiza llamadas utilizando, al menos, cinco nombres diferentes.

**Ampliación:** añade un segundo parámetro que permita indicar el tipo de saludo. Si no se proporciona, deberá utilizar el mensaje «Bienvenido».

### Actividad 3. Calculadora básica

**Contenidos:** parámetros y valores de retorno.

Crea cuatro funciones:

- `sumar()`
- `restar()`
- `multiplicar()`
- `dividir()`

Cada función deberá recibir dos números y devolver el resultado correspondiente mediante `return`.

En el caso de la división, comprueba que el segundo número no sea cero.

Muestra los resultados de las cuatro operaciones en una página web.

### Actividad 4. Cálculo de precios de una tienda

**Contenidos:** funciones con parámetros y retorno.

Define las siguientes funciones:

- `calcularIVA()`: recibe un precio y devuelve el importe del IVA.
- `calcularPrecioFinal()`: recibe un precio y un porcentaje de IVA y devuelve el precio final.
- `calcularDescuento()`: recibe un precio y un porcentaje de descuento y devuelve el importe descontado.

Utiliza las funciones para calcular el precio final de cinco productos informáticos.

Muestra una tabla HTML con:

- Nombre del producto.
- Precio inicial.
- Importe del IVA.
- Descuento aplicado.
- Precio final.

### Actividad 5. Conversor de unidades

**Contenidos:** funciones y reutilización de código.

Crea funciones para realizar las siguientes conversiones:

- Metros a centímetros.
- Centímetros a metros.
- Kilómetros a metros.
- Metros a kilómetros.
- Grados Celsius a Fahrenheit.

Cada función deberá recibir el valor que se quiere convertir y devolver el resultado.

Prueba cada función con, al menos, tres valores diferentes.

### Actividad 6. Gestión de arrays mediante funciones

**Contenidos:** arrays y funciones.

Crea un array con las notas de diez alumnos.

Define las siguientes funciones:

- `calcularMedia()`: devuelve la media de las notas.
- `obtenerNotaMaxima()`: devuelve la nota más alta.
- `obtenerNotaMinima()`: devuelve la nota más baja.
- `contarAprobados()`: devuelve el número de alumnos aprobados.
- `contarSuspensos()`: devuelve el número de alumnos suspensos.

Muestra todos los resultados en una tabla HTML.

**Ampliación:** crea una función que reciba una nota y devuelva la calificación correspondiente.

### Actividad 7. Comprobación de usuarios

**Contenidos:** funciones, parámetros y valores booleanos.

Crea un array asociativo con los datos de varios usuarios.

Cada usuario deberá tener:

- Nombre.
- Correo electrónico.
- Rol.
- Estado de actividad.

Define una función `buscarUsuario()` que reciba el array de usuarios y un nombre.

La función deberá comprobar si el usuario existe y devolver `true` o `false`.

Define otra función llamada `mostrarUsuariosActivos()` que recorra el array y muestre únicamente los usuarios activos.

### Actividad 8. Funciones con paso por referencia

**Contenidos:** paso por valor y paso por referencia.

Crea una función llamada `incrementarStock()` que reciba una variable por referencia y aumente su valor en cinco unidades.

Comprueba qué sucede con el valor original después de llamar a la función.

Después, crea otra función que reciba el mismo dato por valor y compara los resultados.

Explica las diferencias entre ambos mecanismos.

### Actividad 9. Organización de funciones en diferentes archivos

**Contenidos:** organización del código y `require_once`.

Crea la siguiente estructura:

```text
UP5_5_Actividad9/
│
├── index.php
│
├── funciones.php
│
└── datos.php
```

En `datos.php` define un array con cinco productos informáticos.

En `funciones.php` define las siguientes funciones:

- `mostrarProductos()`: muestra todos los productos.
- `calcularValorInventario()`: calcula el valor total del inventario.
- `buscarProducto()`: busca un producto por su nombre.
- `mostrarProductosAgotados()`: muestra los productos sin existencias.

En `index.php` incorpora los archivos necesarios mediante `require_once` y utiliza las funciones para mostrar la información.

Comprueba que la aplicación funciona correctamente y que las funciones pueden reutilizarse desde el archivo principal.

### Actividad 10. Proyecto integrador: biblioteca de funciones para una tienda informática

**Contenidos:** definición, utilización y organización de funciones.

Desarrolla una pequeña aplicación web que simule el sistema de gestión de una tienda informática.

El objetivo será crear una biblioteca de funciones PHP que permita gestionar los productos y realizar diferentes operaciones.

#### Estructura del proyecto

Organiza el proyecto de la siguiente manera:

```text
UP5_5_Proyecto/
│
├── index.php
│
├── funciones/
│   ├── productos.php
│   ├── calculos.php
│   └── validaciones.php
│
└── datos/
    └── inventario.php
```

#### 1. Crear el inventario

En `inventario.php`, define un array multidimensional con, al menos, diez productos informáticos.

Cada producto deberá incluir:

- Identificador.
- Nombre.
- Categoría.
- Precio.
- Unidades disponibles.

#### 2. Crear las funciones de productos

En `productos.php`, define las siguientes funciones:

- `mostrarProductos()`: muestra todos los productos.
- `buscarProducto()`: busca un producto por su identificador.
- `mostrarProductosPorCategoria()`: filtra los productos por categoría.
- `mostrarProductosAgotados()`: muestra los productos sin existencias.

#### 3. Crear las funciones de cálculo

En `calculos.php`, define:

- `calcularIVA()`: calcula el importe del IVA.
- `calcularPrecioFinal()`: calcula el precio con IVA.
- `calcularDescuento()`: aplica un descuento.
- `calcularValorInventario()`: calcula el valor económico de todos los productos.
- `calcularUnidadesTotales()`: suma las unidades disponibles.

#### 4. Crear las funciones de validación

En `validaciones.php`, define:

- `validarPrecio()`: comprueba que el precio sea válido y positivo.
- `validarStock()`: comprueba que las unidades disponibles sean iguales o superiores a cero.
- `validarIdentificador()`: comprueba que el identificador recibido tenga un formato válido.

#### 5. Crear el archivo principal

En `index.php`, incorpora los archivos necesarios mediante `require_once`.

Utiliza las funciones creadas para mostrar:

- El catálogo completo.
- Los productos de una categoría.
- Los productos agotados.
- El valor total del inventario.
- El número total de unidades.
- El precio final de un producto con IVA.
- El resultado de aplicar un descuento.

#### 6. Comprobar el funcionamiento

Verifica que:

- Todas las funciones reciben correctamente sus parámetros.
- Los valores de retorno son correctos.
- Las funciones pueden reutilizarse.
- Los archivos están correctamente organizados.
- Los datos se muestran de forma comprensible.
- Los valores incorrectos son detectados por las funciones de validación.

### Entrega de las actividades

Entrega un documento PDF que incluya:

- Portada con los datos del alumno.
- Código PHP completo de las actividades.
- Capturas de pantalla de los resultados obtenidos.
- Explicación de las funciones definidas.
- Identificación de los parámetros y argumentos utilizados.
- Explicación de los valores devueltos mediante `return`.
- Comparación entre paso por valor y paso por referencia.
- Descripción de la organización de los archivos.
- Errores encontrados y explicación de su resolución.
- Conclusiones personales.

Las capturas deberán estar centradas, ser legibles y acompañarse de una descripción técnica. En el proyecto integrador deberán mostrarse las diferentes funcionalidades de la aplicación.

**Criterio de evaluación:** e) Se han definido y utilizado funciones.

**Resultado esperado:** el alumno debe ser capaz de definir y llamar funciones en PHP, utilizar parámetros y argumentos, devolver valores, trabajar con diferentes ámbitos de variables y organizar el código en funciones reutilizables y archivos independientes.

-->