import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import classnames from 'classnames'
import { arithmeticButtons, numericButtons, uiButtons } from '../data'
import CalculatorButton from './calculator-button'
import { isEqualBracketPair, isValidExpression, prepareExpression } from '../utils'
import { CalculatorButtonType } from '../types'
import { clearLastCharacter, getScreenText } from './calculator-core'


function Calculator() {

    const [screenText, setScreenText] = useState("0")
    const [isErrored, setIsErrored] = useState(false)



    const setFormattedScreenText = (value: string) => {
        setScreenText(screenText => {
            return getScreenText(screenText, value);
        });
    }

    const evaluate = () => {
        let exp = prepareExpression(screenText);
        let expWithoutBrackets = prepareExpression(screenText, true);
        console.log(exp);
        console.log(expWithoutBrackets);
        if (isValidExpression(expWithoutBrackets)
            && isEqualBracketPair(exp)) {
            try {
                let res = eval(exp);
                setScreenText(String(res));
            } catch (error) {
                console.log('Cannot perform this calculation at the moment', error)
            }
        }
        else {
            setIsErrored(true);
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
                evaluate()
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
                <p className={classnames('screen', isErrored ? 'error' : '')}>{screenText}</p>
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
            </Row>
        </Container>
    )
}

export default Calculator
