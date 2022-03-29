it('should calculate the monthly rate correctly', function () {
	let values = { amount: 25000, years: 5, rate: .1}
	expect(calculateMonthlyPayment(values)).toEqual("$531.18")
	// ...
});


// it("should return a result with 2 decimal places", function() {
// 	// ..
// });

/// etc
