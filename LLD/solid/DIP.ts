// Dependency Inversion Principle(DIP)

// ➡ Depend on abstractions, not concrete classes.
//     High - level modules should not depend on low - level modules.


//Bad (Tightly coupled)
class MySQLDatabase {
    save(data: string) {
        console.log("Saved to MySQL");
    }
}

class UserService5 {
    database = new MySQLDatabase(); // ❌ hard dependency

    saveUser(data: string) {
        this.database.save(data);
    }
}


//Good (Depend on interface / abstraction)
interface Database {
    save(data: string): void;
}

class MySQLDatabase2 implements Database {
    save(data: string) {
        console.log("MySQL saved");
    }
}

class MongoDB implements Database {
    save(data: string) {
        console.log("MongoDB saved");
    }
}

class UserService6 {
    constructor(private db: Database) { }

    saveUser(data: string) {
        this.db.save(data);
    }
}
