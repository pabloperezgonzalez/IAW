---
title: 📡 UP2.1. Estándares de redes cableadas e inalámbricas - CE2.a)
---

### RA2. Integra ordenadores y periféricos en redes cableadas e inalámbricas, evaluando su funcionamiento y prestaciones.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| a) Se han identificado los estándares para redes cableadas e inalámbricas. | Teórico |  10 % | 

### 1. Introducción

En la actualidad, millones de dispositivos de diferentes fabricantes pueden comunicarse entre sí gracias a que todos siguen un conjunto de **estándares de comunicación**. Estos estándares definen cómo deben transmitirse los datos, qué características deben cumplir los dispositivos y qué normas deben seguir para garantizar la compatibilidad entre equipos.

Sin la existencia de estándares, un ordenador de un fabricante podría no ser capaz de comunicarse con un switch, un router o un punto de acceso fabricados por otra empresa. Por ello, los estándares constituyen la base sobre la que se diseñan todas las redes actuales, tanto cableadas como inalámbricas.

### 2. ¿Qué es un estándar de red?

Un **estándar de red** es un conjunto de normas técnicas que establecen cómo deben comunicarse los dispositivos de una red. Estas normas especifican aspectos como:

- El formato de las tramas.
- El tipo de cable utilizado.
- La velocidad de transmisión.
- El método de acceso al medio.
- Las características de los conectores.
- La compatibilidad entre dispositivos.

Gracias a los estándares, los equipos de distintos fabricantes pueden funcionar conjuntamente sin necesidad de realizar adaptaciones específicas.

### 3. ¿Por qué son importantes los estándares?

La utilización de estándares ofrece numerosas **ventajas**. Entre las más importantes destacan:

- ✅ Garantizan la interoperabilidad entre fabricantes.
- ✅ Facilitan la ampliación de las redes.
- ✅ Reducen los costes de implantación.
- ✅ Favorecen la innovación tecnológica.
- ✅ Permiten sustituir dispositivos sin modificar toda la infraestructura.
- ✅ Aseguran la compatibilidad de las nuevas tecnologías con las ya existentes.

Por ejemplo, un ordenador con una tarjeta Ethernet puede conectarse a un switch de cualquier fabricante siempre que ambos cumplan el estándar correspondiente.

### 4. Organismos de normalización

Los estándares de redes son desarrollados por organismos internacionales especializados. Los más importantes son los siguientes.

| Organismo | Función principal |
|-----------|-------------------|
| **IEEE (Institute of Electrical and Electronics Engineers)** | Desarrolla los estándares Ethernet (IEEE 802.3) y Wi-Fi (IEEE 802.11). |
| **ISO (International Organization for Standardization)** | Publica normas internacionales y desarrolló el modelo OSI. |
| **IETF (Internet Engineering Task Force)** | Desarrolla los protocolos de Internet como IP, TCP, UDP, DNS o HTTP. |
| **TIA/EIA (Telecommunications Industry Association / Electronic Industries Alliance)** | Define normas de cableado estructurado y conectores. |

En este criterio nos centraremos especialmente en los estándares desarrollados por el **IEEE**, ya que son los más utilizados en redes locales.

### 5. Estándares para redes cableadas

Las redes cableadas actuales utilizan principalmente la tecnología **Ethernet**. Ethernet es una familia de estándares desarrollados por el **IEEE** bajo la denominación **IEEE 802.3**. Actualmente constituye la tecnología más utilizada en redes LAN.

#### 5.1. Ethernet (IEEE 802.3)

**Ethernet** define aspectos como:

- El formato de las tramas.
- El método de acceso al medio.
- Las velocidades de transmisión.
- Los tipos de cable.
- Los conectores.
- Las distancias máximas.

Gracias a este estándar es posible conectar equipos de distintos fabricantes dentro de una misma red.

##### Evolución de Ethernet

Con el paso del tiempo Ethernet ha ido aumentando su velocidad.

| Estándar | Velocidad |
|-----------|----------:|
| Ethernet | 10 Mbps |
| Fast Ethernet | 100 Mbps |
| Gigabit Ethernet | 1 Gbps |
| 10 Gigabit Ethernet | 10 Gbps |
| 40 Gigabit Ethernet | 40 Gbps |
| 100 Gigabit Ethernet | 100 Gbps |

Actualmente, las redes empresariales utilizan mayoritariamente **Gigabit Ethernet (1 Gbps)**, mientras que los centros de datos emplean velocidades mucho más elevadas.

##### Tipos de cable utilizados en Ethernet

Dependiendo de la velocidad y la distancia necesaria, Ethernet puede utilizar distintos medios de transmisión. Los más habituales son:

- Cable de par trenzado (UTP, STP y FTP).
- Fibra óptica multimodo.
- Fibra óptica monomodo.

Cada uno de ellos presenta ventajas e inconvenientes que ya se estudiaron en el RA1.

##### Conector RJ-45

En las redes Ethernet sobre cable de cobre se utiliza habitualmente el conector **RJ-45**.

<img
  src="/PAR/diagrams/ethernet-rj45.jpg"
  alt="Conector RJ-45"
  class="diagram-img"
  style="width:500px; height:auto;"
  loading="lazy"
/>

Este conector dispone de **8 contactos eléctricos**, utilizados por los cuatro pares del cable de red.

##### Alimentación mediante Ethernet (PoE)

Algunas versiones del estándar IEEE 802.3 permiten transmitir energía eléctrica junto con los datos. Esta tecnología recibe el nombre de **Power over Ethernet (PoE)**. Permite alimentar dispositivos como:

- Cámaras IP.
- Teléfonos IP.
- Puntos de acceso Wi-Fi.
- Sensores IoT.

Su principal ventaja consiste en que no necesitan una fuente de alimentación independiente.

### 6. Estándares para redes inalámbricas

Las redes inalámbricas utilizan la familia de estándares **IEEE 802.11**, conocida comercialmente como **Wi-Fi**. Estos estándares permiten transmitir información mediante ondas de radio, eliminando la necesidad de utilizar cables.

#### 6.1. Wi-Fi (IEEE 802.11)

Wi-Fi define:

- Las bandas de frecuencia utilizadas.
- La velocidad máxima de transmisión.
- El alcance de la comunicación.
- El acceso compartido al medio.
- Los mecanismos básicos de seguridad.

Actualmente es la tecnología inalámbrica más utilizada en hogares, empresas y centros educativos.

##### Evolución de Wi-Fi

Al igual que Ethernet, Wi-Fi ha evolucionado considerablemente.

| Nombre comercial | Estándar IEEE | Frecuencia |
|------------------|---------------|------------|
| Wi-Fi 4 | 802.11n | 2,4 y 5 GHz |
| Wi-Fi 5 | 802.11ac | 5 GHz |
| Wi-Fi 6 | 802.11ax | 2,4 y 5 GHz |
| Wi-Fi 6E | 802.11ax | 6 GHz |
| Wi-Fi 7 | 802.11be | 2,4, 5 y 6 GHz |

Cada nueva generación mejora aspectos como:

- Velocidad.
- Capacidad.
- Eficiencia.
- Latencia.
- Número de dispositivos conectados.

##### Bandas de frecuencia

Las redes Wi-Fi pueden trabajar en distintas bandas.

| Banda de frecuencia | Características |
|:-----------:|:-----|
| 2,4 GHz | Mayor alcance, menor velocidad y mayor número de interferencias. | 
| 5 GHz | Menor alcance, mayor velocidad y menor nivel de interferencias. | 
| 6 GHz | Mayor ancho de banda, menor congestión y mejor rendimiento. Dispon| 

>📝 **Nota:** Banda de 6 GHz únicamente está disponible en Wi-Fi 6E y Wi-Fi 7.

##### Seguridad en redes inalámbricas

Las redes Wi-Fi incorporan mecanismos de seguridad para proteger la información. Los sistemas más utilizados son:

| Sistema | Situación actual |
|----------|------------------|
| WEP | Obsoleto e inseguro. |
| WPA | Obsoleto. |
| WPA2 | Muy utilizado. |
| WPA3 | Recomendado actualmente. |

Hoy en día se recomienda utilizar siempre **WPA3** o, cuando no sea posible, **WPA2**.

### 7. Comparativa entre Ethernet y Wi-Fi

| Característica | Ethernet | Wi-Fi |
|----------------|-----------|--------|
| Medio | Cable | Ondas de radio |
| Estándar | IEEE 802.3 | IEEE 802.11 |
| Movilidad | Baja | Muy alta |
| Velocidad | Muy alta | Alta |
| Interferencias | Muy bajas | Mayores |
| Seguridad | Muy elevada | Depende de la configuración |
| Instalación | Requiere cableado | Más sencilla |

Ambas tecnologías suelen utilizarse conjuntamente en las redes actuales.

### 8. Otras tecnologías inalámbricas

Aunque Wi-Fi es la tecnología más conocida, existen otros estándares inalámbricos utilizados en diferentes ámbitos.

| Tecnología | Aplicación principal |
|-------------|----------------------|
| Bluetooth (IEEE 802.15.1) | Conexión de periféricos. |
| Zigbee (IEEE 802.15.4) | Domótica e Internet de las Cosas (IoT). |
| NFC | Comunicación de muy corto alcance. |
| Redes móviles (4G/5G) | Acceso móvil a Internet. |

### 9. ¿Cómo elegir el estándar adecuado?

La elección depende de las necesidades de la instalación.

| Situación | Tecnología recomendada |
|------------|-----------------------|
| Aula de informática | Ethernet |
| Centro de datos | Ethernet de alta velocidad |
| Oficinas | Ethernet + Wi-Fi |
| Dispositivos móviles | Wi-Fi |
| Cámaras IP | Ethernet con PoE |
| Domótica | Zigbee o Wi-Fi |

En la práctica, la mayoría de las infraestructuras combinan tecnologías cableadas e inalámbricas.

### 10. Caso práctico

Un instituto va a construir un nuevo edificio destinado a impartir ciclos formativos de Informática. La infraestructura deberá incluir aulas con ordenadores de sobremesa, zonas comunes con cobertura Wi-Fi para alumnado y profesorado, cámaras IP de videovigilancia, teléfonos IP y varios puntos de acceso inalámbricos.

El departamento de informática debe seleccionar los estándares de red más adecuados para cada tipo de conexión, garantizando la compatibilidad entre dispositivos, un buen rendimiento y la posibilidad de ampliar la red en el futuro.

> **Analiza la infraestructura propuesta y determina qué estándares utilizarías para las redes cableadas e inalámbricas, justificando tu elección en función de las características de cada tecnología.**