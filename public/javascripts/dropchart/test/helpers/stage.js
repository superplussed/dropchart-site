define(['jquery', 'argsFor'], function($, argsFor) {
  var stage = {
    before: {
      createCanvas: function() {
        return function() {
          before(function(done) {
            this.canvas = new dropchart.Canvas({
              canvas: argsFor.canvas(),
              data: argsFor.data()
            });
            done();
          });
        };
      }
    }
  };
  return stage;
});

