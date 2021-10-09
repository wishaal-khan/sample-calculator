import React from 'react'
import { Col } from 'reactstrap'
import { HistoryItemProps } from '../types'

function HistoryItem(props: HistoryItemProps) {
    return (
        <Col className="history-item" xs={12}>
            <p>{props.expression}</p>
            <p>{props.postfix}</p>
            <h5>{props.result}</h5>
        </Col>
    )
}

export default HistoryItem
