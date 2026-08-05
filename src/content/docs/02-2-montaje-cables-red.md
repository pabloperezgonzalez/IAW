---
title: 📡 UP2.2. Montaje de cables de red Ethernet y consola - CE2.b)
---

### RA2. Integra ordenadores y periféricos en redes cableadas e inalámbricas, evaluando su funcionamiento y prestaciones.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| b) Se han montado cables directos, cruzados y de consola. | Práctico |  10 % | 

### 1. Introducción

Aunque las redes inalámbricas han adquirido una gran importancia en los últimos años, **la mayoría de las infraestructuras profesionales siguen utilizando redes cableadas** debido a su mayor velocidad, estabilidad y seguridad. Para que una red Ethernet funcione correctamente, no basta con disponer de ordenadores, switches o routers. También es imprescindible que el **cableado esté correctamente fabricado**, respetando el orden de los conductores y los estándares establecidos.

En este criterio aprenderemos a identificar los diferentes tipos de cables utilizados en redes Ethernet, conoceremos su utilidad y aprenderemos a montarlos siguiendo las normas **TIA/EIA-568A** y **TIA/EIA-568B**. Esta competencia es fundamental para cualquier administrador de redes, ya que permite instalar, ampliar y reparar infraestructuras de comunicaciones.

### 2. Objetivos del montaje de cables

El montaje correcto del cableado permite:

- Garantizar la comunicación entre dispositivos.
- Reducir errores y pérdidas de transmisión.
- Facilitar el mantenimiento de la red.
- Cumplir los estándares internacionales.
- Obtener el máximo rendimiento de la infraestructura.

### 3. Material necesario

Para fabricar un cable Ethernet se necesitan los siguientes materiales:

- Cable de par trenzado UTP, FTP o STP.
- Conectores RJ-45.
- Crimpadora para RJ-45.
- Pelacables.
- Tijeras o alicates de corte.
- Comprobador (tester) de cableado.

> En el siguiente criterio se estudiará el uso del comprobador de cables para verificar el montaje realizado.

### 4. El cable de par trenzado

El medio más utilizado en redes LAN es el **cable de par trenzado**. Está formado por **8 hilos de cobre**, agrupados en **4 pares trenzados**.

<img
  src="/PAR/diagrams/par-trenzado.jpg"
  alt="Estructura del cable de par trenzado"
  class="diagram-img"
  style="display: block; margin: 0 auto;"
  loading="lazy"
/>

El trenzado de los pares reduce las interferencias electromagnéticas y mejora la calidad de la transmisión.

### 5. Categorías del cable

Las categorías indican las prestaciones del cable.

| Categoría | Velocidad máxima | Uso habitual |
|-----------|-----------------:|--------------|
| Cat 5e | 1 Gbps | Redes domésticas y pequeñas empresas |
| Cat 6 | 1 Gbps (10 Gbps hasta 55 m) | Redes empresariales |
| Cat 6A | 10 Gbps | Empresas y centros de datos |
| Cat 7 | Más de 10 Gbps | Instalaciones especiales |

Actualmente, las instalaciones nuevas suelen realizarse con **Cat 6 o Cat 6A**.

### 6. El conector RJ-45

Las redes Ethernet utilizan el conector **RJ-45**, formado por ocho contactos metálicos.

<img
  src="/PAR/diagrams/conector-rj45.webp"
  alt="Conector RJ-45"
  class="diagram-img"
  style="width:350px; height:auto;"
  loading="lazy"
/>

Cada uno de los ocho pines corresponde a un conductor del cable. El orden de estos conductores debe respetar un estándar.

### 7. Estándares de cableado

Existen dos normas internacionales para ordenar los hilos del cable.

- TIA/EIA-568A
- TIA/EIA-568B

Ambas funcionan exactamente igual. La única diferencia es el orden de algunos pares de cables.

<img
  src="/PAR/diagrams/estandar-rj45.webp"
  alt="Estándares conector RJ-45"
  class="diagram-img"
  style="display: block; margin: 0 auto;"
  loading="lazy"
/>

La norma **568B** es la más utilizada actualmente.

### 8. Tipos de cables Ethernet

Dependiendo del orden de los conductores en sus extremos, los cables Ethernet pueden ser:

- Cable directo.
- Cable cruzado.
- Cable de consola.

Cada uno está diseñado para una finalidad diferente.

#### 8.1. Cable directo (Straight Through)

Un **cable directo** utiliza el mismo estándar en ambos extremos. Puede ser 568A - 568A ó 568B - 568B.

<img
  src="/PAR/diagrams/cable-directo-rj45"
  alt="Cable directo RJ-45"
  class="diagram-img"
  style="display: block; margin: 0 auto;"
  loading="lazy"
/>

#### 8.2. El cable cruzado (Crossover)

Un **cable cruzado** utiliza un estándar diferente en cada extremo. Puede ser 568A - 568B o viceversa.

<img
  src="/PAR/diagrams/cable-cruzado-rj45"
  alt="Cable cruzado RJ-45"
  class="diagram-img"
  style="display: block; margin: 0 auto;"
  loading="lazy"
/>

Al intercambiar los pares de transmisión y recepción, ambos dispositivos pueden enviar y recibir datos correctamente.

##### ¿Por qué actualmente casi no se utiliza?

La mayoría de tarjetas de red, switches y routers modernos incorporan la tecnología **Auto-MDI/MDIX**. Esta función detecta automáticamente si el dispositivo conectado necesita un cable directo o cruzado y adapta internamente las conexiones de transmisión y recepción.

Gracias a ello, en la mayoría de situaciones actuales basta con utilizar un **cable directo**, independientemente del tipo de dispositivos que se conecten.

💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡

## Ventajas del cable cruzado

- Permite conectar directamente dispositivos similares.
- No requiere un switch intermedio.
- Sigue siendo compatible con equipos antiguos.

---

## Inconvenientes

- Su uso ha quedado prácticamente sustituido por Auto-MDI/MDIX.
- Puede provocar confusión si no se identifica correctamente.
- Hoy en día apenas se utiliza en instalaciones nuevas.

---

## Comparativa entre cable directo y cable cruzado

| Característica | Cable directo | Cable cruzado |
|----------------|---------------|---------------|
| Estándares en ambos extremos | Igual (T568A-T568A o T568B-T568B) | Diferente (T568A-T568B) |
| Conecta dispositivos | Distintos | Del mismo tipo (tradicionalmente) |
| Uso actual | Muy frecuente | Poco habitual |
| Compatible con Auto-MDI/MDIX | Sí | Sí |

#### 8.3. Cable de consola

El **cable de consola** no transporta tráfico de red entre equipos. Su finalidad consiste en permitir la configuración de dispositivos de red mediante un puerto de administración.

```text
Ordenador

      │

Cable consola

      │

Router / Switch
```

##### ¿Para qué sirve?

Permite:

- Configurar un router por primera vez.
- Acceder a un switch sin dirección IP.
- Recuperar configuraciones.
- Resolver incidencias.

Sin este cable sería imposible configurar inicialmente muchos equipos profesionales.

##### Tipos de cable de consola

Dependiendo del fabricante, pueden utilizarse distintos conectores. Los más habituales son:

- USB ↔ RJ-45.
- USB ↔ USB-C.
- Serie DB9 ↔ RJ-45 (equipos antiguos).
- USB ↔ Micro USB.

Cisco utiliza actualmente cables USB y RJ-45 de consola en muchos de sus dispositivos.

# Procedimiento para fabricar un cable Ethernet

La fabricación de un cable Ethernet debe seguir siempre una secuencia ordenada.

## Paso 1. Cortar el cable

Se corta el cable con la longitud necesaria.

Debe dejarse un pequeño margen para facilitar el montaje.

---

## Paso 2. Retirar la cubierta exterior

Con ayuda de un pelacables se eliminan aproximadamente **2 o 3 cm** de la cubierta.

Es importante no dañar los conductores interiores.

---

## Paso 3. Separar los pares

Se desenrollan cuidadosamente los cuatro pares.

Debe mantenerse el trenzado lo máximo posible para evitar pérdidas de calidad.

---

## Paso 4. Ordenar los conductores

Los hilos se colocan siguiendo la norma elegida.

Por ejemplo:

```text
568B

Blanco/Naranja

Naranja

Blanco/Verde

Azul

Blanco/Azul

Verde

Blanco/Marrón

Marrón
```

---

## Paso 5. Igualar la longitud

Se cortan todos los conductores para que tengan exactamente la misma longitud.

---

## Paso 6. Introducir el conector

Los ocho conductores deben llegar hasta el fondo del RJ-45.

La cubierta exterior también debe entrar ligeramente en el conector para mejorar la resistencia mecánica.

---

## Paso 7. Crimpar

Se utiliza la crimpadora para fijar definitivamente el conector.

Los contactos metálicos perforan el aislamiento y establecen la conexión eléctrica.

---

## Paso 8. Verificar el cable

Finalmente se comprueba el funcionamiento mediante un comprobador de cableado.

Este procedimiento será estudiado en el siguiente criterio de evaluación.

---

# Buenas prácticas durante el montaje

Para obtener un cable de calidad conviene seguir estas recomendaciones:

- No desenrollar excesivamente los pares.
- No doblar el cable de forma brusca.
- No aplastar el cable.
- Utilizar conectores de calidad.
- Respetar el estándar de cableado.
- Verificar siempre el resultado con un tester.

---

# Errores habituales

Los errores más frecuentes durante el montaje son:

- Orden incorrecto de los conductores.
- Pines mal introducidos.
- Longitud desigual de los hilos.
- Cubierta exterior fuera del conector.
- Conductores dañados durante el pelado.
- Mala crimpación.

Estos errores pueden provocar pérdidas de conectividad o limitar la velocidad de la red.

---

# Comparativa de los distintos cables

| Tipo de cable | Estándares | Uso principal |
|---------------|------------|---------------|
| Directo | 568A-568A o 568B-568B | Conectar dispositivos diferentes. |
| Cruzado | 568A-568B | Conectar dispositivos iguales (principalmente en equipos antiguos). |
| Consola | Específico del fabricante | Configuración y administración de dispositivos de red. |

---

# Caso práctico

Una pequeña empresa va a instalar una nueva red local formada por varios ordenadores, un switch, un router y un punto de acceso inalámbrico. Antes de comenzar la instalación es necesario fabricar el cableado necesario para interconectar todos los dispositivos y disponer de un cable que permita realizar la configuración inicial del router.

El técnico deberá seleccionar el tipo de cable adecuado para cada conexión, montar correctamente los conectores RJ-45 siguiendo el estándar correspondiente y verificar posteriormente que el cableado cumple las especificaciones requeridas.

> **Analiza la instalación propuesta e indica qué tipo de cable utilizarías en cada conexión, justificando tu elección y describiendo el procedimiento básico de montaje de un cable Ethernet.**