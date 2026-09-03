---
title: 🌐 UP1.3. Procesamiento en cliente y servidor - CE1.d)
---

### RA1. Prepara el entorno de desarrollo y los servidores de aplicaciones Web instalando e integrando las funcionalidades necesarias.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| d) Se han reconocido las posibilidades de procesamiento en los entornos cliente y servidor. | Teórico | 10 % |

### 1. Introducción
En una aplicación Web, el procesamiento puede realizarse principalmente en dos lugares: **el cliente** y **el servidor**. El **cliente** suele ser el navegador del usuario, mientras que el **servidor** ejecuta la aplicación y gestiona los recursos necesarios. La distribución del procesamiento influye en:

- El rendimiento.
- La seguridad.
- El consumo de recursos.
- La experiencia del usuario.
- La escalabilidad de la aplicación.

Una aplicación Web puede combinar ambos tipos de procesamiento: **Cliente → Internet → Servidor**

### 2. Procesamiento en el cliente
El **procesamiento en el cliente** consiste en ejecutar código directamente en el dispositivo del usuario. El principal entorno de ejecución es el **navegador Web**. Las tecnologías más habituales son:

- HTML.
- CSS.
- JavaScript.
- WebAssembly.

Por ejemplo, JavaScript puede validar un formulario antes de enviarlo al servidor. Esto permite realizar determinadas operaciones sin necesidad de realizar una petición al servidor.

### 3. Ventajas del procesamiento en el cliente
Procesar determinadas tareas en el cliente proporciona varias ventajas:

- Reduce las peticiones al servidor.
- Disminuye el tráfico de red.
- Mejora la respuesta de la interfaz.
- Permite crear aplicaciones más interactivas.
- Aprovecha los recursos del dispositivo del usuario.

Por ejemplo, si una aplicación comprueba que un campo obligatorio está vacío mediante JavaScript, puede mostrar inmediatamente un mensaje de error.

**Usuario → JavaScript → Validación → Resultado**

No es necesario contactar con el servidor para realizar esa comprobación básica.

### 4. Limitaciones del procesamiento en el cliente
El procesamiento en el cliente también presenta limitaciones. El código se ejecuta en un dispositivo que **no controlamos completamente** y cuyos recursos pueden ser muy diferentes. Además:

- El usuario puede modificar el código ejecutado.
- El navegador puede tener limitaciones.
- El dispositivo puede tener poca potencia.
- No debemos confiar en el cliente para garantizar la seguridad.
- Algunas operaciones necesitan acceso a recursos protegidos del servidor.

Por este motivo, una validación realizada mediante JavaScript debe considerarse una **mejora de la experiencia de usuario**, pero no una medida de seguridad suficiente. Las comprobaciones importantes deben realizarse también en el servidor.

### 5. Procesamiento en el servidor
El **procesamiento en el servidor** consiste en ejecutar la lógica de la aplicación en un sistema controlado por la organización. Puede utilizar tecnologías como:

- PHP.
- Java.
- Python.
- Node.js.
- ASP.NET Core.

Por ejemplo: **Cliente → HTTP/HTTPS → Servidor Web → Aplicación → Base de datos**

El servidor puede encargarse de:

- Autenticar usuarios.
- Aplicar permisos.
- Procesar información.
- Acceder a bases de datos.
- Generar respuestas.
- Ejecutar operaciones que requieren mayor seguridad.

### 6. Ventajas del procesamiento en el servidor
El procesamiento en el servidor permite mantener bajo control la lógica y los recursos principales de la aplicación. Entre sus ventajas encontramos:

- Mayor control sobre la ejecución.
- Acceso seguro a bases de datos.
- Centralización de la información.
- Aplicación de políticas de seguridad.
- Facilidad para actualizar la aplicación.
- Posibilidad de utilizar recursos de servidores potentes.

Por ejemplo, las credenciales utilizadas para acceder a una base de datos **no deben enviarse al navegador**. La aplicación del servidor debe encargarse de realizar esa conexión.

### 7. Cliente frente a servidor
Podemos comparar ambos entornos:

| Característica | Cliente | Servidor |
|---|---|---|
| Ejecución | Navegador | Servidor |
| Tecnologías | JavaScript, HTML, CSS | PHP, Java, Python, Node.js |
| Recursos | Dispositivo del usuario | Infraestructura del servidor |
| Base de datos | No debería acceder directamente | Acceso controlado |
| Seguridad | Entorno no confiable | Entorno administrado |
| Actualizaciones | Dependen del cliente/navegador | Centralizadas |
| Uso habitual | Interfaz e interacción | Lógica y datos |

La elección de dónde realizar cada operación depende de sus requisitos.

### 8. Arquitecturas de procesamiento
Las aplicaciones modernas suelen combinar procesamiento en cliente y servidor.

#### 8.1. Aplicación tradicional
**Navegador → Servidor Web → Aplicación → Base de datos**

El servidor genera gran parte del contenido.

#### 8.2. Aplicación con procesamiento en cliente
**Navegador → JavaScript → API → Servidor → Base de datos**

En este modelo, el navegador ejecuta una parte importante de la lógica y utiliza APIs para obtener o enviar información. Ejemplos de aplicaciones que utilizan este enfoque son las **Single Page Applications (SPA)**.

### 9. Seguridad y distribución del procesamiento
La distribución del procesamiento debe tener en cuenta la **seguridad**. Nunca debemos confiar exclusivamente en las comprobaciones realizadas en el cliente. Por ejemplo:

**Cliente:** Comprueba que la contraseña tenga al menos 8 caracteres.

**Servidor:** Vuelve a comprobar la contraseña y decide si la operación está permitida.

Esto se debe a que un usuario puede modificar las peticiones enviadas desde el navegador. Por tanto:

> **Las validaciones del cliente mejoran la experiencia; las validaciones del servidor garantizan la seguridad y la integridad de la aplicación.**

### 10. Resumen
El procesamiento de una aplicación Web puede distribuirse entre el cliente y el servidor.

**Cliente:**

- Ejecuta JavaScript.
- Gestiona la interfaz.
- Realiza determinadas validaciones.
- Mejora la interacción con el usuario.
- Aprovecha los recursos del dispositivo.

**Servidor:**

- Ejecuta la lógica principal.
- Gestiona usuarios y permisos.
- Accede a las bases de datos.
- Protege la información.
- Controla los recursos de la aplicación.