describe('Demo mixed test with Mocha', function () {
  describe('for testing purposes', function () {

    it("demoTestMixedMocha", function(client) {
      client.url('http://localhost').end();
    });

    afterEach(function (client, done) {
      setTimeout(function () {
        assert.equal(client.currentTest.results.passed, 0);
        assert.equal(client.currentTest.results.failed, 0);
        assert.equal(client.currentTest.results.errors, 0);
        assert.equal(client.currentTest.results.skipped, 0);
        assert.equal(client.currentTest.results.tests, 0);
  
        done();
      }, 10);
    });
  });
});