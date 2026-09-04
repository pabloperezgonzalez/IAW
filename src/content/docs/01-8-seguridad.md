---
title: 🌐 UP1.8. Seguridad en los accesos al servidor - CE1.g)
---

### RA1. Prepara el entorno de desarrollo y los servidores de aplicaciones Web instalando e integrando las funcionalidades necesarias.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| g) Se ha establecido y verificado la seguridad en los accesos al servidor. | Práctico | 15 % | 

### 1. Introducción
La seguridad de los accesos al servidor es fundamental para evitar que usuarios no autorizados puedan acceder a los servicios, modificar información o comprometer la aplicación Web. La protección debe aplicarse tanto al **acceso al propio servidor** como a los servicios que proporciona. Los principales objetivos son:

- Identificar a los usuarios.
- Controlar sus permisos.
- Proteger las comunicaciones.
- Limitar los accesos.
- Registrar las actividades.
- Detectar intentos de acceso no autorizado.

### 2. Usuarios, autenticación y permisos
El primer nivel de seguridad consiste en controlar **quién puede acceder al servidor**. La **autenticación** permite comprobar la identidad de un usuario mediante diferentes mecanismos:

- Usuario y contraseña.
- Claves SSH.
- Certificados.
- Autenticación multifactor (MFA).

Una vez autenticado, el sistema debe determinar qué puede hacer ese usuario mediante los **permisos y roles**.
Es importante aplicar el principio de:

> **Mínimo privilegio:** cada usuario debe disponer únicamente de los permisos necesarios para realizar sus tareas.

### 3. Acceso remoto mediante SSH
En servidores Linux, **SSH (Secure Shell)** es uno de los mecanismos principales para la administración remota.

La conexión puede realizarse mediante:

`ssh usuario@192.168.1.10`

SSH proporciona una comunicación cifrada entre el administrador y el servidor. Para mejorar la seguridad se recomienda:

- Utilizar claves SSH.
- Evitar contraseñas débiles.
- Limitar los usuarios autorizados.
- Desactivar el acceso directo de `root`.
- Utilizar un puerto o configuración adecuada cuando proceda.
- Aplicar restricciones mediante firewall.

Las claves SSH son preferibles a las contraseñas en muchos entornos de administración.

### 4. Seguridad del servidor Web
El servidor Web también debe estar correctamente protegido. Algunas medidas importantes son:

- Utilizar HTTPS.
- Instalar certificados digitales válidos.
- Mantener actualizado Apache, Nginx o IIS.
- Desactivar módulos innecesarios.
- Limitar los métodos HTTP cuando sea necesario.
- Configurar correctamente los permisos.
- Evitar mostrar información sensible en los errores.

Los servicios Web suelen utilizar:

| Protocolo | Puerto habitual |
|---|---|
| HTTP | 80/TCP |
| HTTPS | 443/TCP |

El acceso mediante HTTPS permite proteger la información intercambiada entre cliente y servidor.

### 5. Firewall y control de puertos
El **firewall** permite controlar las conexiones que pueden entrar o salir del servidor.
Por ejemplo, un servidor Web podría necesitar:

- 22/TCP → SSH
- 80/TCP → HTTP
- 443/TCP → HTTPS

Mientras que el puerto del SGBD, como 3306/TCP para MariaDB/MySQL, no debería estar expuesto innecesariamente a Internet.
Una política básica sería:

**Internet → Firewall → Solo servicios necesarios → Servidor**

En Ubuntu podemos utilizar herramientas como **UFW** para gestionar las reglas del firewall.

### 6. Protección de las bases de datos
Las bases de datos contienen información que puede ser sensible y deben estar protegidas. Algunas medidas son:

- Utilizar usuarios específicos para cada aplicación.
- Aplicar el principio de mínimo privilegio.
- Utilizar contraseñas seguras.
- Limitar el acceso remoto.
- No utilizar el usuario administrador desde la aplicación.
- Mantener actualizado el SGBD.
- Realizar copias de seguridad.
- Utilizar conexiones cifradas cuando sea necesario.

Una arquitectura recomendable es:

**Internet → Servidor Web → Aplicación → Red privada → SGBD**

De esta forma, el servidor de bases de datos no necesita estar directamente expuesto a Internet.

### 7. Actualizaciones y reducción de la superficie de ataque
Un servidor debe mantenerse **actualizado** para corregir vulnerabilidades conocidas.

En Ubuntu podemos actualizar los paquetes mediante:

`sudo apt update`
`sudo apt upgrade`

También debemos evitar instalar servicios que no sean necesarios. Cuantos más servicios y puertos estén disponibles, mayor será la **superficie de ataque**. Por ello debemos:

- Desinstalar software innecesario.
- Desactivar servicios no utilizados.
- Mantener actualizados los componentes.
- Revisar periódicamente los puertos abiertos.
- Utilizar versiones soportadas.

### 8. Registros y monitorización
Los **logs** permiten conocer qué está ocurriendo en el servidor. Podemos encontrar registros relacionados con:

- Intentos de autenticación.
- Accesos Web.
- Errores del servidor.
- Actividad de aplicaciones.
- Conexiones y servicios.

En sistemas Linux podemos utilizar:

`journalctl`

También podemos comprobar los servicios:

`sudo systemctl status ssh`

Y los puertos abiertos:

`sudo ss -lntp`

La monitorización permite detectar comportamientos anómalos y facilita la investigación de incidentes.

### 9. Verificación de la seguridad
Establecer medidas de seguridad no es suficiente: debemos **comprobar que realmente funcionan**. Algunas pruebas que podemos realizar son:

- Intentar acceder con un usuario no autorizado.
- Comprobar que SSH utiliza autenticación segura.
- Verificar que `root` no puede acceder remotamente si se ha deshabilitado.
- Comprobar las reglas del firewall.
- Revisar los puertos abiertos.
- Verificar que HTTP/HTTPS funcionan correctamente.
- Comprobar que la base de datos no está expuesta innecesariamente.
- Revisar los registros.

Por ejemplo:

`sudo ss -lntp`

permite identificar los puertos que están escuchando en el servidor.

### 10. Actividad práctica: Seguridad en los accesos al servidor
El servidor Web y de bases de datos debe estar protegido frente a accesos no autorizados. Configura y verifica las medidas de seguridad básicas del servidor. Realiza las siguientes acciones:

a. **Crea y configura un usuario 'admin'** para la administración del servidor.

b. **Comprueba los permisos** de los principales archivos y directorios del servidor Web.

c. **Configura el acceso remoto mediante SSH** de forma segura.

d. **Comprueba que no se permite el acceso remoto directo con el usuario `root`**.

e. **Configura el firewall** para permitir únicamente los servicios y puertos necesarios.

f. **Comprueba los puertos abiertos** y los servicios que están escuchando en el servidor.

g. **Comprueba la seguridad del acceso a MariaDB**, utilizando solo un usuario específico 'admin' para la aplicación.

h. **Realiza diferentes pruebas de acceso**, incluyendo accesos permitidos y accesos que deberían ser rechazados.

i. **Documenta las medidas de seguridad aplicadas**, las pruebas realizadas y las incidencias encontradas.

#### Resultado esperado

Al finalizar la actividad, el servidor deberá permitir únicamente los accesos necesarios y rechazar los accesos no autorizados:

**Usuario autorizado → Firewall → Servicio → Acceso permitido**

**Usuario no autorizado → Firewall/Servicio → Acceso rechazado**