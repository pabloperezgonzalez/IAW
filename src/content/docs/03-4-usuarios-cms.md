---
title: ☁️ UP3.4. Creación y gestión de usuarios en CMS - CE3.b)
---

### RA3. Administra gestores de contenidos adaptándolos a los requerimientos y garantizando la integridad de la información.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| b) Se han creado y gestionado usuarios con distintos perfiles. | Práctico | 15 % |

### 1. Introducción
Un **sistema de gestión de contenidos (CMS)**, como WordPress, permite que varias personas colaboren en la administración de un sitio web. Para organizar este trabajo, es necesario crear usuarios, asignarles permisos y controlar qué acciones pueden realizar. La gestión de usuarios es fundamental para garantizar la seguridad, la integridad de la información y el correcto funcionamiento del sitio web. No todas las personas que participan en una web necesitan acceder a las mismas opciones: un administrador puede configurar el sistema, mientras que un autor puede publicar artículos sin tener acceso a la configuración general.

En WordPress, cada usuario dispone de una cuenta individual asociada a unas credenciales de acceso y a un perfil de permisos. Los principales objetivos de la gestión de usuarios son:

- Identificar a las personas que acceden al sistema.
- Limitar las acciones que puede realizar cada usuario.
- Facilitar la colaboración entre distintos perfiles profesionales.
- Evitar modificaciones no autorizadas.
- Mantener la trazabilidad de las acciones realizadas.
- Aplicar el principio de mínimo privilegio: cada usuario debe disponer únicamente de los permisos necesarios para realizar sus tareas.

### 2. Usuarios, autenticación, autorización y permisos
Aunque estos conceptos están relacionados, representan aspectos diferentes de la seguridad.

- **Usuario:** cuenta individual que identifica a una persona dentro del CMS. Normalmente incluye nombre de usuario, correo electrónico, contraseña y otros datos de perfil.
- **Autenticación:** proceso mediante el cual el sistema comprueba la identidad de una persona. En WordPress, habitualmente se realiza mediante el nombre de usuario o correo electrónico y la contraseña.
- **Autorización:** determina qué operaciones puede realizar una persona una vez que ha iniciado sesión.
- **Permiso o capacidad:** acción concreta que un usuario puede ejecutar, como publicar una entrada, editar una página, instalar un plugin o administrar otras cuentas.

### 3. Perfiles o roles de usuario en WordPress
En WordPress, los permisos se organizan principalmente mediante **roles y capacidades**. Cada rol agrupa un conjunto de capacidades que determinan las operaciones permitidas. WordPress incluye cinco roles principales en una instalación estándar de un único sitio. Cada uno está pensado para un nivel diferente de responsabilidad.

| Rol | Funciones principales | Uso habitual |
|---|---|---|
| **Suscriptor** | Gestionar su perfil y acceder a contenidos que requieran registro, según la configuración del sitio. | Usuarios registrados con permisos limitados. |
| **Colaborador** | Escribir y gestionar sus propias entradas, pero no publicarlas directamente. | Personas que redactan contenidos pendientes de revisión. |
| **Autor** | Crear, editar y publicar sus propias entradas. | Redactores responsables de sus publicaciones. |
| **Editor** | Gestionar y publicar entradas y páginas, incluidas las de otros usuarios, y moderar comentarios. | Responsables editoriales. |
| **Administrador** | Administrar la configuración general, los usuarios, los temas, los plugins y otras funciones críticas del sitio. | Responsable técnico del WordPress. |

Los roles anteriores corresponden a una instalación estándar. Los permisos concretos pueden cambiar si se instalan plugins que amplían o modifican las capacidades del sistema.

### 4. Creación de usuarios en WordPress
Para crear una cuenta desde el panel de administración de WordPress, se debe acceder a:

**Usuarios → Añadir nuevo usuario.**

En el formulario de creación se pueden configurar distintos campos:

- **Nombre de usuario:** identificador de la cuenta. Conviene utilizar uno claro y evitar nombres genéricos compartidos.
- **Correo electrónico:** dirección asociada a la cuenta, necesaria para determinadas comunicaciones y procesos de recuperación.
- **Nombre y apellidos:** información identificativa del usuario.
- **Contraseña:** credencial que debe ser robusta y no reutilizarse en otros servicios.
- **Enviar aviso al usuario:** permite notificar la creación de la cuenta mediante correo electrónico, si el entorno está preparado para ello.
- **Perfil o rol:** determina los permisos iniciales de la cuenta.

Al crear usuarios se deben seguir varias buenas prácticas:

1. Asignar una cuenta individual a cada persona.
2. Evitar compartir credenciales entre varios usuarios.
3. Utilizar contraseñas largas, únicas y difíciles de adivinar.
4. Asignar el rol menos privilegiado que permita realizar las tareas necesarias.
5. Utilizar datos de prueba cuando se trabaje en un entorno educativo.
6. Comprobar que el usuario puede iniciar sesión y realizar únicamente las acciones permitidas.

### 5. Modificación de usuarios y asignación de roles
Las necesidades de una organización pueden cambiar. Un usuario puede asumir nuevas responsabilidades, dejar de participar en el proyecto o necesitar permisos diferentes. WordPress permite administrar las cuentas desde **Usuarios → Todos los usuarios**. Desde este apartado se pueden realizar operaciones como:

- Consultar el listado de usuarios.
- Buscar cuentas por nombre o correo electrónico.
- Editar los datos de un usuario.
- Cambiar su rol.
- Modificar determinados ajustes del perfil.
- Eliminar cuentas cuando corresponda.

### 6. Gestión de capacidades y principio de mínimo privilegio
Los roles de WordPress agrupan capacidades, que son los permisos concretos que habilitan cada operación. Algunos ejemplos de capacidades son:

- Crear entradas.
- Editar entradas propias.
- Editar entradas de otros usuarios.
- Publicar entradas.
- Editar páginas.
- Moderar comentarios.
- Administrar usuarios.
- Instalar plugins.
- Cambiar temas y ajustes generales.

En una instalación estándar, el administrador dispone de capacidades de gran alcance. Por ello, no debe asignarse este rol a todos los participantes. El **principio de mínimo privilegio** consiste en conceder únicamente los permisos imprescindibles para cada función. 

Ejemplo de asignación en un proyecto web:

| Persona o función | Rol recomendado | Motivo |
|---|---|---|
| Responsable técnico del sitio | Administrador | Necesita gestionar la configuración y el mantenimiento. |
| Responsable de contenidos | Editor | Debe revisar y publicar contenidos de diferentes autores. |
| Redactor habitual | Autor | Puede publicar sus propias entradas. |
| Alumno que redacta contenido pendiente de revisión | Colaborador | Puede preparar entradas sin publicarlas directamente. |
| Usuario que solo necesita una cuenta de acceso | Suscriptor | No requiere permisos editoriales. |

### 7. Seguridad de las cuentas de usuario
Una gestión incorrecta de usuarios puede provocar accesos no autorizados, pérdida de información o modificaciones de la web. Para reducir estos riesgos, se deben aplicar medidas de seguridad desde el momento de creación de las cuentas.

**Contraseñas seguras**
- Utilizar contraseñas largas y únicas.
- No compartirlas con otros usuarios.
- No almacenarlas en documentos públicos ni en capturas de pantalla.
- Utilizar un gestor de contraseñas cuando proceda.

**Control de privilegios**
- Evitar el uso innecesario del rol de administrador.
- Revisar periódicamente los permisos asignados.
- Retirar o reducir los permisos cuando cambien las responsabilidades.
- No crear cuentas administrativas para tareas que no las necesitan.

**Protección del acceso**
- Mantener WordPress, los temas y los plugins actualizados.
- Utilizar conexiones HTTPS en instalaciones publicadas en Internet.
- Considerar la autenticación multifactor cuando el entorno lo permita.
- Evitar los intentos de acceso mediante contraseñas débiles.
- Limitar la exposición del panel de administración cuando sea necesario.

**Cuentas inactivas o innecesarias**
Cuando una persona deja de colaborar en el proyecto, se debe revisar su cuenta. Según las necesidades, puede cambiarse su rol, desactivarse mediante una solución apropiada o eliminarse.

### 8. Actividad propuesta: creación y gestión de usuarios con distintos perfiles en WordPress
En el RA2 se ha desarrollado una instalación de WordPress en XAMPP. Durante el RA3 se ha personalizado su apariencia y se han adaptado e integrado módulos para responder a las necesidades del proyecto.

Ahora, la web debe permitir que varias personas colaboren en la creación y revisión de contenidos sin que todas dispongan de permisos administrativos. La actividad consiste en diseñar e implementar una estructura de usuarios adecuada para el sitio existente, comprobar los permisos y documentar los resultados.

#### Parte 1. Diseño de la estructura de usuarios
Define al menos cuatro cuentas de prueba, además de la cuenta administrativa principal que ya utilizas. La propuesta debe incluir:

| Rol | Justificación |
|:-----------|:-----:
| Editor | |
| Autor | |
| Colaborador | |
| Suscriptor | |

#### Parte 2. Creación de las cuentas
En el panel de WordPress:

1. Accede a **Usuarios → Añadir nuevo usuario**.
2. Crea las cuatro cuentas propuestas.
3. Asigna a cada una el rol correspondiente.
4. Comprueba que las cuentas aparecen en el listado de usuarios.
5. Verifica que los datos y los roles se han guardado correctamente.

Incluye capturas de pantalla del listado de usuarios y de la configuración de los perfiles. No muestres contraseñas.

#### Parte 3. Pruebas de permisos
Inicia sesión con las cuentas de prueba y comprueba las acciones que puede realizar cada perfil. Realiza, como mínimo, estas comprobaciones:

- **Editor:** comprobar que puede gestionar y publicar contenidos de otros usuarios.
- **Autor:** crear y publicar una entrada propia.
- **Colaborador:** crear una entrada y comprobar que no puede publicarla directamente.
- **Suscriptor:** comprobar que puede gestionar su perfil, pero no dispone de permisos editoriales para crear y publicar entradas.

Además, intenta acceder a una función administrativa, como la gestión de plugins, con una cuenta que no tenga esos permisos. Comprueba que el acceso no está permitido.

#### Parte 4. Modificación de roles
Realiza un cambio controlado en una de las cuentas. Por ejemplo, cambia el rol de un colaborador a autor. Después:

1. Comprueba que el nuevo rol aparece en el listado de usuarios.
2. Inicia sesión con esa cuenta.
3. Repite una prueba de permisos que permita comprobar el cambio.
4. Explica qué acciones puede realizar ahora que antes no podía.

Finalmente, devuelve la cuenta a su rol inicial si es necesario para conservar la estructura definida en la actividad.