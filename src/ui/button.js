const Button=(props)=>{
   let asc = true
    return (
        <button style={{
            color:props.color,
            backgroundColor:props.backgroundColor 
         }}
       onClick={()=>{asc = !asc}}         
       >{props.text}{asc ? '^': 'V'}</button>
    );
}
export {Button}