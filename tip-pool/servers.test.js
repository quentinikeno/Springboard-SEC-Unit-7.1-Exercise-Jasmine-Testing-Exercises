describe("Servers test (with setup and tear-down)", function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = "Alice";
	});

	it("should add a new server to allServers on submitServerInfo()", function () {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers["server" + serverId].serverName).toEqual("Alice");
	});

	it("should not add a new server if the server input is empty", () => {
		serverNameInput.value = "";
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(0);
	});

	it("should add server and tip to the server table", () => {
		submitServerInfo();
		updateServerTable();

		const server1 = document.querySelectorAll("#server1 td");
		expect(server1.length).toEqual(2);
		expect(server1[0].innerText).toEqual("Alice");
		expect(server1[1].innerText).toEqual("$0.00");
	});

	afterEach(function () {
		// teardown logic
		serverTbody.innerHTML = "";
		serverID = 0;
		allServers = {};
	});
});
