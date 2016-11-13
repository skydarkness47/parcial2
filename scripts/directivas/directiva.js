angular
  .module('miApp')//Tags disponibles: {Elementos(E)(POR DEFECTO), Atributos(A)(POR DEFECTO), Clases(C),Comentario(M)}
  .directive('utnSaludo',function(){
  	return {template:"Hola"}; 
  })
  .directive('utnSaludoDos',function(){
  	return {
  		replace:true,
  		restrict:"MEAC",
  		template:"<H1>Mundo!!!!</H1>"
  	};
  })
   .directive('utnTitulo',function(){
  	return {
  		replace:true,
  		restrict:"E",
  		templateUrl:"templates/TemplateTitulo.html"
  	};

   })
  .directive('utnTituloParametro',function(){
  	return {
  		replace:true,
  		restrict:"E",
  		scope: { MiTitulo: '@miparam' },  		
  		templateUrl:"templates/TemplateTitulo.html"
  	};
  	})
  .directive('utnBandera',function(){
  	return {
  		replace:true,
  		restrict:"E",
  		scope: { 
  			NombrePais: '@nombrepais',
  			FotoBandera: '@fotopais'
  		},  		
  		templateUrl:"templates/TemplateBandera.html"
  	};
  	})
	.directive('utnBanderaObj',function(){
  	return {
  		replace:true,
  		restrict:"E",
  		scope: { 
  			ObjetoBandera: '=objparametro'
  		},  		
  		templateUrl:"templates/TemplateBandera.html"
  	};
  	})
  ;