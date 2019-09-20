// 1. Copy and paste your prototype in here and refactor into class syntax.
class CubeboidMaker {
    constructor(attributes) {
        this.newLength = attributes.length,
            this.newWidth = attributes.width,
            this.newHeight = attributes.height
    }


    volume() {
        return this.newLength * this.newWidth * this.newHeight;
    }
    // Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
    surfaceArea() {
        return 2 * (this.newLength * this.newWidth + this.newLength * this.newHeight + this.newWidth * this.newHeight);
    }

}



class CubeboidMakerTwo extends CubeboidMaker {
    constructor(CubeboidMakerTwoattributes) {
        super(CubeboidMakerTwoattributes);
        this.newLength = CubeboidMakerTwoattributes.length
        this.newWidth = CubeboidMakerTwoattributes.width
        this.newHeight = CubeboidMakerTwoattributes.height
    }
}

const Quboid = new CubeboidMakerTwo({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(Quboid.volume()); //100
console.log(Quboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your 
//volume and surface area.