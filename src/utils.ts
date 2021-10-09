export const prepareExpression = (expression: string, removeBrackets = false) => {
    let ex = expression;
    ex = ex
        // Replaces ÷ sign with /
        .replaceAll('÷', '/')
        // Replaces x sign with *
        .replaceAll('x', '*')
        // Replaces all brackets without multiplication sign
        // 1+2(2+5) turns to 1+2*(2+5)
        .replaceAll(/(\d+)\(/g, '$1*(')
        // Adds * sign between brackets
        // (1+2)(2+5) turns to (1+2)*(2+5)
        .replaceAll(/\)\(/g, ')*(')
    
    if (removeBrackets) 
        ex = ex.replaceAll(/[\(\)]+/g, '')

    return ex;
}


export const isValidExpression = (expression: string) => {
    // (\d+(\.\d+)?) checks for a number at the beginning
    // [\-\+\/\*\(] checks for one of the arithmetic operations

    // The whole regex validates that a mathematical
    // expression should have atleast one operation being
    // performed.

    return /^(\d+(\.\d+)?)([\-\+\/\*\(](\d+(\.\d+)?))*$/.test(expression)
}

export const isEqualBracketPair = (expression: string) => {
    let brackets = 0
    // Number of openning and closing brackets
    // must remain the same in a valid expression
    for (let char of expression) {
        if (char === '(') brackets++
        else if (char === ')') brackets--
    }
    return brackets === 0;
}


export const getCharacterCount = (str: string, character: string) => {
    return str
        .split('')
        .filter(x => x === character)
        .length
}

export const getOperands = (expression: string) => {
    return expression
            .replaceAll(/[)(]/g, '')
            .split(/[\+\-x÷]+/);
}