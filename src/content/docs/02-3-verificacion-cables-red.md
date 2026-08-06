---
title: 📡 UP2.3. Verificación y certificación del cableado - CE2.c)
---

### RA2. Integra ordenadores y periféricos en redes cableadas e inalámbricas, evaluando su funcionamiento y prestaciones.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| c) Se han utilizado comprobadores para verificar la conectividad de distintos tipos de cables. | Práctico | 5 % | 

### 1. Introducción
Una vez fabricado un cable de red, **no debe utilizarse directamente en una instalación** sin comprobar previamente que funciona correctamente. Durante el proceso de montaje pueden producirse errores como un orden incorrecto de los conductores, conectores mal crimpados, cortes internos o cortocircuitos. Estos fallos pueden impedir completamente la comunicación o reducir considerablemente el rendimiento de la red.

Por este motivo, los técnicos utilizan **comprobadores de cableado** (*Cable Testers*), instrumentos que permiten verificar rápida y fácilmente que un cable cumple las especificaciones necesarias para su correcto funcionamiento. En este criterio aprenderemos a utilizar los comprobadores de cableado, interpretar sus resultados y detectar los fallos más habituales que pueden aparecer durante la fabricación de cables Ethernet.

### 2. ¿Qué es un comprobador de cableado?
Un **comprobador de cableado** (Cable Tester) es un dispositivo electrónico diseñado para verificar el correcto funcionamiento de un cable de comunicaciones. Su función principal consiste en comprobar que cada conductor del cable está conectado correctamente entre ambos extremos. Además, algunos modelos avanzados permiten detectar:

- Cortocircuitos.
- Conductores cortados.
- Conductores intercambiados.
- Pares invertidos.
- Longitud aproximada del cable.
- Calidad del enlace.
- Distancia hasta el punto donde se encuentra una avería.

### 3. ¿Por qué es importante comprobar un cable?
Un cable aparentemente bien construido puede presentar errores internos que no son visibles a simple vista. Comprobar el cable antes de instalarlo permite:

- Detectar errores de montaje.
- Evitar problemas de conectividad.
- Reducir tiempos de reparación.
- Garantizar el funcionamiento de la instalación.
- Asegurar el máximo rendimiento de la red.

En instalaciones profesionales, **todos los cables deben verificarse antes de ponerse en servicio**.

### 4. Tipos de comprobadores
Existen diferentes tipos de comprobadores según el nivel de precisión requerido.

#### 4.1. Comprobadores básicos
Son los más utilizados en los laboratorios de formación. Son económicos y fáciles de utilizar. Permiten comprobar:

- Continuidad.
- Orden de los conductores.
- Cortocircuitos.
- Circuitos abiertos.
- Cruces de pares.

#### 4.2. Certificadores de cableado
Se emplean en instalaciones profesionales. Además de comprobar la continuidad, verifican que el cable cumple las especificaciones exigidas por una determinada categoría (Cat 5e, Cat 6, Cat 6A, etc.). Analizan aspectos como:

- Atenuación.
- Diafonía (NEXT).
- Pérdidas de retorno.
- Impedancia.
- Longitud exacta.

Estos equipos permiten certificar una instalación conforme a las normas internacionales.

#### 4.3. Reflectómetros (TDR)
Los equipos **TDR (Time Domain Reflectometer)** permiten localizar averías dentro de un cable. Son muy utilizados en el mantenimiento de grandes instalaciones. Calculan la distancia aproximada hasta:

- Un corte.
- Un cortocircuito.
- Una mala conexión.

### 5. Partes de un comprobador básico
La mayoría de comprobadores Ethernet están formados por dos módulos.

<img
  src="/PAR/diagrams/tester.png"
  alt="Comprobador básico"
  class="diagram-img"
  style="display: block; margin: 0 auto;"
  loading="lazy"
/>

- **Unidad principal:** envía las señales de prueba.
- **Unidad remota:** recibe las señales y devuelve el resultado.

Este sistema permite comprobar cables instalados entre diferentes habitaciones o armarios de comunicaciones.

### 6. Funcionamiento del comprobador
El comprobador envía una señal eléctrica por cada uno de los ocho conductores del cable. 
Si todos los conductores llegan correctamente al otro extremo, el equipo indica que el cable es correcto.
En caso contrario, el comprobador mostrará el tipo de error detectado.

#### 6.1. Comprobación de un cable directo

En un cable directo, ambos extremos siguen el mismo estándar. 
El comprobador mostrará una correspondencia directa entre los ocho pines.

```text
1 → 1
2 → 2
3 → 3
4 → 4
5 → 5
6 → 6
7 → 7
8 → 8
```
#### 6.2. Comprobación de un cable cruzado

En un cable cruzado, algunos conductores aparecen intercambiados de forma intencionada.
El comprobador mostrará una secuencia similar a la siguiente.

```text
1 → 3
2 → 6
3 → 1
6 → 2
4 → 4
5 → 5
7 → 7
8 → 8
```

### 7. Errores más frecuentes
Durante el montaje de un cable pueden producirse diversos errores.

#### 7.1. Circuito abierto
Uno de los conductores está roto o no llega al conector.

```text
1 → 1
2 → 2
3 → X
```
>👉**Consecuencias:** El cable no funciona correctamente y puede impedir completamente la comunicación.

#### 7.2. Cortocircuito
Dos conductores entran en contacto.

```text
2 ↔ 3
```
>👉**Consecuencias:** La comunicación falla y puede provocar errores intermitentes.

#### 7.3. Conductores intercambiados
Suele producirse por un error al ordenar los colores antes del crimpado. Dos hilos están conectados en posiciones incorrectas.

```text
1 → 2
2 → 1
```
>👉**Consecuencias:** La comunicación no funciona.

#### 7.4. Pares invertidos

Los conductores mantienen la continuidad pero los pares están mal organizados. 

>👉**Consecuencias:** Este error puede permitir cierta conectividad, pero reduce el rendimiento de la red y aumenta las interferencias.

#### 7.5. Mala crimpación
El conector RJ-45 no hace buen contacto con alguno de los conductores. 

>👉**Consecuencias:** Cortes intermitentes, reducción de velocidad y desconexiones.

### 8. Procedimiento para comprobar un cable
La comprobación de un cable Ethernet debe seguir una secuencia ordenada.

#### 8.1. Inspección visual
Antes de utilizar el comprobador conviene revisar:

- Estado del cable.
- Conectores.
- Orden de los colores.
- Posibles daños físicos.

#### 8.2. Conectar el cable
Un extremo del cable se conecta a la unidad principal y el otro a la unidad remota.

```text
Tester ───────── Cable ───────── Remoto
```

#### 8.3. Iniciar la prueba
Se pulsa el botón de comprobación. El comprobador enviará automáticamente las señales de prueba.

#### 8.4. Interpretar el resultado
Se comprueba que todos los pines aparecen correctamente conectados. Si existe algún error, deberá corregirse antes de utilizar el cable.

#### 8.5. Interpretación de resultados

| Resultado | Interpretación |
|------------|----------------|
| 1→1, 2→2...8→8 | Cable directo correcto. |
| 1→3, 2→6... | Cable cruzado correcto. |
| X | Conductor abierto. |
| Dos pines iguales | Cortocircuito. |
| Orden incorrecto | Conductores intercambiados. |

### 9. Caso práctico

Una empresa ha instalado el cableado de una nueva sala de informática con veinte puestos de trabajo. Antes de conectar los ordenadores al switch, el técnico debe comprobar que todos los cables Ethernet han sido correctamente fabricados y que no presentan errores de continuidad ni de crimpado. Durante la revisión, algunos cables muestran un funcionamiento correcto, mientras que otros presentan conductores intercambiados y conexiones abiertas.

> **Analiza los resultados obtenidos con el comprobador de cableado e identifica qué tipo de error presenta cada cable, indicando qué acciones serían necesarias para corregirlo antes de poner la instalación en funcionamiento.**