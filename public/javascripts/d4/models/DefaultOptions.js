define('DefaultOptions', ['jquery'], function($) {
  function DefaultOptions() {
    console.log('init DefaultOptions');
  }

  DefaultOptions.prototype.defaultChartOptions = {
    addClickAction: false,
    addMouseoverAction: true,
    showPopoverOnMouseover: false,
    popoverRemainsOnClick: false,

    showYAxis: true,
    yAxisPosition: 60,
    yAxisNumTicks: 5,
    yAxisOrientation: 'left',

    showXAxisLine: true,
    xAxisUseCount: true,
    xAxisPosition: '83%',

    xAxisFontPosition: '88%',
    xAxisFontSize: 12,
    xAxisFontColor: '#000000',
    xAxisFontOpacity: 0.8,

    showXAxisLabels: true,
    xAxisLabelHeight: '7%',
    xAxisLabelRadius: 3,
    xAxisLabelColor: '#594336',
    xAxisLabelStrokeColor: '#FFF',
    xAxisLabelStrokeWidth: 1,
    xAxisLabelOpacity: 1,

    chartLabelFontX: 14,
    chartLabelFontY: 20,
    chartLabelFontColor: '#FFF',
    chartLabelFontSize: '12px',
    chartLabelFontOpacity: 1,

    chartLabelText: '',
    chartLabelX: '80%',
    chartLabelY: 20,
    chartLabelColor: '#777872',
    chartLabelStrokeColor: '#000',
    chartLabelStrokeWidth: 0,
    chartLabelOpacity: 1,
    chartLabelRadius: 5,
    chartLabelWidth: 145,
    chartLabelHeight: 33,chartWidth: "90%",
    chartHeight: 300,
    usePerc: true,

    popoverY: 40,
    popoverHeight: '48px',
    popoverWidth: '140px',
    popoverMargin: 20,
    popoverRadius: 5,

    marginLeft: 80,
    marginRight: 20,
    marginBottom: 40,
    marginTop: 20,

    dateFormat: '%Y'
  };


  DefaultOptions.prototype.defaultHistogramOptions = $.extend({
    barColor: '#3c421c',
    barStrokeColor: '#84d642',
    barStrokeWidth: 2,
    barOpacity: 1,
    barWidthModifier: 0.85,
    barRadius: 5,

    barRollColor: '#5DCF27',
    barRollStrokeColor: '#84D642',
    barRollStrokeWidth: 2,
    barRollOpacity: 1,
    barMouseoverDuration: 100,
    barMouseoutDuration: 100,

    barBgMouseover: true,
    barBgColor: 'none',
    barBgOpacity: 0,
    barBgRadius: 5,
    barBgHeight: '100%',
    barBgStrokeColor: '#FFFFFF',
    barBgStrokeWidth: 2,

    barBgRollColor: '#FFFFFF',
    barBgRollOpacity: 0.1,
    barBgRollRadius: 5,
    barBgRollStrokeColor: '#FFFFFF',
    barBgRollStrokeWidth: 2
  }, DefaultOptions.prototype.defaultChartOptions);

  return DefaultOptions;
});