import React from 'react';
import LoadingIcon from './LoadingIcon';

export default function LoadingBox({ iconSize }) {
    return (
        <div className="loading-box">
            <LoadingIcon size={iconSize} />
        </div>
    );
}
