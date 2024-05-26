
import {useState} from 'react';

const Button=(props)=>{
   let [sortAsc, setSortAsk] = useState(true);
    return (
        <button 
            style={{
            color:props.color,
            backgroundColor:props.backgroundColor 
         }}
       onClick={()=>{
        //asc = !asc
        setSortAsk = (!sortAsc)
        console.log(sortAsc);
    }}         
       >{props.text}{sortAsc ? '^': 'v'}
       </button>
    );
}
export {Button}