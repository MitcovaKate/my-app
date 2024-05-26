
import {useState} from 'react';

const Counter=()=>{

const [counter, setCounter] = useState(0);

const increase = () => {
    if (counter <10) {
  setCounter(count => count + 1);
    }
};

const decrease = () => {
    if (counter > 0 && counter <=10) {
        setCounter(count => count - 1);
      }
};

const reset = () =>{
  setCounter(0)
}

return (
  <div >
    <h1>React Counter</h1>
    <span >{counter}</span>
    <div >
      <button  onClick={increase}>+</button>
      <button  onClick={decrease}>-</button>
      <button  onClick={reset}>Reset</button>
    </div>
  </div>
);
}
 export {Counter}

