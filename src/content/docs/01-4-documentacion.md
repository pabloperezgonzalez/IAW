---
title: 🌐 UP1.4. Documentación del entorno Web - CE1.i)
---

### RA1. Prepara el entorno de desarrollo y los servidores de aplicaciones Web instalando e integrando las funcionalidades necesarias.

| Criterio de evaluación | Tipo | Ponderación |
|:-----------|:-----:|:-----:|
| i) Se han documentado los procedimientos realizados. | Práctico | 5 % |

### 1. Introducción
En la administración de servidores y aplicaciones Web no es suficiente con realizar correctamente una instalación o configuración. También es necesario **documentar los procedimientos realizados**. La documentación permite conocer:

- Qué se ha instalado.
- Cómo se ha configurado.
- Qué comandos se han utilizado.
- Qué problemas han aparecido.
- Cómo se han solucionado.
- Cómo comprobar que el sistema funciona correctamente.

Una buena documentación facilita el mantenimiento y permite que otro administrador pueda repetir el procedimiento.

### 2. ¿Por qué es importante documentar?
La documentación es especialmente importante en sistemas informáticos porque las configuraciones pueden ser complejas y cambiar con el tiempo. Permite:

- Repetir una instalación.
- Recuperar un servicio después de un fallo.
- Facilitar el mantenimiento.
- Evitar errores.
- Compartir conocimientos.
- Registrar cambios.
- Resolver incidencias más rápidamente.

> Una configuración que funciona pero no está documentada puede ser difícil de mantener.

### 3. ¿Qué debemos documentar?
Al instalar y configurar una aplicación Web debemos registrar la información más importante.

| Elemento | Ejemplo |
|---|---|
| Sistema operativo | Ubuntu Server |
| Servidor Web | Apache |
| Lenguaje | PHP |
| SGBD | MariaDB |
| Dirección IP | 192.168.1.10 |
| Puertos | 80, 443 |
| Directorio Web | `/var/www/html` |
| Ficheros de configuración | `/etc/apache2/` |
| Usuarios | `appuser` |
| Base de datos | `aplicacion` |
| Comandos utilizados | `apt`, `systemctl`, etc. |

No es necesario documentar absolutamente todo, sino aquello que sea relevante para instalar, configurar, administrar y solucionar problemas.

### 4. Documentar la instalación
Los pasos de instalación deben quedar registrados de forma ordenada. Por ejemplo:

1. Actualizar los repositorios.
2. Instalar Apache.
3. Comprobar el servicio.
4. Instalar PHP.
5. Instalar MariaDB.
6. Crear la base de datos.
7. Configurar la aplicación.
8. Realizar las pruebas.

Algunos comandos que podemos documentar son:

`sudo apt update`
`sudo apt install apache2`
`sudo systemctl status apache2`
`sudo systemctl restart apache2`

Esto permite repetir posteriormente el procedimiento.

### 5. Documentar la configuración
También debemos indicar **qué configuraciones se han modificado y dónde**. Por ejemplo:

- Ficheros modificados.
- Parámetros configurados.
- Direcciones IP.
- Puertos utilizados.
- Usuarios creados.
- Permisos establecidos.
- Módulos activados.
- Hosts virtuales configurados.

Por ejemplo, si se utiliza Apache, podemos indicar que los ficheros de configuración se encuentran en:

`/etc/apache2/`

Y que el contenido Web se encuentra en:

`/var/www/html`

### 6. Documentar las pruebas realizadas
La documentación debe indicar también cómo se ha comprobado que el sistema funciona. Podemos registrar pruebas como:

- Acceso mediante navegador.
- Comprobación de puertos.
- Comprobación del servicio.
- Acceso a la base de datos.
- Ejecución de la aplicación.
- Pruebas de autenticación.
- Comprobación de HTTPS.

Por ejemplo:

`curl -I http://localhost`

Si obtenemos una respuesta HTTP correcta, podemos registrar el resultado de la prueba. Una tabla sencilla puede ser:

| Prueba | Resultado |
|---|---|
| Apache iniciado | Correcto |
| Acceso HTTP | Correcto |
| PHP ejecutándose | Correcto |
| Conexión con MariaDB | Correcto |
| Acceso HTTPS | Correcto |

### 7. Registrar errores e incidencias
Durante la instalación pueden aparecer errores. También debemos documentarlos. Una incidencia debería incluir:

1. **Problema:** qué ha ocurrido.
2. **Causa:** por qué ha ocurrido, si se conoce.
3. **Solución:** qué acciones se han realizado.
4. **Resultado:** si el problema se ha solucionado.

Ejemplo:

> **Problema:** Apache no inicia correctamente.  
> **Causa:** existe un error en la configuración.  
> **Solución:** se revisa la configuración y se corrige el fichero correspondiente.  
> **Resultado:** Apache vuelve a iniciarse correctamente.

Esto crea un historial útil para futuras incidencias.

### 8. Herramientas para documentar
Existen diferentes herramientas para crear y mantener documentación técnica.

| Herramienta | Utilidad |
|---|---|
| Markdown | Crear documentación sencilla |
| README | Explicar un proyecto |
| Git | Controlar cambios en la documentación |
| GitHub | Almacenar y compartir documentación |
| Diagramas | Representar arquitecturas |
| Wiki | Mantener documentación técnica |
| Capturas de pantalla | Mostrar configuraciones y resultados |

Markdown es especialmente útil porque permite crear documentación fácilmente y puede integrarse con GitHub Pages.

### 9. Documentación y control de versiones
La documentación también puede gestionarse mediante **Git**. Por ejemplo:

**Modificar documentación → `git add` → `git commit` → `git push` → GitHub**

Esto permite:

- Conocer quién realizó un cambio.
- Saber cuándo se realizó.
- Recuperar versiones anteriores.
- Comparar modificaciones.
- Trabajar de forma colaborativa.

Por ejemplo, podemos mantener un fichero:

`README.md`

con la información básica del proyecto y otros documentos Markdown para explicar la instalación y configuración.