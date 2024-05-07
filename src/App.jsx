import React from 'react';
import Api from './Components/Api';
import Restcountries from './Components/Restcountries';
import CompA from './Components/Propsdrilling.jsx/CompA';

const App = () => {
  let a=10;
  return (
    <div>
      <h1>hello World</h1>
      <h1>The value of A is: {a}</h1>
      {/* <Api /> */}
      {/* <Restcountries /> */}
      <CompA a={10}/>
    </div>
  );
};

export default App;