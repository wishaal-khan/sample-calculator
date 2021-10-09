export interface CalculatorButtonProps{
    onClick: (value: CalculatorButtonType | undefined) => void;
    value: string
}

export type ButtonType = 'arithmetic' | 'action' | 'numeric'

export interface CalculatorButtonType {
    type: ButtonType
    value: string
}