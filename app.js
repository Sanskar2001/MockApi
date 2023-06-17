const express = require('express')
const app = express()
const port = 3000

const restaurantDetails=[

  {
    name:"Subway",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0bf19a82b109b40c2f5c56d00f071a33",
    description:"Salads, Sandwiches, Snacks, Beverages",
    rating:"3.9",
    price:"350"
  },
  {
    name:"McDonalds",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/08eee882fda81b68e5c36e3a5d89d8c0",
    description:"Salads, Sandwiches, Snacks, Beverages",
    rating:"4.9",
    price:"150"
  },
  {
    name:"Third Wave Coffee",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0dca660dbdf2e04f9b861c4426ffd41e",
    description:"Beverages, Deserts",
    rating:"4.2",
    price:"400"
  },
  {
    name:"Burger King",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    description:"Burgers",
    rating:"4.3",
    price:"350"
  },
  {
    name:"Delhi Food",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aawlxgtno7oq9qfylkrf",
    description:"Indian",
    rating:"4.0",
    price:"100"
  },
  {
    name: "Pizza Hut",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aawlxgtno7oq9qfylkrf",
    description: "Pizzas, Pasta, Appetizers, Desserts",
    rating: "4.2",
    price: "500"
  },
  {
    name:"Burger King",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    description:"Burgers",
    rating:"4.3",
    price:"350"
  },
  {
    name:"Delhi Food",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aawlxgtno7oq9qfylkrf",
    description:"Indian",
    rating:"4.0",
    price:"100"
  },
  {
    name: "Pizza Hut",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aawlxgtno7oq9qfylkrf",
    description: "Pizzas, Pasta, Appetizers, Desserts",
    rating: "4.2",
    price: "500"
  },
  {
    name:"Burger King",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    description:"Burgers",
    rating:"4.3",
    price:"350"
  },
  {
    name:"Delhi Food",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aawlxgtno7oq9qfylkrf",
    description:"Indian",
    rating:"4.0",
    price:"100"
  },
  {
    name: "Pizza Hut",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aawlxgtno7oq9qfylkrf",
    description: "Pizzas, Pasta, Appetizers, Desserts",
    rating: "4.2",
    price: "500"
  }
  
  ]
  
  

app.get('/', (req, res) => {
  res.send(restaurantDetails)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})