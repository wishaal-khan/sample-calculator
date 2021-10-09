export interface CalculatorButtonProps{
    onClick: (value: CalculatorButtonType | undefined) => void;
    value: string
}

export interface ScreenProps{
    text: string
    isErrored: boolean
}

export interface AdditionalResultProps{
    message: string
}

export interface HistoryItemProps{
    expression: string
    postfix: string
    result: string
}

export interface HistoryContainerProps{
    historyItems: HistoryItemProps[]
}

export type ButtonType =
    | 'arithmetic'
    | 'action'
    | 'numeric'
    | 'dot'
    | 'bracket'

export interface CalculatorButtonType {
    type: ButtonType
    value: string
}