import React, {useEffect,useState} from 'react'

const UseEffect = () => {
    const initialData=0;
    const [myNum,setMyNum] = useState(initialData);

    
    useEffect( () => {
        document.title = `Chats(${myNum})`;
    });

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
            
        </div>
    </>
    
  )
}

export default UseEffect