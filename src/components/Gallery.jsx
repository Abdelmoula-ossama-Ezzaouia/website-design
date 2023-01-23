import React from 'react'
import gallery1 from '../images/8.jpg'
import gallery2 from '../images/category-3.jpg'
import gallery3 from '../images/hello.webp'
import '../styles/gallery.css'

function Gallery() {
    return (
        <div className="gallery" id='gallery'>

            <div class="new-content">
            <div class="center">
                <h2>New Arrivals</h2>
            </div>
                <div class="box-10">
                    <img src={gallery1} alt="" />

                    <h5>Womens Clothes</h5>
                    <br />
                    <div className="button btn2">Shop Now</div>

                </div>
                <br />
                <div class="box-10 bx1">
                    <img src={gallery2} alt="" />

                    <h5>Grils Clothes</h5>
                    <br />
                    <div className="button">Shop Now</div>

                </div>
                <br />

                <div class="box-10 bx">
                    <img src={gallery3} alt="" />

                    <h5>Men's Clothes</h5>
                    <div className="button">Shop Now</div>

                </div>

            </div>
        </div>
    )
}

export default Gallery