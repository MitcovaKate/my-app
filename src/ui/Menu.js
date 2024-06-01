const Menu = ({items,sortAsc}) => {
  
    return (
        <>
            <h1>Menu</h1>
            <ul>
                {items
                    .sort(
                        (item1, item2) => (sortAsc ? 1: -1) * (item1.price.amount - item2.price.amount)
                    )
                    .map(item => 
                        <li>
                            <h2>{item.name}</h2>
                            <img src={item.image} width="200"/>                    
                            <p>{item.price.amount}{item.price.currency}</p>
                        </li>
                )}
            </ul> 
        </>
    )
}
export {Menu}