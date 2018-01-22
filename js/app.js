/*funcion que activa el splash en seg.*/
function splash(time) {

setTimeout(function () {
  $('#splashscreen').hide();
  }, time);
}
/*mandar allamar por dom*/
var $nameRestaurant = $("#name-restaurant");
var $imagen = $("#img-restaurant");
var $adress = $("#adress");
////
/*Ejecutando el modal al dar click en las imagenes, para mostrar más información sobre los restaurantes*/
$("#modal1").modal()



/*ejecuta la funcion para entrar a la data*/
$("#mexicana").click(accessData);
$("#española").click(accessData);
$("#argentina").click(accessData);
$("#arabe").click(accessData);
$("#china").click(accessData);

/*funcion que llama la data*/
function accessData (event) {
var target = $(event.target);/*Me arroja el elemento que detona al evento.*/
var $index = target.data("index");

var food = data[$index].food;
var name = data[$index].name;
var adress = data[$index].adress
var src = data[$index].photo;

console.log(src);
console.log(food);
console.log(adress);
console.log(name);

/////
paintInformationInHtml (name,adress,src);

}//Fin de función accessData().
function paintInformationInHtml (name,adress,src,) {

  /*Agregando a lo que se accedio por medio de DOM.*/
$nameRestaurant.append(name);
$imagen.attr("src",src);
$adress.append(adress);

}

/*Función que pinta las imágenes en HTML*/
function paintfoodInHtml (index){
   $(".newImg").attr("src", index.photo);
   console.log(index.photo);
}
