describe("payments test (with setup and teardown)", () => {
	beforeEach(() => {
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
	});

	it("should add a payment to AllPayments", () => {
		submitPaymentInfo();
		expect(allPayments.payment1.billAmt).toEqual("100");
		expect(allPayments.payment1.tipAmt).toEqual("20");
		expect(allPayments.payment1.tipPercent).toEqual(20);
	});

	it("should not add a new payment with an empty input", () => {
		billAmtInput.value = "";
		tipAmtInput.value = "";
		submitPaymentInfo();
		expect(Object.keys(allPayments).length).toEqual(0);
	});

	it("should create a current payment", () => {
		expect(createCurPayment()).toEqual({
			billAmt: "100",
			tipAmt: "20",
			tipPercent: 20,
		});
	});

	it("should update payment table", () => {
		let curPayment = createCurPayment();
		allPayments["payment1"] = curPayment;

		appendPaymentTable(curPayment);

		let tds = document.querySelectorAll("#paymentTable tbody tr td");
		expect(tds.length).toEqual(4);
		expect(tds[0].innerText).toEqual("$100");
		expect(tds[1].innerText).toEqual("$20");
		expect(tds[2].innerText).toEqual("20%");
		expect(tds[3].innerText).toEqual("X");
	});

	it("should not create a payment with empty inputs", () => {
		billAmtInput.value = "";
		tipAmtInput.value = "";

		let curPayment = createCurPayment();
		expect(curPayment).toBeUndefined();
	});

	afterEach(() => {
		allPayments = {};
		paymentId = 0;
		paymentTbody.innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[1].innerHTML = "";
		summaryTds[2].innerHTML = "";
		serverTbody.innerHTML = "";
		billAmtInput.value = "";
		tipAmtInput.value = "";
	});
});
