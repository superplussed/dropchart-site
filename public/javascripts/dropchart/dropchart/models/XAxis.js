define('XAxis',
  ['Axis', 'Coord', 'Line', 'Text', 'utils', 'fetch', 'jquery', 'jquerySVG'],
  function(Axis, Coord, Line, Text, utils, fetch, $) {

  XAxis.prototype = new Axis();
  XAxis.prototype.constructor = XAxis;

  function XAxis(args) {
    this.args = args;
    this.groupId = "x-axis-group";
    this.axisArgs = this.args.xAxis;
    Axis.call(this, args);
  }

  XAxis.prototype.drawLabels = function() {
    var yPos = this.args.chart.height - this.coord.yToFloat('canvas', this.args.xAxis.label.yOffset),
      i;
    for (i = 0; i <= this.max; i ++) {
      new Text({
        svg: this.svg,
        className: "x-axis-label",
        parent: this.group,
        value: this.data[i].x,
        x: this.scale(i),
        y: yPos,
        style: this.args.xAxis.label.font
      });
    }

  };

  XAxis.prototype.drawLine = function() {
    var y = (this.args.chart.height || this.args.canvas.height);

    new Line({
      svg: this.svg,
      className: "x-axis-line",
      parent: this.group,
      x1: 0,
      x2: this.args.chart.width,
      y: y,
      style: this.args.xAxis.line
    });
  };

  XAxis.prototype.drawTicks = function() {
    var tickLength = this.coord.yToFloat('canvas', this.args.xAxis.tick.length) / 2,
      yPos = this.args.chart.height - this.coord.yToFloat('canvas', this.args.xAxis.tick.yOffset),
      i;
    for (i = 0; i <= this.max; i ++) {
      new Line({
        svg: this.svg,
        className: "x-axis-tick",
        parent: this.group,
        x: this.scale(i),
        y1: yPos + tickLength,
        y2: yPos - tickLength,
        style: this.args.xAxis.tick
      });
    }
  };

  XAxis.prototype.scale = function(val) {
    return this.scaleArray[val].coord;
  };

  XAxis.prototype.createScale = function() {
    var i,
      coord;
    this.scaleArray = [];
    this.min = 0;
    this.max = this.data.length - 1;
    this.interval = this.width / this.args.data.length;
    coord = this.interval / 2;
    for (i = this.min; i <= this.max; i ++) {
      this.scaleArray[i] = {x: i, coord: utils.roundNumber(coord, 2)};
      coord += this.interval;
    }
  };

  return XAxis;
});