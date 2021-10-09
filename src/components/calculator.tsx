import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import classnames from 'classnames'
import { buttons } from '../data'
import CalculatorButton from './calculator-button'


function Calculator() {

    const OnButtonPressed = (value: string) => {
        console.log(value);
    }

    return (
        <Container className="calculator-container">
            <Row className="calculator-container">
                <p className="screen">0</p>
                {buttons.map(btn =>
                    <Col
                        xs={3}
                        key={`button-${btn}`}
                        className="p-0"
                    >
                        <CalculatorButton
                            onClick={OnButtonPressed}
                            value={btn}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default Calculator
