import React from 'react';
import PropTypes from 'prop-types';

function ErrorBox({ textSize, iconSize, text }) {
    return (
        <div className="error-box">
            <i class="fas fa-exclamation-triangle error-icon" style={{ fontSize: iconSize + 'rem' }}></i>
            <div className="error-text" style={{ fontSize: textSize + 'rem' }}>
                {text}
            </div>
        </div>
    );
}

ErrorBox.propTypes = {
    textSize: PropTypes.number,
    iconSize: PropTypes.number,
    text: PropTypes.string,
};

export default ErrorBox;
