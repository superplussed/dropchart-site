define(['jquery', '../dropchart/test', '../dropchart/dropchart'], function($, test, dropchart) {
  var testRunnerView = {
    initialize: function() {

      var i, specs = [
        test.utilsSpec,
        test.coordSpec,
        test.xAxisSpec,
        test.yAxisSpec,
        test.canvasSpec,
        test.histogramSpec,
        test.builderSpec
      ];

      mocha.setup('bdd');
      for (i = 0; i <= specs.length - 1; i ++) {
        self.prepareTest(specs[i]);
      }
      mocha.run();

    },

    prepareTest: function(spec) {

      spec.run();
      $("#histogram").css({
        'width': '',
        'height': ''
      });
      $("#histogram").children().remove();
    }
    
  };
  var self = testRunnerView;
  return testRunnerView;
});