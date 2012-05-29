define(
  ['jquery', 'dropchart', 'argsFor', 'YAxis', 'stub'],
  function($, dropchart, argsFor, YAxis, stub) {
  
  var should = chai.should();
  var yAxisSpec = {

    run: function() {

      describe('Yaxis - With Graph', function() {

      });

      describe('YAxis', function() {

        before(function() {
          this.canvas = stub.canvas();
        });

        beforeEach(function() {
          this.yAxis = new dropchart.YAxis(argsFor.histogram());
          this.yAxis.render();
        });

        afterEach(function() {
          if (this.yAxis) {
            this.yAxis.destroy();
          }
        });

        describe ("#destroy", function() {
          it ('should remove the yAxis from the canvas', function() {
            $("#histogram").should.have('line.y-axis-line');
            this.yAxis.destroy();
            $("#histogram").should.not.have('line.y-axis-line');
          });
        });

        describe('#initialize', function() {

          describe('args.yAxis.show = true', function() {

            it ('should draw a line for the Y axis', function() {
              $("#histogram").should.have('line.y-axis-line');
            });

            it ('should draw a Y axis line with the correct attributes', function() {
              var line = $('#histogram').find('line.y-axis-line');
              if (line) {
                line.attr('stroke').should.equal("red");
                line.attr('stroke-width').should.equal("2");
                line.attr('y1').should.equal("0");
                line.attr('y2').should.equal("180");
                line.attr('opacity').should.equal("1");
              } else {
                $("#histogram").should.have('line.y-axis-line');
              }
            });

          });

          describe('args.yAxis.show = false', function() {

            it ('should not draw a line for the Y axis', function() {
              this.yAxis.destroy();
              this.yAxis = new dropchart.YAxis({
                chart: argsFor.chartHistogram(),
                data: argsFor.data(),
                canvas: argsFor.canvasWithInner(),
                yAxis: {
                  drawLine: false
                }
              });
              this.yAxis.render();
              $('#histogram').should.not.have('line.y-axis-line');
            });

          });

          describe('args.yAxis.useTicks = true', function() {

            it ('should draw the correct number of ticks on the Y axis', function() {
              $('line.y-axis-tick').length.should.equal(4);
            });

            it ('should place the ticks at the correct points on the axis', function() {
              $('line.y-axis-tick:eq(1)').attr("y1").should.equal('45');
              $('line.y-axis-tick:eq(2)').attr("y1").should.equal('90');
              $('line.y-axis-tick:eq(3)').attr("y1").should.equal('135');
            });

          });

        });

      });

    }

  };

  return yAxisSpec;

});