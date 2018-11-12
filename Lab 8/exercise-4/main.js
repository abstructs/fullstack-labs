"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
var customer = new customer_1.Customer("John", "Smith", 18);
customer.greeter();
console.log(customer.getAge());
