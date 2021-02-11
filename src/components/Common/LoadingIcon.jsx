import React from 'react';

function LoadingIcon({ size }) {
    return (
        <div>
            <i className="fas fa-circle-notch fa-spin loading-icon" style={{ fontSize: `${size}rem` }}></i>
        </div>
    );
}

export default LoadingIcon;
