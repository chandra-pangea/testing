// Prototype interface
class Shape {
    clone() {}  // Make a copy of itself
    draw() {}    // Draw the shape
}

// Concrete prototype
class Circle extends Shape {
    constructor(color) {
        super();
        this.color = color;
    }

    // This creates a copy of the circle.
    clone() {
        return new Circle(this.color);
    }

    // This is how a circle draws itself.
    draw() {
        console.log(`Drawing a ${this.color} circle.`);
    }
}

// Client code
class ShapeClient {
    constructor(shapePrototype) {
        this.shapePrototype = shapePrototype;
    }

    // This method creates a new shape using the prototype.
    createShape() {
        return this.shapePrototype.clone();
    }
}

// Main class
(() => {
    // Create a concrete prototype (a red circle).
    const circlePrototype = new Circle('red');

    // Create a client and give it the prototype.
    const client = new ShapeClient(circlePrototype);

    // Use the prototype to create a new shape (a red circle).
    const redCircle = client.createShape();

    // Draw the newly created red circle.
    redCircle.draw();
})();