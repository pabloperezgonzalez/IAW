---
title: ☁️ UP3.7. Copias de seguridad en CMS - CE3.d)
---

### RA3. Administra gestores de contenidos adaptándolos a los requerimientos y garantizando la integridad de la información.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| d) Se han realizado copias de seguridad de los contenidos. | Práctico | 10 % |

### 1. Introducción
Un sistema de gestión de contenidos (CMS), como WordPress, almacena información que puede perderse por errores humanos, fallos técnicos, ataques informáticos o problemas durante las actualizaciones. Una **copia de seguridad o backup** es una copia de los datos y archivos de un sistema que permite recuperar la información cuando se produce una pérdida, corrupción o modificación no deseada.

En WordPress, las copias de seguridad son fundamentales para garantizar la continuidad del servicio y la integridad de los contenidos publicados. Entre las situaciones que pueden hacer necesaria una restauración destacan:

- Eliminación accidental de entradas o páginas.
- Modificaciones incorrectas de contenidos.
- Fallos en la base de datos.
- Errores durante la actualización de WordPress, temas o plugins.
- Infecciones por malware o accesos no autorizados.
- Fallos del disco o del equipo donde se aloja la web.
- Problemas durante la importación de contenidos.
- Cambios de configuración que impiden el funcionamiento del sitio.

### 2. Qué elementos deben incluirse en una copia de seguridad de WordPress?
Una instalación de WordPress está formada por archivos, una base de datos y una configuración que permite que todos sus componentes funcionen conjuntamente. Para poder recuperar el sitio correctamente, es necesario conocer qué información debe protegerse.

#### 2.1. Base de datos
La base de datos es especialmente importante porque contiene los contenidos editoriales y numerosos parámetros necesarios para reconstruir el sitio. La base de datos almacena gran parte de la información gestionada por WordPress, como:

- Entradas y páginas.
- Comentarios.
- Categorías y etiquetas.
- Usuarios y determinados datos de sus perfiles.
- Opciones y ajustes de WordPress.
- Relaciones entre contenidos.
- Parte de la configuración de los temas y plugins.
- Metadatos asociados a las publicaciones.

#### 2.2. Archivos de WordPress
También deben protegerse los archivos necesarios para que la instalación funcione:

- **`wp-content/uploads/`:** imágenes, documentos y otros archivos multimedia subidos a la biblioteca.
- **`wp-content/themes/`:** temas instalados y, cuando corresponda, sus personalizaciones.
- **`wp-content/plugins/`:** plugins instalados.
- **`wp-config.php`:** archivo con parámetros de configuración, incluidas las credenciales de conexión a la base de datos.

#### 2.3. Copia de seguridad completa
Una copia de seguridad completa de WordPress debe incluir, como mínimo, una copia coherente de la base de datos y de los archivos necesarios para reconstruir el sitio. Guardar únicamente las entradas en un archivo XML no equivale a realizar una copia completa, porque pueden quedar fuera los archivos multimedia, los plugins, los temas y otros elementos. Del mismo modo, copiar únicamente la carpeta de WordPress no garantiza la recuperación de las entradas, páginas y usuarios almacenados en la base de datos.

### 3. Tipos de copias de seguridad
Existen diferentes tipos de copias de seguridad. La elección depende del volumen de información, de la frecuencia de los cambios y del tiempo disponible para recuperar el sistema.

| Tipo | Descripción | Ventajas y limitaciones |
|---|---|---|
| **Completa** | Copia todos los elementos seleccionados para recuperar el sistema. | Facilita la recuperación, pero puede ocupar más espacio y tardar más tiempo. |
| **Incremental** | Guarda los cambios realizados desde la última copia de seguridad, sea completa o incremental. | Reduce el volumen de cada copia, pero la restauración puede necesitar varias copias encadenadas. |
| **Diferencial** | Guarda los cambios realizados desde la última copia completa. | Puede facilitar la restauración respecto a una cadena incremental, aunque su tamaño aumenta hasta la siguiente copia completa. |
| **Lógica de base de datos** | Exporta la estructura y los datos de la base de datos, por ejemplo, mediante SQL. | Permite recuperar los datos, pero no incluye por sí sola los archivos de WordPress. |
| **De archivos** | Copia los archivos seleccionados del sitio web. | Protege temas, plugins y archivos multimedia, pero no sustituye a la copia de la base de datos. |

### 4. Métodos para realizar copias de seguridad en WordPress
Las copias de seguridad pueden realizarse mediante herramientas de administración de bases de datos, operaciones sobre los archivos o plugins específicos.

#### 4.1. Exportación de la base de datos mediante phpMyAdmin
En una instalación de XAMPP, phpMyAdmin permite exportar la base de datos de WordPress. Procedimiento general:

1. Iniciar los servicios de Apache y MySQL desde el panel de XAMPP.
2. Acceder a phpMyAdmin, normalmente mediante `http://localhost/phpmyadmin/`.
3. Seleccionar la base de datos utilizada por WordPress.
4. Entrar en la opción **Exportar**.
5. Elegir el método de exportación y el formato SQL.
6. Generar y guardar el archivo.
7. Comprobar que el archivo se ha descargado correctamente.

#### 4.2. Copia de los archivos del proyecto
En XAMPP, los archivos de WordPress suelen encontrarse dentro del directorio `htdocs`.

Por ejemplo, si el proyecto está en: `C:\xampp\htdocs\miwordpress\` se puede copiar la carpeta `miwordpress` a una ubicación de respaldo. La copia debe incluir los archivos necesarios para el funcionamiento de la instalación, como el directorio `wp-content` y el archivo `wp-config.php`. No basta con copiar únicamente las imágenes o el tema: hay que conservar los elementos necesarios para reconstruir el sitio.

#### 4.3. Plugins de copias de seguridad
WordPress dispone de plugins que automatizan parte del proceso de copia y restauración. Estas herramientas pueden permitir:

- Programar copias periódicas.
- Seleccionar archivos y base de datos.
- Comprimir los datos.
- Guardar las copias en ubicaciones externas.
- Restaurar una instalación.
- Gestionar diferentes versiones de respaldo.

### 5. Procedimiento para realizar una copia de seguridad completa
Para proteger una instalación de WordPress, se recomienda seguir un procedimiento organizado y documentado.

1. **Identificar la instalación**: Determinar dónde están los archivos del sitio y qué base de datos utiliza. La información de conexión se puede consultar en `wp-config.php`, evitando mostrar sus credenciales en capturas o documentos.
2. **Comprobar el estado del sitio**: Verificar que WordPress funciona correctamente y que los contenidos importantes están disponibles.
3. **Elegir el destino de la copia**: Seleccionar una carpeta o unidad diferente de la ubicación principal del proyecto. En un entorno profesional, conviene utilizar un sistema de almacenamiento separado.
4. **Exportar la base de datos**: Generar un archivo SQL mediante phpMyAdmin u otra herramienta compatible.
5. **Copiar los archivos**: Copiar la carpeta de WordPress o, al menos, todos los archivos necesarios para recuperar la instalación.
6. **Organizar los archivos de respaldo**: Utilizar nombres claros que permitan identificar el proyecto y la fecha de la copia Ejemplo: `wordpress_bd_2026-11-21.sql` o `wordpress_archivos_2026-11-21.zip`.
7. **Verificar la copia**: Comprobar que los archivos existen, que su tamaño es razonable y que pueden abrirse o leerse con las herramientas adecuadas.
8. **Registrar la operación**: Documentar la fecha, los elementos copiados, el método utilizado, la ubicación del respaldo y el resultado de las comprobaciones.

### 6. Planificación y automatización de las copias de seguridad
En una instalación profesional, las copias de seguridad deben formar parte de un plan de mantenimiento. No es suficiente con hacer una copia únicamente cuando se recuerda o cuando ya se ha producido un problema. La frecuencia depende del ritmo de actualización del sitio y de la importancia de sus contenidos.

Dos conceptos importantes para planificar los respaldos son el **RPO** y el **RTO**.
- **RPO (Recovery Point Objective):** cantidad máxima de información que se considera aceptable perder, expresada como un intervalo de tiempo. Por ejemplo, un RPO de 24 horas implica que la organización pretende limitar la pérdida de datos a un máximo aproximado de un día de cambios.
- **RTO (Recovery Time Objective):** tiempo máximo objetivo para recuperar el servicio después de una incidencia. Por ejemplo, un RTO de cuatro horas indica que se pretende recuperar el sistema dentro de ese intervalo.

### 7. Almacenamiento, seguridad y conservación de las copias
Una copia de seguridad puede perder su utilidad si se guarda en el mismo lugar que los datos originales y ambos se ven afectados por la misma incidencia. Por ello, conviene separar el respaldo del sistema que protege.

Una estrategia habitual es aplicar la regla **3-2-1**:
- Mantener al menos **3 copias** de los datos, contando la original.
- Utilizar **2 tipos de soportes o sistemas de almacenamiento** diferentes.
- Conservar **1 copia fuera de la ubicación principal**.

### 8. Restauración de una copia de seguridad
La restauración consiste en utilizar una copia de seguridad para recuperar los datos y archivos de un estado anterior. Una copia no puede considerarse plenamente fiable hasta que se ha comprobado que es posible recuperar la información que contiene.

#### 8.1. Restauración de los archivos
El procedimiento general consiste en:
1. Identificar la copia que se desea recuperar.
2. Comprobar que contiene los archivos necesarios.
3. Preparar el directorio de destino.
4. Restaurar los archivos de WordPress.
5. Revisar los permisos y la configuración.
6. Comprobar que la instalación puede acceder a los recursos necesarios.

#### 8.2. Restauración de la base de datos
Para restaurar una base de datos exportada en SQL, se puede utilizar phpMyAdmin u otra herramienta compatible. El procedimiento habitual es:
1. Preparar una base de datos de destino.
2. Seleccionarla en phpMyAdmin.
3. Acceder a **Importar**.
4. Seleccionar el archivo SQL.
5. Ejecutar la importación.
6. Comprobar que las tablas y los datos se han recuperado.

#### 8.3. Verificación después de restaurar
Después de recuperar la instalación, se debe comprobar:

- Que WordPress carga correctamente.
- Que las entradas y páginas están disponibles.
- Que los usuarios y sus perfiles se conservan.
- Que las imágenes y los documentos se pueden consultar.
- Que el tema y los plugins necesarios funcionan.
- Que los enlaces internos son correctos.
- Que no aparecen errores relevantes en el sitio.

### 9. Actividad UP3.7. Copias de seguridad en CMS - CE3.d)
En esta actividad, se debe establecer un procedimiento de copia de seguridad que permita proteger el trabajo realizado y recuperar el sitio si se produce una incidencia, utilizando el WordPress ya creado.

#### Parte 1. Inventario de la instalación
Identifica los elementos que forman parte de tu WordPress, explicando qué elementos se encuentran en la base de datos y cuáles están almacenados en archivos:
1. Ruta de la carpeta del proyecto.
2. Nombre de la base de datos utilizada.
3. Ubicación de los archivos multimedia.
4. Tema activo y personalizaciones realizadas.
5. Plugins instalados y configurados.
6. Usuarios y perfiles creados.
7. Contenidos importantes que deben conservarse.
8. Funcionalidades de sindicación integradas.

#### Parte 2. Realización de una copia de seguridad completa
Realiza una copia de seguridad de la instalación, incluyendo la base de datos y los archivos necesarios para recuperar la instalación, siguiendo estos pasos:

1. Comprueba que WordPress funciona correctamente.
2. Accede a phpMyAdmin.
3. Identifica y exporta la base de datos correcta en formato SQL.
4. Copia la carpeta del proyecto WordPress.
5. Guarda ambos elementos en una carpeta de respaldo claramente identificada.
6. Utiliza nombres de archivo que permitan reconocer el proyecto y la fecha.
7. Comprueba que los archivos se han generado y que su tamaño es razonable.

No consideres suficiente exportar únicamente las entradas desde **Herramientas → Exportar**.

#### Parte 3. Verificación del respaldo
Comprueba que la copia contiene los elementos esperados. Como mínimo:

- Verifica que el archivo SQL existe y no está vacío.
- Comprueba que el archivo SQL puede abrirse con un editor de texto, sin modificarlo.
- Verifica que la carpeta copiada contiene los archivos de WordPress.
- Comprueba que existen los archivos multimedia utilizados por el proyecto.
- Registra la ubicación y el tamaño de los elementos respaldados.

#### Parte 4. Prueba de restauración en un entorno independiente
Para evitar poner en riesgo el proyecto original, crea una segunda instalación de pruebas en XAMPP. La instalación de destino debe utilizar una carpeta y una base de datos diferentes de las del WordPress original. Realiza las siguientes operaciones:

1. Prepara la carpeta de destino.
2. Crea una base de datos independiente.
3. Restaura los archivos de la copia.
4. Importa el archivo SQL en la base de datos de destino.
5. Ajusta la configuración de conexión de WordPress para utilizar la base de datos de pruebas.
6. Comprueba que la instalación puede acceder a la base de datos.
7. Verifica que WordPress carga y muestra los contenidos recuperados.

Si aparecen problemas relacionados con la dirección o la ruta de la instalación, documéntalos y resuélvelos sin modificar innecesariamente el proyecto original. **No importes el archivo SQL de la copia sobre la base de datos original**, ya que podrías sobrescribir el trabajo realizado durante el curso.

#### Parte 5. Comprobación de la integridad de la información
Compara el sitio original con la instalación restaurada. Comprueba, como mínimo:

- Que las entradas y páginas importantes están disponibles.
- Que los usuarios y sus roles se han conservado.
- Que las imágenes y los archivos multimedia funcionan.
- Que el tema y sus personalizaciones se mantienen.
- Que los plugins necesarios están presentes.
- Que los feeds de sindicación siguen funcionando.
- Que los enlaces principales permiten acceder a los contenidos.