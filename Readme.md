# Quickstart Node

## Setup inicial

Antes de poder empezar con el proyecto, es necesario tener instalado node. Para pueden ir al sitio oficial de Node, descargarlo e instalarlo:

> [Download | Node.js (nodejs.org)](https://nodejs.org/en/download/)

Una vez instalado, verifiquen que se pueda llamar correctamente desde la terminal usando:

```
node --version
```

> Si lo que nos devuelve es un número de version, entonces ha sido instalado correctamente. De lo contrario, verifica que se haya instalado bien y que se haya agregado el path. También puedes intentar reiniciar tu terminal.

Una vez que se haya instalado correctamente, deberemos ejecutar el siguiente comando en el directorio de nuestro proyecto para inicializar node:

```
npm init -y
```

## Creando un servidor

Para crear un servidor, podemos hacerlo mediante una configuración completa de un servicio HTTP, o podemos utilizar Express, una librería que simplifica el proceso de nuestra parte. En este caso usaremos Express para agilizar el proceso.

Lo primero que debemos hacer es instalar express ejecutando:

```
npm install express
```

Una vez que tenemos eso listo, podemos crear el archivo que definirá nuestro servidor. En este caso lo llamaremos **server.js**.

En server.js, lo primero que debemos hacer es importar express e inicializarlo, eso lo hacemos con las siguientes líneas:

```
const express = require('express');
const app = express();
```

Luego, debemos definir cómo vamos a manejar las peticiones GET (también se puede definir cómo se maneja una petición POST, y otros tipos de peticiones, pero por el momento sólo manejaremos GET). Esto lo hacemos con las siguientes líneas:

```
app.get('/', (req, res) => {
    res.send('Hello World!')
});
```

> Como podemos observar, el primer parámetro es la ruta de nuestro URL, en este caso la respuesta que estamos definiendo sólo funcionará con la ruta '/'.

Y por último, debemos inicializar el servidor, para esto sólo debemos indicarle a express sobre qué puerto debe funcionar:

```
app.listen(3000, () => console.log('Server is running on port 3000'));
```

Ejecutamos lo siguiente:
```
node server.js
```

Y listo, nuestro servidor ya estará activo en **localhost:3000**.



# Fuentes

- [How to Get Started With Node.js and Express](https://www.digitalocean.com/community/tutorials/nodejs-express-basics)
