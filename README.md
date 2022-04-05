# TMDB

![logop5](https://p5-hall-of-fame.s3.amazonaws.com/p5logo.png)

### Objetivos

Proyecto creado desde cero que muestra películas y shows de tv utilizando la API de [_The Movie Database_ (TMDB)](https://www.themoviedb.org/).


### Tecnologías Utilizadas

- Bulma
- Express
- React
- Passport (con bcrypt)
- Redux
- Postgres

### Requisitos

📕 **Must Have**

- Buscar y listar películas.
- Ver los detalles de una película o programa de televisión.
- Crear usuarios.
- _Loguear_ y _desloguear_ usuarios.

📘 **Should Have**

- Agregar una película o programa a una lista de favoritos.
- Ver una lista de favoritos.
- Remover una película o programa de una lista de favoritos.
- Diferenciar las rutas de _front-end_ para películas y programas de televisión.

📗 **Could Have**

- Buscar usuarios.
- Ver el perfil de un usuario específico (con sus películas o programas favoritos).
- Mantener sesión abierta ante un cierre del _browser_ o `refresh`.

📓 **Won't Have**

- _Full responsive_.
- _Loguear_ usuarios a través de su cuenta en Google.

### Pledu

Hacé [_click_ acá](https://pledu.plataforma5.la/bootcamp/omdb/solo%20week-581874b7) para acceder al módulo correspondiente en Pledu.

------ ////// ------

Front-End
src
├── /assets
├── /components
├── /commons
├── /hooks
├── /store
├── /utils
└── index.js

src: Carpeta que aloja el código fuente del front-end de la aplicación.

assets: Imágenes y otros archivos estáticos.

components: Componentes con lógica o elementos propios de una vista que no reutilizarás. Por ejemplo: navbar o sidebar.

commons: Componentes reutilizables.

hooks: Custom Hooks.

store: Todo lo relacionado con Redux.

utils: Funciones genéricas.

Back-End
api
├── /models
├── /controllers
├── /config
├── /routes
├── /utils
└── server.js

api: Carpeta que aloja el código fuente del back-end de la aplicación.

models: Modelos de la base de datos.

controllers: Controladores de las rutas.

config: Cualquier estructura de configuración que pueda ir aislada como autenticación o conexiones a la DB.

routes: Los archivos de rutas.

utils: Funciones genéricas.
