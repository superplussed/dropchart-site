require.config({
  paths: {
    jquery: './vendor/jquery.1.7.2.min',
    argsFor: './test/helpers/argsFor',
    stage: './test/helpers/stage',
    stub: './test/helpers/stub',
    testRunner: './test/testRunner',
    utilsSpec: './test/utils.spec',
    builderSpec: './test/builder.spec',
    canvasSpec: './test/canvas.spec',
    coordSpec: './test/coord.spec',
    histogramSpec: './test/histogram.spec',
    yAxisSpec: './test/yAxis.spec',
    xAxisSpec: './test/xAxis.spec'
  }
  //,urlArgs: 'uncache=' + (+new Date())
});

define('test', ['utilsSpec', 'canvasSpec', 'coordSpec', 'xAxisSpec', 'histogramSpec', 'yAxisSpec', 'builderSpec'],
  function(utilsSpec, canvasSpec, coordSpec, xAxisSpec, histogramSpec, yAxisSpec, builderSpec) {
  return {
    name: 'test',
    utilsSpec: utilsSpec,
    canvasSpec: canvasSpec,
    coordSpec: coordSpec,
    histogramSpec: histogramSpec,
    xAxisSpec: xAxisSpec,
    yAxisSpec: yAxisSpec,
    builderSpec: builderSpec
  };
});