import React from 'react';
import CompC from './CompC';

const CompB = ({a}) => {
    a=a+1
    return (
        <div>
          <h1>Component B</h1>
          <h1>The value of a is: {a}</h1>
          <CompC a={a}/> 
        </div>
    );
};

export default CompB;