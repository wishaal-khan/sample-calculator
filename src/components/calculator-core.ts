import { arithmeticButtons, numericButtons } from "../data";


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
    let updatedScreenText =  [...arithmeticButtons].includes(lastChar)
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

    return text
        ? text
        : screenText;
}


export const clearLastCharacter = (text: string) => {
    return text.length > 1
        ? text.substring(0, text.length - 1)
        : "0"
}