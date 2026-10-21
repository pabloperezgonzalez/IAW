---
title: ☁️ UP3.5. Importación y exportación de contenidos en CMS - CE3.e)
---

### RA3. Administra gestores de contenidos adaptándolos a los requerimientos y garantizando la integridad de la información.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| e) Se han importado y exportado contenidos en distintos formatos. | Práctico | 10 % |

### 1. Introducción
Los sistemas de gestión de contenidos (CMS), como WordPress, permiten crear, organizar y publicar información en una página web. A medida que un sitio crece, puede ser necesario trasladar contenidos desde otra plataforma, incorporar información procedente de archivos externos o extraer datos para reutilizarlos en otro sistema.

La **importación de contenidos** consiste en incorporar al CMS información procedente de archivos, aplicaciones u otros sitios web. La **exportación de contenidos** consiste en extraer información del CMS y guardarla en un formato que permita reutilizarla, analizarla o trasladarla a otro sistema. Estas operaciones son habituales en tareas de administración web, por ejemplo:

- Migrar una web a una nueva instalación de WordPress.
- Trasladar artículos y páginas desde otro CMS.
- Importar entradas redactadas previamente en archivos.
- Exportar contenidos para conservarlos o reutilizarlos.
- Intercambiar información entre aplicaciones.
- Preparar datos para su tratamiento con otras herramientas.
- Facilitar la recuperación de contenidos después de una incidencia.

### 2. Formatos habituales para intercambiar contenidos
La información puede almacenarse en distintos formatos según su estructura y finalidad. Antes de importar o exportar datos, es necesario conocer qué información conserva cada formato y qué limitaciones presenta.

| Formato | Características | Usos habituales |
|---|---|---|
| **XML** | Representa datos estructurados mediante etiquetas. | Exportación e importación de contenidos entre sistemas compatibles. |
| **CSV** | Almacena datos tabulares separados por delimitadores, normalmente comas o punto y coma. | Intercambio de listados, registros y datos estructurados. |
| **JSON** | Representa información estructurada mediante objetos y arrays. | Intercambio de datos entre aplicaciones y servicios web. |
| **HTML** | Describe la estructura y parte de la presentación de una página web. | Publicación e intercambio de fragmentos o páginas web. |
| **TXT** | Contiene texto sin formato enriquecido. | Importación de textos sencillos o almacenamiento de contenido básico. |
| **ZIP** | Agrupa uno o varios archivos comprimidos. | Transporte de conjuntos de archivos o paquetes de datos. |

### 3. Exportación de contenidos desde WordPress

WordPress incorpora una herramienta de exportación accesible desde el panel de administración, normalmente en:

**Herramientas → Exportar.**

Esta herramienta permite generar un archivo XML con contenidos del sitio para trasladarlos a otra instalación compatible o conservar una selección de información editorial.

Según las opciones disponibles, se pueden exportar:

- Todos los contenidos.
- Entradas.
- Páginas.
- Contenidos de determinados tipos personalizados, si están disponibles.
- Contenidos filtrados por autor, fecha, categoría u otros criterios que ofrezca la interfaz.

El archivo generado utiliza el formato de exportación de WordPress, conocido habitualmente como **WXR (WordPress eXtended RSS)**. Se basa en XML e incorpora información estructurada sobre los contenidos exportados.

El procedimiento general es el siguiente:

1. Acceder al panel de administración.
2. Entrar en **Herramientas → Exportar**.
3. Seleccionar el tipo de contenido que se desea exportar.
4. Aplicar los filtros disponibles, si procede.
5. Generar y descargar el archivo.
6. Comprobar que el archivo se ha guardado correctamente.

La exportación puede incluir información como títulos, textos, fechas, autores, categorías, etiquetas y referencias a archivos multimedia, según el contenido y las opciones utilizadas.

Sin embargo, el archivo XML no debe considerarse una copia íntegra de toda la instalación. No contiene necesariamente el tema, los plugins, los ajustes generales ni todos los archivos físicos de la biblioteca multimedia.

Antes de exportar, conviene definir qué información se necesita y verificar que el archivo generado incluye los elementos esperados.

### 4. Importación de contenidos en WordPress

WordPress también incorpora herramientas para importar contenidos. Para archivos WXR de WordPress, se utiliza normalmente:

**Herramientas → Importar → WordPress.**

Si el importador no está disponible, puede ser necesario instalar o activar el componente correspondiente desde la interfaz de importación.

El procedimiento habitual consiste en:

1. Acceder al panel de administración de la instalación de destino.
2. Abrir **Herramientas → Importar**.
3. Seleccionar el importador de WordPress.
4. Cargar el archivo XML generado previamente.
5. Asignar los contenidos al usuario correspondiente o crear un usuario nuevo, si el importador ofrece esa opción.
6. Seleccionar la opción de descarga de archivos adjuntos, cuando proceda y esté disponible.
7. Ejecutar la importación.
8. Revisar los contenidos importados y comprobar su funcionamiento.

Es fundamental revisar las opciones de asignación de autores. Si el archivo contiene contenidos de varios usuarios, puede ser necesario asociarlos a cuentas existentes o crear nuevas cuentas.

La importación de archivos multimedia también requiere atención. El archivo XML puede incluir referencias a imágenes, pero para recuperar los archivos físicos el importador puede necesitar acceder a la instalación de origen. Si el sitio original no está accesible o las imágenes no se pueden descargar, algunos archivos pueden no importarse correctamente.

Además, una importación puede producir entradas duplicadas si se ejecuta varias veces o si se utiliza un archivo que contiene información ya existente. El comportamiento concreto depende del importador y del contenido de origen.

Por ello, las primeras pruebas deben realizarse en una instalación de destino controlada y con una copia de seguridad previa.

### 5. Importación y exportación mediante CSV, JSON y otros formatos

Aunque el formato XML de WordPress es útil para migrar contenidos editoriales, en determinadas situaciones se necesitan otros formatos.

**CSV**

El formato CSV representa datos tabulares. Cada línea suele corresponder a un registro y cada campo a una columna.

Ejemplo de un archivo CSV con información de artículos:

```csv
titulo,categoria,autor
Introduccion a Linux,Sistemas,admin
Seguridad web,Seguridad,editor_web
Servicios de red,Redes,autor_web
```

Este archivo podría utilizarse para preparar información antes de incorporarla a WordPress. Sin embargo, no se importa automáticamente desde cualquier instalación: normalmente se necesita un plugin compatible o un procedimiento de transformación que convierta los registros en contenidos de WordPress.

Al trabajar con CSV, hay que comprobar:
- El delimitador utilizado.
- La codificación de caracteres, preferiblemente UTF-8.
- La presencia de tildes y caracteres especiales.
- La correspondencia entre las columnas y los campos de destino.
- El tratamiento de los valores vacíos y las fechas.
- La existencia de registros duplicados.
JSON

JSON permite representar estructuras más complejas que una tabla sencilla. Es frecuente en aplicaciones web y en servicios que intercambian información mediante API.

Ejemplo:
{
  "titulo": "Introduccion a Linux",
  "categoria": "Sistemas",
  "estado": "borrador"
}


Para importar este tipo de datos a WordPress es necesario utilizar una herramienta que interprete la estructura JSON y cree o actualice los contenidos correspondientes.

HTML y TXT

Estos formatos pueden utilizarse para preparar textos o fragmentos de contenido. No obstante, el texto importado puede necesitar ajustes de formato, enlaces, imágenes o estructura antes de publicarse.

La elección del formato debe depender del objetivo de la operación y de la compatibilidad entre el sistema de origen y el de destino. Si el formato no es compatible directamente, puede ser necesario transformarlo previamente.
6. Migración de contenidos entre instalaciones
La migración consiste en trasladar información de un sistema a otro. En WordPress, puede tratarse de trasladar contenidos entre dos instalaciones, por ejemplo, desde una web de pruebas a una instalación definitiva.

Una migración de contenidos debe planificarse para evitar pérdidas de información, duplicados y referencias incorrectas.

Las fases recomendadas son:

1. Análisis del origen

Identificar los tipos de contenido, autores, categorías, etiquetas, fechas, imágenes y otros elementos que se necesitan trasladar.

2. Preparación del destino

Comprobar que la instalación de destino funciona correctamente y que dispone de los componentes necesarios para interpretar los contenidos.

3. Exportación

Generar el archivo en el formato adecuado y guardarlo en una ubicación segura.

4. Importación

Cargar el archivo en el sistema de destino, revisar la asignación de autores y comprobar el tratamiento de los archivos adjuntos.

5. Validación

Comparar el resultado con el contenido original. Se deben revisar los títulos, textos, fechas, categorías, autores, enlaces e imágenes.

6. Corrección de incidencias

Resolver errores de codificación, contenidos duplicados, archivos ausentes o datos que no se hayan asignado correctamente.

7. Documentación

Registrar qué se ha trasladado, con qué herramienta, desde qué origen, a qué destino y con qué resultado.

Hay que tener presente que la importación de contenidos no siempre reproduce toda la estructura del sitio original. Algunos plugins almacenan datos propios o crean tipos de contenido personalizados que pueden requerir herramientas adicionales.

Por ejemplo, exportar entradas de WordPress no garantiza que se trasladen las opciones de un plugin de formularios, los ajustes de un tema o las configuraciones de un módulo de comercio electrónico.

Cuando se necesite trasladar una instalación completa, será necesario planificar también la migración de archivos, base de datos, configuración y componentes, además de los contenidos editoriales.
7. Integridad de los datos y problemas habituales
La integridad de la información implica que los contenidos se mantengan completos, coherentes y utilizables durante los procesos de importación y exportación.

Entre los problemas más habituales se encuentran los siguientes:
Problema	Posible causa	Medida correctora
Tildes o caracteres incorrectos	Codificación incompatible.	Comprobar y utilizar UTF-8 cuando sea posible.
Contenidos duplicados	Repetición de una importación o registros ya existentes.	Revisar el destino antes de importar y controlar los duplicados.
Imágenes ausentes	Archivos no incluidos o referencias inaccesibles.	Verificar los archivos y revisar las opciones de importación multimedia.
Autores incorrectos	Asignación inadecuada durante la importación.	Revisar las opciones de asignación y las cuentas de destino.
Categorías o etiquetas no esperadas	Diferencias en la estructura de origen y destino.	Comprobar las taxonomías y sus relaciones.
Formato del texto alterado	Diferencias entre los formatos de origen y destino.	Revisar el contenido después de la importación.
Archivo no reconocido	Formato o estructura incompatible.	Confirmar el formato esperado y utilizar un importador adecuado.
Enlaces rotos	Direcciones antiguas o rutas que ya no existen.	Revisar y actualizar los enlaces afectados.

Antes de realizar operaciones importantes, se debe comprobar que existe una copia de seguridad reciente. Esto permite recuperar el estado anterior si la importación provoca problemas.

También es recomendable trabajar primero con una pequeña muestra de contenidos. De esta manera se pueden detectar errores antes de procesar un volumen mayor de información.

Una vez completada la operación, no basta con comprobar que WordPress muestra un mensaje de éxito. Es necesario revisar el resultado real y verificar que los contenidos se han incorporado correctamente.
8. Seguridad y permisos durante el intercambio de contenidos
La importación y exportación pueden implicar el tratamiento de información sensible o el acceso a contenidos que no deben hacerse públicos.

Por ello, estas operaciones deben realizarse con cuentas autorizadas y aplicando el principio de mínimo privilegio.

Antes de exportar, hay que comprobar:
- Qué contenidos se van a incluir.
- Si existen datos personales o información confidencial.
- Quién tendrá acceso al archivo generado.
- Dónde se almacenará el archivo.
- Si es necesario eliminar información que no deba compartirse.
Los archivos exportados pueden contener datos de autores, comentarios u otra información que no conviene distribuir sin revisar previamente su contenido.

Antes de importar, hay que comprobar:
- Que el archivo procede de una fuente fiable.
- Que su formato es el esperado.
- Que no contiene información que deba incorporarse de forma accidental.
- Que la cuenta utilizada tiene los permisos necesarios.
- Que existe una copia de seguridad del destino.
No se deben importar archivos de procedencia desconocida en una web en producción sin analizarlos previamente.

También es importante tener en cuenta que un archivo XML, CSV o JSON puede incluir contenido malicioso o datos manipulados. La aplicación que realiza la importación debe interpretar esos datos de forma segura.

En una instalación publicada en Internet, los archivos exportados deben guardarse fuera de directorios públicos cuando sea posible y eliminarse de las ubicaciones temporales una vez que ya no sean necesarios.

En un entorno educativo con XAMPP, se deben seguir las mismas buenas prácticas, aunque el sitio funcione únicamente en local.
9. Verificación, documentación y buenas prácticas
Toda operación de importación o exportación debe finalizar con una comprobación de resultados.

Para verificar una exportación, se puede comprobar que el archivo se ha generado, que su tamaño es razonable y que incluye los contenidos seleccionados.

Para verificar una importación, se debe revisar que los contenidos aparecen en WordPress y que mantienen la información esperada.

Las comprobaciones pueden incluir:
- Número de entradas y páginas.
- Títulos y textos.
- Autores asignados.
- Categorías y etiquetas.
- Fechas de publicación.
- Estado de los contenidos.
- Imágenes y otros archivos adjuntos.
- Enlaces internos y externos.
- Ausencia de duplicados no deseados.
También conviene documentar las incidencias y sus soluciones. Si no se produce ningún error, se deben indicar las pruebas realizadas y los resultados obtenidos.

Un registro de operación puede incluir:
Campo	Información que se debe registrar
Fecha	Día en que se realiza la operación.
Operación	Importación o exportación.
Origen y destino	Instalaciones o archivos implicados.
Formato	XML, CSV, JSON u otro.
Contenidos	Tipos de información procesados.
Herramienta	Importador, exportador o plugin utilizado.
Resultado	Operación completada, parcial o fallida.
Incidencias	Problemas detectados y soluciones aplicadas.

Entre las buenas prácticas destacan realizar una copia de seguridad antes de importar grandes cantidades de datos, evitar duplicar operaciones innecesariamente, utilizar formatos compatibles y comprobar siempre el resultado.

La documentación generada en esta actividad servirá para las siguientes tareas del RA3, especialmente la gestión de copias de seguridad, las actualizaciones y la obtención de informes de acceso.
10. Actividad propuesta: importación y exportación de contenidos en el WordPress del proyecto
Contexto
En el RA2 has desarrollado una instalación de WordPress en XAMPP. Durante el RA3 has personalizado su apariencia, configurado e integrado módulos y creado usuarios con distintos perfiles.

Ahora debes demostrar que sabes exportar contenidos, importarlos en otra instalación de WordPress y comprobar que la información se conserva correctamente.

Debes continuar con el WordPress existente. No elimines ni sustituyas el proyecto elaborado en el RA2 ni los cambios realizados en los criterios anteriores.
Parte 1. Preparación del contenido
1. Accede a tu WordPress del proyecto.
2. Comprueba que existen varias entradas y páginas con contenido.
3. Verifica que las entradas tienen títulos, textos, categorías y autores cuando corresponda.
4. Comprueba si existen imágenes u otros archivos multimedia asociados.
5. Anota el número de entradas y páginas que utilizarás como referencia.
6. Identifica al menos tres contenidos concretos que puedas comprobar después de la importación.
Si tu sitio no dispone de suficientes contenidos, crea algunos relacionados con la temática de la web, sin modificar ni eliminar los que ya existan.
Parte 2. Exportación de contenidos
1. Accede a Herramientas → Exportar.
2. Selecciona las entradas, páginas o contenidos que quieras trasladar.
3. Genera el archivo XML de WordPress.
4. Guárdalo en una carpeta identificada para la actividad.
5. Comprueba que el archivo se ha generado correctamente.
6. Registra qué tipos de contenidos has exportado y cuántos elementos esperas trasladar.
Incluye capturas del proceso de exportación y del archivo generado. No incluyas datos personales o información confidencial innecesaria.
Parte 3. Preparación de la instalación de destino
Para evitar poner en riesgo el sitio original, realiza la importación en una segunda instalación de WordPress de pruebas, también en XAMPP.

La instalación de destino debe ser independiente de la original. Puedes utilizar otra carpeta de proyecto y una base de datos diferente.

Antes de importar:
1. Comprueba que el WordPress de destino funciona.
2. Verifica que puedes acceder a su panel de administración.
3. Comprueba que no contiene los contenidos que vas a importar.
4. Anota el estado inicial de la instalación.
5. Comprueba que tienes acceso al archivo XML generado.
No debes sobrescribir la base de datos original ni utilizar la misma base de datos para ambas instalaciones.
Parte 4. Importación y asignación de usuarios
1. En el WordPress de destino, accede a Herramientas → Importar.
2. Selecciona el importador de WordPress.
3. Si es necesario, instala o activa el importador.
4. Carga el archivo XML exportado.
5. Revisa las opciones de asignación de autores.
6. Selecciona la descarga de archivos adjuntos si está disponible y resulta aplicable.
7. Ejecuta la importación.
8. Comprueba que los contenidos aparecen en el sitio de destino.
Si la importación de imágenes falla porque el sitio de origen no está accesible o porque las rutas no son válidas, documenta la incidencia y explica cómo podría resolverse.
Parte 5. Verificación de los resultados
Compara el sitio original con el sitio de destino.

Comprueba, como mínimo:
- Que se han importado las entradas y páginas seleccionadas.
- Que los títulos y textos se conservan.
- Que las categorías y etiquetas son correctas.
- Que los autores se han asignado adecuadamente.
- Que las fechas y los estados de publicación son los esperados.
- Que las imágenes y los enlaces funcionan, cuando proceda.
- Que no se han creado duplicados inesperados.
Presenta una tabla con al menos cinco comprobaciones, indicando el resultado esperado, el resultado obtenido y si la prueba ha sido satisfactoria.
Parte 6. Investigación de otro formato
Investiga cómo podrías importar o exportar contenidos en formato CSV o JSON en WordPress.

Debes:
1. Identificar una herramienta o plugin compatible con el formato elegido.
2. Explicar qué información permite intercambiar.
3. Indicar si permite importar, exportar o ambas operaciones.
4. Describir sus principales limitaciones.
5. Explicar cómo comprobarías la integridad de los datos después del proceso.
No es obligatorio instalar herramientas adicionales si no son necesarias para completar la práctica principal. Si decides instalar un plugin, comprueba su mantenimiento, compatibilidad y reputación antes de utilizarlo.
Parte 7. Documentación y entrega
Entrega un documento individual que incluya:
1. Descripción del WordPress original y del sitio de destino.
2. Inventario de los contenidos seleccionados.
3. Capturas del proceso de exportación.
4. Capturas del proceso de importación.
5. Tabla de comprobaciones y resultados.
6. Investigación sobre CSV o JSON.
7. Incidencias encontradas, causas y soluciones aplicadas.
8. Conclusiones sobre las diferencias entre exportar contenidos y realizar una copia de seguridad completa.
Todas las capturas deben ser legibles y estar acompañadas de una explicación técnica. No basta con insertar imágenes: debes indicar qué se está comprobando y qué demuestra cada evidencia.

Si no se produce ninguna incidencia, documenta las verificaciones realizadas y explica por qué los resultados son correctos.