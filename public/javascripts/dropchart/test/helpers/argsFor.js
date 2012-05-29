define(['jquery'], function(jquery) {
  var argsFor = {
    canvas: function() {
      return {
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
      };
    },
    canvasWithInner: function() {
      return $.extend({
        innerWidth: 380,
        innerHeight: 180
      }, this.canvas());
    },
    canvasWithInnerNoMargin: function() {
      return $.extend({
        innerWidth: 400,
        innerHeight: 200
      }, this.canvas());
    },
    data: function() {
      return [
        {x: "foo", y: 180},
        {x: "bar", y: 110},
        {x: "baz", y: 100}
      ];
    },
    xAxis: function() {
      return {
        drawLine: true,
        line: {
          opacity: 1,
          strokeColor: "red",
          strokeWidth: 2
        }
      };
    },
    yAxis: function() {
      return {
        drawLine: true,
        line: {
          opacity: 1,
          strokeColor: "red",
          strokeWidth: 2
        }
      };
    },
    xAxisWithTicks: function() {
      return $.extend({
        drawTicks: true,
        tick: {
          yOffset: -3,
          xOffset: 0,
          opacity: 1,
          strokeColor: "#000",
          strokeWidth: 1,
          length: 6
        }
      }, this.xAxis());
    },
    xAxisWithTicksAndLabels: function() {
      return $.extend({
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
      }, this.xAxisWithTicks());
    },
    yAxisWithTicks: function() {
      return $.extend({
        drawTicks: true,
        tick: {
          xOffset: -3,
          yOffset: 0,
          opacity: 1,
          strokeColor: "#000",
          strokeWidth: 1,
          length: 6,
          num: 4
        }
      }, this.yAxis());
    },
    yAxisWithTicksAndLabels: function() {
      return $.extend({
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
      }, this.yAxisWithTicks());
    },
    chartHistogram: function() {
      return  {
        height: 180,
        width: 380,
        bar: {
          color: '#DDDDDD',
          strokeColor: '#000000',
          strokeWidth: 2,
          opacity: 1,
          radius: 5,
          widthModifier: 1
        }
      };
    },
    formattedChartHistogram: function() {
      return $.extend({
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 40
         }
        }, this.chartHistogram());
    },
    histogramWithLabels: function() {
      return {
        chart: this.formattedChartHistogram(),
        data: this.data(),
        canvas: this.canvasWithInner(),
        xAxis: this.xAxisWithTicksAndLabels(),
        yAxis: this.yAxisWithTicksAndLabels()
      };
    },
    histogram: function() {
      return {
        chart: this.chartHistogram(),
        data: this.data(),
        canvas: this.canvasWithInner(),
        xAxis: this.xAxisWithTicks(),
        yAxis: this.yAxisWithTicks()
      };
    }
  };
  return argsFor;
});
