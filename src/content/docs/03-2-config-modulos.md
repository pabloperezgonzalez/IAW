---
title: ☁️ UP3.2. Configuración de módulos en CMS - CE3.a)
---

### RA3. Administra gestores de contenidos adaptándolos a los requerimientos y garantizando la integridad de la información.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| a) Se han adaptado y configurado los módulos del gestor de contenidos. | Práctico | 15 % |

### 1. Introducción
Los módulos de un sistema de gestión de contenidos (CMS, *Content Management System*) son componentes que permiten ampliar, organizar o configurar las funcionalidades de un sitio web. Gracias a ellos, un CMS puede adaptarse a las necesidades de una organización sin tener que desarrollar una aplicación completa desde cero. En WordPress, las funcionalidades adicionales se incorporan principalmente mediante **plugins**.

Por ejemplo, un sitio web corporativo puede necesitar un formulario de contacto, una galería de imágenes, un sistema de copias de seguridad o herramientas de optimización. Estas funcionalidades pueden incorporarse mediante plugins y configurarse para que se integren correctamente con el resto del sitio.

La adaptación y configuración de los módulos consiste en seleccionar los componentes necesarios, instalarlos cuando corresponda, ajustar sus parámetros y comprobar que funcionan de acuerdo con los requisitos establecidos. Es importante distinguir entre **configurar un módulo existente** e **integrar uno nuevo**. En este criterio se trabaja principalmente con la adaptación y configuración de funcionalidades disponibles; la incorporación de nuevos módulos para ampliar las capacidades del sitio se profundizará en el CE3.c).

### 2. Tipos de módulos y funcionalidades
Los módulos de un CMS pueden clasificarse según la funcionalidad que proporcionan. En WordPress, estas funciones se implementan habitualmente mediante plugins, aunque algunas ya están incluidas en el núcleo o en el tema activo. Entre las categorías más habituales encontramos:

- **Gestión de contenidos:** amplían las opciones de creación, edición y organización de páginas, entradas y otros tipos de contenido.
- **Formularios:** permiten recoger información de los visitantes mediante formularios de contacto, consultas o solicitudes.
- **SEO:** facilitan la configuración de títulos, descripciones y otros elementos que ayudan a mejorar la visibilidad en buscadores.
- **Rendimiento:** permiten aplicar mecanismos de caché, optimizar imágenes o reducir determinados recursos.
- **Seguridad:** incorporan funciones como la supervisión de actividad, la protección frente a intentos de acceso y el control de determinados riesgos.
- **Copias de seguridad:** facilitan la creación y, según la herramienta, la restauración de copias de archivos y bases de datos.
- **Estadísticas:** permiten recopilar o consultar información sobre visitas y actividad del sitio.
- **Integración con servicios externos:** conectan el CMS con otras aplicaciones o plataformas.

La selección de módulos debe responder a necesidades reales. Instalar muchos plugins sin valorar su utilidad puede aumentar la complejidad administrativa, consumir recursos y generar incompatibilidades o riesgos de seguridad.

### 3. Instalación, activación y configuración de módulos en WordPress
En WordPress, los plugins se gestionan desde el panel de administración, normalmente en la sección **Plugins**. El procedimiento habitual para instalar y configurar uno es el siguiente:

1. Identificar la necesidad que se desea cubrir.
2. Buscar un plugin que proporcione la funcionalidad requerida.
3. Comprobar su compatibilidad con la versión de WordPress y revisar su procedencia, mantenimiento y documentación.
4. Instalarlo desde el directorio oficial o mediante un paquete obtenido de una fuente fiable.
5. Activarlo desde el panel de administración.
6. Acceder a su sección de ajustes, cuando exista.
7. Configurar sus parámetros según las necesidades del sitio.
8. Guardar los cambios y comprobar el resultado.

### 4. Configuración de los parámetros de un módulo
La configuración de un módulo consiste en adaptar sus opciones para que funcione de acuerdo con los requisitos del sitio web. Los parámetros disponibles dependen de la funcionalidad del plugin. Algunos ejemplos son:

- **Formularios:** campos obligatorios, dirección de recepción, mensajes de confirmación y protección frente al envío automatizado.
- **Caché:** tipos de recursos almacenados, duración de la caché y condiciones de actualización.
- **Seguridad:** opciones de supervisión, notificaciones, limitación de intentos de acceso y otras protecciones disponibles.
- **Copias de seguridad:** frecuencia, elementos incluidos, destino y política de conservación.
- **SEO:** títulos, descripciones, mapas del sitio y opciones de indexación.
- **Estadísticas:** datos que se recopilan, periodos consultados e integración con servicios externos.

No debe asumirse que todos los plugins ofrecen los mismos parámetros ni que las opciones recomendadas son idénticas en todos los entornos. También conviene documentar los cambios relevantes para facilitar el mantenimiento posterior del sitio.

### 5. Adaptación de los módulos a los requisitos del sitio
Antes de configurar un módulo, es necesario determinar qué problema debe resolver y qué comportamiento se espera de él. Para ello, se pueden seguir estos pasos:

1. **Identificar el requisito:** definir qué necesita el sitio web.
2. **Analizar las opciones disponibles:** comprobar si WordPress ya proporciona la funcionalidad o si se necesita un plugin.
3. **Seleccionar la solución:** elegir una opción compatible, mantenida y adecuada a los recursos disponibles.
4. **Definir los parámetros:** establecer cómo debe comportarse el módulo.
5. **Aplicar la configuración:** introducir los valores y guardar los cambios.
6. **Realizar pruebas:** comprobar que la funcionalidad cumple el requisito.
7. **Documentar el resultado:** registrar las opciones relevantes y las incidencias encontradas.

### 6. Compatibilidad, dependencias y rendimiento
Los módulos no funcionan de forma aislada. Pueden depender de la versión de WordPress, de la versión de PHP, de otros plugins, del tema activo o de servicios externos. Por este motivo, antes de instalar o configurar un módulo deben revisarse varios aspectos:

- **Compatibilidad con WordPress:** comprobar que el plugin admite la versión instalada.
- **Compatibilidad con PHP:** verificar que los requisitos del plugin coinciden con la versión utilizada por el servidor.
- **Dependencias:** identificar si necesita otros plugins, bibliotecas o servicios.
- **Compatibilidad con el tema:** comprobar que sus elementos visuales se muestran correctamente.
- **Consumo de recursos:** valorar si aumenta excesivamente el tiempo de carga o el consumo de memoria.
- **Mantenimiento:** comprobar si recibe actualizaciones y dispone de documentación suficiente.

Dos plugins pueden ofrecer funcionalidades similares, pero tener requisitos y efectos distintos sobre el sistema. Instalar varios que realicen la misma tarea puede provocar duplicidades, conflictos o consumo innecesario de recursos. Si después de activar un módulo aparecen errores, debe comprobarse si existe un conflicto con otro componente, una incompatibilidad de versiones o un problema de configuración. Los cambios deben realizarse de forma controlada, evitando desactivar componentes esenciales sin conocer sus dependencias.

### 7. Seguridad y buenas prácticas en la configuración de módulos
Los módulos pueden ampliar la superficie de ataque de un CMS. Un plugin vulnerable, desactualizado o mal configurado puede facilitar accesos no autorizados, exposición de información o alteraciones del sitio web. Para reducir estos riesgos, se deben aplicar las siguientes medidas:

- Instalar plugins desde fuentes fiables.
- Revisar su mantenimiento, reputación, documentación y compatibilidad.
- Mantener WordPress, los temas y los plugins actualizados.
- Desactivar y eliminar los plugins que no se utilicen, cuando sea seguro hacerlo.
- Limitar el acceso a las opciones de configuración a los usuarios autorizados.
- Evitar configuraciones que expongan información innecesaria.
- Realizar copias de seguridad antes de cambios importantes.
- Comprobar los registros y las notificaciones disponibles cuando se produzcan incidencias.

### 8. Pruebas de funcionamiento y resolución de problemas
Después de adaptar o configurar un módulo, es necesario verificar que funciona correctamente y que no afecta negativamente al resto del sitio. Las pruebas deben estar relacionadas con los requisitos establecidos. Algunos ejemplos son:

- **Formulario:** comprobar que se muestra correctamente, valida los campos y procesa los envíos.
- **Caché:** verificar que las páginas se muestran correctamente y que los cambios recientes se reflejan cuando corresponde.
- **Seguridad:** comprobar las protecciones configuradas mediante pruebas controladas y autorizadas.
- **Copias de seguridad:** verificar que se generan los archivos esperados y que el procedimiento de recuperación está documentado.
- **SEO:** comprobar que las opciones configuradas producen los metadatos o archivos esperados.
- **Estadísticas:** verificar que se recogen los datos previstos, respetando la configuración de privacidad aplicable.

Si una prueba falla, se debe identificar el problema antes de modificar la configuración. Es recomendable revisar los mensajes de error, los registros disponibles, los requisitos del plugin y los posibles conflictos con otros componentes.

### 9. Documentación y mantenimiento de los módulos
La configuración de un CMS debe documentarse para facilitar su administración, detectar errores y mantener el sistema a lo largo del tiempo. Para cada módulo relevante, conviene registrar:

- Nombre y finalidad del plugin.
- Versión instalada.
- Requisito que justifica su uso.
- Parámetros principales configurados.
- Dependencias y requisitos técnicos.
- Usuarios o perfiles autorizados para gestionarlo, cuando corresponda.
- Pruebas realizadas y resultados obtenidos.
- Incidencias detectadas y soluciones aplicadas.
- Precauciones para futuras actualizaciones.

### 10. Actividad UP3.2. Configuración de módulos en CMS - CE3.a)
Partiendo del WordPress creado en el RA2, instalado en el entorno XAMPP y personalizado en el criterio CE3.f), realiza las siguientes tareas:

a. Identifica sus características y determina dos necesidades que todavía no estén cubiertas o que puedan mejorarse mediante la configuración de módulos.

b. Busca dos plugins adecuados a las necesidades identificadas. Comprueba su procedencia, compatibilidad, mantenimiento y requisitos técnicos. Justifica por qué los has elegido.

c. Instala los componentes seleccionados y comprueba que aparecen correctamente en el panel de administración.

d. Configura el primer módulo: Ajusta sus parámetros para cumplir uno de los requisitos definidos. Explica la finalidad de las opciones principales que hayas modificado.

e. Configura el segundo módulo: Adapta sus opciones al segundo requisito. Evita activar funcionalidades innecesarias y justifica las decisiones adoptadas.

f. Comprueba qué usuarios pueden acceder a las opciones de administración de los módulos y evita conceder permisos superiores a los necesarios.

g. Comprueba que ambas funcionalidades cumplen los requisitos establecidos y que no afectan negativamente al tema, las páginas, las entradas ni los menús existentes.

h. Si aparecen errores, identifica sus causas y documenta las soluciones. Si no se producen incidencias, indica qué comprobaciones has realizado para verificar el funcionamiento. 

i. Accede al sitio como visitante y comprueba las funcionalidades implementadas. Confirma también que el panel de administración sigue operativo.