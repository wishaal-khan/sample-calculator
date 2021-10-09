import { arithmeticButtons, numericButtons } from "./data";

export const prepareExpression = (expression: string, removeBrackets = false) => {
    let ex = expression;
    ex = ex
        .replaceAll('÷', '/')
        .replaceAll('x', '*')
    
    if (removeBrackets) 
        ex = ex.replaceAll(/[()]/, '')

    return ex;
}


export const isValidExpression = (expression: string) => {
    // (\d+(\.\d+)?) checks for a number at the beginning
    // [-+/*] checks for one of the arithmetic operations

    // The whole regex validates that a mathematical
    // expression should have atleast one operation being
    // performed.

    return /^(\d+(\.\d+)?)([\-+/*](\d+(\.\d+)?))*$/.test(expression)
}

export const isEqualBracketPair = (expression: string) => {
    let brackets = 0
    for (let char of expression) {
        if (char === '(') brackets++
        if (char === ')') brackets--
    }
    return brackets === 0;
}

