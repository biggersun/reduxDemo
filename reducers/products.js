/**
  reducer:
    接受 state 和 action 两个参数 返回一个新的 state 的函数
    由 redux 的 dispatch() 方法触发.

  state 就数据树,经过 reducer 处理之后 
  例如:
    state.byId 就是经过 byId() 处理之后的 state 
    state.visibleIds 就是经过 visibleIds() 处理后的 state

*/

import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

function products(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {  //覆盖原有的 inventory  为 inventory - 1
        inventory: state.inventory - 1
      })
    default:
      return state
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({},
        state,
        action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      )
    default:
      const { productId } = action
      if (productId) {
        return Object.assign({}, state, {
          [productId]: products(state[productId], action)
        })
      }
      return state
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export function getProduct(state, id) {
  return state.byId[id]
}

export function getVisibleProducts(state) {
  return state.visibleIds.map(id => getProduct(state, id))
}



