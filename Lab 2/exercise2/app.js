let Comparer = require('./Comparer')
let Calculator = require('./Calculator')

const exercise1 = (a, b) => {
    console.log(`comparing two numbers: ${a},${b}`)
    if(Comparer.AreNumberEqual(a, b)) {
        console.log('numbers are equal')
        console.log('adding two numbers')
        console.log(Calculator.Add(a, b))
    } else {
        console.log('numbers are not equal')
        console.log('subtracting two numbers')
        console.log(Calculator.Subtract(a, b))
    }
}

exercise1(5, 10)
exercise1(5, 5)