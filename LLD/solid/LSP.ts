// Liskov Substitution Principle(LSP)

// ➡ Child classes must be replaceable for parent classes without breaking the app.


//❌ Bad Example (Subclass breaks parent behavior)

class Bird {
    fly() { }
}

class Ostrich extends Bird {
    fly() {
        throw new Error("Ostrich can't fly!");
    }
}
//Replacing Bird with Ostrich breaks the program → violates LSP.



//Good Example (Fix hierarchy)
class Bird2 { }

class FlyingBird extends Bird {
    fly() { }
}

class Ostrich2 extends Bird {
    // no fly method
}



interface Flyable {
    fly(): void;
}

class Sparrow implements Flyable {
    fly() { }
}

class Ostrich3 { } // not Flyable
