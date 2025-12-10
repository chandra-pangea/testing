class Computer {
    constructor() {
        this.cpu = null;
        this.ram = null;
        this.storage = null;
    }

    setCPU(cpu) {
        this.cpu = cpu;
    }

    setRAM(ram) {
        this.ram = ram;
    }

    setStorage(storage) {
        this.storage = storage;
    }

    displayInfo() {
        console.log(`Computer Configuration:\nCPU: ${this.cpu}\nRAM: ${this.ram}\nStorage: ${this.storage}\n`);
    }
}

// Builder interface
class Builder {
    buildCPU() {}
    buildRAM() {}
    buildStorage() {}
    getResult() {}
}

// ConcreteBuilder
class GamingComputerBuilder extends Builder {
    constructor() {
        super();
        this.computer = new Computer();
    }

    buildCPU() {
        this.computer.setCPU('Gaming CPU');
    }

    buildRAM() {
        this.computer.setRAM('16GB DDR4');
    }

    buildStorage() {
        this.computer.setStorage('1TB SSD');
    }

    getResult() {
        return this.computer;
    }
}

// Director
class ComputerDirector {
    construct(builder) {
        builder.buildCPU();
        builder.buildRAM();
        builder.buildStorage();
    }
}

// Client
const gamingBuilder = new GamingComputerBuilder();
const director = new ComputerDirector();

director.construct(gamingBuilder);
const gamingComputer = gamingBuilder.getResult();

gamingComputer.displayInfo();