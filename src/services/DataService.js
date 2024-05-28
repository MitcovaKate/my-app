import {Product} from '../model/Product';
import {Money} from '../model/Money';

const getProductItems=()=>{
    return [
        new Product("Salad",'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg',
        new Money(60 , "MDL" )
    ),

    new Product("Soup",'https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg',
        new Money(40 , "MDL" )
    ),
    new Product("Cappuccino",'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRWm9qKkP2EkvSnBuwhWD7T8-oRTUNKZFq13dgEowlcT4Kqymc2bv4b0ZzJXv0aT4wR',
        new Money(10 , "MDL" )
    )
    ]
}
export {getProductItems}