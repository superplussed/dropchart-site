define(['knockout', 'jquery', 'appState', 'utils'], function(ko, jquery, appState, utils) {
  var zeroToOne = 'This should be a number between 0 and 1.';
  var chartOptions = {
    hasChanged: ko.observable(),
    loaded: ko.observable(false),
    data: ko.observable([
      {
        name: 'Chart Dimensions',
        fields: ko.observableArray([
          {name: 'chartType', type: 'select', value: ko.observable(), valueType: ko.observable(), selectOptions: ['histogram']},
          {name: 'chartWidth', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartHeight', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable(), disabled: 'disabled'},
          {name: 'usePerc', type: 'bool', value: ko.observable(), valueType: ko.observable(), hint: 'This will convert pixel values to percentages'}
        ])
      },

      {
        name: 'Chart Margins',
        fields: ko.observableArray([
          {name: 'marginTop', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'marginRight', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'marginBottom', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'marginLeft', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()}
        ])
      },

      {
        name: 'Chart Label',
        fields: ko.observableArray([
          {name: 'chartLabelText', type: 'string', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelWidth', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelHeight', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelX', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelY', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelStrokeColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelStrokeWidth', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelRadius', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelOpacity', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: zeroToOne}
        ])
      },

      {
        name: 'Chart Label Font',
        fields: ko.observableArray([
          {name: 'chartLabelFontX', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelFontY', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelFontSize', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelFontColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'chartLabelFontOpacity', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: zeroToOne}
        ])
      },

      {
        name: 'Bar Display',
        fields: ko.observableArray([
          {name: 'barColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'barStrokeColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'barStrokeWidth', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'barWidthModifier', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: zeroToOne},
          {name: 'barRadius', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'barOpacity', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: zeroToOne}
        ])
      },
      {
        name: 'Bar Rollover',
        fields: ko.observableArray([
          {name: 'addMouseoverAction', type: 'bool', value: ko.observable(), valueType: ko.observable()},
          {name: 'barMouseoverDuration', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: 'Milliseconds for mouse over transition.'},
          {name: 'barMouseoutDuration', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: 'Milliseconds for mouse out transition.'},
          {name: 'barRollColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'barRollStrokeColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'barRollStrokeWidth', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'barRollOpacity', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: zeroToOne}
        ])
      },

      {
        name: 'Bar Background',
        fields: ko.observableArray([
          {name: 'barBgMouseover', type: 'bool', value: ko.observable(), valueType: ko.observable(), hint: 'Will initiate the bar roll on mousing over the background.'},
          {name: 'barBgColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'barBgStrokeColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'barBgStrokeWidth', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'barBgOpacity', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: zeroToOne},
          {name: 'barBgRadius', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'barBgHeight', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()}
        ])
      },

      {
        name: 'Bar BG Rollover',
        fields: ko.observableArray([
          {name: 'barBgRollColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'barBgRollStrokeColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'barBgRollStrokeWidth', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'barBgRollOpacity', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: zeroToOne}
        ])
      },

      {
        name: 'X Axis',
        fields: ko.observableArray([
          {name: 'showXAxisLine', type: 'bool', value: ko.observable(), valueType: ko.observable()},
          {name: 'xAxisUseCount', type: 'bool', value: ko.observable(), valueType: ko.observable(), hint: 'When true, the X Axis is not using xs for positioning.'},
          {name: 'xAxisPosition', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()}
        ])
      },

      {
        name: 'X Axis Fonts',
        fields: ko.observableArray([
          {name: 'xAxisFontPosition', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'xAxisFontSize', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'xAxisFontColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'xAxisFontOpacity', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: zeroToOne}
        ])
      },

      {
        name: 'X Axis Labels',
        fields: ko.observableArray([
          {name: 'showXAxisLabels', type: 'bool', value: ko.observable(), valueType: ko.observable()},
          {name: 'xAxisLabelHeight', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'xAxisLabelRadius', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'xAxisLabelColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'xAxisLabelStrokeColor', type: 'color', value: ko.observable(), valueType: ko.observable()},
          {name: 'xAxisLabelStrokeWidth', type: 'float', value: ko.observable(), valueType: ko.observable()},
          {name: 'xAxisLabelOpacity', type: 'float', value: ko.observable(), valueType: ko.observable(), hint: zeroToOne}
        ])
      },

      {
        name: 'Y Axis',
        fields: ko.observableArray([
          {name: 'showYAxis', type: 'bool', value: ko.observable(), valueType: ko.observable()},
          {name: 'yAxisPosition', type: 'percOrNumber', value: ko.observable(), valueType: ko.observable()},
          {name: 'yAxisNumTicks', type: 'integer', value: ko.observable(), valueType: ko.observable()},
          {name: 'yAxisOrientation', type: 'select', value: ko.observable(), valueType: ko.observable(), selectOptions: ['left', 'right']}
        ])
      }

    ]),
    initialize: function(options) {
      console.log('init chartOptions');
      self.options = $.extend(appState.histogram.options, options);
      $.each(this.data(), function(i, category) {
        $.each(category.fields(), function(i, field) {
          if (field.type === 'percOrNumber') {
            self.addPercOrNumberValue(field);
          } else {
            field.value(self.options[field.name]);
          }
        });
      });
    },
    addPercOrNumberValue: function(field) {
      var value = self.options[field.name], valueType = '%', offset = 1;
      if (typeof(value) === 'number') {
        valueType = 'px';
      } else {
        if (value.substr(-1) === '%') {
          offset = 1;
          valueType = '%';
        } else if (value.substr(-2) === 'px') {
          offset = 3;
          valueType = 'px';
        }
        value = value.substr(0, value.length - offset);
      }
      field.value(value);
      field.valueType(valueType);
    },
    formatForDisplay: function() {
      var options = utils.cloneObj(self.getAllFields());
      options = _.reject(options, function(obj) {
        value = (obj.valueType() === '%' ? obj.value() + '%' : obj.value());
        return appState.histogram.defaultOptions[obj.name] === value;
      });
      options = _.map(options, function(ary) {
        var value = ary.value();
        if (typeof(ary.value()) === 'string' && ary.type === "percOrNumber") {
          value = (ary.value() ? "'" + value + ary.valueType() + "'" : "invalid_flag");
        } else if (ary.type === "select" || ary.type === "string" || ary.type === "color") {
          value = "'" + value + "'";
        }
        return (value === "invalid_flag" ? null : '  ' + ary.name + ': ' + value);
      });
      return _.compact(options).join(',\n');
    },
    formatForD4: function() {
      var options = {},
        fields = self.getAllFields();
      if (self.loaded()) {
        _.each(fields, function(field) {
          if (field.type === 'percOrNumber' && field.valueType() === '%') {
            options[field.name] = field.value() + '%';
          } else if (field.type === 'percOrNumber') {
             options[field.name] = parseFloat(field.value());
          } else {
            options[field.name] = field.value();
          }
        });
        return options;
      }
    },
    getAllFields: function() {
      return _.flatten(_.map(self.data(), function(obj) { return obj.fields();}));
    },
    setOption: function(name, val) {
      var field = _.find(self.getAllFields(), function(f) { return f.name === name; });
      if (field.value() !== val) {
        field.value(val);
      }
    }
  };
  var self = chartOptions;

  return self;
});
