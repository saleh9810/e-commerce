import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchProducts, addToCart} from '../actions'
import {Link} from  'react-router-dom'
import Masonry from 'react-masonry-css'


function Shop({products, fetchProducts, addToCart}) {


    useEffect(() => {
        fetchProducts()
    }, [])


if(!products) return <div>loading</div>;

const breakpoints = {
    default: 3,
    1100:2,
    500: 1
}
    
    
    return (
        <div id='shop' className="shop">
                            <h3 className="shop__title">OUR SHOP</h3>
                        <div className="products">
                    <Masonry 
                        breakpointCols={breakpoints}
                         className="my-masonry-grid"
                         columnClassName="my-masonry-grid_column"
                    >
                           {products.map(product => (
                                 <div className="products__product" key={product.id}> 
                                         <Link className="products__product__a" to={`/product/${product.id}`}>
                                             <img width="600" height="400" className="products__product__img" alt="product-img" src={product.image} />
                                         </Link>
                                             <div className="products__product__data">
                                            <p className="products__product__data__title"> {product.title} </p>
                                            <p className="products__product__data__price">${product.price} </p>
                                        </div>
                                        <button onClick={() => addToCart(product.id)} className="btn products__product__btn"><i className="fas fa-cart-plus"></i></button>
                        </div>
                 
                              ))}

                </Masonry>
        </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    products : state.products.products
})


export default connect(mapStateToProps, {fetchProducts, addToCart})(Shop)
