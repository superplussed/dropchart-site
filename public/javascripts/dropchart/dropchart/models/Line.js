define('Line',
  ['jquery', 'jquerySVG'],
  function($) {

  function Line(args) {
    if (args.x) {
      args.x1 = args.x;
      args.x2 = args.x;
    } else if (args.y) {
      args.y1 = args.y;
      args.y2 = args.y;
    }
    args.svg.line(args.parent, args.x1, args.y1, args.x2, args.y2,
      {
        'class': args.className,
        stroke: args.style.strokeColor,
        'stroke-width': args.style.strokeWidth,
        opacity: args.style.opacity,
        'shape-rendering': 'crispedges'
      });
  }

  return Line;
});