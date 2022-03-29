it('should calculate the monthly rate correctly', function () {
	let values = { amount: 25000, years: 5, rate: .1}
	expect(calculateMonthlyPayment(values)).toEqual("$531.18")
});

it("should return a result with 2 decimal places", function() {
	let values = { amount: 20, years: 5, rate: .1}
	let decimalRegex = new RegExp("\.[0-9][0-9]$")
	expect(calculateMonthlyPayment(values)).toMatch(decimalRegex)
});

it("should handle higher interest rates", function() {
	let values = { amount: 25000, years: 5, rate: .99}
	expect(calculateMonthlyPayment(values)).toEqual("$2080.38")
})

it("should handle lower interest rates", function() {
	let values = { amount: 25000, years: 5, rate: .01}
	expect(calculateMonthlyPayment(values)).toEqual("$427.34")
})

it("should handle high principles", function() {
	let values = { amount: 250_000_000, years: 5, rate: .1}
	expect(calculateMonthlyPayment(values)).toEqual("$5311761.18")
})

it("should handle low principles", function() {
	let values = { amount: 250, years: 5, rate: .1}
	expect(calculateMonthlyPayment(values)).toEqual("$5.31")
})
// etc
