
import {useState} from 'react';

const Button=(props)=>{
   let [asc, setAsk] = useState(true);
    return (
        <button style={{
            color:props.color,
            backgroundColor:props.backgroundColor 
         }}
       onClick={()=>{
        //asc = !asc
        setAsk = !asc
    }}         
       >{props.text}{asc ? '^': 'V'}
       </button>
    );
}
export {Button}