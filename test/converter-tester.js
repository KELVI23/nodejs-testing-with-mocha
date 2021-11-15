var expect = require("chai").expect;
var converter = require("../app/converter");

/*first argument is a simple string that describes the feature, while the second argument is a function that represents the body of the description. */
describe("Color code converter", function(){
//in the body of that description, we will create fine-grained segments that represent our feature in a little bit more detail:
    describe("RGB to HEX conversion", function() {
    //set up a concrete thing we are testing using the it feature
        it("Converts the basic colors", function(){
//use expect keyword to compare the result of our feature’s implementation and the result we expect to get
            var redHex   = converter.rgbToHex(255, 0, 0);
            var greenHex = converter.rgbToHex(0, 255, 0);
            var blueHex  = converter.rgbToHex(0, 0, 255);

            //e.g ..... expect(1+1).to.equal(2);
            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");

        });
    });

    describe("Hex to RGB conversion", function(){
        it("Converts the basic colors", function(){
            var red   = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue  = converter.hexToRgb("0000ff");

            expect(red).to.deep.equal([255, 0, 0]); //.to.deep.equal is a matcher, it matches the result of a feature with an expected value.
            expect(green).to.deep.equal([0, 255, 0]); //other matches http://chaijs.com/api/bdd/
            expect(blue).to.deep.equal([0, 0, 255]);
        }); 
    });
})