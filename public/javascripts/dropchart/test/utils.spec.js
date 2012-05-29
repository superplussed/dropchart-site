define(
  ['jquery', './dropchart/lib/utils'],
  function($, utils) {
    
  var utilsSpec = {

    run: function() {
      var assert = chai.assert;
        describe('utils', function() {
          describe('#isBlank', function() {

            it('should be true for empty string', function() {
              assert.equal(utils.isBlank(""), true);
            });

            it('should be true for null', function() {
              assert.equal(utils.isBlank(null), true);
            });

            it('should be true for false', function() {
              assert.equal(utils.isBlank(false), true);
            });

            it('should be false for 0', function() {
              assert.equal(utils.isBlank(0), false);
            });

            it('should be false with a string', function() {
              assert.equal(utils.isBlank("foo"), false);
            });

          });

          describe('#pxToInt', function(){

            it('should convert a px string to int', function() {
              assert.equal(utils.pxToInt("30px"), 30);
            });

            it('should return a number unchanged', function() {
              assert.equal(utils.pxToInt(30), 30);
            });

            it('should return a NaN for an invalid string', function() {
              assert.equal(isNaN(utils.pxToInt("foo")), true);
            });

          });

          describe('#intToPx', function(){

            it('should convert a number to the proper string', function() {
              assert.equal(utils.intToPx(30), "30px");
            });

            it('should return a string unchanged', function() {
              assert.equal(utils.intToPx("foo"), "foo");
            });

          });

          describe('#percToFloat', function(){

            it('should find the pixels by percentage', function() {
              assert.equal(utils.percToFloat("77%", 301), 231.77);
            });

            it('should work with float percentages', function() {
              assert.equal(utils.percToFloat("2.5%", 400), 10);
            });

          });

          describe('#floatToPerc', function(){

            it('should find the percentage by number of pixels', function() {
              assert.equal(utils.floatToPerc(231.77, 301), "77%");
            });

          });

          describe('#cloneObj', function(){

            it('should return a duplicate object without reference to the original', function() {
              var origObj = {"foo": "bar"};
              var newObj = utils.cloneObj(origObj);
              origObj.foo = "baz";
              assert.equal(newObj.foo, "bar");
            });

          });

          describe('#roundNumber', function(){

            it('should round a number to the desired decimal places', function() {
              assert.equal(utils.roundNumber(30.3383, 2), 30.34);
              assert.equal(utils.roundNumber(30.3313, 2), 30.33);
            });

          });

          describe('#isValidNumber', function(){

            it('should return true if a number is not infinity and not NaN', function() {
              assert.equal(utils.isValidNumber(30 / 0), false);
              assert.equal(utils.isValidNumber(NaN), false);
              assert.equal(utils.isValidNumber(true), false);
              assert.equal(utils.isValidNumber(32), true);
            });

            it('should work for strings of numbers', function() {
              assert.equal(utils.isValidNumber("32"), true);
              assert.equal(utils.isValidNumber("NaN"), false);
              assert.equal(utils.isValidNumber("true"), false);
            });

          });

          describe('#minFromArrayOfObj', function(){

            it('should find the min value of a given field', function() {
               var data = [
                {x: 1, y: -99},
                {x: 2, y: 3},
                {x: 3, y: -999}
              ];
              assert.equal(utils.minFromArrayOfObj(data, 'y'), -999);
            });

          });

          describe('#maxFromArrayOfObj', function(){

            it('should find the max value of a given field', function() {
               var data = [
                {x: 1, y: -99},
                {x: 2, y: 3},
                {x: 3, y: -999}
              ];
              assert.equal(utils.maxFromArrayOfObj(data, 'y'), 3);
            });

          });

          describe('#getDimensions', function(){
            it('it should provide the dimensions of a div element', function() {
              $("#histogram")
                .css("height",  200)
                .css("width", 400);
              assert.equal(utils.getDimensions("#histogram").width, 400);
              assert.equal(utils.getDimensions("#histogram").height, 200);
            });

            it('it should provide the dimensions of a svg element');
              //assert.equal(utils.getDimensions("#histogram").width, 400);
              //assert.equal(utils.getDimensions("#histogram").height, 200);


          });

        });

      }

  };
  return utilsSpec;
});

