define(['jquery', 'jquerySVG', 'dropchart', 'argsFor', 'stub'], function($, jSVG, dropchart, argsFor, stub) {
  
  var should = chai.should();
  var histogramName = {

    run: function() {
      describe('Histogram', function() {

        before(function() {
          this.canvas = stub.canvas();
        });

        afterEach(function() {
          if (this.histogram) {
            this.histogram.destroy();
          }
        });

        describe ("#destroy", function() {
          it ('should remove the histogram from the canvas', function() {
            this.histogram = new dropchart.Histogram(argsFor.histogram());
            $("#histogram").should.have('rect.histogram-bar');
            this.histogram.destroy();
            $("#histogram").should.not.have('rect.histogram-bar');
          });
        });

        describe('#initialize', function() {
          
          beforeEach(function() {
            this.histogram = new dropchart.Histogram(argsFor.histogram());
          });

          it ('should render the correct number of bars in the histogram', function() {
            $('rect.histogram-bar').length.should.equal(3);
          });

          it ('should render the bars with the correct heights', function() {
            $('rect.histogram-bar:eq(0)').should.have.attr("height");
            $('rect.histogram-bar:eq(0)').attr("height").should.equal("180");
            $('rect.histogram-bar:eq(1)').attr("height").should.equal("110");
            $('rect.histogram-bar:eq(2)').attr("height").should.equal("100");
          });

          it ('should render the bars with the correct x values', function() {
            $('rect.histogram-bar:eq(0)').should.have.attr("x");
            $('rect.histogram-bar:eq(0)').attr("x").should.equal("0");
            $('rect.histogram-bar:eq(1)').attr("x").should.equal("126.67");
            $('rect.histogram-bar:eq(2)').attr("x").should.equal("253.34");
          });

          it ('should render the bars with the correct y values', function() {
            $('rect.histogram-bar:eq(0)').should.have.attr("y");
            $('rect.histogram-bar:eq(0)').attr("y").should.equal("0");
            $('rect.histogram-bar:eq(1)').attr("y").should.equal("70");
            $('rect.histogram-bar:eq(2)').attr("y").should.equal("80");
          });

          it ('should render bars with the correct attributes', function() {

            var bar = $('#histogram').find('rect.histogram-bar:first');
            if (bar.length) {
              bar.attr('width').should.equal("126.67");
              bar.attr('height').should.equal("180");
              bar.attr('rx').should.equal("5");
              bar.attr('ry').should.equal("5");
              bar.attr('fill').should.equal("#DDDDDD");
              bar.attr('stroke').should.equal("#000000");
              bar.attr('stroke-width').should.equal("2");
              bar.attr('opacity').should.equal("1");
            }
          });
        });

        describe("args.chart.bar.widthModifier = 0.9", function() {

          it ('should render the adjusted bar width', function() {
            var args = argsFor.histogram();
            args.chart.bar.widthModifier = 0.9;
            this.histogram = new dropchart.Histogram(args);
            $('#histogram').find('rect.histogram-bar:first').attr('width').should.equal('114');
          });

        });

        describe("args.chart.margin = [11, 22, 33, 44]", function() {

          it ('should adjust the location and size of the chart', function() {
            var args = argsFor.histogram();
            args.chart.margin = {
              top: 11,
              right: 22,
              bottom: 33,
              left: 44
            };
            this.histogram = new dropchart.Histogram(args);
            $('#histogram').find('rect.histogram-bar:eq(1)').attr('width').should.equal('104.67');
            $('#histogram').find('rect.histogram-bar:eq(1)').attr('height').should.equal('83.11');
            $('#histogram').find('rect.histogram-bar:eq(1)').attr('x').should.equal('104.67');
            $('#histogram').find('rect.histogram-bar:eq(1)').attr('y').should.equal('52.89');
          });

        });

      });

    }

  };

  return histogramName;

});


      