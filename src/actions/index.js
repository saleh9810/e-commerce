import {FETCH_PRODUCTS, FETCH_PRODUCT, LOADING,  ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QTY, EMPTY__CART} from './types'
import axios from 'axios'


export const fetchProducts = () => (dispatch) => {
   axios
    .get('https://fakestoreapi.com/products')
            .then(res => {
                dispatch({
                    type : FETCH_PRODUCTS,
                    payload: res.data
                })
            })
           
}


export const fetchProduct = (id) => (dispatch) => {
    axios
     .get(`https://fakestoreapi.com/products/${id}`)
             .then(res => {
                 dispatch({
                     type : FETCH_PRODUCT,
                     payload: res.data
                 })
             })
            
 }


 export const addToCart = (productId) => (dispatch) => {
    
    dispatch({
        type: ADD_TO_CART,
        payload : productId
        
    })
     
 };

 export const removeFromCart = (productId) => (dispatch) => {
    dispatch({
        type : REMOVE_FROM_CART,
        payload : productId
    })
 }

 export const adjustQty = (productId, value) => (dispatch) => {

    dispatch({
        type : ADJUST_QTY,
        payload : {
            id : productId,
            qty : value
        }
    })

 }

 export const emptyCart = () =>  {
     return {
        type : EMPTY__CART,
        
     }
        
 
 }

 export const setLoading = () => {
    return {
      type: LOADING
    }
  }