import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import {connect} from 'react-redux'
    
function Navbar({cart}) {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {

        let count = 0;

        cart.forEach(item => {
            count += item.qty
        });
        setCartCount(count)
    },[cart, cartCount])


    return (
        <nav className="navbar">
        <div className="navbar__content">

        <div className="navbar__content__title">
                <h1>
                <Link to="/">
                     Shophia
                </Link>
               </h1>
            </div>

            <div className="navbar__content__basket">
            <ul>
                  <Link to="/Basket"> <li><span>{cartCount}</span><i className="fas fa-shopping-basket"></i></li></Link> 
           </ul>
            </div>
            

        </div>

            
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        cart : state.products.cart
    }
}
export default connect(mapStateToProps)(Navbar)
