import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { uiButtons } from '../data'
import CalculatorButton from './calculator-button'
import Screen from './screen'
import { CalculatorButtonType, HistoryItemProps } from '../types'
import { clearLastCharacter, evaluate, getScreenText } from '../lib/calculator-core'
import AdditionalResult from './additional-result'
import HistoryItem from './history-item'
import HistoryContainer from './history-container'


function Calculator() {

    const [screenText, setScreenText] = useState("0")
    const [isErrored, setIsErrored] = useState(false)
    const [postFixNotation, setPostFixNotation] = useState("")
    const [historyItems, setHistoryItems] = useState<HistoryItemProps[]>([]);

    const setFormattedScreenText = (value: string) => {
        setScreenText(screenText => {
            return getScreenText(screenText, value);
        });
    }

    const calculate = () => {
        try {
            // try evaluating the expression, throws error
            // if expression is invalid
            let expression = screenText;
            let res = String(evaluate(screenText));
            setHistoryItems(historyItems => [
                ...historyItems, {
                    expression,
                    postfix: "FALJ",
                    result: res
                }
            ])
            setScreenText(res);
        } catch (error) {
            setIsErrored(true);
            console.log('Cannot perform this calculation at the moment', error)
        }
    }

    const performAction = (button: CalculatorButtonType) => {
        let { type, value } = button
        switch (value) {
            case "C":
                setScreenText(screenText => clearLastCharacter(screenText))
                break
            case "CE":
                setScreenText("0")
                break
            case "=":
                calculate()
                break
        }
    }

    const onButtonPressed = (button: CalculatorButtonType | undefined) => {
        setIsErrored(false);
        if (button) {
            let { type, value } = button;

            if (['arithmetic', 'numeric', 'dot', 'bracket'].includes(type)) {
                setFormattedScreenText(value)
            }
            else if (type === 'action') {
                performAction(button)
            }
        }

    }

    return (
        <Container className="calculator-container">
            <Row>
                <Col md="6">
                    <Row>
                        <Screen text={screenText} isErrored={isErrored} />
                        {uiButtons.map(btn =>
                            <Col
                                xs={3}
                                key={`button-${btn}`}
                                className="p-0"
                            >
                                <CalculatorButton
                                    onClick={onButtonPressed}
                                    value={btn}
                                />
                            </Col>
                        )}
                        {
                            postFixNotation
                            && <AdditionalResult message={postFixNotation} />
                        }
                    </Row>
                </Col>

                <Col md="6">
                    <HistoryContainer historyItems={historyItems}/>
                </Col>

            </Row>
        </Container>
    )
}

export default Calculator
