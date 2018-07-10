describe('before-after with Mocha', function () {
  describe('syncBeforeAndAfter', function () {

    before(function (client, done) {
      client.globals.calls++;
      done()
    });

    beforeEach(function (client, done) {
      client.globals.calls++;
      done()
    });

    it("demoTestSyncOne", function (client) {
      client.url('http://localhost');
      var testName = client.currentTest.name;
      assert.equal(testName, 'demoTestSyncOne');
    });

    it("demoTestSyncTwo", function (client) {
      var testName = client.currentTest.name;
      assert.equal(testName, 'demoTestSyncTwo');
      client.end();
    });

    afterEach(function (client) {
      client.globals.calls++;
    });

    after(function (client) {
      client.globals.calls++;
    });
  });
});