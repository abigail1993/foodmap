/*funcion que activa el splash en seg.*/
function splash(time) {

setTimeout(function () {
  $('#splashscreen').hide();
}, time);
}


/*Ejecutando el modal al dar click en las imagenes, para mostrar más información sobre los restaurantes*/
$("#modal1").modal()



/*Función que añade la información de la data, tiene como parametros:
Nombre del restaurante, foto, leyenda, dirección, rango de precios y si tiene o no servicio a domicilio.*/
function accessData (event) {
var target = $(event.target);/*Me arroja el elemento que detona al evento.*/
var $index = target.data("index");/*Indice que corresponde al la información de la imagen, esa inf está dentro de la data.*/

}//Fin de función accessData().

/*Función que pinta las imágenes en HTML*/
function paintfoodInHtml (index){
   $(".newImg").attr("src", index.photo);
   console.log(index.photo);
}
