/*
TO-DO:
* Make monthly payment update as new values are entered
* Catch input errors (test to make sure they're actually numbers!)
*/

window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById("calc-form");
	if (form) {
		setupIntialValues();
		form.addEventListener("submit", function(e) {
		e.preventDefault();
		update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +(document.getElementById("loan-amount").value),
		years: +(document.getElementById("loan-years").value),
		rate: +(document.getElementById("loan-rate").value),
	}
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	let amount = document.querySelector("#loan-amount")
	let years = document.querySelector("#loan-years")
	let rate = document.querySelector("#loan-rate")

	/*
	values = {
		amount: 20000, 
		years: 5, 
		rate: .1
	}

	amount.value = `$${values.amount}`
	years.value = values.years
	rate.value = `${values.rate * 100}%`
	*/

	amount.value = 20000
	years.value = 5
	rate.value = .10
	
	values = {
		amount: amount.value, 
		years: years.value, 
		rate: rate.value
	}

	calculateMonthlyPayment(values)
}


// Get the current values from the UI
// Update the monthly payment
function update() {
	let amt = document.querySelector("#loan-amount").value
	let yrs = document.querySelector("#loan-years").value
	let rate = document.querySelector("#loan-rate").value

	values = { amount: amt, years: yrs.value, rate: rate }

	calculateMonthlyPayment(values)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	const { amount, years, rate } = values

	let numerator = amount * rate / 12
	let denominator = 1 - (1 + rate / 12) ** -(years * 12)
	let monthly = (numerator/denominator).toFixed(2)

	updateMonthly(monthly)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	const monthlyPayment = document.querySelector("#monthly-payment")

	monthlyPayment.innerText = `$${monthly}`
}