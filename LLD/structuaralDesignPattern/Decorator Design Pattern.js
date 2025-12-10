// Decorator Design Pattern is a structural pattern that lets you dynamically add behavior to individual objects without changing other objects of the same class. It uses decorator classes to wrap concrete components, making functionality more flexible and reusable.

class Coffee {
    getDescription() {
        throw new Error('Method not implemented.');
    }

    getCost() {
        throw new Error('Method not implemented.');
    }
}

class PlainCoffee extends Coffee {
    getDescription() {
        return 'Plain Coffee';
    }

    getCost() {
        return 2.0;
    }
}

class CoffeeDecorator extends Coffee {
    constructor(decoratedCoffee) {
        super();
        this.decoratedCoffee = decoratedCoffee;
    }

    getDescription() {
        return this.decoratedCoffee.getDescription();
    }

    getCost() {
        return this.decoratedCoffee.getCost();
    }
}

class MilkDecorator extends CoffeeDecorator {
    getDescription() {
        return this.decoratedCoffee.getDescription() + ', Milk';
    }

    getCost() {
        return this.decoratedCoffee.getCost() + 0.5;
    }
}

class SugarDecorator extends CoffeeDecorator {
    getDescription() {
        return this.decoratedCoffee.getDescription() + ', Sugar';
    }

    getCost() {
        return this.decoratedCoffee.getCost() + 0.2;
    }
}

function main() {
    // Plain Coffee
    let coffee = new PlainCoffee();
    console.log('Description: ' + coffee.getDescription());
    console.log('Cost: $' + coffee.getCost());

    // Coffee with Milk
    let milkCoffee = new MilkDecorator(new PlainCoffee());
    console.log('\nDescription: ' + milkCoffee.getDescription());
    console.log('Cost: $' + milkCoffee.getCost());

    // Coffee with Sugar and Milk
    let sugarMilkCoffee = new SugarDecorator(new MilkDecorator(new PlainCoffee()));
    console.log('\nDescription: ' + sugarMilkCoffee.getDescription());
    console.log('Cost: $' + sugarMilkCoffee.getCost());
}

main();