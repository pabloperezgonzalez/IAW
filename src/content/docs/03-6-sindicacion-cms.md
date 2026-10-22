---
title: ☁️ UP3.6. Funcionalidades de sindicación en CMS - CE3.g)
---

### RA3. Administra gestores de contenidos adaptándolos a los requerimientos y garantizando la integridad de la información.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| g) Se han integrado funcionalidades de sindicación. | Práctico | 10 % |

### 1. Introducción
La **sindicación de contenidos** es un mecanismo que permite distribuir automáticamente información publicada en un sitio web para que otras aplicaciones, servicios o usuarios puedan consultarla sin tener que visitar constantemente la página original. En lugar de acceder manualmente a una web para comprobar si se han publicado novedades, un usuario puede utilizar un lector de feeds para recibir las nuevas publicaciones de forma centralizada.

La sindicación resulta especialmente útil en sitios web que publican noticias, artículos, avisos o cualquier otro contenido que se actualice con frecuencia. Entre sus principales ventajas destacan:

- Facilita la difusión de nuevos contenidos.
- Permite consultar novedades desde diferentes aplicaciones.
- Automatiza la distribución de información.
- Reduce la necesidad de visitar manualmente cada sitio web.
- Facilita la integración entre plataformas.
- Mejora el seguimiento de publicaciones de interés.

En WordPress, la sindicación permite distribuir las entradas publicadas mediante canales de información que otras aplicaciones pueden interpretar automáticamente. Por ejemplo, si una web educativa publica un artículo sobre seguridad informática, un lector de feeds suscrito a esa web podrá detectar la nueva publicación sin que el usuario tenga que acceder directamente a WordPress.

### 2. Qué es un feed y cómo funciona
Un **feed** es un documento estructurado que contiene información sobre las publicaciones de un sitio web. Puede incluir títulos, enlaces, fechas, autores, descripciones y otros metadatos. Las aplicaciones que leen estos documentos se conocen como **lectores de feeds** o lectores de sindicación. El funcionamiento habitual de la sindicación se puede resumir en los siguientes pasos:

1. Un autor publica una entrada en WordPress.
2. WordPress actualiza el feed correspondiente.
3. Un lector de feeds consulta periódicamente la dirección del feed.
4. El lector detecta las nuevas publicaciones o los cambios disponibles.
5. El usuario puede consultar las novedades desde esa aplicación.

La consulta del feed suele realizarse mediante solicitudes HTTP o HTTPS. El lector solicita el documento al servidor web y recibe una respuesta que contiene los datos publicados. El lector puede consultar el feed cada cierto tiempo, por lo que la actualización no tiene por qué producirse inmediatamente después de publicar una entrada. En este proceso intervienen varios elementos:

- **Productor de contenidos:** el sitio web que publica la información.
- **Feed:** el documento que presenta las publicaciones en un formato estructurado.
- **Lector o consumidor:** la aplicación que consulta y muestra el feed.
- **Servidor web:** el sistema que entrega el documento al lector.
- **Protocolo HTTP o HTTPS:** el mecanismo utilizado para solicitar y recibir la información.

La sindicación facilita la distribución de contenidos, pero no implica que el lector pueda modificar el sitio de origen. Normalmente, el lector únicamente consulta la información que el feed ofrece.

### 3. Formatos de sindicación: RSS y Atom
Existen diferentes formatos para representar los contenidos de un feed. Los más conocidos son **RSS** y **Atom**.

#### 3.1. RSS
RSS es una familia de formatos utilizados para distribuir actualizaciones de sitios web. Una versión ampliamente utilizada es RSS 2.0. Los documentos RSS se basan en XML y organizan la información mediante elementos que describen el canal y sus publicaciones. Entre los elementos habituales se encuentran:

- `channel`: describe el canal de sindicación.
- `title`: título del canal o de una publicación.
- `link`: dirección web asociada.
- `description`: descripción del canal o del contenido.
- `item`: representa una publicación.
- `pubDate`: indica la fecha de publicación, cuando se proporciona.

Ejemplo simplificado de un feed RSS:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Blog de informática</title>
    <link>https://ejemplo.test</link>
    <description>Novedades sobre sistemas y redes</description>

    <item>
      <title>Introducción a Linux</title>
      <link>https://ejemplo.test/introduccion-linux</link>
      <description>Conceptos básicos de Linux.</description>
    </item>
  </channel>
</rss>
```

#### 3.2. Atom
Atom es otro formato de sindicación basado en XML. Utiliza una estructura propia para representar el canal y sus entradas. Puede incluir información como el título, la fecha de actualización, el autor, el identificador de la entrada y los enlaces relacionados.

RSS y Atom cumplen una finalidad similar, pero no tienen exactamente la misma estructura. Un lector compatible debe interpretar el formato que recibe. En WordPress, la sindicación se ofrece habitualmente mediante feeds RSS y RSS 2.0, además de otras variantes compatibles con la instalación.

### 4. Sindicación en WordPress: feeds disponibles
WordPress incorpora funcionalidades de sindicación sin necesidad de instalar un plugin adicional. Esto permite distribuir las publicaciones del sitio desde el momento en que se configura y publica contenido. En una instalación estándar, los feeds habituales se generan a partir de las entradas publicadas. Algunos ejemplos de direcciones son:

| Tipo de feed | Dirección habitual |
|:-----------|:-----:|
| Feed general del sitio | https://dominio.example/feed/ |
| Feed RSS 2.0 explícito | https://dominio.example/feed/rss2/ |
| Feed de comentarios | https://dominio.example/comments/feed/ |
| Feed de una categoría | https://dominio.example/category/categoria/feed/ |
| Feed de una etiqueta | https://dominio.example/tag/etiqueta/feed/ |

Las direcciones concretas dependen de la estructura de enlaces permanentes, la configuración del sitio y las reglas de reescritura. Si una ruta no funciona, puede ser necesario comprobar la configuración o utilizar las direcciones alternativas que admita la instalación. 

En un WordPress instalado localmente con XAMPP, las direcciones pueden tener una forma similar a:

`http://localhost/miwordpress/feed/`

En este caso, el feed solo será accesible desde los equipos que puedan llegar a esa instalación local. No debe suponerse que otras personas podrán consultarlo desde Internet. Para comprobar el funcionamiento del feed:

1. Publica una entrada de prueba.
2. Abre la dirección del feed en el navegador.
3. Comprueba que la entrada aparece en el documento XML.
4. Revisa el título, el enlace y la descripción.
5. Publica otra entrada y verifica que el feed refleja la novedad.

El feed puede mostrar código XML en el navegador en lugar de una página con diseño visual. Esto es normal, porque está pensado para que lo interpreten aplicaciones compatibles.

### 5. Configuración y personalización de la sindicación
WordPress genera los feeds automáticamente a partir de los contenidos publicados. Sin embargo, es importante conocer las opciones que influyen en la información distribuida. Desde el panel de administración se puede acceder a: **Ajustes → Lectura**. Según la versión de WordPress, este apartado permite configurar el número máximo de entradas que se muestran en los feeds y decidir si se distribuye el texto completo o un resumen:

- Número de entradas: El ajuste de feeds permite limitar la cantidad de publicaciones incluidas en cada consulta. Esto evita que el feed tenga un tamaño excesivo cuando el sitio dispone de muchos contenidos. Por ejemplo, se puede establecer un límite de diez entradas para que los lectores reciban únicamente las publicaciones más recientes.
- Texto completo o resumen: WordPress permite elegir si el feed muestra el contenido completo de cada entrada o solamente un resumen. El texto completo facilita consultar el artículo desde el lector, pero distribuye una mayor cantidad de información.
El resumen muestra una parte del contenido y normalmente obliga a acceder a la web para leer el artículo completo. La elección depende de los objetivos del sitio. Un blog informativo puede preferir ofrecer el texto completo, mientras que otra web puede optar por resúmenes para dirigir visitas hacia sus páginas.
- Identidad y contenido publicado: Los títulos, descripciones, enlaces y otros datos del feed dependen del contenido y de la configuración del sitio. Por ello, es recomendable utilizar títulos claros, mantener actualizada la información y revisar las publicaciones antes de distribuirlas.

### 6. Lectores de feeds e integración con otras aplicaciones
Para comprobar que la sindicación funciona correctamente, no basta con abrir el XML en un navegador. También conviene utilizar un lector de feeds o una herramienta capaz de interpretar el documento. Un lector de feeds permite agregar varias fuentes y consultar sus publicaciones desde una única interfaz.

El procedimiento habitual consiste en:
1. Obtener la dirección del feed de WordPress.
2. Abrir un lector de feeds compatible.
3. Añadir la dirección como nueva fuente.
4. Comprobar que el lector reconoce el feed.
5. Revisar las entradas detectadas.
6. Publicar un nuevo artículo y comprobar que aparece tras la siguiente consulta del lector.

Existen lectores web, aplicaciones de escritorio y aplicaciones móviles. La elección depende de las necesidades del usuario y de las posibilidades de acceso al feed. También es posible integrar la sindicación con otras aplicaciones. Por ejemplo:
- Un portal puede mostrar las últimas publicaciones de otra web.
- Un lector puede reunir noticias de varios sitios especializados.
- Un sistema de automatización puede procesar nuevos elementos del feed.
- Una aplicación puede utilizar el feed para identificar contenidos que debe consultar o indexar.

### 7. Sindicación de contenidos externos en WordPress
Además de generar feeds propios, WordPress puede utilizar información procedente de feeds externos. Esto permite mostrar o procesar publicaciones de otros sitios web. Por ejemplo, una web educativa podría incorporar un bloque con las últimas noticias de un organismo público o de un portal especializado en ciberseguridad.

La integración puede realizarse mediante distintas soluciones:
- Bloques disponibles en el editor de WordPress.
- Widgets de RSS, cuando estén disponibles en el tema o la interfaz.
- Plugins específicos para leer y presentar feeds.
- Desarrollo personalizado mediante las funciones o las API correspondientes.

Antes de incorporar un feed externo, hay que comprobar:
- Que la dirección del feed es correcta.
- Que el formato es compatible con la herramienta utilizada.
- Que el contenido se actualiza correctamente.
- Que la fuente es fiable.
- Que los enlaces conducen al sitio original.
- Que se respetan las condiciones de uso y los derechos de autor.
- Que la integración no perjudica el rendimiento del sitio.

### 8. Seguridad, privacidad y rendimiento de los feeds
La sindicación facilita la distribución de información, pero también puede exponer contenidos a personas o aplicaciones externas. Por ello, debe integrarse de forma responsable.

- Seguridad de la información: Antes de habilitar o personalizar un feed, se debe comprobar qué información contiene. No deben distribuirse datos confidenciales, credenciales, información privada ni contenido que no deba ser público.
- Privacidad y derechos de autor: Si se distribuyen publicaciones de terceros, se deben respetar las condiciones de uso de la fuente. Mostrar un título o un enlace no implica que se tenga permiso para reproducir íntegramente el contenido.
- Rendimiento: Los feeds se generan a partir de la información de WordPress. Una configuración inadecuada o un plugin que realice consultas excesivas puede afectar al rendimiento.
- Acceso y disponibilidad: Un feed publicado en Internet debe servirse mediante HTTPS cuando corresponda. En instalaciones locales con XAMPP, el acceso depende de la red y de la configuración del servidor.

### 9. Pruebas, diagnóstico y documentación de la sindicación
Una vez integrada la funcionalidad de sindicación, es necesario verificar que se comporta correctamente:

| Prueba| Resultado esperado |
|:-----------|:-----:|
| Acceder al feed general de WordPress | Se obtiene un documento de sindicación válido. |
| Publicar una entrada nueva | La entrada aparece en el feed cuando corresponde. |
| Modificar el número de elementos del feed | Se respeta el límite configurado. |
| Cambiar entre texto completo y resumen | El contenido distribuido refleja el ajuste elegido. |
| Añadir el feed a un lector compatible | El lector reconoce la fuente y muestra sus publicaciones. |
| Integrar un feed externo | La información se presenta según la configuración de la herramienta. |
| Consultar los enlaces del feed | Los enlaces conducen a los contenidos esperados. |

Si una prueba falla, se debe identificar la causa antes de modificar la instalación. Entre los problemas habituales se encuentran:
- Error 404 al acceder al feed.
- Documento XML mal formado.
- Entradas nuevas que no aparecen.
- Feed externo inaccesible.
- Contenido incompleto o caracteres incorrectos.
- Problemas causados por plugins o por la configuración de enlaces permanentes.

### 10. Actividad UP3.6. Funcionalidades de sindicación en CMS - CE3.g)
En esta actividad, se debe incorporar y comprobar las funcionalidades de sindicación para que tu sitio pueda distribuir sus publicaciones, utilizando el Wordpress ya creado.

#### Parte 1. Comprobación del feed propio
1. Accede a tu WordPress y comprueba que existen varias entradas publicadas.
2. Localiza la dirección del feed general de tu sitio.
3. Ábrela en el navegador.
4. Comprueba que el documento contiene las publicaciones esperadas.
5. Identifica en el XML el título del canal, los enlaces y al menos dos elementos de publicación.
6. Publica una entrada de prueba relacionada con la temática de tu web.
7. Comprueba si aparece en el feed.
Si utilizas XAMPP, recuerda que el feed local solo será accesible desde los equipos que puedan acceder a tu instalación.

#### Parte 2. Configuración de la sindicación
Accede a Ajustes → Lectura y revisa las opciones relacionadas con los feeds. Realiza los siguientes cambios:
1. Establece un límite razonable de entradas que se mostrarán en el feed.
2. Selecciona si se distribuirá el texto completo o un resumen.
3. Guarda los cambios.
4. Vuelve a consultar el feed.
5. Comprueba que el comportamiento coincide con la configuración.

#### Parte 3. Lectura del feed mediante una aplicación externa
Utiliza un lector de feeds compatible para comprobar que una aplicación puede interpretar las publicaciones de WordPress.
1. Añade la dirección del feed como fuente.
2. Comprueba que el lector identifica las publicaciones disponibles.
3. Registra los títulos que aparecen.
4. Publica otra entrada de prueba.
5. Comprueba que el lector detecta la nueva publicación cuando realiza la siguiente consulta.
Si el lector no puede acceder a una dirección local de XAMPP, explica la limitación de acceso y demuestra la validez del feed mediante el navegador o una herramienta local compatible.

#### Parte 4. Integración de un feed externo
Selecciona una fuente externa fiable relacionada con la temática de tu web. Por ejemplo, un organismo público, un portal educativo o una fuente técnica que publique información mediante RSS.
1. Localiza la dirección del feed de la fuente.
2. Comprueba que la dirección es válida y que el contenido se actualiza.
3. Selecciona una herramienta compatible con WordPress para mostrar el feed, como un bloque o widget disponible o un plugin apropiado.
4. Integra el feed en una zona coherente de tu web.
5. Comprueba que se muestran los títulos y enlaces de las publicaciones.
6. Verifica que los enlaces conducen a la fuente original.