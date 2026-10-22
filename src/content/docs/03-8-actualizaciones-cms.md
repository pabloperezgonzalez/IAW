---
title: ☁️ UP3.8. Actualizaciones en CMS - CE3.h)
---

### RA3. Administra gestores de contenidos adaptándolos a los requerimientos y garantizando la integridad de la información.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| h) Se han realizado actualizaciones. | Práctico | 10 % | 

### 1. Introducción
Un sistema de gestión de contenidos (CMS), como WordPress, necesita mantenerse actualizado para corregir errores, mejorar la seguridad, incorporar nuevas funcionalidades y garantizar la compatibilidad entre sus componentes. Una **actualización** consiste en instalar una versión más reciente de un programa o componente, sustituyendo o modificando los archivos y datos necesarios para incorporar cambios respecto a la versión anterior.

En WordPress, las actualizaciones pueden afectar al núcleo del CMS, los temas, los plugins y, en determinados casos, a los requisitos del entorno donde se ejecuta. Mantener una instalación actualizada es una tarea fundamental de administración web, ya que una web que funciona correctamente hoy puede presentar problemas de seguridad o compatibilidad si sus componentes quedan obsoletos. Los principales objetivos de las actualizaciones son:

- Corregir vulnerabilidades de seguridad.
- Solucionar errores de funcionamiento.
- Mejorar el rendimiento y la estabilidad.
- Incorporar nuevas funcionalidades.
- Mantener la compatibilidad entre componentes.
- Evitar que las tecnologías utilizadas queden obsoletas.
- Garantizar el mantenimiento del sitio a medio y largo plazo.

### 2. Componentes que deben mantenerse actualizados
Una instalación de WordPress está formada por varios componentes que deben revisarse periódicamente.

#### 2.1. Núcleo de WordPress
El núcleo contiene los archivos principales y las funcionalidades básicas del CMS. Las actualizaciones pueden incluir correcciones de seguridad, mejoras de rendimiento, cambios en el editor, nuevas funciones y modificaciones internas.

Desde el panel de administración, normalmente se accede a: **Escritorio → Actualizaciones**. Desde esta pantalla se pueden consultar las versiones disponibles del núcleo y de otros componentes.

#### 2.2. Temas
Los temas controlan principalmente la presentación visual y parte de la estructura de la web. Sus actualizaciones pueden corregir errores, mejorar la compatibilidad con nuevas versiones de WordPress o incorporar mejoras visuales.

Antes de actualizar un tema, hay que comprobar si se han realizado modificaciones directamente en sus archivos. Si existen cambios personalizados, podrían perderse al instalar una versión nueva. Para evitar este problema, cuando sea necesario modificar archivos del tema se recomienda utilizar un **tema hijo**, siempre que sea compatible con el tema principal.

#### 2.3. Plugins
Los plugins amplían las funcionalidades de WordPress. Pueden incorporar formularios, herramientas de seguridad, sistemas de caché, funcionalidades de sindicación, estadísticas u otras características. Las actualizaciones de plugins pueden corregir vulnerabilidades, resolver errores y mantener la compatibilidad con WordPress.

No todos los plugins tienen la misma calidad ni reciben mantenimiento con la misma frecuencia. Si una extensión está abandonada o presenta incompatibilidades, puede ser necesario sustituirla por una alternativa mantenida.

#### 2.4. Entorno de ejecución
También deben revisarse las tecnologías de las que depende WordPress, especialmente:

- PHP.
- MySQL o MariaDB.
- Servidor web Apache o Nginx.
- Sistema operativo.
- Extensiones de PHP necesarias para el funcionamiento del CMS.

Actualizar WordPress no actualiza automáticamente todos estos componentes. Cada uno requiere su propio procedimiento de mantenimiento. En una instalación con XAMPP, cualquier cambio en PHP, Apache o MariaDB debe planificarse para evitar que la instalación deje de funcionar.

### 3. Tipos de actualizaciones y su importancia
No todas las actualizaciones tienen el mismo alcance ni el mismo nivel de riesgo.

| Tipo de actualización | Características | Ejemplo |
|---|---|---|
| **Seguridad** | Corrige vulnerabilidades que pueden permitir accesos no autorizados o comprometer el sistema. | Corrección de una vulnerabilidad del núcleo o de un plugin. |
| **Correctiva** | Soluciona errores de funcionamiento. | Corrección de un fallo que impide publicar entradas. |
| **Funcional** | Incorpora nuevas características o modifica funcionalidades existentes. | Mejora de una herramienta del editor. |
| **Compatibilidad** | Adapta el componente a nuevas versiones de otros elementos. | Actualización de un plugin para funcionar con una versión reciente de WordPress. |
| **Mayor** | Puede incorporar cambios importantes en funciones, interfaces o requisitos técnicos. | Actualización de una versión principal del CMS. |
| **Menor** | Suele centrarse en correcciones, mejoras de mantenimiento y seguridad. | Actualización de mantenimiento dentro de una misma rama de versión. |

### 4. Comprobación de versiones, compatibilidad y dependencias
Antes de actualizar WordPress o cualquiera de sus componentes, hay que identificar las versiones instaladas y comprobar los requisitos de la nueva versión. La compatibilidad es especialmente importante porque WordPress combina componentes desarrollados por diferentes autores. Antes de actualizar, se recomienda comprobar:

- La versión actual de WordPress.
- La versión de PHP y de la base de datos.
- Las versiones de los temas y plugins.
- Los requisitos mínimos de los componentes nuevos.
- La compatibilidad declarada con WordPress.
- La fecha de la última actualización del plugin o tema.
- Las incidencias conocidas y las instrucciones del desarrollador.
- La existencia de modificaciones personalizadas.

En WordPress, la sección **Escritorio → Actualizaciones** permite consultar buena parte de las actualizaciones disponibles. La información de cada tema o plugin también puede ayudar a comprobar su compatibilidad.

### 5. Procedimiento seguro de actualización
Las actualizaciones deben realizarse siguiendo un procedimiento que reduzca el riesgo de pérdida de información o interrupción del servicio.

1. **Revisar el estado de la instalación**: Comprobar que WordPress funciona correctamente antes de iniciar la actualización. Si ya existen errores, deben documentarse para no confundirlos con los provocados por el cambio.
2. **Consultar las actualizaciones disponibles**: Acceder a **Escritorio → Actualizaciones** e identificar los componentes que necesitan actualizarse.
3. **Revisar la compatibilidad**: Consultar los requisitos de WordPress, PHP, los temas y los plugins implicados.
4. **Realizar una copia de seguridad**: Antes de actualizar, guardar una copia de la base de datos y de los archivos necesarios para recuperar el sitio. Esta copia debe estar disponible en una ubicación segura y no depender exclusivamente de la instalación que se va a modificar.
5. **Planificar la operación**: Decidir qué componentes se actualizarán, en qué orden y cómo se comprobará el resultado. En instalaciones importantes, se recomienda realizar primero las pruebas en un entorno separado.
6. **Ejecutar la actualización**: Utilizar preferentemente el panel de administración de WordPress o los procedimientos oficiales del proveedor del componente. No se deben interrumpir los procesos de actualización ni apagar el servidor mientras se están modificando archivos o datos.
7. **Comprobar el resultado**: Verificar que la actualización ha finalizado y que WordPress muestra las versiones esperadas.
8. **Probar las funcionalidades**: Comprobar que las entradas, páginas, usuarios, plugins, tema y demás funciones importantes siguen funcionando.
9. **Documentar la operación**: Registrar la fecha, las versiones anteriores y posteriores, el resultado de las pruebas y las incidencias detectadas. Este procedimiento permite realizar cambios controlados y facilita la identificación de problemas si la instalación deja de funcionar correctamente.

### 6. Actualización del núcleo, temas y plugins en WordPress
WordPress ofrece mecanismos para actualizar sus componentes desde el panel de administración.

#### 6.1. Actualizar el núcleo
El procedimiento general es:

1. Acceder al panel de administración.
2. Entrar en **Escritorio → Actualizaciones**.
3. Comprobar la versión instalada y la versión disponible.
4. Revisar los requisitos y realizar una copia de seguridad.
5. Ejecutar la actualización del núcleo.
6. Esperar a que el proceso finalice.
7. Comprobar que el panel vuelve a estar disponible.
8. Verificar que la versión instalada es la esperada.

#### 6.2. Actualizar temas
Desde **Apariencia → Temas** se puede comprobar si existen versiones nuevas para los temas instalados. Antes de actualizar el tema activo, conviene revisar si contiene modificaciones personalizadas y comprobar si se utiliza un tema hijo. Después de la actualización, hay que comprobar que se mantienen la apariencia, el menú, las áreas de widgets y los elementos principales del sitio.

#### 6.3. Actualizar plugins
Desde **Plugins → Plugins instalados** se pueden consultar los plugins activos y las actualizaciones disponibles. Para actualizar una extensión:

1. Identificar el plugin y la versión disponible.
2. Revisar su compatibilidad y las notas de la versión.
3. Comprobar que existe una copia de seguridad.
4. Ejecutar la actualización.
5. Verificar que el plugin sigue activo cuando corresponda.
6. Probar la funcionalidad que proporciona.

### 7. Riesgos, errores y recuperación después de una actualización
Una actualización puede provocar problemas aunque se haya realizado correctamente desde el punto de vista técnico. Entre las incidencias habituales se encuentran:

- Error crítico de WordPress.
- Pantalla en blanco o error HTTP 500.
- Incompatibilidad entre un plugin y el núcleo.
- Problemas con la versión de PHP.
- Pérdida de personalizaciones de un tema.
- Errores en el editor o en la publicación de contenidos.
- Fallos en formularios u otras funcionalidades.
- Cambios inesperados en la apariencia.
- Problemas de acceso a la base de datos.

Cuando se produce una incidencia, es importante evitar cambios improvisados que puedan agravar el problema. Se recomienda seguir este procedimiento:

1. Identificar el error y registrar cuándo aparece.
2. Comprobar qué componente se ha actualizado.
3. Revisar los mensajes de error disponibles.
4. Consultar la documentación del desarrollador.
5. Determinar si existe un problema de compatibilidad.
6. Aplicar una solución controlada.
7. Repetir las pruebas de funcionamiento.

### 8. Actualizaciones automáticas y mantenimiento preventivo
WordPress dispone de mecanismos de actualización automática para determinados componentes y tipos de versiones. También permite configurar actualizaciones automáticas de algunos plugins y temas. Estas funciones reducen la necesidad de intervención manual, pero no eliminan la obligación de comprobar que las actualizaciones se han realizado correctamente.

Las actualizaciones automáticas pueden resultar útiles cuando:
- El sitio tiene una configuración sencilla.
- Los componentes son compatibles entre sí.
- Se dispone de copias de seguridad fiables.
- Existe un procedimiento para detectar errores.
- El sistema puede recuperarse si se produce una incidencia.

En sitios críticos o con funcionalidades complejas, puede ser preferible realizar determinadas actualizaciones de forma controlada después de probarlas en un entorno separado.

### 9. Actividad UP3.8. Actualizaciones en CMS - CE3.h)
#### Contexto
En esta actividad, se debe realizar una actualización controlada de los componentes del proyecto y comprobar que las funcionalidades desarrolladas siguen funcionando, utilizando el WordPress ya creado.

#### Parte 1. Inventario de versiones
Accede al panel de administración y registra, utilizando una tabla:
1. Versión de WordPress.
2. Versión de PHP utilizada por el entorno.
3. Versión de MySQL o MariaDB, si está disponible.
4. Tema activo y versión instalada.
5. Plugins instalados, indicando cuáles están activos.
6. Actualizaciones disponibles para cada componente.

#### Parte 2. Análisis de las actualizaciones disponibles
Accede a **Escritorio → Actualizaciones** y revisa los componentes que requieren una actualización. Para cada actualización relevante, indica:

- Componente afectado.
- Versión actual.
- Versión disponible.
- Motivo de la actualización, si se conoce.
- Compatibilidad con la instalación.
- Riesgos que conviene comprobar.

Si el entorno ya está actualizado, documenta las versiones instaladas y las comprobaciones realizadas. No es necesario forzar una actualización que no está disponible.

#### Parte 3. Copia de seguridad previa
Antes de actualizar:

1. Comprueba que WordPress funciona correctamente.
2. Realiza una copia de seguridad de la base de datos.
3. Copia los archivos necesarios para recuperar la instalación.
4. Guarda los respaldos en una ubicación distinta de la carpeta original del proyecto.
5. Verifica que los archivos se han generado correctamente.
6. Registra la fecha y la ubicación de la copia.

#### Parte 4. Ejecución de las actualizaciones
Selecciona las actualizaciones adecuadas para tu instalación. Realiza, cuando existan versiones compatibles, las siguientes operaciones:

1. Actualiza un plugin utilizado por el proyecto.
2. Comprueba si existen actualizaciones para el tema activo.
3. Revisa si hay una actualización disponible para el núcleo de WordPress.
4. Ejecuta las actualizaciones siguiendo las indicaciones del panel.
5. Espera a que finalicen los procesos.
6. Comprueba las versiones instaladas después de los cambios.

No es obligatorio actualizar todos los componentes si no existen versiones disponibles o si hay motivos técnicos justificados para aplazar una actualización concreta. Si no se dispone de una actualización aplicable, explica qué has comprobado y por qué no has realizado el cambio.

#### Parte 5. Pruebas de funcionamiento
Después de actualizar, realiza pruebas sobre las funcionalidades desarrolladas en este RA3. Comprueba, por ejemplo:
- Acceso al panel de administración.
- Visualización de la página principal.
- Acceso a las entradas y páginas existentes.
- Funcionamiento del tema y de sus personalizaciones.
- Funcionamiento de los plugins actualizados.
- Inicio de sesión y permisos de las cuentas de prueba.
- Disponibilidad del feed de sindicación.
- Acceso a las imágenes y documentos.
- Posibilidad de crear o editar una entrada.