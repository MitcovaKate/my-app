const Menu = ({items,sortAsc}) => {
  let [message, setMessage]=useState(undefined)
    return (
        <>
            <h1>Menu</h1>
            {message ? <p style={{border:'1px solid green'}}>{message}</p>:<></>}
        
            <ul>
                {items
                    .sort(
                        (item1, item2) => (sortAsc ? 1: -1) * (item1.price.amount - item2.price.amount)
                    )
                    .map(item => 
                        <li key={idx}>
                            <h2>{item.name}</h2>
                            <img src={item.image} width="200"/>                    
                            <p>{item.price.amount}{item.price.currency}</p>
            <button
                       onClick={
                        async e=>{
                        let itemId=e.target.dataset.productId
                      let data = await  orderItem(itemId)
                   setMessage(data.message)
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