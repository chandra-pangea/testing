//A class/module should have only one reason to change.

//Bad (Multiple responsibilities in one class)
class UserService3 {
    createUser() {
        // create user
    }

    sendWelcomeEmail() {
        // send mail
    }

    logActivity() {
        // write logs
    }
}

//Good(Follow SRP)

class UserService4 {
    createUser() {
        // create user
    }
}

class EmailService {
    sendWelcomeEmail() {
        // send mail
    }
}

class Logger {
    logActivity() {
        // log action
    }
}
