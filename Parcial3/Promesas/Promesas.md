# Promesas

![1](https://lenguajejs.com/javascript/asincronia/promesas/promises.png)

Las promesas son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que, por ejemplo, utilizando funciones callbacks directamente.

Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas:
- La promesa se cumple (promesa resuelta)
- La promesa no se cumple (promesa se rechaza)
- La promesa se queda en un estado incierto indefinidamente (promesa pendiente)

Con estas sencillas bases, podemos entender el funcionamiento de una promesa en Javascript. Antes de empezar, también debemos tener claro que existen dos partes importantes de las promesas: como consumirlas (utilizar promesas) y como crearlas (preparar una función para que use promesas y se puedan consumir).

## Promesas en Javascript

Las promesas en Javascript se representan a través de un **Object** , y cada promesa estará en un estado concreto: pendiente, aceptada o rechazada. Además, cada promesa tiene los siguientes métodos, que podremos utilizar para utilizarla:

| Métodos | Descripción |
|---|---|
| **.then(function resolve)** | Ejecuta la función callback resolve cuando la promesa se cumple. |
| **.catch(function reject)** | Ejecuta la función callback reject cuando la promesa se rechaza |
| **.then(function resolve, function reject)** | Método equivalente a las dos anteriores en el mismo .then(). |
|**.finally (function end)** | Ejecuta la función callback end tanto si se cumple como si se rechaza. |

## Consumir una promesa

La forma general de consumir una promesa es utilizando el .then() con un sólo parámetro, puesto que muchas veces lo único que nos interesa es realizar una acción cuando la promesa se cumpla:

![2](https://i.gyazo.com/36652a350630fe880c1db0789ff4a434.png)