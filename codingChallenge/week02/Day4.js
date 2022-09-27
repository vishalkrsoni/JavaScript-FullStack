const numbers = (num1, num2) => {
    let sum = num1 + num2;
    let diff = num1 - num2;
    let prod = num1 * num2;
    let div = num1 / num2;
    return {
        sum ,
        diff,
        product: prod,
        division: div,
    }
}
console.log(numbers(6, 3));
