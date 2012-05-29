define('Axis', ['utils'], function(utils) {
  function Axis() {
    console.log('init Axis');
  }

   Axis.prototype.addAxisElementsPostRender = function() {
    if (!this.abortRender) {
      if (this.options.showXAxisLabels) {
        this.addXAxisLabels();
      }

      if (this.options.showYAxis) {
        this.addYAxis();
      }
    }
  };

  Axis.prototype.addAxisElementsPreRender = function() {
    if (this.options.showXAxisLine && !this.abortRender) {
      this.addXAxisLine();
    }
  };

  Axis.prototype.addXAxisLine = function() {
    var yVal = this.formatY(this.yScale(this.yScale(0)));
    this.canvasGroup.append('svg:line')
      .attr('class', 'x-line')
      .style('shape-rendering', 'crispEdges')
      .attr('x1', '0%')
      .attr('x2', '100%')
      .attr('y1', yVal)
      .attr('y2', yVal);
  };

  Axis.prototype.createScale = function() {
    this.yMax = d3.max(this.data, function(d) { if (d.y) return d.y; });
    this.yMin = d3.min(this.data, function(d) { if (d.y) return d.y; });
    if (this.yMax === this.yMin) {
      if (this.yMax < 0) {
        this.yMax = 0;
      } else {
        this.yMin = 0;
      }
    }
    this.assignRangesFromDimensions();
  };

  Axis.prototype.assignRangesFromDimensions = function() {
    var that = this;
    that.calculateBarSize();

    that.xScale = d3.scale.linear().range([0, that.canvasBoundaries.width]);
    if (this.options.xAxisUseCount) {
        that.xScale.domain([0, that.data.length]);
    } else {
       that.xScale.domain([that.data[0].x, that.data[that.data.length - 1].x]);
    }

    that.yScale = d3.scale.linear()
      .domain([that.yMax, that.yMin])
      .range([0, that.canvasBoundaries.height]);
  };

  Axis.prototype.addYAxis = function() {
    this.yAxis = d3.svg.axis()
      .scale(this.yScale)
      .ticks(this.options.yAxisNumTicks)
      .orient(this.options.yAxisOrientation);

    this.canvas.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + this.translateX(this.options.yAxisPosition) + ',' + this.translateY(this.options.marginTop) + ')')
        .call(this.yAxis);
  };

  Axis.prototype.addXAxisLabels = function() {
    var that = this;
    this.xAxisLabel = this.bars.append('svg:rect')
      .attr('id', function(d, i) { return that.id + '-bar-x-label-' + i; })
      .attr('width', that.formatX(this.barWidth))
      .attr('height', that.formatY(this.options.xAxisLabelHeight))
      .attr('fill', this.options.xAxisLabelColor)
      .attr('stroke', this.options.xAxisLabelStrokeColor)
      .attr('stroke-width', this.options.xAxisLabelStrokeWidth)
      .attr('opacity', this.options.xAxisLabelOpacity)
      .attr('rx', this.options.xAxisLabelRadius)
      .attr('ry', this.options.xAxisLabelRadius)
      .attr('x', function(d, i) { return that.formatX(that.xScale(i)); })
      .attr('y', that.formatY(this.options.xAxisPosition));

    this.xAxisLabelText = this.bars.append('svg:text')
      .attr('id', function(d, i) { return that.id + '-bar-x-text-label-' + i; })
      .attr('font-size', this.options.xAxisFontSize)
      .attr('fill', this.options.xAxisFontColor)
      .attr('y', this.options.xAxisFontPosition)
      .attr('opacity', this.options.xAxisFontOpacity)
      .attr('text-anchor', 'middle')
      .attr('x', function(d, i) {
        return that.formatX(that.xScale(i) + (that.barWidth / 2));
      })
      .text(function(d, i) { return d.x; });
  };

  Axis.prototype.calculateBarSize = function() {
    var that = this;
    that.barWidth = utils.roundNumber(((this.canvasBoundaries.width) / that.data.length) * that.options.barWidthModifier, 2);
  };

  Axis.prototype.xMax = function() {
    return utils.getBoundingRect('svg').width - utils.pixelsToInt(this.options.popoverWidth);
  };

  Axis.prototype.xScaleInPx = function(i) {
    var x = this.xScale(i) * 0.01 * this.getBoundingRect('svg').width;
    return (x > this.xMax() ? this.xMax() : x);
  };

  return Axis;
});
