import React from 'react'
import PropTypes from 'prop-types'
import { ButtonType, CalculatorButtonProps, CalculatorButtonType } from '../types'
import { Button } from 'reactstrap';
import classnames from 'classnames';
import { actionButtons, arithmeticButtons, numericButtons } from '../data';

function CalculatorButton(props: CalculatorButtonProps) {

    let { onClick, value } = props;
    const specialButtons = ['C', '=', ...arithmeticButtons]

    const getButtonColor = (value: string) => {
        if (specialButtons.indexOf(value) > -1)
            return 'btn-warning'
    }

    const getButtonObject = (value: string): CalculatorButtonType | undefined => {
        let type: ButtonType | undefined = undefined;

        if (arithmeticButtons.includes(value)) type = 'arithmetic'
        if (numericButtons.includes(value)) type = 'numeric'
        if (actionButtons.includes(value)) type = 'action'
        if (value === '.') type = 'dot'
        if(value === ')' || value === '(') type = 'bracket'
        return type
            ? { type, value }
            : undefined;
    }

    return (
        <Button
            className={classnames(
                "calculator-button",
                getButtonColor(value)        
            )}
            color="primary"
            onClick={() => onClick(getButtonObject(value))}
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