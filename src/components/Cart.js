import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import {emptyCart} from '../actions'



const Cart = ({carts, emptyCart}) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);



    const handleCheckOut = () => {
        if(totalItems === 0) {
            alert("your basket is empty")
        }else {
            alert("you checked out")
            emptyCart()
        }
     
    }
    


    useEffect(() => {
          let items = 0;
          let price = 0;
         carts.forEach(item => {
            
             items += item.qty;
             price += item.qty  * item.price;
         })

         setTotalPrice(price);
         setTotalItems(items)

    }, [carts, totalItems, totalPrice, setTotalItems, setTotalPrice])

    const string = totalPrice.toString();
    const FirstFive = string.substr(0, 6)



    return (
        <div className="cart-container">
            <div className="cart">
        {carts.map(cart => (
            <div key={cart.id}>
           <CartItem cart={cart} />
           </div>
        ))}
        </div>

        <div className="cart__summary">
            <div className="cart__summary__details">
            <div className="cart__summary__details__items">
                    <p>Subtotal:({totalItems}tems):<span>${FirstFive}</span></p>
            </div>
            </div>

            <div className="cart__summary__buttons">
                <button onClick={() => handleCheckOut()} className="btn cart__summary__buttons__checkOut">Check Out</button>
                <button onClick={() => emptyCart()} className="btn cart__summary__buttons__clear">Clear</button>

             </div>
        </div>

        </div>
    )
}

const mapStateToProps = (state) =>  {
    return {
        carts : state.products.cart,
        
    }
}
   



export default connect(mapStateToProps, {emptyCart})(Cart)
