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
                       <button
                       onClick={e=>{
                        let itemId=e.target.dataset.productId
                        orderItem(itemId)
                       }} // wrapper
                       data-product-id={item.id}
                       >
                      ORDER
                       </button>
                       
                        </li>
                )}
            </ul> 
        </>
    )
}
export {Menu}