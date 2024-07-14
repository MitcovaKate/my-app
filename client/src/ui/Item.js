const Item = ({ item, idx, setMessage, orderItem, setOrderALLIn } ) => {
    return (
        <li key={idx}>
            <h2>{item.name}</h2>
            <img src={item.image} width="100" />
            <p>{item.price.amount}{item.price.currency}</p>

            <button
                onClick={
                    async (e) => { // <------------------------- wrapper
                        let productId = e.target.dataset.productId
                        let response = await orderItem(productId)
                        localStorage.setItem('orderId', response.orderId)
                        setMessage(response.message)

                        // HW2: group values
                        const { itemCount, totalAmount, totalCurrency } = response;
                        setOrderALLIn({ itemCount, totalAmount, totalCurrency });
                    } // <------------------------------- /wrapper
                }
                data-product-id={item.id}
            >ORDER</button>
        </li>
    )
}

export default Item