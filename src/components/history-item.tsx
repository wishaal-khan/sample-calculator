import React from 'react'
import { Col, Button } from 'reactstrap'
import { HistoryItemProps } from '../types'

function HistoryItem(props: HistoryItemProps) {

    const onDeletePressed = () => {
        props.OnDelete(props.index)
    }
    
    return (
        <Col className="history-item" xs={12}>
            <Button
                color="danger"
                size="sm"
                className="delete-btn btn-icon"
                outline
                onClick={onDeletePressed}
            >
                Remove
            </Button>
            <p><small>Expression</small> {props.expression}</p>
            <p><small>Postfix</small> {props.postfix}</p>
            <h5>Ans {props.result}</h5>
        </Col>
    )
}

export default HistoryItem
