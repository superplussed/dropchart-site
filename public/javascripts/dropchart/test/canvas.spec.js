define(
  ['dropchart', 'argsFor'],
  function(dropchart, argsFor) {
  
  var should = chai.should();
  var canvasSpec = {

    run: function() {
      describe('Canvas', function() {

        before(function(done){
          var args = {
            canvas: argsFor.canvas()
          };
          args.canvas.margin = {
            top: 44,
            right: 33,
            bottom: 22,
            left: 11
          };
          this.canvas = new dropchart.Canvas(args);
          done();
        });

        describe('#initialize()', function() {
          it ('should attach an SVG element', function() {
            $("#histogram").should.have('svg');
          });

          it ('should set the div container to width and height', function() {
            $("#histogram").css("width").should.equal("400px");
            $("#histogram").css("height").should.equal("200px");
          });

          it ('should set the svg container to width and height minus margins', function() {
            $("#histogram").children('.dc-inner-container').css("width").should.equal("356px");
            $("#histogram").children('.dc-inner-container').css("height").should.equal("134px");
          });

        });
      });

    }

  };
  return canvasSpec;

});


      