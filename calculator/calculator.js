window.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("calc-form");

	if (form) {
		setupIntialValues();
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById("loan-amount").value,
		years: +document.getElementById("loan-years").value,
		rate: +document.getElementById("loan-rate").value,
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	const amountInput = document.getElementById("loan-amount");
	const yearsInput = document.getElementById("loan-years");
	const rateInput = document.getElementById("loan-rate");
	amountInput.value = 10000;
	yearsInput.value = 10;
	rateInput.value = 0.06;
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	const values = getCurrentUIValues();
	const monthly = calculateMonthlyPayment(values);
	updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	const { amount, years, rate } = values;
	const i = rate / 12;
	const n = years * 12;
	const payment = (amount * i) / (1 - (1 + i) ** -n);
	return (Math.round(payment * 100) / 100).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	const monthlyPaymentSpan = document.getElementById("monthly-payment");
	monthlyPaymentSpan.innerText = monthly;
}
