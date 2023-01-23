import React from 'react'
import svg1 from '../images/background.jpg'
import "../styles/icons.css"

function Icons() {
    return (
        <div className="icons">
            <div className="icons-rate">
                <img src={svg1} alt="" />
                <div className="text-content">
                    <p>SUMMER ON SALE</p>
                    <h2>20% OFF NEW ARRIVAL</h2>
                    <a href="#" className='btn1'>View Collection</a>
                </div>
            </div>
        </div>
    )
}

export default Icons