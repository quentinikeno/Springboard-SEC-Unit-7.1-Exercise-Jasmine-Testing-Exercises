it("should calculate the monthly rate correctly", function () {
	expect(
		+calculateMonthlyPayment({
			amount: 10000,
			years: 10,
			rate: 0.06,
		})
	).toEqual(111.02);
	expect(
		+calculateMonthlyPayment({
			amount: 200000,
			years: 30,
			rate: 0.03,
		})
	).toEqual(843.21);
	expect(
		+calculateMonthlyPayment({
			amount: 15000,
			years: 5,
			rate: 0.07,
		})
	).toEqual(297.02);
});

it("should return a result with 2 decimal places", function () {
	expect(
		calculateMonthlyPayment({
			amount: 10000,
			years: 10,
			rate: 0.06,
		})
	).toMatch(/^\d+\.\d\d$/);
	expect(
		calculateMonthlyPayment({
			amount: 200000,
			years: 30,
			rate: 0.03,
		})
	).toMatch(/^\d+\.\d\d$/);
});

/// etc
