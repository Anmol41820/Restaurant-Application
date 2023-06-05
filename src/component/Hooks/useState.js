import React from 'react'
import "./style.css";

const UseState = () => {

    const initialData=1;
    const [myNum,setMyNum] = React.useState(initialData);

  return (
    <>
        <div className='center_div'>
            <p>{myNum}</p>
            <div class="button2" onClick={()=> setMyNum(myNum+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Increase
            </div>
            <div class="button2" onClick={()=> myNum>0 ? setMyNum(myNum-1) : setMyNum(0)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Decrease
            </div>
        </div>
    </>
    
  )
}

export default UseState