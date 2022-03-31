# Propagación y la captura de eventos en JavaScript

Existen tres fases de propagación de eventos en JavaScript y son esenciales para comprender el uso correcto de los eventos.
Estas tres fases en orden son:

1. La fase de **captura** de eventos, 
2. La fase objetivo  
3. La fase de **propagación** del evento.

En esencia, el evento primero desciende a través de los elementos principales hasta que alcanza el elemento de destino (fase de captura). Cuando el evento alcanza el objetivo, se dispara allí (fase objetivo) y luego vuelve a subir por la cadena (fase burbujeante), llamando a los controladores en el camino. 

El elemento objetivo se refiere al lugar exacto que está desencadenando el evento. Por ejemplo, si hace clic en un botón dentro de a **div**, la **button** etiqueta correspondiente sería el objetivo. Se puede acceder a este elemento como **event.target** y no cambiará a lo largo de las fases de propagación del evento.

![I1](https://i.gyazo.com/761a79f42f76774bdf5b4926949f48f0.png)

## ¿Qué es la captura de eventos?

La captura de eventos es la primera fase que ocurre cuando el evento se mueve hacia abajo por los elementos desde la parte superior **(window)** hasta el objetivo del evento, como una cascada. Rara vez se usa cuando se manejan eventos, y la mayoría de las veces ocurre entre bastidores. Si se coloca un controlador, generalmente se hace durante la fase de propagación del evento, porque cuanto más cerca esté un elemento del objetivo, más contexto tendrá el elemento.

Cuando los controladores de eventos se configuran con **onClick** (o un diferente **onevent**) o **addEventListener(event, handler)**, solo la fase de destino y la fase de propagación del evento lo detectarán. Si queremos capturar un evento durante la fase de captura, necesitamos agregar explícitamente **{capture: true}** o solo el implícito **true** al final del detector de eventos.

![I2](https://i.gyazo.com/9713a0c301ea0704c31dd7561b281fb9.png)

Aunque oficialmente hay tres fases, la segunda fase “objetivo” que ocurre cuando **event.target** se alcanza el elemento, no se maneja por separado como las demás. Tanto la captura de eventos como los controladores de propagación de eventos activarán esta fase automáticamente cuando terminen y comiencen con el elemento de destino.

## ¿Qué es el evento burbujeante?

El burbujeo de eventos implica ejecutar los controladores del elemento de destino y luego "burbujear" hacia arriba hasta los controladores del siguiente elemento padre, luego el elemento abuelo por encima de ese, y así sucesivamente. Puede pensar en esto como algo similar a la noción de burbujas que se elevan en el agua. 

Esto significa que si tenemos una **p** en el interior de un anidado **div**, en el interior de un anidado **form**, los manipuladores se les ejecutan en orden: **p -> div -> form**. Este burbujeo se ejecutará hasta que llegue a la parte superior de los elementos, a través del html, el **document object** y hasta el **window**. Casi todos los eventos aparecerán, con pocas excepciones como **focus**.

![I3](https://i.gyazo.com/d37ea05661029029d605d451c5fd8624.png)