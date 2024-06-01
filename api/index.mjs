import http from 'node:http'
import {Product} from '.model/Product.mjs'
import {Money} from '.model/Money.mjs'


const products=[
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
const server=http.createServer((req,res)=>{

    res.setHeader("Content-type","application/json")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
     
    if(req.url.startsWith("api/products")){
res.end(JSON.stringify(products))
    }
    else{
req.statusCode=404
res.end(JSON.stringify({
    status:404,
    message:"not found"
}))
    }
})
server.listen("3001","localhost")