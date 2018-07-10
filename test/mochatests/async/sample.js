describe('async with Mocha', function () {
  describe('sample', function () {

    before(function (client, done) {
      setTimeout(function () {
        client.globals.test_calls++;
        done();
      }, 10);
    });

    after(function (client, done) {
      setTimeout(function () {
        client.globals.test_calls++;
        done();
      }, 100);
    });

    it("demoTestAsyncMocha", function(client) {
      client.url('http://localhost').end();
    });

  });
});