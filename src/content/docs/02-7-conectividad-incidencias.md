---
title: 📡 UP2.7. Comprobación de la conectividad y resolución de incidencias - CE2.g)
---

### RA2. Integra ordenadores y periféricos en redes cableadas e inalámbricas, evaluando su funcionamiento y prestaciones.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| g) Se ha comprobado la conectividad entre diversos dispositivos y adaptadores inalámbricos sobre distintas configuraciones. | Práctico | 10 % | 

### 1. Introducción

Una vez que los dispositivos han sido conectados e integrados en una red, es necesario comprobar que pueden comunicarse correctamente entre sí. La **comprobación de la conectividad** permite verificar que la infraestructura de red funciona correctamente, detectar posibles errores de configuración y garantizar que todos los equipos pueden acceder a los recursos y servicios disponibles.

En este criterio aprenderemos a comprobar la conectividad entre dispositivos conectados mediante redes cableadas e inalámbricas, utilizando distintas herramientas de diagnóstico y analizando las incidencias más habituales.

### 2. ¿Qué es la conectividad de red?
La **conectividad** es la capacidad que tienen dos o más dispositivos para intercambiar información a través de una red. Una conectividad correcta implica que los equipos pueden:

- Comunicarse entre sí.
- Compartir recursos.
- Acceder a servidores.
- Navegar por Internet.
- Utilizar aplicaciones de red.

Si alguno de estos procesos falla, será necesario localizar el origen del problema.

### 3. Requisitos para que exista conectividad
Para que dos dispositivos puedan comunicarse correctamente deben cumplirse varios requisitos.

#### 3.1. Conexión física o inalámbrica
Debe existir un enlace operativo entre ambos equipos. Por ejemplo:

- Cable Ethernet correctamente conectado.
- Cobertura Wi-Fi suficiente.
- Punto de acceso operativo.

#### 3.2. Configuración IP correcta
Cada dispositivo debe disponer de:

- Dirección IP válida.
- Máscara de subred.
- Puerta de enlace (si es necesaria).
- Servidor DNS correctamente configurado.

#### 3.3. Adaptador de red operativo
El adaptador debe:

- Estar habilitado.
- Tener instalado el controlador correspondiente.
- Funcionar correctamente.

#### 3.4. Dispositivos de interconexión activos
Los switches, routers y puntos de acceso deben encontrarse correctamente configurados y en funcionamiento.

### 4. Tipos de comprobaciones
Durante una verificación de red suelen realizarse diferentes comprobaciones.

#### 4.1. Comprobación física
Consiste en verificar:

- Estado del cable.
- LED de enlace.
- Alimentación de los dispositivos.
- Estado del punto de acceso.

#### 4.2. Comprobación lógica
Consiste en revisar:

- Dirección IP.
- Máscara.
- Gateway.
- DNS.
- Tabla de rutas.

#### 4.3. Comprobación funcional
Permite verificar que los servicios funcionan correctamente. Por ejemplo:

- Acceso a Internet.
- Acceso a un servidor.
- Impresión en red.
- Acceso a carpetas compartidas.

### 5. Herramientas de diagnóstico
Los sistemas operativos incorporan numerosas herramientas para comprobar la conectividad.

#### 5.1. Comando `ping`
Es la herramienta más utilizada para comprobar si un dispositivo responde en la red. Ejemplo:

```bash
ping 192.168.1.1
```

✅ Si el equipo responde:

```text
Respuesta desde 192.168.1.1
Tiempo = 2 ms
```

❌ Si no existe comunicación:

```text
Tiempo de espera agotado.
```

👉 El comando `ping` permite comprobar:

- Existencia de conectividad.
- Tiempo de respuesta.
- Pérdida de paquetes.
- Estabilidad de la comunicación.

#### 5.2. Comando `tracert` / `traceroute`
Muestra el recorrido que siguen los paquetes hasta llegar al destino.

Windows:

```cmd
tracert www.google.es
```

Linux:

```bash
traceroute www.google.es
```

👉 Permite detectar:

- Saltos intermedios.
- Routers.
- Puntos donde se interrumpe la comunicación.

#### 5.3. Comando `ipconfig`
Disponible en Windows.

```cmd
ipconfig
```

👉 Permite comprobar:

- Dirección IP.
- Máscara.
- Gateway.

#### 5.4. Comando `ipconfig /all`
Muestra información más completa. Incluye:

- Dirección MAC.
- Estado DHCP.
- DNS.
- Adaptadores instalados.

#### 5.5. Comando `ip addr`
En Linux:

```bash
ip addr
```

👉 Permite visualizar:

- Interfaces de red.
- Direcciones IP.
- Estado del enlace.

#### 5.6. Comando `ip route`
Muestra la tabla de rutas.

```bash
ip route
```

👉 Permite comprobar si el equipo conoce cómo acceder a otras redes.

### 6. Comprobación de una red cableada
En una red Ethernet conviene seguir este procedimiento.

```text
                  Cable conectado
                        ↓
                  LED encendido
                        ↓
                  Dirección IP correcta
                        ↓
                  Ping al gateway
                        ↓
                  Ping a otro equipo
                        ↓
                  Acceso a Internet
```

Si todas las pruebas son correctas, la conectividad es adecuada.

### 7. Comprobación de una red inalámbrica
En una red Wi-Fi deben verificarse algunos aspectos adicionales.

- Intensidad de la señal.
- SSID correcto.
- Contraseña.
- Seguridad WPA2 o WPA3.
- Canal utilizado.
- Banda de frecuencia.

Una mala cobertura puede provocar pérdidas de conectividad.

#### 7.1. Intensidad de la señal Wi-Fi
Una señal débil puede producir:

- Baja velocidad.
- Elevada latencia.
- Cortes de comunicación.
- Desconexiones.

La intensidad depende de:

- Distancia al punto de acceso.
- Obstáculos.
- Interferencias.
- Banda utilizada.

#### 7.2. Pruebas de conectividad
Las comprobaciones suelen realizarse siguiendo una secuencia.

##### Paso 1
Comprobar el adaptador de red.

##### Paso 2
Comprobar la dirección IP.

##### Paso 3
Realizar un `ping` al propio equipo. Verifica que la pila TCP/IP funciona correctamente.

```text
127.0.0.1
```

##### Paso 4
Realizar un `ping` al gateway. Permite comprobar la comunicación con el router.

##### Paso 5
Realizar un `ping` a otro equipo de la LAN. Comprueba la comunicación dentro de la red local.

##### Paso 6
Realizar un `ping` a una dirección pública. Permite verificar el acceso a Internet. Ejemplo:

```text
8.8.8.8
```

##### Paso 7
Realizar un `ping` a un nombre de dominio. Si funciona, significa que el servicio DNS también está operativo. Ejemplo:

```text
www.google.es
```

#### 7.3. Diagnóstico de problemas
Si una prueba falla debe analizarse el origen del problema.

| Síntoma | Posible causa |
|----------|---------------|
| No hay enlace | Cable o puerto defectuoso. |
| Sin dirección IP | DHCP no disponible. |
| No responde el gateway | Error de configuración IP. |
| No accede a Internet | Gateway o router incorrecto. |
| Responde a IP pero no a nombres | DNS mal configurado. |
| Wi-Fi muy lenta | Baja cobertura o interferencias. |

### 8. Buenas prácticas

Para comprobar la conectividad de una red es recomendable:

- Comenzar por las comprobaciones físicas.
- Revisar la configuración IP antes de modificar nada.
- Probar la conectividad paso a paso.
- Documentar las incidencias detectadas.
- Evitar realizar varios cambios simultáneamente.
- Utilizar siempre herramientas de diagnóstico adecuadas.

### 9. Caso práctico

Una empresa dispone de una red local formada por ordenadores conectados mediante **Ethernet**, varios ordenadores portátiles conectados por **Wi-Fi**, un servidor de archivos y un punto de acceso inalámbrico. Tras una actualización de la infraestructura, algunos equipos conectados por cable pueden acceder correctamente a Internet, mientras que varios portátiles inalámbricos no consiguen comunicarse con el servidor ni acceder a determinados recursos compartidos.

El administrador debe comprobar la conectividad entre los distintos dispositivos utilizando las herramientas de diagnóstico disponibles y determinar si el problema está relacionado con la configuración IP, la red inalámbrica, el punto de acceso o algún otro elemento de la infraestructura.

> **Analiza la situación planteada y describe el procedimiento que seguirías para comprobar la conectividad entre los distintos dispositivos, indicando qué herramientas utilizarías en cada fase del diagnóstico y cómo interpretarías los resultados obtenidos.**