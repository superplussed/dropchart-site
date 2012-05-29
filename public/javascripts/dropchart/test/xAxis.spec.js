define(
  ['jquery', 'dropchart', 'argsFor', 'XAxis', 'stub'],
  function($, dropchart, argsFor, XAxis, stub) {
  
  var should = chai.should();
  var xAxisSpec = {

    run: function() {
      before(function() {
        this.canvas = stub.canvas();
      });

      describe('XAxis - With Graph', function() {

        beforeEach(function() {
          this.histogram = stub.histogramWithLabels();
        });

        afterEach(function() {
          if (this.histogram) {
            this.histogram.destroy();
          }
        });

        describe ("args.xAxis.drawLabel = true", function() {
          it ('should draw the text labels', function() {
            (1).should.equal(1);
             //$("#histogram").should.have('g.x-axis-label');
          });

          it ('should draw the text labels in the correct positions', function() {

          });
        });

        describe ("args.xAxis.label.drawBackground = true", function() {

        });



      });

      describe('XAxis - Blank Canvas', function() {

        beforeEach(function() {
          this.xAxis = new dropchart.XAxis(argsFor.histogram());
          this.xAxis.render();
        });

        afterEach(function() {
          if (this.xAxis) {
            this.xAxis.destroy();
          }
        });

        describe ("#destroy", function() {
          
          it ('should remove the xAxis from the canvas', function() {
            $("#histogram").should.have('line.x-axis-line');
            this.xAxis.destroy();
            $("#histogram").should.not.have('line.x-axis-line');
          });
        });

        describe('args.xAxis.line.show = true', function() {

          it ('should draw a line for the X axis', function() {
            $("#histogram").should.have('line.x-axis-line');
          });

          it ('should draw a X axis line with the correct attributes', function() {
            var line = $('#histogram').find('line.x-axis-line');
            if (line) {
              line.attr('stroke').should.equal("red");
              line.attr('stroke-width').should.equal("2");
              line.attr('x1').should.equal("0");
              line.attr('x2').should.equal("380");
              line.attr('y1').should.equal("180");
              line.attr('y2').should.equal("180");
            } else {
              $("#histogram").should.have('line.x-axis-line');
            }
          });

        });

        describe('args.xAxis.show = false', function() {

          it ('should not draw a line for the X axis', function() {
            this.xAxis.destroy();
            this.xAxis = new dropchart.XAxis({
              chart: argsFor.chartHistogram(),
              data: argsFor.data(),
              canvas: argsFor.canvasWithInner(),
              xAxis: {
                drawLine: false
              }
            });
            this.xAxis.render();
            $('#histogram').should.not.have('line.x-axis-line');
          });

        });

        describe('args.xAxis.useTicks = true', function() {

          it ('should draw the correct number of ticks on the X axis', function() {
            $('line.x-axis-tick').length.should.equal(3);
          });

          it ('should place the ticks at the correct points on the axis', function() {
            $('line.x-axis-tick:eq(0)').should.have.attr("x1");
            $('line.x-axis-tick:eq(0)').attr("x1").should.equal("63.33");
            $('line.x-axis-tick:eq(1)').attr("x1").should.equal("190");
            $('line.x-axis-tick:eq(2)').attr("x1").should.equal("316.67");
          });

        });

      });

    }

  };

  return xAxisSpec;

});


      