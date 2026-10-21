---
title: ☁️ UP3.3. Integración de módulos en CMS - CE3.c)
---

### RA3. Administra gestores de contenidos adaptándolos a los requerimientos y garantizando la integridad de la información.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| c) Se han integrado módulos atendiendo a requerimientos de funcionalidad. | Práctico | 15 % |

### 1. Introducción
Un sistema de gestión de contenidos (CMS, *Content Management System*) permite ampliar sus funcionalidades mediante componentes adicionales que se integran con el sistema principal. En WordPress, estos componentes se denominan habitualmente **plugins**. Permiten incorporar nuevas capacidades sin desarrollar desde cero toda la funcionalidad. Por ejemplo, se puede integrar un formulario de contacto, una galería de imágenes, un sistema de reservas o una herramienta para mejorar el posicionamiento en buscadores.

La **integración de módulos** consiste en seleccionar e incorporar componentes que respondan a requisitos concretos, comprobar que se comunican correctamente con el CMS y verificar que funcionan de forma coordinada con los demás elementos del sitio. Este proceso va más allá de instalar y activar un plugin. Es necesario analizar las necesidades, elegir una solución compatible, configurarla, comprobar su funcionamiento y evaluar su impacto sobre el sistema.

### 2. Identificación de los requisitos funcionales
Antes de integrar un módulo, es necesario definir qué debe hacer el sitio web y qué problema se pretende resolver. Un **requisito funcional** describe una capacidad o comportamiento que debe ofrecer el sistema. Por ejemplo:

- Permitir que los visitantes envíen consultas mediante un formulario.
- Mostrar una galería de imágenes organizada por categorías.
- Incorporar un buscador con filtros adicionales.
- Permitir la reserva de citas o recursos.
- Facilitar la publicación de contenidos en redes sociales.
- Generar formularios de inscripción a actividades.

Los requisitos deben describirse de forma clara y verificable. No es suficiente indicar que se necesita «mejorar la web»; debe concretarse qué funcionalidad se requiere y cómo se comprobará que funciona correctamente. Por ejemplo, un requisito para una web corporativa podría formularse así:

> El sitio debe disponer de un formulario de contacto que permita introducir nombre, correo electrónico y mensaje, validar los campos obligatorios y enviar la consulta a la dirección configurada.

A partir de esta definición se pueden comparar las soluciones disponibles y establecer las pruebas que permitirán comprobar su funcionamiento.

### 3. Selección de módulos y evaluación de alternativas
Una vez identificados los requisitos, se deben estudiar las distintas opciones disponibles para satisfacerlos. En WordPress, los plugins pueden obtenerse desde el directorio oficial o desde proveedores externos de confianza. Antes de elegir uno, es recomendable analizar:

- **Funcionalidad:** debe cubrir los requisitos definidos sin incorporar complejidad innecesaria.
- **Compatibilidad:** debe ser compatible con la versión instalada de WordPress, PHP y los demás componentes relevantes.
- **Mantenimiento:** conviene comprobar que recibe actualizaciones y dispone de documentación.
- **Seguridad:** es preferible utilizar plugins de procedencia fiable y con un historial de mantenimiento adecuado.
- **Rendimiento:** debe valorarse su consumo de recursos y el efecto sobre los tiempos de carga.
- **Licencia y coste:** hay que revisar las condiciones de uso y si existen funcionalidades de pago.
- **Integración:** debe comprobarse que puede trabajar correctamente con el tema y los demás plugins.
- **Usabilidad:** la funcionalidad debe resultar sencilla de utilizar y administrar.

### 4. Instalación e integración de módulos en WordPress
La integración comienza con la instalación del componente seleccionado. En WordPress, el procedimiento habitual consiste en acceder al panel de administración, entrar en la sección de plugins, buscar o cargar el componente, instalarlo y activarlo. Una vez instalado, deben seguirse estos pasos:

1. Revisar la documentación y los requisitos del plugin.
2. Instalarlo desde una fuente fiable.
3. Activarlo desde el panel de administración.
4. Configurar las opciones necesarias para el requisito funcional.
5. Incorporar el elemento correspondiente a las páginas o secciones del sitio.
6. Comprobar que funciona tanto en el panel de administración como en la parte pública.
7. Verificar que no interfiere con las funcionalidades existentes.

La forma de incorporar la funcionalidad depende del plugin. Algunos añaden automáticamente opciones al panel de administración; otros requieren insertar un bloque, utilizar un shortcode, configurar un widget o añadir un elemento a una página. Por ejemplo, un plugin de formularios puede requerir crear el formulario en el panel de administración y después insertarlo en la página de contacto mediante un bloque específico.

### 5. Integración entre módulos y componentes del sitio
Un CMS está formado por diferentes componentes que deben trabajar de manera coordinada. Los plugins pueden interactuar con el núcleo de WordPress, el tema activo, otros plugins, la base de datos y servicios externos. 

Por ejemplo, un formulario de contacto puede utilizar el diseño del tema para mostrar sus campos, guardar información mediante otro componente y enviar notificaciones por correo electrónico. Esta relación entre componentes puede generar dependencias o conflictos. Dos plugins pueden intentar modificar la misma funcionalidad, utilizar bibliotecas incompatibles o aplicar estilos que afecten a la presentación del sitio. Antes de integrar un módulo, conviene comprobar:

- Que no duplica innecesariamente una funcionalidad existente.
- Que es compatible con el tema y los plugins instalados.
- Que no introduce errores en las páginas existentes.
- Que sus dependencias están disponibles.
- Que no requiere permisos excesivos para funcionar.
- Que su configuración no afecta negativamente al rendimiento.

### 6. Configuración y personalización de las funcionalidades integradas
Después de instalar un módulo, normalmente es necesario adaptarlo al proyecto. La configuración debe responder a los requisitos definidos y mantener la coherencia con el resto del sitio. Algunos ejemplos de configuración son:

- **Formulario de contacto:** definir campos, validaciones, destinatarios y mensajes de confirmación.
- **Galería de imágenes:** establecer categorías, disposición visual, tamaños y comportamiento al seleccionar una imagen.
- **Sistema de reservas:** configurar horarios, disponibilidad, datos solicitados y confirmaciones.
- **Herramienta SEO:** ajustar títulos, descripciones y opciones de indexación.
- **Integración con servicios externos:** configurar las opciones de conexión, las credenciales necesarias y los permisos requeridos.

### 7. Seguridad y protección de los datos
La integración de nuevos módulos puede ampliar la superficie de ataque del CMS. Un plugin vulnerable o mal configurado puede permitir accesos no autorizados, exponer información o comprometer el funcionamiento del sitio. Por ello, deben aplicarse las siguientes medidas:

- Instalar plugins desde fuentes fiables.
- Comprobar su mantenimiento y compatibilidad.
- Mantener actualizados WordPress y sus componentes.
- Conceder únicamente los permisos necesarios.
- Evitar la recopilación de datos personales que no sean imprescindibles.
- Proteger las credenciales y los datos de conexión con servicios externos.
- Revisar las opciones de privacidad y conservación de datos.
- Realizar copias de seguridad antes de cambios importantes.

### 8. Pruebas de integración y resolución de problemas
Una vez integrada la funcionalidad, es necesario verificar que cumple los requisitos y que no perjudica al resto del sitio. Las pruebas deben definirse antes de realizar la comprobación. Algunos ejemplos son:

- **Pruebas funcionales:** verificar que el módulo realiza la tarea prevista.
- **Pruebas de validación:** comprobar cómo responde ante datos incompletos o incorrectos.
- **Pruebas de integración:** confirmar que funciona correctamente junto con el tema y los demás plugins.
- **Pruebas de permisos:** comprobar que las operaciones administrativas solo están disponibles para los usuarios autorizados.
- **Pruebas de compatibilidad:** revisar el funcionamiento en diferentes navegadores y tamaños de pantalla cuando corresponda.
- **Pruebas de rendimiento:** comprobar que la nueva funcionalidad no ralentiza excesivamente el sitio.
- **Pruebas de seguridad:** verificar las protecciones previstas mediante comprobaciones controladas y autorizadas.

Si una prueba falla, se debe identificar la causa antes de realizar cambios. Para ello, pueden revisarse los mensajes de error, los registros del servidor, la documentación del plugin y los posibles conflictos con otros componentes.

### 9. Mantenimiento y documentación de los módulos integrados
Los módulos integrados deben mantenerse durante todo el ciclo de vida del sitio web. Una funcionalidad que funciona correctamente hoy puede dejar de hacerlo tras una actualización, un cambio de configuración o la modificación de otro componente. Para facilitar su mantenimiento, conviene registrar:

- Nombre y versión de cada plugin integrado.
- Requisito funcional que justifica su incorporación.
- Fuente de descarga y condiciones de licencia.
- Configuración principal aplicada.
- Dependencias y componentes con los que interactúa.
- Pruebas realizadas y resultados obtenidos.
- Problemas detectados y soluciones aplicadas.
- Precauciones necesarias antes de actualizarlo o sustituirlo.

### 10. Actividad UP3.3. Integración de módulos en CMS - CE3.c)
Partiendo del WordPress existente en XAMPP, personalizado en el criterio f) y con los módulos configurados en el criterio a), realiza las siguientes tareas:

a. Identifica dos funcionalidades que todavía no estén disponibles en el sitio y que resulten útiles para tu temática.

b. Elige un plugin para cada requisito y explica por qué es la opción más adecuada para el proyecto.

c. Instala y activa los componentes seleccionados. Incorpora cada funcionalidad en la página o sección correspondiente.

d. Ajusta las opciones necesarias y adapta su presentación para mantener la coherencia visual con el tema del sitio.

e. Verifica que los plugins funcionan con WordPress, el tema y los módulos existentes. Comprueba que no se han alterado las páginas ni las funcionalidades anteriores.

f. Diseña y ejecuta al menos tres pruebas por funcionalidad, indicando el resultado esperado y el obtenido. Incluye pruebas de funcionamiento normal y, cuando corresponda, de validación o permisos.