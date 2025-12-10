// Library classes
class Vehicle {
    printVehicle() {
        throw new Error("printVehicle() must be implemented");
    }
}

class TwoWheeler extends Vehicle {
    printVehicle() {
        console.log("I am two wheeler");
    }
}

class FourWheeler extends Vehicle {
    printVehicle() {
        console.log("I am four wheeler");
    }
}

// Factory Interface
class VehicleFactory {
    createVehicle() {
        throw new Error("createVehicle() must be implemented");
    }
}

// Concrete Factory for TwoWheeler
class TwoWheelerFactory extends VehicleFactory {
    createVehicle() {
        return new TwoWheeler();
    }
}

// Concrete Factory for FourWheeler
class FourWheelerFactory extends VehicleFactory {
    createVehicle() {
        return new FourWheeler();
    }
}

// Client class
class Client {
    constructor(factory) {
        this.pVehicle = factory.createVehicle();
    }

    getVehicle() {
        return this.pVehicle;
    }
}

// Driver program
function main() {
    const twoWheelerFactory = new TwoWheelerFactory();
    const twoWheelerClient = new Client(twoWheelerFactory);
    const twoWheeler = twoWheelerClient.getVehicle();
    twoWheeler.printVehicle();

    const fourWheelerFactory = new FourWheelerFactory();
    const fourWheelerClient = new Client(fourWheelerFactory);
    const fourWheeler = fourWheelerClient.getVehicle();
    fourWheeler.printVehicle();
}

main();