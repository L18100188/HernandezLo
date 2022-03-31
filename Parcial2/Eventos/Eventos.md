# Propagación y la captura de eventos en JavaScript

El burbujeo y la captura son los 2 modelos que utilizan los eventos DOM para propagarse.

Supongamos que su estructura DOM es: 

![C1](https://i.gyazo.com/fc8af1f6bc6fad16bb2edeb289bca9d9.png)

Desea realizar un seguimiento cuando los usuarios hacen clic en el **button** y tiene 2 detectores de eventos, uno en el botón y otro en **container**.

Recuerde, un clic en un elemento hijo siempre se propagará a sus padres, a menos que detenga la propagación (ver más adelante).

Se llamará a esos oyentes de eventos en orden, y este orden está determinado por el modelo de generación / captura de eventos utilizado.

Burbujeantesignifica que el evento se propaga desde el elemento en el que se hizo clic (el hijo) hasta todo su árbol padre, comenzando por el más cercano.

En nuestro ejemplo, el controlador debuttondisparará antes del#containermanipulador.

Capturandoes lo contrario: los controladores de eventos externos se activan antes que el controlador más específico, el que está enbutton.


