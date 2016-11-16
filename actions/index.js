/**
	动作和方法  

	dispatch(action) 触发 reducer

	export出去的方法增加了 dispatch() 的执行条件
*/

import shop from '../api/chatServer'
import * as types from '../constants/ActionTypes'

//action RECEIVE_PRODUCTS
function receiveProducts(products) {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
  }
}

//action ADD_TO_CART
const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export function addToCart (productId){
 	return (dispatch, getState) => {
  	if (getState().products.byId[productId].inventory > 0) {
    	dispatch(addToCartUnsafe(productId))
  	}
	}
}

export function getAllProducts() {
  return dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}