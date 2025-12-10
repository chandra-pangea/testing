// Open / Closed Principle(OCP)

// ➡ Classes should be open for extension but closed for modification.
// (Add new features without modifying existing code.)



//❌ Bad (Modifying existing class again and again)
class Payment {
    pay(type: string) {
        if (type === "card") {
            console.log("Card payment");
        } else if (type === "upi") {
            console.log("UPI payment");
        }
    }
}


//Good (Use polymorphism to extend behavior)


interface PaymentMethod {
    pay(): void;
}

class CardPayment implements PaymentMethod {
    pay() {
        console.log("Card payment");
    }
}

class UpiPayment implements PaymentMethod {
    pay() {
        console.log("UPI payment");
    }
}

class PaymentProcessor {
    process(payment: PaymentMethod) {
        payment.pay();
    }
}
