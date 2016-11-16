import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  products,
  cart
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getQuantity(state, id),
      0
    )

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id)
  }))


export function getVisibleProducts(state) {
  return state.visibleIds.map(id => fromProducts.getProduct(state, id))
}