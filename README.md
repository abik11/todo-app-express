# todo-app-server
This is some kind of my playground to test and learn stuff connected to Node.js and **Express** which seem to be really cool technologies. By now you can find here:
* **Express** - configuration of some routing with a little REST API, a template engine and static files with some basic error handling
* **Mongoose** - example of how to connect and retrive data from MongoDB through Mongoose
* **Handlebars** - example of templates and how to use them with Express and Bootstrap
* **Multer** - little example of image uploading
* **Cloudinary** - storing images on cloud storage
* **Swiper** - small example of an image gallery made with Swiper

Soon I will add here some REST API to manage *tasks to do* which will be used with two front end clients:
* [vue.js](https://github.com/abik11/todo-app-vue)
* [react](https://github.com/abik11/todo-app-react) (this one is just starting slowly.....) 

### Configuration
To make it all work you have to set three system variables:
* PORT - the port on which the application will listen
* MONGO - MongoDB connection string
* CLOUDINARY_URL - Cloudinary connection string

### How to enable SPA apps 
```javascript
app.get(/.*/, (req, res) => res.sendFile('/public/index.html'));
```

## Useful links

#### Example projects
[express-mongo-example-project](https://github.com/FortechRomania/express-mongo-example-project)<br />
[express-example for sequelize](https://github.com/sequelize/express-example)<br />

#### Tutorials
[Express JS Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)<br />
[MongoDB Complete Introduction](https://www.youtube.com/watch?v=VELru-FCWDM)<br />
[Full Stack Vue.js, Express & MongoDB](https://www.youtube.com/watch?v=j55fHUJqtyw&list=PLillGF-RfqbYSx-Ab1xWVanGKtowTsnNm)<br />
[Creating a REST API with Node.js](https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q)<br />

#### Tutoriales en español
[Subida de Imagenes en Nodejs con Multer](https://www.youtube.com/watch?v=AbJ-y2vZgBs)<br />
[Galeria de Fotos/Imagenes con Nodejs, Mongodb y Cloudinary](https://youtu.be/jP2DNQyOE90) <br />

#### Express and Passport
[Node.js With Passport Authentication](https://www.youtube.com/watch?v=6FOq4cUdH8k)<br />
[Node.js Server & Authentication Basics](https://medium.com/@evangow/server-authentication-basics-express-sessions-passport-and-curl-359b7456003d)<br />

#### Sequelize
In this project you won't find any sequelize example, but it is a really cool technology, worth exploring!
<br />
[Sequelize docs](http://docs.sequelizejs.com/)<br />
[Tedious](https://github.com/tediousjs/tedious)<br />
[Sequelize connection issue](https://github.com/sequelize/sequelize/issues/10556)<br />

##### Testing Sequelize connection to MSSQL Server
```javascript
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'mssql',
    dialectModulePath: 'tedious',
    dialectOptions: {
        instanceName: 'MSSQLSERVER'
    },
    host: '100.110.80.120',
    port: '1433',
    username: 'login',
    password: 'pass',
    database: 'DBName'
});

sequelize
    .authenticate()
    .then(() => console.log('Connection succeeded!'))
    .catch(error => console.error(`Connection error: ${error}`));
```
