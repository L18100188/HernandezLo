# Modelo Caja  

El modelo de caja describe las cajas rectangulares que son generadas por los elementos en la esructura del documento y compuestas de acuerdo al modelo de formato visual. La caja de página es una clase especial de caja que se describe en detalle en la sección sobre medios paginados.  

El modelo de cajas completo se aplica a cajas que presentan comportamiento en bloque; las cajas con comportamiento en línea solo usan una parte del comportamiento definido en el modelo de cajas. El modelo define cómo funcionan juntas las diferentes partes de una caja (margen, borde, relleno y contenido) para crear una caja que puedas ver en tu página. Para complicarlo un poco más, hay un modelo de cajas estándar y un modelo de cajas alternativo.  

- **Partes de una caja**

Al hacer una caja de tipo bloque en CSS tenemos los elementos siguientes:  

1. El contenido de la caja (o content box): El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como width y height.
2. El relleno de la caja (o padding box): El relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad padding y otras propiedades relacionadas.
3. El borde de la caja (o border box): El borde de la caja envuelve el contenido y el de relleno. Es posible controlar su tamaño y estilo utilizando la propiedad border y otras propiedades relacionadas.
4. El margen de la caja (o margin box): El margen es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad margin y otras propiedades relacionadas.  

El diagrama siguiente muestra estas capas:  

![I1](https://mdn.mozillademos.org/files/16558/box-model.png)  

- **El modelo de cajas CSS estándar**  

En el modelo de cajas estándar, cuando estableces los atributos width y height para una caja, defines el ancho y el alto del contenido de la caja. Cualquier área de relleno y borde se añade a ese ancho y alto para obtener el tamaño total que ocupa la caja. Esto se muestra en la imagen que encontrarás a continuación.

Si suponemos que la caja tiene el CSS siguiente, que establece los valores para las propiedades width, height, margin, border, y padding:  

~~~
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
~~~