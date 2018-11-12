class Customer {
    firstName: String;
    lastName: String;

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

let customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";

customer.greeter();