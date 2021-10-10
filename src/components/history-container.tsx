import classnames from 'classnames'
import React from 'react'
import { Col, Row } from 'reactstrap'
import { HistoryContainerProps } from '../types'
import HistoryItem from './history-item'

function HistoryContainer(props: HistoryContainerProps) {
    let historyItems = props.historyItems
    
    return (
        <Row className={classnames(
            "history-container",
            { 'is-not-empty': historyItems.length > 0 }
        )}>
            {historyItems.map((item,index) =>
                <HistoryItem
                    {...item}
                    index={index}
                    key={`history-item-${index}`}
                />
            )}
            {
                historyItems.length === 0
                && < p className="err-message">No History Items to Show</p>
            }
        </Row>

    )
}

export default HistoryContainer
