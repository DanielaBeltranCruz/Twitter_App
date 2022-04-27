# Twitter

Después de evaluar tiempo y esfuerzos, el equipo de Launch X ha decidido crear la aplicación `Twitter`. Para ello han definido la primera etapa del sprint con los siguientes requerimientos a desarrollar:

# ⭐️ Sprint 1: Agregar modelos

## Requerimientos del Sprint 1: Creación de un modelo
 
✔️ Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`,`bio`, `dateCreated` y `lastUpdated`. 

<details close>
<summary> Solución </summary>

🔵 **Prueba para el requerimiento**

> Mediante el uso de la técnica TDD, escribe el código para la prueba de acuerdo al requerimiento y posteriormente, ejecuta la prueba.

![Prueba para el requerimiento 1](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%201/prueba_requerimiento_1.PNG)

🔵 **Clase para el requerimiento**

> Para corregir el error arrojado al ejecutar la prueba, se crea un script nuevo con la clase **User** y un constructor que guarde los parámetros solicitados en el requerimiento. 

![Clase para el requerimiento 1](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%201/requerimiento_clase_1.PNG)

</details>

✔️ Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.

<details close>
<summary> Solución </summary>

> Modifica el constructor de la clase creada y asigna un valor por defecto a estos atributos usando `new Date()`.

🔵 **Prueba para el requerimiento**

![Prueba para el requerimiento 2](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%201/prueba_requerimiento_2.PNG)

🔵 **Clase para el requerimiento**

![Clase para el requerimiento 2](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%201/requerimiento_clase_2.PNG)

</details>
 
✔️ Requerimiento 3: Cada objeto tipo `user` necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.

<details close>
<summary> Solución </summary>

> Agrega los getters regresando la propiedad indicada, no olvides usar `this`.

🔵 **Prueba para el requerimiento**

![Prueba para el requerimiento 3](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%201/prueba_requerimiento_3.PNG)

🔵 **Clase para el requerimiento**

![Clase para el requerimiento 3](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%201/requerimiento_clase_3.PNG)

</details>
 
✔️ Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.

<details close>
<summary> Solución </summary>

> Agrega los setters usando la palabra `set` y modificando el atributo indicado.

🔵 **Prueba para el requerimiento**

![Prueba para el requerimiento 4](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%201/prueba_requerimiento_4.PNG)

🔵 **Clase para el requerimiento**

![Clase para el requerimiento 4](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%201/requerimiento_clase_4.PNG)

</details>

# ⭐️ Sprint 2: Agregar servicios

## Requerimientos del Sprint 2: Interacción con el modelo
✔️ Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
Criterios de aceptación:
1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
2. El valor de `bio` deberá ser por default para todos los `user` creados.

<details close>
<summary> Solución </summary>

🔵 **Prueba para el requerimiento**

![Prueba para el requerimiento 1](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%202/prueba_requerimiento_1.PNG)

🔵 **Clase para el requerimiento**

![Clase para el requerimiento 1](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%202/requerimiento_clase_1.PNG)

</details>

✔️ Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.

<details close>
<summary> Solución </summary>

🔵 **Prueba para el requerimiento**

![Prueba para el requerimiento 2](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%202/prueba_requerimiento_2.PNG)

🔵 **Clase para el requerimiento**

![Clase para el requerimiento 2](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%202/requerimiento_clase_2.PNG)

</details>

✔️ Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

<details close>
<summary> Solución </summary>

🔵 **Prueba para el requerimiento**

![Prueba para el requerimiento 3](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%202/prueba_requerimiento_3.PNG)

🔵 **Clase para el requerimiento**

![Clase para el requerimiento 3](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%202/requerimiento_clase_3.PNG)

</details>

✔️ Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 

<details close>
<summary> Solución </summary>

🔵 **Prueba para el requerimiento**

![Prueba para el requerimiento 4](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%202/prueba_requerimiento_4.PNG)

🔵 **Clase para el requerimiento**

![Clase para el requerimiento 4](https://github.com/DanielaBeltranCruz/Twitter_App/blob/main/images/Sprint%202/requerimiento_clase_4.PNG)

</details>
