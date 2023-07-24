import React from 'react'
import Navbar from '../Compontents/Navbar'
import Home from './Home'
import Deal from './Deal'
import Subscribe from './Subscribe'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <>

            <Navbar />
            <Home />
            <Deal />
            <Subscribe />
            <Footer/>

        </>
    )
}

export default LandingPage