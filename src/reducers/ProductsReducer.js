import {FETCH_PRODUCTS, FETCH_PRODUCT, LOADING, ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QTY, EMPTY__CART} from '../actions/types'


const initialState = {
    products : [],
    product :  [],
    cart: [],
    loading: false,
    
}


export default function(state = initialState, action) {

    switch(action.type) {
        case FETCH_PRODUCTS: 
            return {
                ...state,
                products : action.payload,
                loading: false,

            }

        case FETCH_PRODUCT: 
            return {
                ...state,
                product : action.payload,
                loading: false
            } 

        case ADD_TO_CART: 
        const item = state.products.find(prod => prod.id === action.payload)

        const inCart = state.cart.find(item => item.id === action.payload ? true : false);

            return {
                    ...state,
                   cart : inCart ? state.cart.map(item => item.id  === action.payload ?
                 {...item, qty : item.qty + 1} : item) : [...state.cart, {...item, qty : 1}],
            }  
            
        case REMOVE_FROM_CART: 
            return {
                ...state,
                cart : state.cart.filter(item => item.id !== action.payload),
            }    

        case ADJUST_QTY: 
            return {
                ...state,
                cart : state.cart.map(item => item.id === action.payload.id ?
                     {...item, qty: + action.payload.qty} : item)
            }
            
            
        case  EMPTY__CART :
            
            return {
                ...initialState,
               
            }

           
            

            


           
            
        case LOADING: 
            return {
                 ...state,
                 loading : true
                } 

            default: return state

    }
    

}