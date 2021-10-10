import { Stack } from "./lib/stack";

export const prepareExpression = (expression: string, removeBrackets = false, reverse = false) => {
    let ex = expression;
    ex = ex
        // Replaces all brackets without multiplication sign
        // 1+2(2+5) turns to 1+2*(2+5)
        .replaceAll(/(\d+)\(/g, '$1*(')
        // Adds * sign between brackets
        // (1+2)(2+5) turns to (1+2)*(2+5)
        .replaceAll(/\)\(/g, ')*(')
    if (reverse) {
        ex = ex
        // Replaces ÷ sign with /
        .replaceAll('/', '÷')
        // Replaces x sign with *
        .replaceAll('*', 'x')
    }
    else {
        ex = ex
        // Replaces ÷ sign with /
        .replaceAll('÷', '/')
        // Replaces x sign with *
        .replaceAll('x', '*')
    }
    
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

export const splitExpression = (expression: string) => {
    let matches = expression.matchAll(/(\d+)|([\+\-\*\/\(\)]{1})/gm);
    let exp = [];
    for (let match of matches) {
        exp.push(match[0]);
    }
    return exp;
}

export const getOperatorPrecedence = (operator: string)=>{
    let precedence = -1;
    if(['/', '*'].includes(operator))
        precedence = 2;
    else if(['-', '+'].includes(operator))
        precedence = 1;
    
    return precedence
}


export const getPostFixExpression = (expression: string) => {
    let postfix = "";
    let exp = splitExpression(expression);
    let stack = new Stack(); 
    let setResult = (value: string) => `${postfix} ${value}`
    

    for(let op of exp) {

        // If op matches an integer, 
        // add it to the postfix string
        if (/(\d+)/.test(op))
            postfix = setResult(op);

        // An openning bracket is inserted in
        // the stack to keep track on when to pop
        // when a closing bracket is found
        else if(op === '(')
            stack.push(op);

        // When a closing bracket is encountered 
        // Start popping till another openning bracket
        // is not found.
        else if(op === ')') {
            while(!stack.isEmpty() && stack.top() != '(')
                postfix = setResult(stack.pop());
            stack.pop();
        }
        else {
            // If Precendence of the most recently pushed 
            // operator is greator then current operator,
            // keep popping the stack.
            while (
                !stack.isEmpty() 
                && getOperatorPrecedence(op)
                <= getOperatorPrecedence(stack.top()
                )) {
                postfix = setResult(stack.pop());
            }
            // Finally insert the operator after
            // popping all the items.
            stack.push(op);
        }
    }

    // This condition will be reached when
    // the expression has been evaluated completely
    // but still has operators inside.
    while(!stack.isEmpty()) 
        postfix = setResult(stack.pop());
    
    return postfix.trim();
}