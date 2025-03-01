import http from 'node:http'
import {Product} from '.model/Product.mjs'
import postgres from 'postgres'

import {Money} from '.model/Money.mjs'


// const products=[
//     new Product(101,"Salad",'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg',
//     new Money(60 , "MDL" )
// ),

// new Product(102,"Soup",'https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg',
//     new Money(40 , "MDL" )
// ),
// new Product(103,"Cappuccino",'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRWm9qKkP2EkvSnBuwhWD7T8-oRTUNKZFq13dgEowlcT4Kqymc2bv4b0ZzJXv0aT4wR',
//     new Money(10 , "MDL" )
// )
// ]
const server = http.createServer(async (req,res) => {

    const sql = postgres('postgres://postgres:qazwsx@localhost:12000/react_restaurant_db')

    res.setHeader("Content-type","application/json")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    
    if (req.url.startsWith("/api/products")) {

        let productData = await sql`SELECT * FROM products`

        let products = productData.map(data => new Product(data.id, data.name, data.image, new Money(data.price_amount, data.price_currency)))

        res.end(JSON.stringify(products))

    } else if (req.url.startsWith("/api/order/"))  {

        // HW: extract/capture the id value - using regex
        // let productId = parseInt(req.url.match(/\/api\/order\/(\d+)/)[1])
        
        let pathParts = req.url.split('/')
        let productId = parseInt(pathParts.pop())
        let orderId = pathParts.pop()

        if (orderId === 'null') {
            orderId = parseInt(`${new Date().getTime()}${parseInt(Math.random() * 1000)}`)
            await sql`INSERT INTO orders(id) VALUES(${orderId})`
        }                     
        
        await sql`INSERT INTO order_products VALUES (${orderId},${productId})`
        let count = await sql`SELECT COUNT(*) FROM order_products WHERE order_id = ${orderId}`
        let total = await sql`SELECT SUM(price_amount), price_currency 
                              FROM products JOIN order_products 
                              ON order_products.product_id 
                              = products.id WHERE order_products.order_id = ${orderId} GROUP BY (price_currency)`
        
        res.end(JSON.stringify({
            message: "Order placed successfully!",
            productId: productId,
            orderId: orderId,
            itemCount: count[0].count,
            totalAmount: total[0].sum,
            totalCurrency: total[0].price_currency
        }))

    } else {
        res.statusCode = 404
        res.end(JSON.stringify({
            status: 404,
            message: "not found"
        }))
    }
});

server.listen("3001","localhost")