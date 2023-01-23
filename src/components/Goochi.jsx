import React from 'react'
import cta1 from '../images/cta1.png'
import cta2 from '../images/cta2.png'
import cta3 from '../images/cta3.png'
import cta4 from '../images/cta4.png'
import cta5 from '../images/cta5.png'
import cta6 from '../images/ft.png'
import '../styles/goochi.css'

function Goochi() {
    return (
        <div class="cta-content">
            <div class="cta-img">
                <img src={cta1} alt="" />
            </div>
            <div class="cta-img">
                <img src="./img/cta2.png" alt="" />
            </div>
            <div class="cta-img">
                <img src={cta2} alt="" />

            </div>
            <div class="cta-img">
                <img src={cta3} alt="" />
            </div>
            <div class="cta-img">
                <img src={cta4} alt="" />
            </div>
            <div class="cta-img">
            <img src={cta5} alt="" />

            </div>
            <div class="cta-img">
            <img src={cta6} alt="" />

            </div> 
            
        </div>
    )
}

export default Goochi