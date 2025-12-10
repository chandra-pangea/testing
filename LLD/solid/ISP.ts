// Interface Segregation Principle(ISP)

// ➡ Clients should not be forced to depend on interfaces they do not use.

// Bad
interface Worker2 {
    work(): void;
    eat(): void;
}

class Robot implements Worker2 {
    work() { }
    eat() { throw new Error("Robot doesn’t eat!"); }
}

// Good
interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

class Human implements Workable, Eatable {
    work() { }
    eat() { }
}

class Robot2 implements Workable {
    work() { }
}
