angular
  .module('miApp').service('Grilla', function ($http,factoryRutas) {
    var Url = factoryRutas.ApiUrl;

this.borrar = borrar;
this.TraerTodos = TraerTodos;
this.TraerTodosUsuarios = TraerTodosUsuarios;
this.borrarUsuario = borrarUsuario;
this.ModificarUsuario = ModificarUsuario;
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
       return respuesta.data

    })      // FIN DEL RETURN


}

 function TraerTodosUsuarios(){
      return $http.get(Url + "usuarios/traertodos/")
      .then(function(respuesta) { 
       return respuesta.data

    })      // FIN DEL RETURN


}


 function borrarUsuario(obj){
  console.log(obj);
      return $http.get(Url + "usuarios/borrar/" + obj)
      .then(function(respuesta) { 
       return respuesta.data

    })      // FIN DEL RETURN


}

 function ModificarUsuario(obj){
  console.log(obj);
      return $http.get(Url + "usuarios/modificar/" + obj)
      .then(function(respuesta) { 
       return respuesta.data

    })      // FIN DEL RETURN


}

  })//cierro factory
