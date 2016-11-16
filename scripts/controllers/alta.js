angular
  .module('miApp')
  .controller('altasCtrl', function($scope,$auth,$state,factoryProducto,factoryUser) {
  			$scope.nada="nada";

  	$scope.usuario= {};
  	$scope.user={};
if($auth.isAuthenticated())
{
	$scope.nada = "algo";
	$scope.usuario = $auth.getPayload();
}
console.info($scope.usuario);


$scope.Deslogearse = function(){

	$auth.logout();
	$scope.nada="nada";
	$state.go("inicio");
}


$scope.AltaProducto = function(){
	$scope.producto = JSON.stringify($scope.producto);
factoryUser.InsertarUsuario($scope.producto)
.then(function(respuesta) {  
			  console.log(respuesta);  
			  $state.go("grilla"); 	
			 //aca se ejetuca si retorno sin errores 
//					 $state.go("menu.Grillas");
				
	});

}





 

$scope.AltaUsuario = function(){
	$scope.user = JSON.stringify($scope.user);
factoryUser.InsertarUsuario($scope.user)
.then(function(respuesta) {  
			  console.log(respuesta);  
			  $state.go("grilla"); 	
			 //aca se ejetuca si retorno sin errores 
//					 $state.go("menu.Grillas");
				
	});

}


  })
