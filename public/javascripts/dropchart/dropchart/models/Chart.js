define('Chart',
  ['Rect', 'XAxis', 'YAxis', 'fetch', 'utils'],
  function(Rect, XAxis, YAxis, fetch, utils) {

  function Chart(args) {
    var groupArgs = {},
      margin;
    if (args) {
      this.data = args.data;
      this.args = args;
      this.svg = fetch.svg(args);
      this.args.chart.margin = $.extend({
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, this.args.chart.margin || {});

      if (this.args.chart.margin) {
        this.width = this.args.canvas.innerWidth - this.args.chart.margin.left - this.args.chart.margin.right;
        this.height = this.args.canvas.innerHeight - this.args.chart.margin.top - this.args.chart.margin.bottom;
        if (this.args.chart.margin.left && this.args.chart.margin.top) {
          groupArgs.transform = "translate(" + this.args.chart.margin.left + "," + this.args.chart.margin.top + ")";
        }
      } else {
        this.width = this.args.canvas.innerWidth;
        this.height = this.args.canvas.innerHeight;
      }

      this.group = this.svg.group("histogram-group", groupArgs);

      this.args.chart.group = this.group;
      this.args.chart.width = this.width;
      this.args.chart.height = this.height;

      this.xAxis = new XAxis(args);
      this.yAxis = new YAxis(args);

      this.drawChart();
      this.afterRender();
    }
  }

  Chart.prototype.afterRender = function() {
    this.xAxis.render();
    this.yAxis.render();
  };

  Chart.prototype.destroy = function() {
    if (this.group) {
      this.xAxis.destroy();
      this.yAxis.destroy();
      $(this.group).remove();
    }
  };

  return Chart;

});