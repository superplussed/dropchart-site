define(['underscore', 'knockout', 'jquery', 'utils'], function(_, ko, jquery, utils) {
  var chartData = {
    data: ko.observableArray([
      {'x': ko.observable('Bootstrap'), 'y': ko.observable(28279)},
      {'x': ko.observable('Node'), 'y': ko.observable(14822)},
      {'x': ko.observable('Rails'), 'y': ko.observable(14085)},
      {'x': ko.observable('jQuery'), 'y': ko.observable(13880)},
      {'x': ko.observable('Html5-B'), 'y': ko.observable(12456)},
      {'x': ko.observable('Spoon'), 'y': ko.observable(9032)},
      {'x': ko.observable('Impress.js'), 'y': ko.observable(8592)},
      {'x': ko.observable('Homebrew'), 'y': ko.observable(8547)},
      {'x': ko.observable('Backbone'), 'y': ko.observable(8006)},
      {'x': ko.observable('Diaspara'), 'y': ko.observable(6670)},
      {'x': ko.observable('D4'), 'y': ko.observable(1)}
    ]),
    initialize: function() {
      console.log('init chartData');
    },
    formatForD4: function() {
      return _.map(self.data(), function(obj) { return {x: obj.x(), y: obj.y()}; });
    },
    formatForDisplay: function() {
      var formattedData = utils.cloneObj(self.data());
      return _.map(formattedData, function(obj) { return "    {x: '" + obj.x() + "', y: " + obj.y() + '}'; }).join(',\n');
    }
  };
  var self = chartData;
  return self;
});
