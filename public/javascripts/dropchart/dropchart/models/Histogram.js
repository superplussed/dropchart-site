define('Histogram',
  ['Chart', 'Rect', 'XAxis', 'YAxis', 'fetch', 'utils'],
  function(Chart, Rect, XAxis, YAxis, fetch, utils) {

  Histogram.prototype = new Chart();
  Histogram.prototype.constructor = Histogram;

  function Histogram(args) {
    console.log('init Histogram');
    Chart.call(this, args);
  }

  Histogram.prototype.drawChart = function() {
    for (var i = 0; i <= this.xAxis.max; i ++) {
      var height = this.yAxis.scale(this.data[i].y);
      new Rect({
        svg: this.svg,
        className: "histogram-bar",
        parent: this.group,
        x: utils.roundNumber(this.xAxis.scale(i) - (this.xAxis.interval / 2), 2),
        y: utils.roundNumber(this.height - height, 2),
        width: utils.roundNumber(this.xAxis.interval * this.args.chart.bar.widthModifier, 2),
        height: utils.roundNumber(height, 2),
        style: this.args.chart.bar
      });
    }
  };

  return Histogram;

});
