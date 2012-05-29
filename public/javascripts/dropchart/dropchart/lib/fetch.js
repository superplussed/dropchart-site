define(['jquery', 'jquerySVG'], function($) {
  var fetch = {

    elOrFalse: function(el) {
      return (el.length > 0 ? el : false);
    },

    container: function(args) {
      return this.elOrFalse($("#" + args.canvas.id));
    },

    innerContainer: function(args) {
      return this.elOrFalse($("#" + args.canvas.id + "-inner"));
    },

    svg: function(args) {
      return $(this.innerContainer(args)).svg('get');
    },

    svgGroup: function(args, groupEl) {
      return this.svg(args).getElementById($(groupEl).attr("id"));
    }
  };
  return fetch;
});
