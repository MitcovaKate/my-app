
import {useState} from 'react';

const SortButton=(props)=>{
   let [sortAsc, setSortAsс] = useState(true);
    return (
        <button 
            style={{
            color:props.color,
            backgroundColor:props.backgroundColor 
         }}
       onClick={()=>{
        //asc = !asc
        setSortAsс= (!sortAsc)
        console.log(sortAsc);
    }}         
       >{props.text}{sortAsc ? '^': 'v'}
       </button>
    );
}
export {SortButton}