define(
  ['jquery', 'dropchart', 'argsFor'],
  function($, dropchart, argsFor) {
  
  var should = chai.should();
  var coordSpec = {
    name: "coor.spec",
    run: function() {
      describe('Coord', function() {

        describe("options.usePerc: true", function() {

          before(function(done){
            var canvasArgs = argsFor.canvasWithInnerNoMargin();
            canvasArgs.usePerc = true;
            this.coord = new dropchart.Coord({
              canvas: canvasArgs
            });
            done();
          });

          describe('#x', function() {

            it ('should convert a number to a percentage if necessary', function() {
              this.coord.x('canvas', 10).should.equal("2.5%");
              this.coord.x('canvas', "2.5%").should.equal("2.5%");
            });

          });

          describe('#y', function() {

            it ('should convert a number to a percentage if necessary', function() {
              this.coord.y('canvas', 10).should.equal("5%");
              this.coord.y('canvas', "5%").should.equal("5%");
            });

          });

          describe('#xToFloat', function() {

            it ('should convert a percentage to a number if necessary', function() {
              this.coord.xToFloat('canvas', "2.5%").should.equal(10);
              this.coord.xToFloat('canvas', 10).should.equal(10);
            });

          });

          describe('#yToFloat', function() {

            it ('should convert a percentage to a number if necessary', function() {
              this.coord.yToFloat('canvas', "5%").should.equal(10);
              this.coord.yToFloat('canvas', 10).should.equal(10);
            });

          });

        });

      });

    }

  };

  return coordSpec;

});


      