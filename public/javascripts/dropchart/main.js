require.config({
    packages: ["dropchart", "test"]
  });

require(["order!dropchart"], function(dropchart) {
  require(["order!test", "order!./testRunner"], function(test, testRunner) {
    testRunner.initialize();
  });
});