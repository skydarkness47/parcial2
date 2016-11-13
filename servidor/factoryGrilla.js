angular
  .module('miApp').service('factoryGrilla', function (Grilla) {
var objeto = {};
   objeto.TraerTodos= TraerTodos;
  objeto.borrar= borrar;
   return objeto;

   function TraerTodos()
   {
    console.log("hola");
      return  Grilla.TraerTodos();
   }

   function borrar(obj)
   {
    console.log("hola");
      return  Grilla.borrar(obj);
   }
  })//cierro factory
