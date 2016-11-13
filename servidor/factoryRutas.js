angular
  .module('miApp').service('factoryRutas', function () {
 var objeto ={};
   objeto.nombre = "factory de rutas";
   objeto.ApiUrl = "http://localhost:8080/parcial2/ws1/";
 

   return objeto;
  })//cierro factory
