(function(angular){
	'use strict';

	$(document).on('click','.navbar-collapse.in',function(e) {
      	if( $(e.target).is('a') ) {
        	$(this).collapse('hide');
      	}
  	});

	$('#videoPanel').on('hidden.bs.modal', function () {
	  console.log(4354);
	})

})(window.angular);