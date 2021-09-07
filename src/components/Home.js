import React from 'react'

function Home() {
    return (
        <div className="home">
        <div className="home__contanier">
            <div className="home__box">
                <div className="home__box__content">
                    <h3 className="home__box__content__mid" >
                            MID-SEASON
                    </h3>
                    <h2 className="home__box__content__sale">
                            SALE
                    </h2>
                    <p className="home__box__content__up">________ UP TO ________</p>
                    <h3 className="home__box__content__off">
                           50% OFF
                    </h3>
                </div>
            </div>
            <div className="home__btn">
                <button className="btn">SHOP NOW</button>
            </div>   
            </div> 
        </div>
    )
}

export default Home
