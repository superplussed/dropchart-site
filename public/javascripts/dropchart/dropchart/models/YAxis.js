define('YAxis',
  ['Axis', 'Coord', 'Line', 'Text', 'utils', 'fetch', 'jquery', 'jquerySVG'],
  function(Axis, Coord, Line, Text, utils, fetch, $) {

  YAxis.prototype = new Axis();
  YAxis.prototype.constructor = YAxis;

  function YAxis(args) {
    this.args = args;
    this.groupId = "y-axis-group";
    this.axisArgs = this.args.yAxis;
    Axis.call(this, args);
  }

  YAxis.prototype.drawLabels = function() {
    var xPos = this.coord.xToFloat('chart', this.args.yAxis.label.xOffset),
      that = this,
      dataPoint = 0,
      value = this.max,
      i;
    for (i = 1; i <= this.numTicks; i ++) {
      new Text({
        svg: this.svg,
        className: "y-axis-label",
        parent: this.group,
        value: value.toString(),
        x: xPos,
        y: that.scale(dataPoint) + this.args.yAxis.label.yOffset,
        style: this.args.yAxis.label.font
      });
      dataPoint += this.coordInterval;
      value -= this.valueInterval;
    }
  };

  YAxis.prototype.drawLine = function() {
    new Line({
      svg: this.svg,
      className: "y-axis-line",
      parent: this.group,
      y1: 0,
      y2: this.args.chart.height,
      x: 0,
      style: this.args.yAxis.line
    });
  };

  YAxis.prototype.drawTicks = function() {
    var tickLength = this.coord.xToFloat('canvas', this.args.yAxis.tick.length) / 2,
      xPos = this.coord.xToFloat('chart', this.args.yAxis.tick.xOffset),
      dataPoint = 0,
      that = this,
      i;
    for (i = 1; i <= this.numTicks; i ++) {
      new Line({
        svg: this.svg,
        className: "y-axis-tick",
        parent: this.group,
        y: that.scale(dataPoint),
        x1: xPos + tickLength,
        x2: xPos - tickLength,
        style: this.args.yAxis.tick
      });
      dataPoint += this.coordInterval;
    }
  };

  YAxis.prototype.scale = function(val) {
    return val * this.ratio;
  };

  YAxis.prototype.createScale = function() {
    this.min = utils.minFromArrayOfObj(this.data, 'y');
    this.max = utils.maxFromArrayOfObj(this.data, 'y');
    this.ratio = this.height / this.max;
    if (this.args.yAxis.tick) {
      this.numTicks = this.args.yAxis.tick.num;
      this.coordInterval = this.args.canvas.innerHeight / this.numTicks;
      this.valueInterval = this.max / this.numTicks;
    }
  };

  return YAxis;
});