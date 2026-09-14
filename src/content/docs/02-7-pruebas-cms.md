---
title: ☁️ UP2.7. Pruebas de funcionamiento de los gestores de contenidos - CE2.g)
---

### RA2. Implanta gestores de contenidos seleccionándolos y estableciendo la configuración de sus parámetros.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| g) Se han realizado pruebas de funcionamiento. | Práctico | 10 % |

### 1. Introducción
Una vez instalado, configurado y protegido un gestor de contenidos, es necesario comprobar que **todas sus funcionalidades funcionan correctamente**. Las pruebas de funcionamiento permiten detectar errores antes de publicar el sitio Web y comprobar que las configuraciones realizadas no han provocado problemas. Debemos comprobar tanto:

- El funcionamiento visible para los usuarios.
- El funcionamiento del panel de administración.
- La gestión de contenidos.
- Los usuarios y permisos.
- Las extensiones instaladas.
- La conexión con la base de datos.

> Instalar correctamente un CMS no significa que esté funcionando correctamente. Es necesario realizar pruebas y verificar los resultados.

### 2. Planificación de las pruebas
Antes de realizar las pruebas debemos determinar **qué queremos comprobar y cuál debe ser el resultado esperado**. Una prueba puede definirse mediante:

| Elemento | Ejemplo |
|---|---|
| Funcionalidad | Inicio de sesión |
| Acción | Introducir usuario y contraseña |
| Resultado esperado | Acceso al panel |
| Resultado obtenido | Acceso correcto |
| Estado | Correcto |

> Por ejemplo: **Prueba → Acción → Resultado esperado → Resultado obtenido → Estado**

### 3. Pruebas de acceso y navegación
La primera comprobación consiste en verificar que los usuarios pueden acceder correctamente al sitio Web. Debemos comprobar:

- Página principal.
- Menús.
- Enlaces internos.
- Enlaces externos.
- Imágenes.
- Páginas y categorías.
- URLs.
- Formularios.

> Por ejemplo: **Inicio → Categoría → Artículo → Formulario**

### 4. Pruebas de creación y edición de contenidos
Una de las funciones principales de un CMS es permitir gestionar contenidos. Debemos comprobar que podemos:

- Crear una página.
- Crear una entrada o publicación.
- Modificar contenido.
- Eliminar contenido.
- Publicar contenido.
- Guardar contenido como borrador.
- Añadir imágenes.
- Crear categorías o secciones.
- Añadir etiquetas cuando el CMS las utilice.

Después de cada operación debemos comprobar que el contenido se muestra correctamente en la parte pública del sitio.

### 5. Pruebas de usuarios y permisos
También debemos verificar que los diferentes usuarios tienen exactamente los permisos que les corresponden. Por ejemplo:

| Usuario | Acción | Resultado esperado |
|---|---|---|
| Administrador | Configurar CMS | Permitido |
| Editor | Modificar contenidos | Permitido |
| Autor | Crear publicaciones | Permitido |
| Usuario normal | Acceder al panel administrativo | Denegado |

Es importante realizar pruebas tanto de **acceso permitido como de acceso denegado**.
> Una buena configuración de permisos debe permitir las acciones necesarias y bloquear las que no corresponden.

### 6. Pruebas de formularios y funcionalidades
Los formularios y otras funcionalidades dinámicas también deben comprobarse. Podemos probar:

- Formularios de contacto.
- Registro de usuarios.
- Inicio y cierre de sesión.
- Comentarios.
- Búsquedas.
- Recuperación de contraseña.
- Subida de archivos.
- Envío de información.

Debemos comprobar que:

1. La información se introduce correctamente.
2. El CMS procesa la información.
3. Se muestra el resultado esperado.
4. Los errores se gestionan correctamente.

### 7. Pruebas de extensiones y módulos
Si hemos instalado plugins, módulos, componentes o extensiones, debemos comprobar que funcionan correctamente. Por ejemplo:

- Instalar una extensión.
- Activarla.
- Configurarla.
- Comprobar su funcionalidad.
- Verificar su integración con el CMS.
- Comprobar que no provoca errores.

> Por ejemplo: **CMS + Plugin de formularios + Plugin de seguridad**

### 8. Pruebas de base de datos y errores
El CMS utiliza normalmente una base de datos para almacenar información. Debemos comprobar que:

- Los contenidos se guardan correctamente.
- Los cambios se conservan.
- Los usuarios se almacenan correctamente.
- Las consultas funcionan.
- No aparecen errores de conexión.

> Ante un error podemos seguir el proceso: **Error → Revisar configuración → Revisar registros → Corregir → Repetir prueba**

### 9. Pruebas finales y documentación
Una vez realizadas todas las comprobaciones, debemos registrar los resultados. Podemos utilizar una tabla como la siguiente:

| Nº | Prueba | Resultado esperado | Resultado | Estado |
|---:|---|---|---|:---:|
| 1 | Acceso al sitio | Página principal correcta | Correcto | ✓ |
| 2 | Inicio de sesión | Acceso permitido | Correcto | ✓ |
| 3 | Crear contenido | Contenido guardado | Correcto | ✓ |
| 4 | Modificar contenido | Cambios visibles | Correcto | ✓ |
| 5 | Permisos | Acceso restringido | Correcto | ✓ |
| 6 | Formulario | Información procesada | Correcto | ✓ |
| 7 | Extensión | Funcionalidad disponible | Correcto | ✓ |
| 8 | Base de datos | Información almacenada | Correcto | ✓ |

Si alguna prueba falla, debemos **corregir el problema y repetirla**.

### 10. Actividad UP2.7. Pruebas de funcionamiento de los gestores de contenidos - CE2.g)
Sobre el sitio **WordPress instalado, personalizado y protegido en XAMPP**, realiza diferentes pruebas para comprobar que sus principales funcionalidades funcionan correctamente y que los usuarios pueden utilizar el sitio según sus permisos.

a. Comprobar el acceso a la página principal del sitio Web.

b. Revisar el funcionamiento de los menús, enlaces, imágenes y páginas.

c. Crear una nueva entrada y comprobar que se publica correctamente.

d. Modificar una entrada existente y verificar que los cambios son visibles.

e. Crear una nueva página estática y añadirla al menú de navegación.

f. Comprobar el funcionamiento de las categorías, etiquetas y buscador.

g. Realizar pruebas de inicio y cierre de sesión con diferentes usuarios.

h. Verificar que cada usuario puede realizar únicamente las acciones permitidas por su rol.

i. Comprobar el funcionamiento de los formularios, comentarios o plugins instalados.

j. Revisar posibles errores y comprobar los registros disponibles.

k. Verificar que la información se guarda correctamente en la base de datos.

l. Registrar los resultados de todas las pruebas y corregir los errores detectados.

#### Resultado esperado
Disponer de un sitio WordPress probado y funcionando correctamente, con sus contenidos, usuarios, permisos, formularios, extensiones y funcionalidades principales verificadas.