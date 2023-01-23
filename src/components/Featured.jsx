import React from 'react'
import New1 from '../images/fea1.jpg'
import New2 from '../images/fea4.jpg'
import New3 from '../images/fea6.jpg'
import New4 from '../images/fea5.jpg'
import '../styles/featured.css'

function NewArrrivcal() {
    return (
        <div className="new"id='new' >
            <div class="center-text">
                <h2>Featured Categories</h2>
            </div>

            <div class="new-content">
                <div class="box">
                    <img src={New1} alt="" />

                    <h4>Loren Ipusm digzi</h4>
                    <h6>$188</h6>
                    <div class="sale">
                        <button className='btn'>Add to Cart</button>

                    </div>
                </div>
                <div class="box">
                    <img src={New2} alt="" />

                    <h4>Loren Ipusm digzi</h4>
                    <h6>$188</h6>
                    <div class="sale">
                        <button className='btn'>Add to Cart</button>
                    </div>
                </div>
                <div class="box">
                    <img src={New3} alt="" />

                    <h4>Loren Ipusm digzi</h4>
                    <h6>$188</h6>
                    <div class="sale">
                        <button className='btn'>Add to Cart</button>

                    </div>
                </div>

            </div>
            
        <div class="new-content">
            <div class="box">
                <img src={New1} alt="" />

                <h4>Loren Ipusm digzi</h4>
                <h6>$188</h6>
                <div class="sale">
                    <button className='btn'>Add to Cart</button>

                </div>
            </div>
            <div class="box">
                <img src={New2} alt="" />

                <h4>Loren Ipusm digzi</h4>
                <h6>$188</h6>
                <div class="sale">
                    <button className='btn'>Add to Cart</button>
                </div>
            </div>
            <div class="box">
                <img src={New3} alt="" />

                <h4>Loren Ipusm digzi</h4>
                <h6>$188</h6>
                <div class="sale">
                    <button className='btn'>Add to Cart</button>

                </div>
            </div>
          
            </div>

        </div>
    )
}

export default NewArrrivcal