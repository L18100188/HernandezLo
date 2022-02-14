# Modelo Caja  

El modelo de caja describe las cajas rectangulares que son generadas por los elementos en la esructura del documento y compuestas de acuerdo al modelo de formato visual. La caja de página es una clase especial de caja que se describe en detalle en la sección sobre medios paginados.  

1. **Dimensiones de la caja**  

Cada caja tiene un área de contenido (ej., texto, una imagen, etc.) y las áreas circundantes opcionales de padding, border y margin; el tamaño de cada área es especificado por las propiedades que se definen abajo. El siguiente diagrama muestra cómo se relacionan estas áreas y la terminología usada para referirse a las partes de margin, border y padding:  

![Dimensiones](http://www.sidar.org/recur/desdi/traduc/es/css/images/boxdim.gif)  

Margin, border y padding pueden ser divididos en los segmentos left, right, top y bottom (ej., en el diagrama, "LM" para left margin, "RP" para right padding, "TB" para top border, etc.).  

El perímetro de cada una de las cuatro áreas (contenido, padding, border y margin) es llamado "límite", de manera que cada caja tiene cuatro límites:  

- Límite del contenido o límite interno: El límite del contenido rodea al contenido procesado del elemento.
- Límite de padding: El límite de padding (relleno) rodea a la caja de relleno. Si padding tiene un ancho de 0, el límite del relleno es el mismo que el límite de contenido. El límite del relleno de una caja define el límite de la caja de contención establecida por la caja.
- Límite de border: El límite de border (borde) rodea el borde de la caja. Si border tiene un ancho de 0, el límite del borde es el mismo que el límite del relleno (padding).
- Límite de margin o límite externo: El límite de margin (margen) rodea el margen de la caja. Si margin tiene un ancho de 0, el límite del margen es el mismo que el límite del borde (border).

Cada límite puede dividirse en límite left (izquierdo), right (derecho), top (superior) y bottom (inferior).

Las dimensiones del área del contenido de una caja --el ancho del contenido y la altura del contenido-- dependen de varios factores: si el elemento que genera la caja tiene asignadas las propiedades 'width' o 'height', si la caja contiene texto u otras cajas, si la caja es una tabla, etc. El ancho y la altura de la caja son discutidos en el capítulo sobre detalles del modelo de composición visual.

El ancho de la caja está dado por la suma de los márgenes, bordes y rellenos izquierdos y derechos, y el ancho del contenido. La altura está dada por la suma de los márgenes, bordes y rellenos superiores e inferiores, y la altura del contenido.

El estilo del fondo de las distintas áreas de una caja es determinado como sigue:  

- Area del contenido: La propiedad 'background' del elemento generador.  
- Area del relleno (padding): La propiedad 'background' del elemento generador.  
- Area del borde (border): Las propiedades del borde del elemento generador.  
- Area del margen (margin): Los márgenes son siempre transparentes.  