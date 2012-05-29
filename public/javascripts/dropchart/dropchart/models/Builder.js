define('Builder',
  ['Canvas', 'Histogram', 'jquery', 'jquerySVG'],
  function(Canvas, Histogram, $) {

  function Builder(args) {
    this.defaultArgs = {
      canvas: {
        id: "histogram",
        background: 'none',
        drawPerc: false,
        width: 400,
        height: 200,
        margin: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
        }
      },
      chart: {
        type: 'histogram',
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 40
        },
        bar: {
          color: '#DDDDDD',
          strokeColor: '#000000',
          strokeWidth: 2,
          opacity: 1,
          radius: 5,
          widthModifier: 1
        }
      },
      xAxis: {
        drawLine: true,
        line: {
          opacity: 1,
          strokeColor: "red",
          strokeWidth: 2
        },
        drawTicks: true,
        tick: {
          yOffset: -3,
          xOffset: 0,
          opacity: 1,
          strokeColor: "#000",
          strokeWidth: 1,
          length: 6
        },
        drawLabels: true,
        label: {
          yOffset: -20,
          xOffset: 0,
          drawBackground: true,
          background: {
            height: "20",
            radius: 3,
            color: "#CCC",
            strokeColor: "#000",
            strokeWidth: 1,
            opacity: 1
          },
          font: {
            size: 12,
            color: "black",
            opacity: 1,
            textAnchor: 'middle'
          }
        }
      },
      yAxis: {
        drawLine: true,
        line: {
          opacity: 1,
          strokeColor: "red",
          strokeWidth: 2
        },
        drawTicks: true,
        tick: {
          xOffset: -3,
          yOffset: 0,
          opacity: 1,
          strokeColor: "#000",
          strokeWidth: 1,
          length: 6,
          num: 4
        },
        drawLabels: true,
        label: {
          xOffset: -10,
          yOffset: 5,
          drawBackground: true,
          background: {
            height: "20",
            radius: 3,
            color: "#CCC",
            strokeColor: "#000",
            strokeWidth: 1,
            opacity: 1
          },
          font: {
            size: 12,
            color: "black",
            opacity: 1,
            textAnchor: 'right'
          }
        }
      }
    };
    this.args = $.extend(this.defaultArgs, args);
    this.canvas = new Canvas(this.args);
    this.histogram = new Histogram(this.args);
  }

  Builder.prototype.destroy = function() {
    this.canvas.destroy();
  };

  return Builder;
});