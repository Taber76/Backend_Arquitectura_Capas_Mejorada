# Backend-Arquitectura-Capas-Mejorada
Desafio incorporar conceptos Factory, DAO y DTO
***

## Consigna
1) Modificar la capa de persistencia incorporando los conceptos de Factory, DAO, y DTO.
2) Los DAOs deben presentar la misma interfaz hacia la lógica de negocio de nuestro servidor.
3) El DAO seleccionado (por un parámetro en línea de comandos como lo hicimos anteriormente) será devuelto por una Factory para que la capa de negocio opere con el.
4) Cada uno de estos casos de persistencia, deberán ser implementados usando el patrón singleton que impida crear nuevas instancias de estos mecanismos de acceso a los datos.
5) Comprobar que si llamo a la factory dos veces, con una misma opción elegida, devuelva la misma instancia.
6) Implementar el patrón Repository para la persistencia de productos y mensajes.


## Entrega

### Descripcion general
Se ha dividido el proyecto en capas: server, ruteo, controlador/componentes y persistencia

#### Server
Se trata de un server implementado con Express que se puede ejectuar en modo 'fork' por defecto o en modo 'cluster' pasando el parametro **-m CLUSTER**, con el parametro **-p 8080** se puede indicar el puerto de escucha (en este caso 8080) y con **-a 1** se le puede indicar que para el modo cluster cada cluster escuche en un puerto distinto con numeros correlativos.
El server tambien usa **SOCKET.IO** para la carga de productos nuevos y para los mensajes de chat

#### Routes
Se han implementado dos rutas princiaples: session y api.
**Session** para recibir las solicitudes de logueo, registro y deslogueo de usuario.
**Api** recibe solicitudes para mostrar, editar, crear y borrar productos.

#### Controlador / componentes
Al tratarse de un desarrollo sencillo esta capa se ha unificado y unicamente contiene una implementacion de validacion de nuevo uauario o producto

#### Persistencia
Los datos son almacendados en una base de datos MongoDB, para ello se han creado clases (producto y usuario) con metodos para interactuar directamente con la base de datos.

#### Ejemplo de flujo de registro de nuevo usuario
 nuevo usuario (POST frontend) --> server (src/main.js) --> router (routes/sessionRouter.js) --> sesion de usuario (middlewares/auth.js) --> validacion (controllers/userController.js) --> persistencia (class/userContainer.js)


### Frontend
Se ha creado un frontend sencillo para interactuar con el backend

#### Login de usuario
Con la opcion de loguearse con un usuario registrado (POST || /session/login), a traves de google loguearse o registrarse (POST || /session/logingoogle) o de registrar un nuevo usuario (POST || /session/register )

### Usuario logeado 
Cuando hay un usuario logueado se muestra en el forntend un formulario de registro de nuevo producto el cual es enviado al backend mediante SOCKET