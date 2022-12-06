import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Link</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo, tempore placeat dignissimos, voluptatibus neque quod autem ea officia nihil hic repudiandae animi eius totam, est praesentium officiis unde sit.</span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptates asperiores fuga necessitatibus beatae, minima, aspernatur animi quis modi nihil aliquid excepturi. Cumque aspernatur, voluptatibus a quod sint, repudiandae eius asperiores ab hic iusto voluptate ducimus natus, quia pariatur optio.</span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className='logo'>PokenSotu</span>
                <span className='copyright'>Copyright 2022. All Rights Received</span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="payment" />
            </div>
        </div>

    </div>
  )
}

export default Footer