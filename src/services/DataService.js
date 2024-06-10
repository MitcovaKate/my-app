import {Product} from '../model/Product';
import {Money} from '../model/Money';

const getProductItems = async () => {
  return  fetch('http://localhost:3001/api/products')
        .then((response) => response.json())
}
const orderItem=(itemId)=>{
    fetch('http://localhost:3001/api/order')
    .then((response)=>response.json())
    console.log("SENDING ORDER TO THE API SERVER", itemId)
}
export {getProductItems, orderItem}