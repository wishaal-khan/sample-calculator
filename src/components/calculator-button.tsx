import React from 'react'
import PropTypes from 'prop-types'
import { CalculatorButtonProps } from '../types'
import { Button } from 'reactstrap';
import classnames from 'classnames';

function CalculatorButton(props: CalculatorButtonProps) {

    let { onClick, value } = props;
    const specialButtons = ['C', '-', '+', 'x', '÷', '=']

    const getButtonColor = (value: string) => {
        if (specialButtons.indexOf(value) > -1)
            return 'btn-warning'
    }
    

    return (
        <Button
            className={classnames(
                "calculator-button",
                getButtonColor(value)        
            )}
            color="primary"
            onClick={() => onClick(value)}
        >
            {value}
        </Button>
    )
}

export default CalculatorButton


CalculatorButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}