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

export interface HistoryItemType{
    expression: string
    postfix: string
    result: string
}

export interface HistoryItemProps extends HistoryItemType{
    OnDelete: (index?: number) => void;
    index?: number
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