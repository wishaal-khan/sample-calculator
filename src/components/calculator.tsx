import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { uiButtons } from '../data'
import CalculatorButton from './calculator-button'
import Screen from './screen'
import { CalculatorButtonType } from '../types'
import { clearLastCharacter, evaluate, getScreenText } from '../lib/calculator-core'
import AdditionalResult from './additional-result'


function Calculator() {

    const [screenText, setScreenText] = useState("0")
    const [isErrored, setIsErrored] = useState(false)
    const [postFixNotation, setPostFixNotation] = useState("")

    const setFormattedScreenText = (value: string) => {
        setScreenText(screenText => {
            return getScreenText(screenText, value);
        });
    }

    const calculate = () => {
        try {
            // try evaluating the expression, throws error
            // if expression is invalid
            let res = evaluate(screenText);
            setScreenText(String(res));
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
            <Row className="calculator-container">
                <Screen text={screenText} isErrored={isErrored}/>
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
                    && <AdditionalResult message={postFixNotation}/>
                }
            </Row>
        </Container>
    )
}

export default Calculator
