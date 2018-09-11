//testsuite.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "AsyncValidate",
	"tests/AsyncValidate_DoesntPassValidation_RejectsError",
	"tests/AsyncValidate_PassesValidation_ResolvesTrue"
], function(
  TestSuite,
  log,
  AsyncValidate,
	AsyncValidate_DoesntPassValidation_RejectsError,
	AsyncValidate_PassesValidation_ResolvesTrue
) {
  return TestSuite.extend({
    "initialize": function() {
      log("testsuite initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "AsyncValidate" );
	xTestSuite.add( AsyncValidate_DoesntPassValidation_RejectsError );
	xTestSuite.add( AsyncValidate_PassesValidation_ResolvesTrue );
      xTestSuite.test();
    }
  });
});
