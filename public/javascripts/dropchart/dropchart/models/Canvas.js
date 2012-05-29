define('Canvas',
  ['Coord', 'utils', 'fetch', 'jquery', 'jquerySVG'],
  function(Coord, utils, fetch, $) {

  function Canvas(args) {
    console.log('init Canvas');
    this.args = args;
    this.coord = new Coord(args);

    this.el = fetch.container(args);
    this.el.addClass("dc-container");

    if (!fetch.innerContainer(args)) {
      this.el.append("<div id='" + this.args.canvas.id + "-inner' class='dc-inner-container'></div>");
    }

    this.svg = fetch.innerContainer(args).svg();
    this.setCanvasDimensions();
  }

  Canvas.prototype.setCanvasDimensions = function() {
    var rootId = this.args.canvas.id + "-root";
    this.args.canvas.innerWidth = this.coord.x( 'canvas', this.coord.xToFloat( 'canvas', this.args.canvas.width ) - this.coord.xToFloat( 'canvas', this.args.canvas.margin.left) - this.coord.xToFloat( 'canvas', this.args.canvas.margin.right ));
    this.args.canvas.innerHeight = this.coord.y( 'canvas', this.coord.yToFloat( 'canvas', this.args.canvas.height ) - this.coord.yToFloat( 'canvas', this.args.canvas.margin.top) - this.coord.yToFloat( 'canvas', this.args.canvas.margin.bottom ));
    
    $( this.el ).css({
      "width": this.coord.x( 'canvas', this.args.canvas.width ),
      "height": this.coord.y( 'canvas', this.args.canvas.height )
    });
      
    $( this.el.find('.dc-inner-container') ).css({
      "margin-left": this.args.canvas.margin.left,
      "margin-right": this.args.canvas.margin.right,
      "margin-top": this.args.canvas.margin.top,
      "margin-bottom": this.args.canvas.margin.bottom,
      width: this.args.canvas.innerWidth,
      height: this.args.canvas.innerHeight
    });

    $( this.el.find('svg') ).attr({
      width: this.args.canvas.innerWidth,
      height: this.args.canvas.innerHeight
    });
  };

  Canvas.prototype.destroy = function() {
    $("#" + this.args.canvas.id + "-inner").remove();
  };

  return Canvas;
});