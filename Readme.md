# Quickstart Node

## Setup inicial

Antes de poder empezar con el proyecto, es necesario tener instalado node. Para esto pueden ir al sitio oficial de Node, descargarlo e instalarlo:

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

> Si buscas un tutorial más completo, que explique cómo utilizar archivos HTML para el front, puedes consultar [este video](https://www.youtube.com/watch?v=wxbQP1LMZsw).

## Tipos de DB

Con node js tenemos 2 opciones para bases de datos, una es usar una base de datos tipo SQL (relacional), y otra es NoSQL (no relacional). Para términos de simplicidad, en este "bootcamp" se sugiere que usemos versiones ligeras (no aptas para un producto escalable), que nos permitan probar rápidamente el funcionamiento de cada tipo de base de datos con Node.

- Para quienes quieran probar SQL, se sugiere usar **SQLite**.

  - Si buscan un video tutorial para empezar [este video es una opción](https://www.youtube.com/watch?v=xDYx5UdHwv0).

- Para quienes busquen probar NoSQL, se sugiere usar **NeDB**.
  - Si buscan un video de apoyo para entender cómo funciona, [este video](https://www.youtube.com/watch?v=xVYa20DCUv0) es una opción. (este video es parte de una serie de tutoriales de Node, por lo que asume que ya entiendes como tratar una petición POST, si gustas puedes consultar los videos anteriores de la serie para una mayor comprensión).

# EL RETO

Como recordarán, el objetivo del bootcamp es lo siguiente:

1. Probar que podamos aprender dichas tecnologías en un tiempo reducido (es decir, que la curva de aprendizaje no sea demasiado alta).

2. Identificar si nos gustaría usar esta tecnología para el proyecto de Casa Mosaico.

3. Identificar si esta tecnología es capaz de cumplir con las necesidades del proyecto de Casa Mosaico.

4. De ser posible, probar algunos aspectos de la arquitectura. Por el momento únicamente he identificado que podemos probar cuál de ambas opciones (SQL y NoSQL) se puede adaptar más a cambios de requisitos.

Por lo tanto, su misión, si deciden aceptarla, es crear un sitio sencillo que nos permita crear y elimitar tareas (un to-do list).

Básicamente sólo necesitarán crear una base de datos, con una tabla que almacene las tareas, encontrar una manera de insertarlas, eliminarlas, y crear una interfáz para que un "usuario" pueda usar el sitio.

> **RETO DE PRUEBA DE ARQUITECTURA:** Una vez que hayas terminado el sitio básico del to-do list (es decir, las instrucciones que justo se mencionaron), intenta cambiar la estructura general del back. Una manera de hacer esto es haciendo que existan usuarios, y que cada usuario tenga su propia lista y nadie más pueda verla. Esto debes hacerlo sin eliminar en ningún momento las tablas (es decir, no puedes copiarlas, eliminar lo que tenías, y crear una nueva pegando los datos que tenías anteriormente). En otras palabras, intenta cambiarle el motor al coche mientras está en movimiento, sin apagarlo ni desconectarlo jeje.

## Mensaje "motivador"

Recordemos que esta tecnología fue sugerida por el profe Lalo, y es la que usa para sus clases de **BLOQUE 1** (una manera muy sutíl de decir que si no podemos aprender a usar esto, estamos más weyes que esos weyes).

## Mucha suerte y ojalá disfruten el experimento :)

# Recursos Consultados

- [How to Get Started With Node.js and Express](https://www.digitalocean.com/community/tutorials/nodejs-express-basics)
