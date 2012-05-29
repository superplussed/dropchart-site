define('Histogram', ['utils', 'Chart'], function(utils, Chart) {

  Histogram.prototype = new Chart();
  Histogram.prototype.constructor = Histogram;
  var self = Histogram;

  function Histogram(obj) {
    console.log('init Histogram ' + obj.id);
    this.initialize(obj);
  }

  Histogram.prototype.create = function() {
    var that = this;

    if (this.data.length > 0 && !this.abortRender) {
      this.initCanvas();
      this.addAxisElementsPreRender();
      if (this.canvasGroup) {
        this.bars = this.canvasGroup.selectAll('g.barGroup')
            .data(this.data)
          .enter().append('svg:g')
            .attr('class', 'barGroup')
            .attr('id', function(d, i) { return 'bar-group-' + i;});

        this.barBG = this.bars.append('svg:rect')
          .attr('id', function(d, i) { return that.id + '-bar-bg-' + i; })
          .attr('class', 'd4-histogram-bg')
          .attr('height', this.options.barBgHeight)
          .attr('width', that.barWidth)
          .attr('fill', this.options.barBgColor)
          .attr('opacity', this.options.barBgOpacity)
          .attr('x', function(d, i) { return that.formatX(that.xScale(i)); })
          .attr('y', 0);

        this.bar = this.bars.append('svg:rect')
          .attr('id', function(d, i) { return that.id + '-bar-' + i; })
          .attr('class', function(d, i) { return that.barClassName(d, i);})
          .attr('fill', this.options.barColor)
          .attr('stroke', this.options.barStrokeColor)
          .attr('stroke-width', this.options.barStrokeWidth)
          .attr('opacity', this.options.barOpacity)
          .attr('rx', this.options.barRadius)
          .attr('ry', this.options.barRadius)
          .attr('x', function(d, i) { return that.formatX(that.xScale(i)); })
          .attr('y', function(d, i) {
            yPos = (d.y > 0 ? d.y : 0);
            return that.yScale(yPos);
          })
          .attr('vector-effect', 'non-scaling-stroke')
          .attr('width', this.formatX(this.barWidth))
          .attr('height', function(d, i) {
            return Math.abs(that.yScale(d.y) - that.yScale(0));
          });

        if (this.options.addMouseoverAction && this.options.barBgMouseover) {
          this.bar.attr('cursor', 'pointer');
          this.barBG.attr('cursor', 'pointer');
          this.bars
            .on('mouseover', that.getMouseOver())
            .on('mouseout', that.getMouseOut());
        } else if (this.options.addMouseoverAction) {
          this.bars.selectAll('.bar')
              .attr('cursor', 'pointer')
              .on('mouseover', that.getMouseOver())
              .on('mouseout', that.getMouseOut());
        }

        if (this.options.addClickAction) {
          this.bars.on('click', that.options.onClick);
        }
        this.addAxisElementsPostRender();
      }
    }
  };

  Histogram.prototype.barClassName = function(d, i) {
    return d.y > 0 ? 'bar bar-positive' : 'bar bar-negative';
  };

  return Histogram;

});
