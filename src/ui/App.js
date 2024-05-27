import { useState } from 'react'

import { SortButton } from './button';
import { Menu } from './Menu';


const items = [
    {
        name: "Salad",
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg',
        price: 60   
    },
    {
        name: "Soup",
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg',
        price:40
    },
    {
        name: "Cappuccino",
        image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRWm9qKkP2EkvSnBuwhWD7T8-oRTUNKZFq13dgEowlcT4Kqymc2bv4b0ZzJXv0aT4wR',
        price: 10
    },
]

const App = () => {

    let [sortAsc, setSortAsc] = useState(true)

    return (
        <>
            <SortButton sortAsc={sortAsc} setSortAsc={setSortAsc} />
            <Menu items={items} sortAsc={sortAsc} /> 
        </>
    )
}

export {App}