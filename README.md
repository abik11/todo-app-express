# todo-app-server
This is some kind my of playground to test and learn stuff connected to Node.js and **Express** which seem to be really cool technologies. By now you can find here:
* **multer** - little example of image uploading 
* **mongodb** - example of how to connect and retrive data from mongodb

Soon I will add here some REST api to manage *tasks to do* which will be used with two front end clients:
* [vue.js](https://github.com/abik11/todo-app-vue)
* [react](https://github.com/abik11/todo-app-react) (this one is just starting slowly.....) 

I really want to add some **mongoose** example too and maybe some **ejs** or handlebars.

### How to enable SPA apps 
```javascript
app.get(/.*/, (req, res) => res.sendFile('/public/index.html'));
```

### How to make your own middleware
```javascript
function middlewareLogger(req, res, next) {
    console.log("Executed for every route");
    next();
}

app.use(middlewareLogger);
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

#### Sequelize
[Sequelize docs](http://docs.sequelizejs.com/)<br />
[Sequelize connection issue](https://github.com/sequelize/sequelize/issues/10556)<br />
[Tedious](https://github.com/tediousjs/tedious)<br />

##### Testing Sequelize connection to MSSQL Server
```javascript
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'mssql',
    dialectModulePath: 'tedious',
    dialectOptions: {
        instanceName: 'MSSQLSERVER'
    },
    host: '106.116.82.124',
    port: '1433',
    username: 'ak',
    password: 'samsung1!',
    database: 'AK'
});

sequelize
    .authenticate()
    .then(() => console.log('Connection succeeded!'))
    .catch(error => console.error(`Connection error: ${error}`));
```
