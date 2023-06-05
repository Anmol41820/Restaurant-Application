import React, {useReducer} from 'react'
import "./style.css";

const reducer = (state,action) => {
    if(action.type ==="INCR")
    {
        state=state+1;
    }
    else
    {
        if(state>0)
        {
            state-=1;
        }
        else{
            state=0;
        }
    }
    return state;
};


const UseReducer = () => {

    const initialData=1;
    // const [myNum,setMyNum] = React.useState(initialData);
    const [state,dispatch] = useReducer(reducer, initialData);

  return (
    <>
        <div className='center_div'>
            <p>{state}</p>
            <div class="button2" onClick={()=> dispatch({type:"INCR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Increase
            </div>
            <div class="button2" onClick={()=> dispatch({type:"DNCR"})}>
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

export default UseReducer