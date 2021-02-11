import React from 'react';

export default function Button({ intent, label, onClick }) {
    return (
        <div className={'btn ' + intent} onClick={onClick}>
            {label}
        </div>
    );
}
