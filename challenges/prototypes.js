/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's 
//volume or surface area. Cuboids are similar to cubes but do not have even sides. 
//Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts 
  properties for length, width, and height
*/

function CubeboidMaker(attributes) {
  this.newLength = attributes.length,
    this.newWidth = attributes.width,
    this.newHeight = attributes.height

  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of 
    a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */

  CubeboidMaker.prototype.volume = function () {
    return this.newLength * this.newWidth * this.newHeight
  }

  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of 
    a given cuboid's length, width, and height. 

    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */

  CubeboidMaker.prototype.surfaceArea = function () {
    return 2 * (this.newLength * this.newWidth + this.newLength * this.newHeight + this.newWidth * this.newHeight);
  }
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

function CubeboidMakerTwo(CubeboidMakerTwoattributes) {
  CubeboidMaker.call(this, CubeboidMakerTwoattributes)
  this.newLength = CubeboidMakerTwoattributes.length,
    this.newWidth = CubeboidMakerTwoattributes.width,
    this.newHeight = CubeboidMakerTwoattributes.height
}
CubeboidMakerTwo.prototype = Object.create(CubeboidMaker.prototype)

const Rboid = new CubeboidMaker({
  length: 4,
  width: 5,
  height: 5,
});




// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(Rboid.volume(4, 5, 5)); //100
console.log(Rboid.surfaceArea(4, 5, 5)); //130