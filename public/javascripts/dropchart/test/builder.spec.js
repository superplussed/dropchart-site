define(
  ['jquery', 'dropchart', 'argsFor'],
  function($, dropchart, argsFor) {
  
  var should = chai.should();
  var builderSpec = {

    run: function() {
      describe('Builder', function() {

        describe('#initialize', function() {

          it ('should create the chart', function() {
            new dropchart.Builder({
              data: argsFor.data()
            });
            $("#histogram").should.have('svg');
            $("#histogram").should.have('g#histogram-group');
            $("#histogram").should.have('g#x-axis-group');
            $("#histogram").should.have('g#y-axis-group');

          });

        });

      });

    }

  };

  return builderSpec;

});


      