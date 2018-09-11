//AsyncValidate_DoesntPassValidation_RejectsError.js: Testing logic.

define([
	"AsyncValidate",
	"promise"
], function(
	AsyncValidate,
	promise
) {
	return {
		"Async": true,
		"Name":"AsyncValidate_DoesntPassValidation_RejectsError",
		"Input": {
			"Data": true,
			"Validation": [
				function( Input ) {
					throw { "Message": "Error" };
				}
			]
		},
		"Function": function( Input ) {
			return promise(function( resolve ) {
				var bThrewError = false;
				AsyncValidate( Input ).catch(function( Error ) {
					if ( Error.Message === "Error" ) {
						bThrewError = true;
					}
				}).finally(function() {
					resolve( bThrewError );
				});
			});
		},
		"ExpectedOutput": true
	};
});
