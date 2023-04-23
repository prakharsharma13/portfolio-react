import React from 'react';
import Data from './Data';
import "./Home.css"
import Scrolldown from './Scrolldown';
import Social from './Social';


const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>

                <div className="home__img"></div>

                <Data/>
            </div>
            <Scrolldown/>
        </div>
    </section>
  )
}

export default Home