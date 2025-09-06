function calculateNumbers(var1, var2) {
    const sum = var1 + var2;
    const difference = var1 - var2;
    const product = var1 * var2;
    const quotient = var2 !== 0 ? var1 / var2 : 'undefined';

    return {
        sum,
        difference,
        product,
        quotient
    };
}

module.exports = calculateNumbers;  
// This function takes two numbers and returns an object containing their sum, difference, product, and quotient. 
