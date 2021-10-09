export interface CalculatorButtonProps{
    onClick: (value: CalculatorButtonType | undefined) => void;
    value: string
}

export type ButtonType = 'arithmetic' | 'action' | 'numeric' | 'dot' | 'bracket'

export interface CalculatorButtonType {
    type: ButtonType
    value: string
}