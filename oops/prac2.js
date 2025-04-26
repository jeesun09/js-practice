// Objects 
// types of way to create an Objects
//1. object literals
// let circle = {
//     radius: 1, // redius is property
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () { //Draw is a method
//         console.log("Draw");
//     }
// };

// circle.draw();


//2. factory functions
function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log("Draw!", this.radius);
        }
    };

}

const circle = createCircle(10)
// circle.draw();

//3. Constructor Functions
function Circle(radius) { //Constructor function always start with capital letter
    this.radius = radius;
    this.draw = function () {
        console.log("Drawing!", this.radius);
    }
    return this;
}
const another = new Circle(10);
// another.draw();

Circle.call({}, 3)



