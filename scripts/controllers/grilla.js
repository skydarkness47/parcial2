angular
  .module('miApp')
  .controller('grillaCtrl', function($scope,$state,factoryGrilla, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
console.info(factoryGrilla);
    

    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.columnDefs = columnDefs();
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

var datos;
    factoryGrilla.TraerTodos().
    then(function(respuesta){
 $scope.gridOptions.data = respuesta;
    },
      function(error){
        console.info(error);
      }
      );

    $scope.borrar = function(row){
          factoryGrilla.borrar(row.id).
    then(function(respuesta){
      
    factoryGrilla.TraerTodos().
    then(function(respuesta){
 $scope.gridOptions.data = respuesta;
    },
      function(error){
        console.info(error);
      }
      );
      
    },
      function(error){
        console.info(error);
      }
      );
    }

/*
   factoryBandera.data().then(function(rta){
    // Cargo los datos en la grilla.
     $scope.gridOptions.data = rta;
   });

  console.log(uiGridConstants);*/

    function columnDefs () {
  return [
        { field: 'id', name: 'id'},
        { field: 'nombre', name: 'nombre'},
        { width: 100, cellTemplate:"<button ng-Click='grid.appScope.borrar(row.entity)'>BORRAR", name:"BORRAR"
         
        }
        ];
    }
  })
