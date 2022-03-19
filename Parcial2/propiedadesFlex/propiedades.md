# Propiedades FlexBox

**Flexbox** es un método de diseño de página unidimensional para compaginar elementos en filas o columnas. Los elementos de contenido se ensanchan para rellenar el espacio adicional y se encogen para caber en espacios más pequeños. 

Cuando a una caja(box) contiene otros elementos dentro y a esta caja contenedora le ponemos la propiedad display a flex, le damos la habilidad de modificar el tamaño y orden de sus elementos internos. Esto se hace dándole valor a una serie de propiedades. 

Existen propiedades para el padre (flex-container) y propiedades para los hijos (flex-items). En este documento expondremos las propiedades de Padre e hijo.

## Propiedades para el padre (flex-container) 


| Propiedad | Descripción | Valores |
|---|---|---|
| display | Si su valor es flex o inline-flex, la propiedad display define un contenedor flex ( flexbox ).  | flex / inline-flex; / -ms-flexbox /-ms-inline-flexbox. |
| flex-direction | Establece la dirección del eje principal y por tanto la dirección de los elementos flex. | row / row-reverse / column / column-reverse; |
| flex-wrap | Especifica si puede haber un cambio de línea ( wrap ) o no ( nowrap ). | nowrap / wrap / wrap-reverse; |
| flex-flow | Es la forma abreviada para las propiedades flex-direction y flex-wrap. | flex-direction [flex-wrap]  |
| align-items | Define como se colocan los elementos dentro de una caja flexible flexbox relativamente al eje transversal. | flex-start / flex-end / center / baseline / stretch; / -ms-flex-align:start / end / center / baseline / stretch;  |
| justify-content | Define como se colocan los elementos dentro de una caja flexible ( flexbox ) relativamente al eje principal, cuando los elementos no ocupan toda la caja. | flex-start / flex-end / center / space-between / space-around; / -ms-flex-pack: start / end / center / justify / justify;  |
| align-content | Alinea los elementos del contenedor flex cuando los elementos no utilizan todo el espacio disponible en el eje transversal. |  flex-start / flex-end / center / space-between / space-around / stretch; / -ms-flex-line-pack: start / end / center / justify / stretch; |

## Propiedades para los hijos (flex-items)

| Propiedad | Descripción | Valores |
|---|---|---|
| align-self | Reposiciona elementos individuales relativamente al eje transversal. | auto / flex-start / flex-end / center / baseline / stretch; / -ms-flex-item-align:auto / start / end / center / baseline / stretch;  |
| flex-grow | Define cuánto puede crecer un elemento flex, si fuera necesario. | número / initial / inherit; |
| flex-shrink | Define cuánto puede disminuir ( contraerse ) un elemento flex, si fuera necesario. | número / initial / inherit;  |
| flex-basis | Especifica el valor inicial del tamaño principal de un elemento flex. |número / auto / initial / inherit; |
| flex | La forma abreviada para flex-grow, flex-shrink y flex-basis juntos. |  none / flex-grow [flex-shrink] [flex-basis]; |
| order | Se utiliza para cambiar el orden en el que aparecen los elementos individuales. | número / initial / inherit; |
