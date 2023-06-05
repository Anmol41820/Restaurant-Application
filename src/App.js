import React from 'react';
import Resturant from './component/Basics/Resturant';
import UseState from './component/Hooks/useState';
import UseEffect from './component/Hooks/useEffect';
import UseReducer from './component/Hooks/useReducer';

const App = () => {

  
  return (
    <div>
      
      <h1 className='fuck'>
        Wellcome to IITians' Resturant
      </h1>
      
      {/* <UseReducer/> */}
      {/* <UseEffect/> */}
      {/* <UseState/> */}
      <Resturant/>
    </div>
    
  ) 
}

export default App;