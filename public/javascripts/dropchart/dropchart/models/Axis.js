define('Axis',
  ['Coord', 'Line', 'utils', 'fetch', 'jquery', 'jquerySVG'],
  function(Coord, Line, utils, fetch, $) {

  function Axis(args) {
    if (this.args) {
      this.data = args.data;
      this.svg = fetch.svg(args);

      if (this.args.chart && this.args.chart.width) {
        this.width = this.args.chart.width;
        this.height = this.args.chart.height;
      } else if (this.args.canvas.innerWidth) {
        this.width = this.args.canvas.innerWidth;
        this.height = this.args.canvas.innerHeight;
      } else {
        this.width = this.args.canvas.width;
        this.height = this.args.canvas.height;
      }

      this.coord = new Coord(this.args);
      this.createScale();
    }
  }

  Axis.prototype.render = function() {

    if (!this.group) {
      if (this.args.chart && this.args.chart.group) {
        this.group = this.svg.group(fetch.svgGroup(this.args, this.args.chart.group), this.groupId);
      } else {
        this.group = this.svg.group(this.groupId);
      }
    }

    if (this.axisArgs.drawLine) {
      this.drawLine();
    }
    if (this.axisArgs.drawTicks) {
      this.drawTicks();
    }
    if (this.axisArgs.drawLabels) {
      this.drawLabels();
    }
  };

  Axis.prototype.destroy = function() {
    if (this.group) {
      $(this.group).remove();
    }
  };

  return Axis;

});