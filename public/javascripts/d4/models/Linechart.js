define('Linechart', ['Chart', 'utils'], function(Chart, utils) {

  Linechart.prototype = new Chart();
  Linechart.prototype.constructor = Linechart;

  function Linechart(obj) {
    console.log('init Linechart ' + obj.id);
    this.init(obj);
  }

  Linechart.prototype.create = function() {
    var that = this;

    if (this.data.length > 0) {
      this.options.xScale = 'time';
      this.initCanvas();
      this.addAxisElementsPreRender();

      var line = d3.svg.line()
        .interpolate('monotone')
        .x(function(d) { return that.xScale(d.x); })
        .y(function(d) { return that.yScale(d.y); });

      var area = d3.svg.area()
        .interpolate('monotone')
        .x(function(d) { return that.xScale(d.x); })
        .y0(that.canvasBoundaries.height)
        .y1(function(d) { return that.yScale(d.y); });

       var xAxis = d3.svg.axis()
        .scale(that.xScale)
        .tickSize(-that.canvasBoundaries.height)
        .tickSubdivide(true);

      var yAxis = d3.svg.axis()
        .scale(that.yScale)
        .ticks(4)
        .orient('right');

      this.canvasGroup.append('clipPath')
        .attr('id', this.id + '-clip')
      .append('rect')
        .attr('width', that.canvasBoundaries.width)
        .attr('height', that.canvasBoundaries.height);

      this.canvasGroup.append('path')
        .attr('class', 'area')
        .attr('clip-path', 'url(#' + this.id + '-clip)')
        .attr('d', area(this.data));

      this.canvasGroup.append('svg:path')
        .attr('class', 'line')
        .attr('clip-path', 'url(#' + this.id + '-clip)')
        .attr('d', line(this.data));

      that.canvasGroup.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + that.canvasBoundaries.height + ')')
        .call(xAxis);

      that.canvasGroup.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + that.canvasBoundaries.width + ',0)')
        .call(yAxis);
    }
  };

  return Linechart;

});
