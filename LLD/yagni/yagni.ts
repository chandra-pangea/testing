// Only made those functionality that is needed not extra


// Bad Version
class UserService {
    private users: string[] = [];

    addUser(name: string) {
        this.users.push(name);
    }

    // NOT needed now — violates YAGNI
    updateUser(id: number, name: string) {
        // not implemented
    }

    deleteUser(id: number) {
        // not implemented
    }

    findUserByEmail(email: string) {
        // not implemented
    }
}


// Good version
class UserService2 {
    private users: string[] = [];

    addUser(name: string) {
        this.users.push(name);
    }
}
