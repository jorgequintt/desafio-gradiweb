import React from 'react';
import PropTypes from 'prop-types';

function Button({ intent, label, onClick }) {
    return (
        <div className={'btn ' + intent} onClick={onClick}>
            {label}
        </div>
    );
}

Button.propTypes = { intent: PropTypes.string, label: PropTypes.string, onClick: PropTypes.func };

export default Button;
