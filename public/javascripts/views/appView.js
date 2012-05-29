define(['knockout', 'd4', 'dataView', 'chartData', 'chartOptions', 'bindings', 'testDriveView', 'appState'],
    function(ko, d4, dataView, chartData, chartOptions, bnd, testDriveView, appState) {
  var appView = {
    valueTypeOptions: ['px', '%'],
    defaultOptions: {
      chartLabelText: 'Most Watched Repos'
    },
    appState: appState,
    dataView: dataView,
    initialize: function() {
      console.log('init appView');
      chartData.initialize();
      dataView.initialize();
      testDriveView.initialize();
      self.createHistogram();
      chartOptions.initialize(self.defaultOptions);
      appState.histogram.create();
      self.chartOptions = chartOptions.data;
      self.chartData = chartData.data;
      self.currentTab = appState.currentTab;
      ko.applyBindings(self);
      appState.currentTab("#features");
      $('.numeric').numeric();
      chartOptions.loaded(true);
    },

    createHistogram: function() {
      var options = chartOptions.formatForD4() || self.defaultOptions;
      options.data = chartData.formatForD4();
      options.id = "histogram";
      appState.histogram = new d4.Histogram(options);
    },

    updateHistogram: function() {
      appState.histogram.destroy();
      self.createHistogram();
      appState.histogram.create();
    },

    getCodeStr: function() {
      var formattedData = chartData.formatForDisplay();
      var formattedOptions = chartOptions.formatForDisplay();
      return 'var histogram = new d4.Chart({\n' +
        "  id: 'histogram'\n" +
            formattedOptions + '\n' +
        '  data: {\n' +
            formattedData + '\n' +
        '  }\n' +
      '});\n' +
      'histogram.create();';
    }
  };
  var self = appView;

  ko.bindingHandlers.displayCode = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
      self.updateHistogram();
      var codeStr = self.getCodeStr();
      $('.rainbow').text('');
      Rainbow.color(codeStr, 'javascript', function(highlighted_code) {
        $('.rainbow').append(highlighted_code);
      });
    }
  };

  $(document).ready(function() {
    $('a[data-toggle="tab"]').on('shown', function(e) {
      var tab = _.last(e.target.href.split('/'));
      appState.currentTab(tab);
    });
  });

  $(window).resize(function() {
    appState.histogram.resize();
  });

  return self;
});
