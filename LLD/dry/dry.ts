//DRY Example — Repeated Validation Logic



function registerUser(email: string) {
    //repeating code
    if (!email.includes("@")) {
        throw new Error("Invalid email");
    }
    // registration logic
}

function loginUser(email: string) {
    //repeating code
    if (!email.includes("@")) {
        throw new Error("Invalid email");
    }
    // login logic
}




function validateEmail(email: string) {
    if (!email.includes("@")) {
        throw new Error("Invalid email");
    }
}

function registerUser2(email: string) {
    validateEmail(email);
    // registration...
}

function loginUser2(email: string) {
    validateEmail(email);
    // login...
}
