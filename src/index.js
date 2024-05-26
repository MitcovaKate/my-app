import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Heading from './Heading' ;
import Food from './Food';
import { SortButton} from './ui/button';
import { Counter} from './ui/Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));

const menuItems = [
  {
    image: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg',
    name: 'SALAD',
    price: 20,
    ingredients: ['Tomato', 'Cheese', 'Mushrooms'],
  },
  {
    image: 'https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg',
    name: 'SOUP',
    price: 10,
    ingredients: ['Onion', 'Potato', 'Meat', 'Tomato'],
  },
  {
    image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRWm9qKkP2EkvSnBuwhWD7T8-oRTUNKZFq13dgEowlcT4Kqymc2bv4b0ZzJXv0aT4wR',
    name: 'Cappuccino',
    price: 4.50,
    ingredients: [
      'Coffe',
      'Milk',
    ],
  },
];
root.render(
  <React.StrictMode>
    <Heading text="Restaurant Menu"/>
    {menuItems.map((menuItem, index) => (
        <Food key={index} {...menuItem} />
      ))}
      <SortButton 
         text="SORT"
         color="white"
         backgroundColor="#444"
      />
      <Counter/>
  </React.StrictMode>
);
reportWebVitals();
