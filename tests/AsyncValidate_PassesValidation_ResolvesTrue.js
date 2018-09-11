//AsyncValidate_PassesValidation_ResolvesTrue.js: Testing logic.

define([
	"AsyncValidate"
], function(
	AsyncValidation
) {
	return {
		"Async": true,
		"Name":"AsyncValidate_PassesValidation_ResolveTrue",
		"Input": {
			"Data": true,
			"Validation": [
				function( Input ) {
					return true;
				}
			]
		},
		"Function": AsyncValidation,
		"ExpectedOutput": true
	};
});
