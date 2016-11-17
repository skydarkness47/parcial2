angular
  .module('miApp')
  .controller('grillaDirectivaCtrl', function($scope,$auth,$state,factoryGrilla) {
  			$scope.nada="nada";

  	$scope.usuario= [];
if($auth.isAuthenticated())
{
		$scope.nada = "algo";

	$scope.usuario = $auth.getPayload();
}
console.info($scope.usuario);


factoryGrilla.TraerTodosUsuarios()
  .then(
      function(respuesta){
        console.info(respuesta);
          $scope.listaUser = respuesta;

      },
      function(error){
        console.info(error);
      }

      );

   $scope.borrarUsuario = function(row) {
            factoryGrilla.borrarUsuario(row).
            then(function(respuesta) {


                    factoryGrilla.TraerTodosUsuarios().
                    then(function(respuesta) {
          $scope.listaUser = respuesta;
                        },
                        function(error) {
                            console.info(error);
                        }
                    );

                },
                function(error) {
                    console.info(error);
                }
            );
        }


    $scope.borrar = function(row){ 
      console.info(row);
                factoryGrilla.borrar(row).
            then(function(respuesta) {

                    factoryGrilla.TraerTodos().
                    then(function(respuesta) {
                     $scope.listaProd = respuesta;
                            },
                        function(error) {
                            console.info(error);
                        }
                    );

                },
                function(error) {
                    console.info(error);
                }
            );
        }

$scope.Deslogearse = function(){

	$auth.logout();
	$scope.nada="nada";
	$state.go("inicio");
}

$scope.titulo = "Configuracion Directiva";
    $scope.Listado = {};
    factoryGrilla.TraerTodos()
    //Banderas.TraerUnPais('argentina')
    .then(
      function(respuesta){
        console.info(respuesta);
          $scope.listaProd = respuesta;

      },
      function(error){
        console.info(error);
      }

      );

  })
