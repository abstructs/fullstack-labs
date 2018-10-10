const should = require("should")
const calc = require("./calculator")

// console.log(calc.addTwoNumbers(2, 2).should.eq)

// calc.addTwoNumbers("a", "b")

describe('Calculator', () => {
    describe('when used synchronously', () => {
        it('should add two numbers properly', () => {
            calc.addTwoNumbers(2, 2).should.equal(4);
        })
    })
})