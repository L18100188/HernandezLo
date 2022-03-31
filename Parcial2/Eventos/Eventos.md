# Propagación y la captura de eventos en JavaScript

Existen tres fases de propagación de eventos en JavaScript y son esenciales para comprender el uso correcto de los eventos.
Estas tres fases en orden son:

1. La fase de **captura** de eventos, 
2. La fase objetivo  
3. La fase de **propagación** del evento.

En esencia, el evento primero desciende a través de los elementos principales hasta que alcanza el elemento de destino (fase de captura). Cuando el evento alcanza el objetivo, se dispara allí (fase objetivo) y luego vuelve a subir por la cadena (fase burbujeante), llamando a los controladores en el camino. 

El elemento objetivo se refiere al lugar exacto que está desencadenando el evento. Por ejemplo, si hace clic en un botón dentro de a **<div>**, la **<button>** etiqueta correspondiente sería el objetivo. Se puede acceder a este elemento como event.targety no cambiará a lo largo de las fases de propagación del evento.