define('Text',
  ['jquery', 'jquerySVG'],
  function($) {

  function Text(args) {
    var textAnchor;

    if (args.style.textAnchor === 'left') {
      textAnchor = 'start';
    } else if (args.style.textAnchor === 'right') {
      textAnchor = 'end';
    } else {
      textAnchor = args.style.textAnchor;
    }
    args.svg.text(args.parent, args.x, args.y, args.value,
      {
        'font-size': args.style.size,
        opacity: args.style.opacity,
        'text-anchor': textAnchor
      });
  }

  return Text;
});