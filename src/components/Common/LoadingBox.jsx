import React from 'react';
import PropTypes from 'prop-types';
import LoadingIcon from './LoadingIcon';

function LoadingBox({ iconSize }) {
    return (
        <div className="loading-box">
            <LoadingIcon size={iconSize} />
        </div>
    );
}

LoadingBox.propTypes = {
    iconSize: PropTypes.number,
};

export default LoadingBox;
