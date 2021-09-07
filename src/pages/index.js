import React from 'react'
import Home from '../components/Home'
import Shop from '../components/Shop'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const home = () => {
    return (
        <div>
            <Home />
            <Gallery />
            <Shop />
            <Footer />
        </div>
    )
}

export default home
