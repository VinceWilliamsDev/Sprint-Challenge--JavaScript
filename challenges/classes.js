// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker (attrs) {
//     this.length = attrs.length,
//     this.width = attrs.width,
//     this.height = attrs.height
//   }

// CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
//   }

// CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
//   }
  



class CuboidMakerA {
    constructor(attrs) {
        this.length = attrs.length,
        this.width = attrs.width,
        this.height = attrs.height
    };
    volume() {
        return this.length * this.width * this.height;
    };
    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    };
};


const cuboidOne = new CuboidMakerA({
    length: 4,
    width: 5,
    height: 5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Classes");
console.log(cuboidOne.volume()); // 100
console.log(cuboidOne.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.