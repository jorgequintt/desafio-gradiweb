import React from 'react';
import Button from '../Common/Button';

/**
 * @AddLocation component
 *
 * This is just presentational, it doesn't actually work.
 */
export default function AddLocation() {
    return (
        <div className="add-location">
            <Button label="Add Location" intent="secondary" onClick={() => {}} />
            <i className="fas fa-city add-location-icon"></i>
        </div>
    );
}
