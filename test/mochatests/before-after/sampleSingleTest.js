describe('before-after with Mocha', function () {
  describe('sampleSingleTest', function () {

    before(function (client, done) {
      var testName = client.currentTest.name;
      assert.equal(testName, '');
      client.globals.calls++;
      done();
    });

    beforeEach(function (client, done) {
      var testName = client.currentTest.name;
      assert.equal(testName, 'demoTest');
      client.globals.calls++;
      done();
    });

    it("demoTest", function (client) {
      var testName = client.currentTest.name;
      assert.equal(testName, 'demoTest');
      client.globals.calls++
      client.end();
    });

    afterEach(function (client, done) {
      var testName = client.currentTest.name;
      assert.equal(testName, 'demoTest');
      client.globals.calls++
      done();
    });

    after(function (client, done) {
      var testName = client.currentTest.name;
      assert.equal(testName, 'demoTest');
      client.globals.calls++
      done();
    });
  });
});