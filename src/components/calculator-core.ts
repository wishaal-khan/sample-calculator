import { arithmeticButtons, numericButtons } from "../data";
import { getCharacterCount } from "../utils";

const setDecimal = (screenText: string) => {
    // Simplify Equation and
    // Split equation based on operators 
    const operands = screenText
        .replaceAll(/[)(]/g, '')
        .split(/[\+\-x÷]+/);
    
    let lastOperand = operands[operands.length - 1];
    if (lastOperand.includes('.')) return screenText;
    return screenText + '.';
}

const startBracket = (screenText: string) => {
    return screenText === '0'
        ? '('
        : screenText + '('
}

const endBracket = (screenText: string) => {
    let startingBracketsCount = getCharacterCount(screenText, '(');
    let endingBracketsCount = getCharacterCount(screenText, ')');
    // if there are enough open brackets
    // proceed further else do nothing
    if (startingBracketsCount > endingBracketsCount) {
        // get last character and avoid closing bracket
        // right after an arithmetic operator, period, or (
        let lastChar = screenText[screenText.length - 1];
        if (!arithmeticButtons.includes(lastChar)
            && lastChar !== '.'
            && lastChar !== '(') {
            return screenText + ')';
        }
    }

    return screenText;
}

const setNumericChar = (screenText: string, value: string) => {
    return screenText === '0'
        ? value
        : screenText + value;
}

const setArithmeticChar = (screenText: string, value: string) => {
    let lastChar = screenText[screenText.length - 1];
    if (screenText === '0') return undefined;
    
    // If last character is already an Arithmetic character, then
    // replace it, else leave the text unchanged.
    let updatedScreenText = arithmeticButtons.includes(lastChar) || lastChar === '.'
        ? screenText.substring(0, screenText.length - 1)
        : screenText;

    return updatedScreenText + value;
}

export const getScreenText = (screenText: string, value: string) => {
    let text = undefined;
    
    if (numericButtons.includes(value))
        text = setNumericChar(screenText, value);

    if (arithmeticButtons.includes(value))
        text = setArithmeticChar(screenText, value)

    if (value === '.')
        text = setDecimal(screenText)
    
    if (value === '(')
        text = startBracket(screenText);
    
    if (value === ')')
        text = endBracket(screenText);

    return text
        ? text
        : screenText;
}


export const clearLastCharacter = (text: string) => {
    return text.length > 1
        ? text.substring(0, text.length - 1)
        : "0"
}