import React from 'react';
import "../styles/hero.css";

const Hero = () => {
  return (
    <section>
        <div className="container"id='hero'>
            <div className="hero_wrapper">
                {/* hero content */}
                    <div className="hero__content">
            {/* hero img */}

                    <h2>Exercies is the key to a <span className='highlights'>Healthy</span> lifestyle</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga, quo repellendus
                     aut aliquam maxime <br /> vel delectus, odit quibusdam totam harum at 
                     exercitationem quasi nisi adipisci nostrum, repellat ut.br <br /> Modi.
                     vel delectus, odit quibusdam totam harum at exercitationem quasi nisi adipisci 
                </p>

                <div className="hero__btns">
                    <button className="btns">Get Started</button>
                    <button className="watch__btn">
                        Find More
                    </button>
                    
                    </div>
                   
                </div>
           
            </div>
        </div>
    </section>
  )
}

export default Hero;