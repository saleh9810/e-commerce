import React, {useEffect} from 'react'
import {connect}  from 'react-redux'
import {fetchProduct, setLoading, addToCart} from '../actions'
import {useParams} from  'react-router-dom'



const Product = ({Product, loading, fetchProduct, setLoading, addToCart}) => {

    let params = useParams();

    useEffect(() => {
        fetchProduct(params.id);
        setLoading();
    }, [])


  

 

    let ProductInfo = (
        <div className="product">

        <div className="product__first__collection">
            <img className="product__first__collection__img" alt={Product.title} src={Product.image} />
        </div>

        <div className="product__seconde__collection">
              <h2 className="product__seconde__collection__title">{Product.title}</h2> 
              <p className="product__seconde__collection__descripition">{Product.description}</p>
             <h3 className="product__seconde__collection__price">${Product.price}</h3>
                  
             <button onClick={() => addToCart(Product.id)} className="btn product__seconde__collection__button">+ ADD TO CART</button>
        </div>
        
         
         </div>
    )

    let Loading = (
        <div> loading .....</div>
    )

    let content = loading ? Loading : ProductInfo;

    return (
        <div>
            {content}
        </div>
    )

    
}


const mapStateToProps = (state) => ({
    loading : state.products.loading,
    Product : state.products.product
})

export default  connect(mapStateToProps, {fetchProduct, setLoading, addToCart})(Product)
