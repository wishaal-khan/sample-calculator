import PropTypes from 'prop-types'
import { AdditionalResultProps } from '../types'

function AdditionalResult(props: AdditionalResultProps) {
    return (
        <p className="additional-result">{ props.message }</p>
    )
}

export default AdditionalResult

AdditionalResult.propTypes = {
    message: PropTypes.string.isRequired,
}