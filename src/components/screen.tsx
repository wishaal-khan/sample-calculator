import classnames from 'classnames'
import { ScreenProps } from '../types'
import PropTypes from 'prop-types'

function Screen(props: ScreenProps) {
    let { isErrored, text } = props;
    return (
        <p className={
            classnames(
                'screen',
                {'error': isErrored},
            )}>
            {text}
        </p>
    )
}

export default Screen

Screen.propTypes = {
    text: PropTypes.string.isRequired,
    isErrored: PropTypes.bool.isRequired
}