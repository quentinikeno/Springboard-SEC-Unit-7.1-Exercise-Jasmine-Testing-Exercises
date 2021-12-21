describe("helpers test (with setup and teardown", () => {
	beforeEach(() => {
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
		submitPaymentInfo();
		billAmtInput.value = 200;
		tipAmtInput.value = 40;
		submitPaymentInfo();
	});

	it("should calculate total tip amount", () => {
		expect(sumPaymentTotal("tipAmt")).toEqual(60);
	});

	it("should calculate total bill amount", () => {
		expect(sumPaymentTotal("billAmt")).toEqual(300);
	});

	it("should calculate total tip percent", () => {
		expect(sumPaymentTotal("tipPercent")).toEqual(40);
	});

	it("should calculate tip percentages", () => {
		expect(calculateTipPercent(100, 15)).toEqual(15);
		expect(calculateTipPercent(200, 40)).toEqual(20);
	});

	it("should add a delete button", () => {
		let testTr = document.createElement("tr");
		appendDeleteBtn(testTr);
		expect(testTr.children.length).toEqual(1);
		expect(testTr.firstChild.innerText).toEqual("X");
	});

	afterEach(() => {
		allPayments = {};
		paymentId = 0;
		paymentTbody.innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[1].innerHTML = "";
		summaryTds[2].innerHTML = "";
		serverTbody.innerHTML = "";
	});
});
