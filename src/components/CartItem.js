
import React, {useEffect ,useState} from 'react'
import {connect} from 'react-redux'
import {adjustQty, removeFromCart} from '../actions'






const CartItem = ({cart, adjustQty, removeFromCart}) => {

    const [qty, setQty] = useState(cart.qty);
    const [price, setPrice] = useState(0);






    const plusQty = () => {
        setQty(qty +1);
        adjustQty(cart.id,  qty + 1)
    }

    const minesQty = () => {
        if(qty < 2) {
            return removeFromCart(cart.id);
        }
        setQty(qty - 1);
        adjustQty(cart.id,  qty - 1)
    }

    useEffect(() => {

        const Price =  cart.price * cart.qty;
         setPrice(Price)

    },[price, qty] )


    
    const string = price.toString();
    const FirstFive = string.substr(0, 6);

    const Title = cart.title.substr(0, 25)

       


    return (
        <div>
             <div className="cartItem" >
                 <div className="cartItem__img">
                        <img  src={cart.image} alt={cart.title} />
                 </div>
                 <div className="cartItem__data">
                    <h3 className="cartItem__data__title">{Title}</h3>

                                 <button className="btn cartItem__data__plusbtn" onClick={() => plusQty()}><i className="fas fa-plus"></i></button>
                                       <span className="cartItem__data__qty">{qty}</span> 
                                <button className="btn cartItem__data__minesbtn" onClick={() => minesQty()}><i className="fas fa-minus"></i></button>

    
                          <p className="cartItem__data__price">${FirstFive}</p>
            <button className="cartItem__data__remove" onClick={() => removeFromCart(cart.id)}><i className="fas fa-trash"></i></button>
                </div>

                </div>
            
        </div>
    )
}

export default connect(null, {adjustQty, removeFromCart})(CartItem)
