import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img className="home_image" src = "https://m.media-amazon.com/images/I/61bRd1hd+CL._SX3000_.jpg" alt="home-img"></img>
            
        <div className="home_row">
        
        <Product 
            id = "23456789876"
            title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 8-core GPU, 8GB RAM, 512GB SSD) - Space Grey"
            price = {1029.99}
            image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
            rating = {5}
        />
        <Product 
        id = "234567898542"
        title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Product(RED) - Aluminium Case with Product(RED) - Sport Band"
            price = {279.99}
            image="https://m.media-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg"
            rating = {5}
        />
        
        
        </div>

        <div className="home_row">
        <Product 

         id = "23456789878"
        
            title="New Apple iPhone 12 Pro Max (256GB) - Gold"

            price = {1279}
            image="https://m.media-amazon.com/images/I/71fJ-gmBZtL._AC_UY218_.jpg"
            rating = {5}
        />
        <Product 
        id = "23456789870"
        title="Samsung S21 Ultra 5G with Snapdragon 888 (Phantom Black, 12GB RAM, 256GB Storage)"
            price = {1179}
            image="https://m.media-amazon.com/images/I/81kfA-GtWwL._AC_UY218_.jpg"
            rating = {5}
        />
        <Product 
        id = "234567898542"
        title="OnePlus 9 Pro 5G (Morning Mist, 12GB RAM, 256GB Storage)"
            price={899}
            image="https://m.media-amazon.com/images/I/61LvUvbZGlL._AC_UY218_.jpg"
            rating={5}
        />
        </div>

        <div className="home_row">
        <Product 
        id = "234567898542"
        title="Samsung 190 cm (75 inches) 8K Ultra HD Smart QLED TV QA75Q900RBKXXL (Black) (2019 Model)"
        price={5099}
            image="https://m.media-amazon.com/images/I/91cFq-Y9NLL._AC_UY218_.jpg"
            rating={5}
        />
        
        </div>


        </div>
        </div>
    )
}

export default Home
