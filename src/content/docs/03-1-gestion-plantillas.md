---
title: ☁️ UP3.1. Gestión de plantillas - CE3.f)
---

### RA3. Administra gestores de contenidos adaptándolos a los requerimientos y garantizando la integridad de la información.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| f) Se han gestionado plantillas. | Práctico | 10 % |

### 1. Introducción
Las plantillas son componentes que determinan la apariencia visual y la estructura de un sitio web gestionado mediante un sistema de gestión de contenidos (CMS, *Content Management System*). Permiten definir cómo se presentan los contenidos al usuario, incluyendo la distribución de los elementos, los colores, las tipografías, las cabeceras, los pies de página, los menús y otras características visuales. En WordPress, las plantillas forman parte de los temas (*themes*), mientras que otros CMS utilizan denominaciones como *templates* o temas.

La gestión de plantillas permite adaptar un sitio web a los requisitos de una organización sin tener que desarrollar todas sus páginas desde cero. Además, facilita mantener una apariencia coherente en las diferentes secciones del sitio.

### 2. Diferencia entre contenido, plantilla y tema
Es importante distinguir tres conceptos relacionados, pero diferentes:

- **Contenido:** información que se publica en el sitio web, como páginas, artículos, imágenes o noticias.
- **Plantilla:** estructura que determina cómo se presenta un tipo concreto de contenido. Por ejemplo, una plantilla para artículos puede mostrar el título, la fecha, el autor y el texto.
- **Tema:** conjunto de recursos que define el diseño general del sitio web y que puede incluir varias plantillas, hojas de estilo, archivos de configuración y otros componentes.

Por ejemplo, en WordPress, un sitio puede utilizar un tema corporativo con una plantilla para la página de inicio, otra para los artículos y otra para las páginas de información. Esta separación permite modificar la presentación sin tener que volver a crear los contenidos.

### 3. Tipos de plantillas y temas
Los CMS pueden ofrecer diferentes tipos de plantillas según la finalidad del sitio web y la tecnología utilizada. Entre las más habituales encontramos:

- **Plantillas corporativas:** orientadas a empresas, organizaciones y páginas institucionales.
- **Plantillas para blogs:** priorizan la lectura de artículos, las fechas de publicación, las categorías y los autores.
- **Plantillas para comercio electrónico:** presentan productos, precios, imágenes, categorías y elementos relacionados con la compra.
- **Plantillas para portales:** permiten organizar grandes cantidades de información en diferentes secciones.
- **Plantillas adaptables (*responsive*):** ajustan la distribución de los elementos al tamaño de pantalla de ordenadores, tabletas y móviles.

También es importante distinguir entre temas clásicos y temas de bloques en WordPress. Los **temas clásicos** suelen personalizarse mediante el personalizador, las opciones del tema y, cuando corresponde, archivos PHP y CSS. Los **temas de bloques** permiten modificar visualmente distintas partes del sitio mediante el editor del sitio, utilizando bloques para construir cabeceras, pies de página, plantillas y otras áreas.

### 4. Instalación, activación y cambio de plantillas
La gestión de plantillas comienza con la selección e instalación de un tema adecuado. En WordPress, los temas pueden instalarse desde el directorio oficial, desde un archivo comprimido compatible o mediante procedimientos de administración del servidor. El procedimiento general es el siguiente:

1. Acceder al panel de administración.
2. Abrir la sección de apariencia o gestión de temas.
3. Buscar o seleccionar el tema que se desea utilizar.
4. Instalarlo si todavía no está disponible.
5. Revisar su vista previa y las opciones de configuración.
6. Activarlo y comprobar el resultado en la parte pública del sitio.

La instalación no implica necesariamente que el tema quede activo. Es necesario distinguir entre tener un tema instalado y tenerlo seleccionado como diseño actual. Antes de cambiar de tema en un sitio en producción, conviene comprobar su compatibilidad, revisar el diseño resultante y realizar una copia de seguridad si el cambio puede afectar a la presentación o a las funcionalidades existentes.

### 5. Personalización de la apariencia
Una vez activado el tema, es posible adaptar su apariencia a las necesidades del sitio web. Las opciones habituales de personalización incluyen:

- **Identidad visual:** logotipo, nombre del sitio e icono.
- **Colores:** colores corporativos, fondos, enlaces y botones.
- **Tipografía:** familias, tamaños y estilos de letra.
- **Estructura:** distribución de las áreas de contenido y de las barras laterales.
- **Cabecera y pie de página:** información institucional, enlaces y datos de contacto.
- **Menús de navegación:** organización de los enlaces principales.
- **Imágenes:** imágenes destacadas, fondos y otros recursos visuales.

En WordPress, las opciones disponibles dependen del tema activo. Los temas clásicos pueden ofrecer ajustes mediante el personalizador, mientras que los temas de bloques permiten editar visualmente distintas zonas desde el editor del sitio. La personalización debe mantener una estructura coherente, facilitar la navegación y respetar criterios de accesibilidad, como el contraste suficiente entre el texto y el fondo.

### 6. Edición de plantillas y uso de CSS
En determinados casos, las opciones de personalización del tema no son suficientes. Puede ser necesario modificar estilos o adaptar la estructura de las plantillas. **CSS (*Cascading Style Sheets*)** permite controlar la presentación de los elementos HTML, incluyendo colores, tamaños, márgenes, alineación y distribución. Por ejemplo, el siguiente código cambia el color de los encabezados de una página:

```css
h1,
h2 {
    color: #176b45;
}
```

Este código puede incorporarse mediante las opciones de CSS adicional del CMS, cuando estén disponibles, o en una hoja de estilos apropiada del tema. Si se necesita modificar la estructura de las plantillas, deben conocerse las tecnologías utilizadas por el CMS. En WordPress, los temas clásicos pueden utilizar archivos PHP, HTML y CSS; los temas de bloques emplean plantillas basadas en HTML y estructuras de bloques.

### 7. Compatibilidad, rendimiento y accesibilidad
La elección y gestión de una plantilla también debe tener en cuenta aspectos técnicos que influyen en la calidad del sitio web.

- Compatibilidad: el tema debe funcionar con la versión del CMS y con las extensiones necesarias.
- Diseño adaptable: debe visualizarse correctamente en ordenadores, tabletas y móviles.
- Rendimiento: debe evitar recursos innecesarios, imágenes excesivamente grandes y elementos que ralenticen la carga.
- Accesibilidad: debe facilitar la navegación mediante teclado, utilizar una estructura semántica adecuada y ofrecer contraste suficiente.
- Mantenimiento: es preferible utilizar temas que reciban actualizaciones y dispongan de documentación.
- Licencia: deben revisarse las condiciones de uso, modificación y distribución.
- Seguridad: conviene utilizar temas de fuentes fiables y evitar paquetes modificados de procedencia desconocida.

Un tema con muchas opciones o efectos visuales no siempre es la mejor elección. Debe seleccionarse teniendo en cuenta los requisitos funcionales, el rendimiento, la facilidad de mantenimiento y la experiencia de los usuarios.

### 8. Seguridad y mantenimiento de las plantillas
Las plantillas pueden contener código que se ejecuta en el servidor o que se incorpora a las páginas web. Por tanto, su gestión también tiene implicaciones de seguridad.

Para reducir los riesgos, se deben aplicar las siguientes medidas:
- Instalar temas desde fuentes oficiales o proveedores de confianza.
- Mantener los temas actualizados.
- Eliminar los temas que no se utilicen, siempre que no sean necesarios para el funcionamiento o la recuperación del sitio.
- Restringir los permisos de administración para evitar cambios no autorizados.
- Realizar copias de seguridad antes de modificaciones importantes.
- Comprobar que las actualizaciones no alteran el diseño ni las funcionalidades.
- Evitar modificar directamente archivos que puedan sobrescribirse durante una actualización.

En WordPress, las capacidades para instalar, activar o editar temas dependen de los permisos del usuario y del entorno de instalación. Estas operaciones deben reservarse a los perfiles autorizados.

### 9. Comprobación y verificación de las plantillas
Después de instalar, activar o modificar una plantilla, es necesario comprobar que el sitio web sigue funcionando correctamente. Las principales verificaciones son:
1. Apariencia general: comprobar que los colores, las tipografías, las imágenes y la distribución son los esperados.
2. Navegación: verificar que los menús, los enlaces y los botones funcionan correctamente.
3. Presentación de contenidos: revisar las páginas, las entradas y las imágenes publicadas.
4. Adaptación a dispositivos: comprobar la visualización en diferentes tamaños de pantalla.
5. Compatibilidad con módulos: verificar que los formularios, las galerías y otras funcionalidades siguen operativos.
6. Rendimiento: comprobar que las páginas se cargan correctamente y no presentan ralentizaciones importantes.
7. Errores: revisar posibles mensajes de error, elementos descolocados o problemas en la consola del navegador.

### 10. Actividad 
Partiendo del WordPress personalizado en el RA2 y ejecutado en el entorno XAMPP, realiza las siguientes tareas:

a. Identifica el tema activo, sus características principales y las opciones de personalización disponibles. Justifica si es adecuado para la finalidad del sitio web.

b. Si el tema actual no se adapta a las necesidades del proyecto, instala otro desde una fuente fiable. Activa el tema elegido y comprueba que el sitio sigue funcionando correctamente.

c. Revisa la cabecera, el pie de página, los menús y la distribución de los contenidos. Comprueba que la navegación sea clara y que los elementos principales estén accesibles.

d. Configura, según las posibilidades del tema, la presentación de la página de inicio, las páginas estáticas y las entradas del blog. Mantén una estructura coherente entre las diferentes secciones.

e. Aplica al menos una modificación que vaya más allá de las opciones básicas del tema. Puedes utilizar CSS adicional, el editor del sitio o un tema hijo, según el tipo de tema empleado. Explica qué has modificado y por qué.

f. Verifica que el sitio se visualiza correctamente en diferentes tamaños de pantalla y que los textos, las imágenes, los menús y los enlaces funcionan adecuadamente.

g. Comprueba que la plantilla no afecta negativamente a los contenidos ni a las funcionalidades existentes en WordPress. Si detectas algún problema, documenta su causa y la solución aplicada.

h. Identifica el tema activo, su versión y las personalizaciones realizadas. Indica qué precauciones tomarías antes de actualizarlo y cómo evitarías perder los cambios.

i. Accede al sitio como visitante y comprueba que la apariencia y la navegación responden a los objetivos del proyecto.