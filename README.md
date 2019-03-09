# ADN challenge
### Descripción

API REST que pretende detectar cuando una persona tiene diferencias genéticas basándose en su secuencia de ADN.
La API esta desarrollado con Node.js, Express y Firestore.

Se tienen dos end points; mutation/ y stats/

El endpoint de mutation solo tiene configurado el método POST y recibe una matriz de 6x6 en el body recibe el siguiente json:

dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};

El endpoint de stats tiene configurado el método GET y regresa un json con estadísticas de las mutaciones almacenadas en la base de datos.

### Requerimientos
Se necesita tener instalado Node.js y npm.

Es necesario agregar al proyecto en raíz dos archivos, un .env y un .json que contienen credenciales.

### Ejecutar proyecto
1. Clonar el proyecto y entrar a la raíz del proyecto
2. Instalar los paquetes con el siguiente comando: $npm install
3. Pegar los archivos proporcionados en raíz
4. Ejecutar el comando: $npm start
5. Abrir el explorador y apuntar al localhost con el puerto 8081, http://localhost:8081

### Ambiente de QA
El proyecto se encuentra levantado en AWS con la siguiente url: http://adn-test.us-east-1.elasticbeanstalk.com
