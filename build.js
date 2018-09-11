//build.js: Configuration file for optimizing the AsyncValidate function. 
/*
*/ 
({
    paths: {
	"promise": "lib/promise.min",
	"validate": "lib/validate.min",
	"rsvp": "lib/rsvp.min",
	"underscore": "lib/underscore.min",
	"log": "lib/log.min"
    },
    exclude: [ "promise", "validate", "rsvp", "underscore" ],
    name: "AsyncValidate",
    out: "async_validate.min.js"
})
