/*
TO-DO:
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

	amount.value = 20_000
	years.value = 5
	rate.value = .10
	
	values = {
		amount: amount.value, 
		years: years.value, 
		rate: rate.value
	}

	let monthly = calculateMonthlyPayment(values)
	updateMonthly(monthly)
}


// Get the current values from the UI
// Update the monthly payment
function update() {
	let values = getCurrentUIValues()

	let monthly = calculateMonthlyPayment(values)
	updateMonthly(monthly)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	const { amount, years, rate } = values

	let numerator = amount * rate / 12
	let denominator = 1 - (1 + rate / 12) ** -(years * 12)
	let monthly = `$${(numerator/denominator).toFixed(2)}`

	return(monthly)

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	const monthlyPayment = document.querySelector("#monthly-payment")

	monthlyPayment.innerText = monthly
}