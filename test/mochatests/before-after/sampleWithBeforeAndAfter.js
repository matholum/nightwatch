describe('before-after with Mocha', function () {
  describe('sampleWithBeforeAndAfter', function () {

    beforeEach(function (client, done) {
      setTimeout(function () {
        client.globals.calls++;
        done();
      }, 10);
    });

    before(function (client, done) {
      setTimeout(function () {
        client.globals.calls++;
        done();
      }, 10);
    });

    it("demoTestAsyncOne", function (client) {
      client.url('http://localhost');
    });

    it("demoTestAsyncTwo", function (client) {
      client.end();
    });

    afterEach(function (client, done) {
      setTimeout(function () {
        client.globals.calls++;
        done();
      }, 10);
    });

    after(function (client, done) {
      setTimeout(function () {
        client.globals.calls++;
        done();
      }, 10);
    });
  });
});