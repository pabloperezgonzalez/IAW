---
title: 🚀 UP5.4. Estructuras de control en PHP - CE5.d)
---

### RA5. Genera documentos Web utilizando lenguajes de guiones de servidor.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| d) Se han utilizado estructuras de control del lenguaje. | Práctico | 15 % |

### 1. Introducción
<!-- 

# UP5.4. Estructuras de control en PHP

## 1. Introducción a las estructuras de control

En programación, las instrucciones se ejecutan normalmente de forma secuencial, es decir, una detrás de otra, siguiendo el orden en el que aparecen en el código.

Sin embargo, para desarrollar aplicaciones web necesitamos que nuestros programas puedan tomar decisiones, repetir operaciones y ejecutar determinadas instrucciones dependiendo de las circunstancias.

Las **estructuras de control** permiten modificar el orden habitual de ejecución de un programa.

En PHP podemos distinguir tres grandes grupos:

- **Estructuras condicionales:** permiten ejecutar unas instrucciones u otras dependiendo de si se cumple una condición.
- **Estructuras repetitivas o bucles:** permiten ejecutar un bloque de instrucciones varias veces.
- **Estructuras de control de flujo:** permiten modificar el comportamiento de los bucles o finalizar su ejecución.

Estas estructuras son fundamentales para desarrollar aplicaciones web dinámicas.

Por ejemplo, en una aplicación de gestión de usuarios podemos necesitar:

- Comprobar si un usuario tiene más de 18 años.
- Mostrar un mensaje diferente dependiendo de su perfil.
- Recorrer una lista de productos para mostrarlos en una página.
- Repetir una operación mientras se cumpla una condición.
- Interrumpir un bucle cuando se encuentre un determinado elemento.

En esta unidad aprenderemos a utilizar estas estructuras mediante PHP y a integrarlas en documentos HTML para generar contenido dinámico.

## 2. Estructura condicional `if`

La estructura `if` permite ejecutar un bloque de instrucciones únicamente cuando se cumple una condición.

Su sintaxis básica es:

```php
if (condicion) {
    // Instrucciones que se ejecutan si la condición es verdadera
}
```

La condición debe producir un resultado verdadero (`true`) o falso (`false`).

**Ejemplo:**

```php
<?php
    $edad = 20;

    if ($edad >= 18) {
        echo "El usuario es mayor de edad.";
    }
?>
```

En este caso:

1. Se crea la variable `$edad` con valor `20`.
2. PHP comprueba si la edad es mayor o igual que 18.
3. Como la condición es verdadera, ejecuta el bloque de instrucciones.
4. Se muestra el mensaje correspondiente.

Si la edad fuera inferior a 18, no se ejecutaría el contenido del bloque.

### Utilización de operadores en las condiciones

Podemos utilizar los operadores de comparación y lógicos estudiados en la unidad anterior.

| Operador | Significado |
|:--:|:--|
| `==` | Igual a |
| `===` | Igual en valor y tipo |
| `!=` | Distinto de |
| `!==` | Distinto en valor o tipo |
| `>` | Mayor que |
| `<` | Menor que |
| `>=` | Mayor o igual que |
| `<=` | Menor o igual que |
| `&&` | Y lógico |
| `||` | O lógico |
| `!` | Negación |

**Ejemplo con varias condiciones:**

```php
<?php
    $edad = 22;
    $tieneCarnet = true;

    if ($edad >= 18 && $tieneCarnet === true) {
        echo "Puede acceder al servicio.";
    }
?>
```

En este ejemplo, las dos condiciones deben cumplirse para que se muestre el mensaje.

## 3. Estructuras condicionales `if...else` y `elseif`

En muchas ocasiones necesitamos ejecutar un bloque de instrucciones cuando se cumple una condición y otro diferente cuando no se cumple.

Para ello utilizamos `if...else`.

### Estructura `if...else`

Su sintaxis es:

```php
if (condicion) {
    // Instrucciones si la condición es verdadera
} else {
    // Instrucciones si la condición es falsa
}
```

**Ejemplo:**

```php
<?php
    $nota = 4;

    if ($nota >= 5) {
        echo "El alumno ha aprobado.";
    } else {
        echo "El alumno ha suspendido.";
    }
?>
```

El programa comprueba la nota y ejecuta únicamente uno de los dos bloques.

### Estructura `if...elseif...else`

Cuando tenemos varias posibilidades podemos utilizar `elseif`.

```php
if (condicion1) {
    // Instrucciones si se cumple la primera condición
} elseif (condicion2) {
    // Instrucciones si se cumple la segunda condición
} else {
    // Instrucciones si no se cumple ninguna condición
}
```

**Ejemplo: clasificación de calificaciones.**

```php
<?php
    $nota = 8;

    if ($nota < 5) {
        echo "Insuficiente";
    } elseif ($nota < 6) {
        echo "Suficiente";
    } elseif ($nota < 7) {
        echo "Bien";
    } elseif ($nota < 9) {
        echo "Notable";
    } else {
        echo "Sobresaliente";
    }
?>
```

El programa evalúa las condiciones en orden. Cuando encuentra una condición verdadera, ejecuta su bloque y no continúa comprobando las siguientes alternativas.

**Importante:** el orden de las condiciones puede cambiar el resultado del programa. Debemos plantearlas de forma que las posibilidades queden correctamente diferenciadas.

## 4. Estructura condicional `switch`

La estructura `switch` permite comparar el valor de una expresión con diferentes posibilidades.

Es especialmente útil cuando queremos ejecutar diferentes instrucciones dependiendo del valor de una misma variable.

Su sintaxis es:

```php
switch ($variable) {
    case valor1:
        // Instrucciones
        break;

    case valor2:
        // Instrucciones
        break;

    case valor3:
        // Instrucciones
        break;

    default:
        // Instrucciones si no coincide ningún caso
}
```

Los elementos principales son:

- `switch`: indica la expresión que vamos a evaluar.
- `case`: establece uno de los posibles valores.
- `break`: finaliza la ejecución del bloque `switch`.
- `default`: define las instrucciones que se ejecutan si no coincide ningún caso.

**Ejemplo: menú de una aplicación informática.**

```php
<?php
    $opcion = 2;

    switch ($opcion) {
        case 1:
            echo "Consultar usuarios";
            break;

        case 2:
            echo "Consultar productos";
            break;

        case 3:
            echo "Consultar pedidos";
            break;

        case 4:
            echo "Salir de la aplicación";
            break;

        default:
            echo "Opción no válida";
    }
?>
```

En este ejemplo, como `$opcion` contiene el valor `2`, se muestra el mensaje «Consultar productos».

### ¿Qué ocurre si olvidamos `break`?

Si omitimos `break`, PHP puede continuar ejecutando las instrucciones de los siguientes casos, aunque no coincidan con el valor inicial.

Por ello, debemos utilizarlo cuando queramos finalizar la ejecución de un caso.

### ¿Cuándo utilizar `if` y cuándo `switch`?

- Utilizaremos `if...elseif` cuando necesitemos evaluar condiciones complejas, rangos numéricos o diferentes operadores.
- Utilizaremos `switch` cuando queramos comparar una misma expresión con varios valores concretos.

## 5. Estructura repetitiva `while`

Los bucles permiten repetir un bloque de instrucciones mientras se cumpla una determinada condición.

La estructura `while` comprueba la condición antes de ejecutar el bloque.

Su sintaxis es:

```php
while (condicion) {
    // Instrucciones que se repiten
}
```

Mientras la condición sea verdadera, las instrucciones se ejecutarán nuevamente.

**Ejemplo: mostrar los números del 1 al 5.**

```php
<?php
    $contador = 1;

    while ($contador <= 5) {
        echo $contador . "<br>";

        $contador++;
    }
?>
```

El funcionamiento es el siguiente:

1. Se inicializa `$contador` con el valor `1`.
2. Se comprueba si `$contador` es menor o igual que `5`.
3. Si la condición es verdadera, se muestra su valor.
4. Se incrementa el contador en una unidad.
5. Se vuelve a comprobar la condición.
6. Cuando el contador llega a `6`, la condición deja de cumplirse y finaliza el bucle.

### Importancia de actualizar la condición

Es fundamental que dentro del bucle exista alguna operación que permita que la condición deje de cumplirse.

Por ejemplo, el siguiente código produciría un bucle infinito:

```php
<?php
    $contador = 1;

    while ($contador <= 5) {
        echo $contador;
    }
?>
```

El problema es que `$contador` nunca cambia de valor. Por tanto, la condición siempre será verdadera.

**Recomendación:** antes de utilizar un bucle `while`, debemos identificar claramente:

- El valor inicial.
- La condición de repetición.
- La operación que modifica la condición.

## 6. Estructura repetitiva `do...while`

La estructura `do...while` es similar a `while`, pero presenta una diferencia importante: primero ejecuta las instrucciones y después comprueba la condición.

Su sintaxis es:

```php
do {
    // Instrucciones que se ejecutan
} while (condicion);
```

Esto significa que el bloque se ejecutará al menos una vez, aunque la condición sea falsa desde el principio.

**Ejemplo:**

```php
<?php
    $contador = 1;

    do {
        echo "Número: " . $contador . "<br>";

        $contador++;
    } while ($contador <= 5);
?>
```

El resultado será:

```text
Número: 1
Número: 2
Número: 3
Número: 4
Número: 5
```

### Diferencia entre `while` y `do...while`

Veamos qué sucede cuando la condición es falsa desde el principio.

**Con `while`:**

```php
<?php
    $contador = 10;

    while ($contador <= 5) {
        echo $contador;
    }
?>
```

No se ejecuta ninguna instrucción porque la condición es falsa antes de comenzar.

**Con `do...while`:**

```php
<?php
    $contador = 10;

    do {
        echo $contador;
    } while ($contador <= 5);
?>
```

Se muestra el valor `10`, porque el bloque se ejecuta antes de comprobar la condición.

### ¿Cuándo utilizar `do...while`?

Es útil cuando necesitamos ejecutar una operación al menos una vez y después comprobar si debemos repetirla.

Por ejemplo:

- Mostrar un mensaje inicial.
- Ejecutar una primera operación.
- Procesar una acción antes de comprobar si se debe continuar.

## 7. Estructura repetitiva `for`

La estructura `for` permite repetir un bloque de instrucciones un número determinado de veces.

Es especialmente útil cuando conocemos de antemano cuántas repeticiones necesitamos realizar.

Su sintaxis es:

```php
for (inicializacion; condicion; actualizacion) {
    // Instrucciones que se repiten
}
```

Está formada por tres partes:

1. **Inicialización:** establece el valor inicial de la variable de control.
2. **Condición:** determina si el bucle debe continuar.
3. **Actualización:** modifica la variable de control después de cada repetición.

**Ejemplo: mostrar los números del 1 al 10.**

```php
<?php
    for ($i = 1; $i <= 10; $i++) {
        echo $i . "<br>";
    }
?>
```

En este ejemplo:

- `$i = 1` establece el valor inicial.
- `$i <= 10` determina cuándo debe finalizar el bucle.
- `$i++` incrementa el contador en cada repetición.

### Utilizar `for` para generar contenido HTML

Podemos utilizar un bucle `for` para generar elementos HTML de forma automática.

```php
<?php
    echo "<h2>Tabla de multiplicar del 5</h2>";

    for ($i = 1; $i <= 10; $i++) {
        echo "5 x " . $i . " = " . (5 * $i) . "<br>";
    }
?>
```

El servidor ejecutará el bucle y generará diez líneas de contenido que posteriormente recibirá el navegador.

### Contadores decrecientes

También podemos utilizar `for` para realizar una cuenta atrás.

```php
<?php
    for ($i = 10; $i >= 1; $i--) {
        echo $i . "<br>";
    }

    echo "Fin de la cuenta atrás";
?>
```

## 8. Recorrido de arrays mediante `foreach` y bucles anidados

La estructura `foreach` está diseñada para recorrer los elementos de un array.

Es especialmente útil cuando trabajamos con listas de productos, usuarios, asignaturas o cualquier conjunto de información.

Su sintaxis básica es:

```php
foreach ($array as $elemento) {
    // Instrucciones para cada elemento
}
```

En cada repetición, la variable `$elemento` recibe el valor correspondiente a una posición del array.

**Ejemplo: recorrer una lista de productos.**

```php
<?php
    $productos = [
        "Teclado",
        "Ratón",
        "Monitor",
        "Impresora"
    ];

    foreach ($productos as $producto) {
        echo $producto . "<br>";
    }
?>
```

### Recorrer arrays asociativos

También podemos recorrer arrays que utilizan claves y valores.

```php
<?php
    $alumno = [
        "nombre" => "Laura",
        "edad" => 20,
        "curso" => "2º ASIR"
    ];

    foreach ($alumno as $clave => $valor) {
        echo $clave . ": " . $valor . "<br>";
    }
?>
```

En este caso:

- `$clave` contiene el nombre del campo.
- `$valor` contiene la información almacenada en ese campo.

### Generar tablas HTML con `foreach`

Podemos utilizar `foreach` para generar automáticamente una tabla HTML.

```php
<?php
    $productos = [
        ["nombre" => "Teclado", "precio" => 25],
        ["nombre" => "Ratón", "precio" => 15],
        ["nombre" => "Monitor", "precio" => 150]
    ];
?>

<h2>Catálogo de productos</h2>

<table border="1">
    <tr>
        <th>Producto</th>
        <th>Precio</th>
    </tr>

    <?php foreach ($productos as $producto): ?>
        <tr>
            <td><?= htmlspecialchars($producto["nombre"]) ?></td>
            <td><?= number_format($producto["precio"], 2) ?> €</td>
        </tr>
    <?php endforeach; ?>
</table>
```

Esta técnica permite generar tablas dinámicas a partir de arrays y, posteriormente, podrá utilizarse también con información recuperada de bases de datos.

### Bucles anidados

Un bucle anidado es aquel que se encuentra dentro de otro bucle.

Se utiliza cuando necesitamos recorrer estructuras de datos con varios niveles.

**Ejemplo:**

```php
<?php
    for ($fila = 1; $fila <= 3; $fila++) {

        for ($columna = 1; $columna <= 3; $columna++) {

            echo "Fila " . $fila . " - Columna " . $columna . "<br>";

        }

    }
?>
```

El bucle exterior controla las filas y el interior las columnas.

Por cada repetición del bucle exterior, el bucle interior se ejecuta completamente.

## 9. Control del flujo de ejecución: `break`, `continue` y estructuras alternativas

Además de las estructuras condicionales y repetitivas, PHP dispone de instrucciones que permiten modificar el comportamiento habitual de los bucles.

### Instrucción `break`

La instrucción `break` permite finalizar inmediatamente un bucle o una estructura `switch`.

**Ejemplo: detener un bucle cuando se encuentra un número.**

```php
<?php
    for ($i = 1; $i <= 10; $i++) {

        if ($i == 6) {
            break;
        }

        echo $i . "<br>";
    }
?>
```

El resultado será:

```text
1
2
3
4
5
```

Cuando `$i` llega a `6`, se ejecuta `break` y el bucle finaliza.

### Instrucción `continue`

La instrucción `continue` permite saltar la repetición actual y pasar directamente a la siguiente.

**Ejemplo: mostrar los números del 1 al 10 excepto el 5.**

```php
<?php
    for ($i = 1; $i <= 10; $i++) {

        if ($i == 5) {
            continue;
        }

        echo $i . "<br>";
    }
?>
```

El resultado mostrará todos los números excepto el `5`.

### Estructura alternativa: operador ternario

PHP también permite utilizar el operador ternario para expresar una condición sencilla en una única instrucción.

Su sintaxis es:

```php
condicion ? valor_si_verdadero : valor_si_falso;
```

**Ejemplo:**

```php
<?php
    $edad = 20;

    $mensaje = ($edad >= 18) ? "Mayor de edad" : "Menor de edad";

    echo $mensaje;
?>
```

El operador ternario permite simplificar determinadas condiciones, aunque no es recomendable utilizarlo cuando la lógica es compleja.

### Estructura alternativa: `match`

PHP incorpora también la expresión `match`, disponible desde PHP 8.0, que permite devolver un valor dependiendo de una expresión.

A diferencia de `switch`, `match` utiliza comparación estricta, devuelve un resultado y no necesita instrucciones `break`.

**Ejemplo:**

```php
<?php
    $opcion = 2;

    $mensaje = match ($opcion) {
        1 => "Consultar usuarios",
        2 => "Consultar productos",
        3 => "Consultar pedidos",
        default => "Opción no válida"
    };

    echo $mensaje;
?>
```

`match` resulta útil cuando queremos asignar un resultado a partir de varios valores posibles. Para los ejemplos de esta unidad, seguiremos utilizando principalmente `if`, `switch` y los bucles tradicionales.

### Comparativa de las estructuras de control

| Estructura | Función principal | Cuándo utilizarla |
|:--|:--|:--|
| `if` | Ejecutar instrucciones si se cumple una condición | Comprobar una condición |
| `if...else` | Elegir entre dos alternativas | Aprobado o suspenso |
| `elseif` | Evaluar varias condiciones | Clasificar calificaciones |
| `switch` | Comparar una expresión con distintos valores | Menús de opciones |
| `while` | Repetir mientras se cumpla una condición | Repeticiones de duración variable |
| `do...while` | Ejecutar y después comprobar la condición | Operaciones que deben ejecutarse al menos una vez |
| `for` | Repetir un número determinado de veces | Contadores y operaciones repetitivas |
| `foreach` | Recorrer los elementos de un array | Listas de productos o usuarios |
| `break` | Finalizar un bucle o un `switch` | Detener una búsqueda |
| `continue` | Saltar una repetición | Omitir determinados elementos |
| `match` | Seleccionar un resultado según un valor | Asociar opciones con resultados |

## 10. Actividades propuestas: programación con estructuras de control en PHP

### Objetivo

Aplicar las estructuras de control de PHP para desarrollar pequeños programas que permitan tomar decisiones, repetir operaciones y generar contenido dinámico.

Todas las actividades se realizarán utilizando PHP y podrán combinarse con HTML para mostrar los resultados en el navegador.

### Actividad 1. Comprobación de mayoría de edad

**Estructuras:** `if`, `else` y operadores de comparación.

Crea un archivo `actividad1.php` que:

1. Defina una variable `$edad`.
2. Compruebe si la persona tiene 18 años o más.
3. Muestre un mensaje indicando si es mayor o menor de edad.
4. Añada una segunda condición para comprobar si tiene 65 años o más.
5. Muestre un mensaje específico para cada situación.

**Ampliación:** comprueba también si la edad está comprendida entre 18 y 30 años.

### Actividad 2. Clasificación de calificaciones

**Estructuras:** `if`, `elseif` y `else`.

Crea un programa que almacene una nota numérica entre 0 y 10 y muestre su calificación correspondiente:

- Menor que 5: Insuficiente.
- Desde 5 hasta menos de 6: Suficiente.
- Desde 6 hasta menos de 7: Bien.
- Desde 7 hasta menos de 9: Notable.
- Desde 9 hasta 10: Sobresaliente.

Además, el programa deberá comprobar que la nota se encuentra dentro del intervalo permitido.

Si la nota es inferior a 0 o superior a 10, deberá mostrar un mensaje de error.

### Actividad 3. Menú de administración

**Estructuras:** `switch` y `break`.

Desarrolla un programa que simule el menú principal de una aplicación de administración de sistemas.

Define una variable `$opcion` y utiliza `switch` para mostrar las siguientes opciones:

1. Gestión de usuarios.
2. Gestión de servidores.
3. Gestión de bases de datos.
4. Gestión de copias de seguridad.
5. Salir.

El programa deberá mostrar un mensaje diferente según la opción seleccionada.

Si se introduce una opción inexistente, deberá mostrar «Opción no válida».

**Ampliación:** añade una opción para mostrar la fecha y hora actuales del servidor utilizando PHP.

### Actividad 4. Tabla de multiplicar

**Estructura:** `for`.

Crea un programa que almacene un número en una variable `$numero` y genere su tabla de multiplicar desde el 1 hasta el 10.

El resultado deberá mostrarse en una tabla HTML con tres columnas:

- Número.
- Multiplicador.
- Resultado.

**Ampliación:** permite generar las tablas de multiplicar de los números del 1 al 10 utilizando bucles anidados.

### Actividad 5. Cuenta atrás

**Estructuras:** `while` y `do...while`.

Desarrolla dos programas diferentes:

- El primero deberá realizar una cuenta atrás desde 10 hasta 0 utilizando `while`.
- El segundo deberá realizar la misma operación utilizando `do...while`.

Comprueba qué sucede cuando el valor inicial es inferior al límite establecido y explica las diferencias entre ambas estructuras.

### Actividad 6. Gestión de productos

**Estructura:** `foreach`.

Crea un array asociativo multidimensional con, al menos, cinco productos informáticos.

Cada producto deberá contener:

- Nombre.
- Categoría.
- Precio.
- Unidades disponibles.

Utiliza `foreach` para recorrer el array y generar una tabla HTML con todos los productos.

Además, utiliza una condición `if` para mostrar:

- «Disponible» si existen unidades.
- «Agotado» si no quedan unidades.

**Ampliación:** calcula el valor total del inventario multiplicando el precio de cada producto por sus unidades disponibles.

### Actividad 7. Búsqueda de un usuario

**Estructuras:** `foreach`, `if` y `break`.

Define un array con varios nombres de usuarios.

Crea una variable `$usuarioBuscado` y utiliza un bucle `foreach` para localizarlo.

El programa deberá:

1. Recorrer todos los usuarios.
2. Comparar cada elemento con el usuario buscado.
3. Mostrar un mensaje cuando encuentre una coincidencia.
4. Finalizar la búsqueda mediante `break`.
5. Informar si el usuario no existe en el array.

### Actividad 8. Filtrado de números

**Estructuras:** `for`, `if` y `continue`.

Crea un programa que recorra los números del 1 al 50.

Deberá mostrar únicamente los números pares y utilizar `continue` para omitir los impares.

**Ampliación:**

- Calcula cuántos números pares existen.
- Calcula la suma de todos los números pares.
- Muestra el resultado al finalizar el bucle.

### Actividad 9. Calculadora de operaciones

**Estructuras:** `switch`, `if` y operadores aritméticos.

Crea una calculadora que almacene dos números y una operación en tres variables.

Las operaciones disponibles serán:

- Suma.
- Resta.
- Multiplicación.
- División.

Utiliza `switch` para seleccionar la operación.

El programa deberá comprobar que no se intenta realizar una división entre cero.

Muestra los dos operandos, la operación seleccionada y el resultado.

### Actividad 10. Proyecto integrador: panel de administración de una tienda informática

**Estructuras:** `if`, `elseif`, `switch`, `for`, `while`, `foreach`, `break` y `continue`.

Desarrolla una pequeña aplicación web que simule un panel de administración de una tienda informática.

El programa deberá utilizar un array multidimensional para almacenar los productos de la tienda.

Cada producto tendrá:

- Identificador.
- Nombre.
- Categoría.
- Precio.
- Unidades disponibles.

La aplicación deberá incluir las siguientes funcionalidades:

**1. Mostrar el catálogo**

Utiliza `foreach` para recorrer los productos y generar una tabla HTML.

**2. Comprobar el estado del inventario**

Utiliza `if` para mostrar si cada producto está disponible o agotado.

Además, identifica los productos que tengan menos de cinco unidades y muestra un aviso de existencias bajas.

**3. Calcular el valor del inventario**

Utiliza un bucle para recorrer los productos y calcular el valor total del inventario.

La fórmula será:

`Valor del inventario = Precio × Unidades disponibles`

**4. Clasificar los productos por precio**

Utiliza `if...elseif...else` para clasificar los productos:

- Menos de 50 €: Económico.
- Desde 50 € hasta menos de 200 €: Gama media.
- Desde 200 € hasta menos de 500 €: Gama alta.
- 500 € o más: Profesional.

**5. Crear un menú de administración**

Utiliza `switch` para mostrar las siguientes opciones:

1. Mostrar todos los productos.
2. Mostrar productos agotados.
3. Mostrar productos con pocas existencias.
4. Calcular el valor total del inventario.
5. Mostrar productos de una categoría determinada.
6. Salir.

**6. Aplicar filtros**

Utiliza `foreach`, `if` y `continue` para mostrar únicamente los productos que cumplan las condiciones de cada consulta.

**7. Comprobar el funcionamiento**

Verifica que todas las opciones del menú muestran los resultados correctos y que los cálculos realizados son coherentes con los datos almacenados.

### Entrega de las actividades

Las actividades deberán entregarse en un documento PDF que incluya:

- Portada con los datos del alumno.
- Código PHP completo de cada actividad.
- Capturas de pantalla de los resultados obtenidos.
- Explicación de las estructuras de control utilizadas.
- Descripción de las condiciones y repeticiones implementadas.
- Identificación de los errores encontrados y explicación de su resolución.
- Conclusiones personales.

Las capturas deberán estar centradas, ser legibles y acompañarse de una descripción técnica. En el proyecto integrador se incluirán capturas de todas las funcionalidades del panel de administración.

**Criterio de evaluación:** d) Se han utilizado estructuras de control del lenguaje.

**Resultado esperado:** el alumno debe ser capaz de utilizar correctamente las estructuras condicionales, los bucles y las instrucciones de control de flujo de PHP para desarrollar programas que tomen decisiones, repitan operaciones y generen contenido dinámico.

-->