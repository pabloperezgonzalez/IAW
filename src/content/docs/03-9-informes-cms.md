---
title: ☁️ UP3.9. Informes de acceso en CMS - CE3.i)
---

### RA3. Administra gestores de contenidos adaptándolos a los requerimientos y garantizando la integridad de la información.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| i) Se han obtenido informes de acceso. | Práctico | 5 % |

### 1. Introducción
Un sistema de gestión de contenidos (CMS), como WordPress, permite administrar páginas web, publicaciones, usuarios y funcionalidades mediante un panel de administración. Para conocer cómo se utiliza y cómo se comporta una instalación, es necesario recopilar y analizar información sobre los accesos y las solicitudes realizadas a la aplicación web.

Un **informe de acceso** es un documento o conjunto de datos que recoge información relacionada con las conexiones, las solicitudes HTTP y, dependiendo de las herramientas utilizadas, las acciones realizadas por los usuarios. Los principales objetivos de los informes de acceso son:

- Conocer qué recursos se solicitan y cuándo se producen las peticiones.
- Detectar errores de funcionamiento.
- Identificar patrones de acceso anómalos.
- Investigar intentos de acceso no autorizado.
- Analizar el uso de páginas y contenidos.
- Comprobar el funcionamiento de la autenticación.
- Obtener evidencias para diagnosticar incidencias.
- Facilitar las tareas de mantenimiento y seguridad.

### 2. Tipos de registros e informes de acceso
La información de una instalación WordPress puede obtenerse de diferentes fuentes. Cada una registra una parte distinta de la actividad.

#### 2.1. Registros del servidor web
Apache o Nginx pueden registrar las solicitudes HTTP y HTTPS recibidas por el servidor. En Apache suelen distinguirse dos tipos de registros:

- **Access log:** registra las peticiones recibidas y las respuestas generadas.
- **Error log:** registra errores y mensajes relacionados con el funcionamiento del servidor.

Un registro de acceso puede contener la dirección IP del cliente, la fecha y hora, el recurso solicitado, el método HTTP, el código de respuesta y el tamaño de la respuesta.

#### 2.2. Registros de WordPress
WordPress puede generar información relacionada con errores de PHP y, mediante determinadas extensiones, registrar eventos de seguridad o acciones de los usuarios. Por ejemplo, un plugin de auditoría puede registrar la publicación de una entrada, el cambio de una contraseña o la modificación de un usuario.

No obstante, **WordPress no proporciona de forma predeterminada un historial completo de todos los accesos y acciones realizados por cada usuario**. Para obtener ese tipo de información puede ser necesario configurar herramientas adicionales.

#### 2.3. Registros de autenticación y seguridad
Algunas herramientas permiten registrar eventos como:

- Intentos fallidos de inicio de sesión.
- Accesos correctos.
- Bloqueos de direcciones IP.
- Cambios en cuentas de usuario.
- Modificaciones de permisos.
- Detección de actividad sospechosa.

#### 2.4. Informes de analítica web
Las herramientas de analítica permiten conocer cómo se utiliza una web, por ejemplo, qué páginas reciben más visitas, cuáles son las fuentes de tráfico o cómo navegan los usuarios. Estos informes no equivalen a los registros técnicos del servidor. Su objetivo principal es analizar el uso del sitio, no documentar todas las solicitudes HTTP ni todos los eventos de seguridad.

### 3. Acceso a los registros de Apache en XAMPP
En el proyecto desarrollado durante el RA2 y RA3 se utiliza WordPress en un entorno local con XAMPP. Una de las fuentes principales para estudiar los accesos será, por tanto, el servidor Apache. En una instalación habitual de XAMPP en Windows, los registros suelen encontrarse en: `C:\xampp\apache\logs\`

Los archivos más relevantes suelen ser:

- `access.log`: contiene las solicitudes atendidas por Apache.
- `error.log`: contiene mensajes de error del servidor.

#### 3.1. Procedimiento de consulta

1. Abre el panel de control de XAMPP.
2. Comprueba que Apache está iniciado.
3. Accede a WordPress desde el navegador.
4. Abre el directorio de registros de Apache.
5. Consulta `access.log` con un editor de texto.
6. Identifica las entradas generadas por tus propias visitas.
7. Repite el procedimiento con `error.log` para comprobar si existen errores relacionados.

### 4. Interpretación de los registros HTTP
Para elaborar informes útiles es necesario interpretar correctamente los campos de los registros. Una petición HTTP contiene información sobre el recurso solicitado y el servidor registra el resultado de la operación. Los códigos de respuesta HTTP se agrupan en cinco categorías principales:

| Código | Significado | Ejemplo |
|---|---|---|
| `1xx` | Respuestas informativas | La solicitud continúa procesándose. |
| `2xx` | Operación satisfactoria | `200`: el recurso se ha servido correctamente. |
| `3xx` | Redirección | `301` o `302`: se redirige al cliente a otra URL. |
| `4xx` | Error del cliente | `404`: el recurso solicitado no existe. |
| `5xx` | Error del servidor | `500`: se ha producido un error interno. |

#### 4.1. Ejemplo de registro
Se muestra un ejemplo de registro:

```text
192.168.1.25 - - [21/Oct/2026:18:42:10 +0200] "GET /wordpress/ HTTP/1.1" 200 5240
192.168.1.25 - - [21/Oct/2026:18:42:12 +0200] "GET /wordpress/contacto/ HTTP/1.1" 404 310
192.168.1.25 - - [21/Oct/2026:18:42:15 +0200] "POST /wordpress/wp-login.php HTTP/1.1" 200 1800
192.168.1.25 - - [21/Oct/2026:18:42:18 +0200] "GET /wordpress/wp-admin/ HTTP/1.1" 302 0
```

Podemos extraer las siguientes conclusiones:
- La página principal se ha solicitado correctamente.
- La URL de contacto ha generado un error 404.
- Se ha realizado una petición `POST` a la página de inicio de sesión.
- La petición al panel de administración ha recibido una redirección.

### 5. Obtención de informes mediante herramientas de WordPress
Para consultar información desde el propio CMS se pueden utilizar extensiones de seguridad, auditoría o analítica. La herramienta elegida debe responder a las necesidades concretas del administrador y ser compatible con la versión instalada de WordPress.

#### 5.1. Plugins de seguridad
Algunas extensiones de seguridad permiten consultar eventos como intentos de acceso, bloqueos, actividad sospechosa y cambios relacionados con las cuentas. Antes de instalar una herramienta, conviene revisar:

- Su compatibilidad con la versión de WordPress.
- La fecha de su última actualización.
- La reputación y el mantenimiento del proyecto.
- Los datos que registra.
- La ubicación y el periodo de conservación de los registros.
- El impacto que puede tener en el rendimiento.
- Los requisitos de privacidad y protección de datos.

#### 5.2. Plugins de auditoría
Las herramientas de auditoría registran acciones efectuadas en el panel de administración. Dependiendo de su configuración, pueden registrar eventos como:

- Creación, modificación o eliminación de usuarios.
- Cambios de roles y permisos.
- Publicación o edición de entradas.
- Instalación o actualización de plugins.
- Cambios en la configuración.
- Inicio o cierre de sesión.

#### 5.3. Herramientas de analítica web
Las herramientas de analítica permiten conocer qué contenidos reciben más visitas y cómo navegan los usuarios por el sitio. Pueden resultar útiles para evaluar la utilización de una web, aunque no sustituyen a los registros de Apache ni a los registros de auditoría.

#### 5.4. Selección de la fuente adecuada

| Necesidad | Fuente recomendada |
|---|---|
| Consultar solicitudes HTTP | Registro de acceso de Apache o Nginx. |
| Investigar errores del servidor | Registro de errores de Apache o Nginx. |
| Analizar intentos de inicio de sesión | Herramienta de seguridad o registro de autenticación. |
| Conocer cambios realizados por usuarios | Plugin de auditoría. |
| Analizar visitas y páginas consultadas | Herramienta de analítica web. |

### 6. Elaboración de informes y análisis de los datos
Un archivo de registro puede contener miles de líneas. Para que la información sea útil, hay que filtrarla, clasificarla y resumirla. Un **informe de acceso** transforma los registros originales en información comprensible para tomar decisiones. El proceso general consta de cinco fases:

1. **Recopilación:** obtener los registros de la fuente adecuada.
2. **Filtrado:** seleccionar las fechas, direcciones IP, recursos o códigos relevantes.
3. **Clasificación:** agrupar los datos según el tipo de acceso o incidencia.
4. **Análisis:** identificar patrones, errores o comportamientos anómalos.
5. **Presentación:** resumir los resultados y proponer medidas.

#### 6.1. Ejemplo de resumen estadístico
Los siguientes datos son ficticios y muestran cómo se podría presentar un resumen:

| Indicador | Resultado de ejemplo |
|---|---:|
| Solicitudes HTTP registradas | 1.200 |
| Respuestas satisfactorias `2xx` | 1.000 |
| Redirecciones `3xx` | 100 |
| Errores `4xx` | 80 |
| Errores `5xx` | 20 |

En este ejemplo, las categorías suman 1.200 solicitudes. Podemos calcular el porcentaje de errores `4xx` mediante la fórmula:

\[
\text{Porcentaje de errores 4xx} =
\frac{\text{Solicitudes 4xx}}{\text{Solicitudes totales}}\times 100
\]

Sustituyendo los valores:

\[
\frac{80}{1200}\times 100 \approx 6{,}67\%
\]

Por tanto, aproximadamente el 6,67 % de las solicitudes registradas devolvieron una respuesta `4xx`. Este resultado no significa necesariamente que el 6,67 % de los usuarios hayan tenido problemas. Una misma persona puede realizar numerosas solicitudes y un único error puede afectar a un recurso secundario, como una imagen.

#### 6.2. Herramientas para analizar registros
Según el tamaño del archivo, pueden utilizarse:

- Un editor de texto para consultas sencillas.
- Una hoja de cálculo para ordenar, filtrar y contar datos.
- Herramientas de análisis de logs para procesar grandes volúmenes.
- Scripts para automatizar informes periódicos.

### 7. Detección de incidencias y comportamientos anómalos
Los informes de acceso ayudan a identificar problemas técnicos y posibles riesgos de seguridad.

1. **Errores HTTP repetidos**: Una cantidad elevada de errores 404 puede indicar enlaces rotos, URLs incorrectas o recursos que han sido eliminados. Los errores 500 pueden señalar fallos de PHP, problemas de configuración o errores internos de la aplicación. Hay que revisar el contexto antes de determinar su causa.
2. **Intentos de acceso repetidos**: Muchas solicitudes a `wp-login.php` pueden deberse a intentos de autenticación repetidos, herramientas automatizadas o comprobaciones legítimas. Para confirmar si se han producido intentos fallidos, es recomendable consultar una fuente que registre explícitamente los resultados de autenticación.
3. **Accesos a recursos inexistentes o sensibles**: Las solicitudes a rutas que no existen pueden proceder de errores de navegación, bots o intentos de localizar recursos vulnerables. Una petición sospechosa no demuestra por sí sola que el sistema haya sido comprometido.
4. **Actividad administrativa inesperada**: Si se utiliza una herramienta de auditoría, los cambios de roles, la creación de usuarios o las modificaciones de plugins pueden revisarse para comprobar si corresponden a operaciones autorizadas.
5. **Incrementos inesperados de tráfico**: Un aumento repentino de solicitudes puede deberse a un mayor interés por los contenidos, a un rastreador, a una prueba de carga o a actividad maliciosa. Antes de aplicar bloqueos o restricciones, conviene investigar el origen y el patrón de las solicitudes.

### 8. Buenas prácticas y procedimiento para obtener informes de acceso
Para obtener informes fiables, el administrador debe aplicar un procedimiento repetible y documentado.

#### 8.1. Procedimiento recomendado
1. **Definir el objetivo.** Determinar si se pretende analizar el tráfico, investigar errores, comprobar accesos o auditar acciones administrativas.
2. **Seleccionar la fuente.** Elegir los registros de Apache, una herramienta de seguridad, un plugin de auditoría o una herramienta de analítica.
3. **Comprobar el periodo.** Identificar las fechas y horas cubiertas por los registros.
4. **Verificar la configuración.** Confirmar que los eventos que se desean estudiar realmente se registran.
5. **Recopilar los datos.** Obtener los registros necesarios sin alterar los archivos originales.
6. **Filtrar y clasificar.** Separar los datos relevantes de la información que no afecta al objetivo.
7. **Calcular indicadores.** Obtener totales, porcentajes y distribuciones cuando proceda.
8. **Interpretar los resultados.** Diferenciar los hechos observados de las posibles explicaciones.
9. **Proponer medidas.** Recomendar correcciones, comprobaciones adicionales o cambios de configuración.
10. **Documentar el informe.** Registrar las fuentes utilizadas, el periodo analizado, los resultados y las limitaciones.

Un informe técnico debería incluir:

| Apartado | Contenido |
|---|---|
| Identificación | Nombre del sitio y responsable del análisis. |
| Objetivo | Qué se pretende comprobar. |
| Periodo | Fechas y horas analizadas. |
| Fuentes | Archivos o herramientas consultados. |
| Resultados | Indicadores, tablas y observaciones. |
| Incidencias | Errores o patrones que requieren revisión. |
| Limitaciones | Información que no se ha podido obtener. |
| Conclusiones | Interpretación técnica de los resultados. |
| Recomendaciones | Acciones propuestas y prioridad. |

### 9. Actividad UP3.9. Informes de acceso en CMS - CE3.i)
En esta actividad, se debe obtener información sobre los accesos y el funcionamiento de tu instalación, analizar los datos disponibles y elaborar un informe técnico.

#### Parte 1. Identificación de las fuentes de información
Localiza los registros de Apache en tu instalación de XAMPP.

1. Abre el panel de control de XAMPP.
2. Comprueba que Apache está iniciado.
3. Localiza los archivos `access.log` y `error.log`, si existen en la configuración utilizada.
4. Identifica la ruta de cada archivo.
5. Abre los registros con un editor de texto.
6. Explica qué información proporciona cada uno.

Si la ubicación de los archivos es diferente, documenta la ruta real. Si alguno no existe, explica qué comprobaciones has realizado para localizar la configuración de registros.

#### Parte 2. Generación de actividad controlada
Accede a tu WordPress y realiza distintas operaciones para generar solicitudes que después puedas localizar en los registros. Como mínimo:

1. Accede a la página principal.
2. Abre una entrada y una página.
3. Accede al formulario de inicio de sesión.
4. Inicia sesión con una cuenta de prueba autorizada.
5. Accede al panel de administración.
6. Consulta el feed de sindicación.
7. Accede a un recurso inexistente dentro de tu instalación para provocar un posible error 404.

#### Parte 3. Análisis del registro de acceso
Selecciona un conjunto de líneas de `access.log` relacionadas con las operaciones anteriores. Identifica, cuando estén disponibles:
- Dirección IP del cliente.
- Fecha y hora.
- Método HTTP.
- Recurso solicitado.
- Código de respuesta.
- Tamaño de la respuesta.

Presenta una tabla con al menos cinco peticiones reales de tu instalación.

#### Parte 4. Análisis de errores
Consulta `error.log` y revisa si existen mensajes relacionados con el funcionamiento de Apache, PHP o WordPress. Si hay errores:

1. Selecciona los más relevantes.
2. Explica su significado.
3. Identifica una posible causa.
4. Comprueba si afectan al funcionamiento del sitio.
5. Propón una solución cuando sea necesario.

Si no hay errores relevantes, documenta las comprobaciones realizadas e indica que no se han detectado incidencias durante el periodo analizado.

#### Parte 5. Elaboración de indicadores
Analiza un conjunto de solicitudes y elabora un pequeño resumen estadístico. Incluye, cuando los datos lo permitan:

- Número total de solicitudes analizadas.
- Número de respuestas 2xx.
- Número de respuestas 3xx.
- Número de respuestas 4xx.
- Número de respuestas 5xx.
- Porcentaje de errores 4xx y 5xx.

Puedes utilizar una hoja de cálculo para organizar los datos. Comprueba que las categorías utilizadas son coherentes con el conjunto analizado. Si una solicitud no tiene un código de respuesta registrado o el formato no permite clasificarla, explica cómo la has tratado. Interpreta los resultados y explica qué limitaciones tiene utilizar las solicitudes HTTP para estimar el número de visitas.