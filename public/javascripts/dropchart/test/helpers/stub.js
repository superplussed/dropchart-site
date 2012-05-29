define(['jquery', 'argsFor', 'dropchart'], function($, argsFor, dropchart) {
  var stub = {
    xAxis: function() {
      return new dropchart.XAxis({
        canvas: argsFor.canvasWithInner(),
        xAxis: argsFor.xAxis(),
        data: argsFor.data()
      });
    },
    yAxis: function() {
      return new dropchart.YAxis({
        canvas: argsFor.canvasWithInner(),
        yAxis: argsFor.yAxis(),
        data: argsFor.data()
      });
    },
    canvas: function() {
      return new dropchart.Canvas({
        canvas: argsFor.canvasWithInner(),
        data: argsFor.data()
      });
    },
    histogramWithLabels: function() {
      return new dropchart.Histogram(argsFor.histogramWithLabels());
    }
  };
  return stub;
});

