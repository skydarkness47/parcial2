angular
  .module('miApp').service('Grilla', function ($http,factoryRutas) {
    var Url = factoryRutas.ApiUrl;

this.borrar = borrar;
this.TraerTodos = TraerTodos;
 function TraerTodos(){
      return $http.get(Url + "productos/traertodos/")
      .then(function(respuesta) { 
        console.log("respuesta");
       return respuesta.data

    })      // FIN DEL RETURN


}

function borrar(obj){
      return $http.delete(Url + "productos/borrar/" + obj)
      .then(function(respuesta) { 
        console.log("respuesta");
       return respuesta.data

    })      // FIN DEL RETURN


}



  })//cierro factory
