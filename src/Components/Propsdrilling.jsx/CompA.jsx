import React from 'react';
import CompB from './CompB';

const CompA = ({a}) => {
    return (
        <div>
            <h1>Component A</h1>
            <h1>The value of A is: {a}</h1>
            <CompB a={a} />
        </div>
    );
};

export default CompA;