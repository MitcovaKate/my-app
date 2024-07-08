import { useEffect, useState } from 'react'

import { SortButton } from './button';
import { Menu } from './Menu';
import { Order } from './Order';
import { getProductItems } from '../services/DataService';

const App = () => {
let [sortAsc, setSortAsc] = useState(true)
    let [items,setItems]      = useState([])
    let [count,setCount]      = useState(0)

    useEffect(() => {        
        (async () => {
           let itemsData = await getProductItems()
           setItems(itemsData)
        })()    
    },[]) // single call

    useEffect(() => {
        (async () => {
            let orderCount = await getOrderCount()
            setCount(orderCount)
        })()
    }, [])


    return (
        <>
            <SortButton sortAsc={sortAsc} setSortAsc={setSortAsc} />
            <Order />
            <Menu items={items} sortAsc={sortAsc} /> 
            <Order count={count}/>
            <Menu items={items} sortAsc={sortAsc} setCount={setCount} /> 
        </>
    )
}
export {App}