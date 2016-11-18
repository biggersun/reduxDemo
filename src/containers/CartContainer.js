/**
  通过 react-redux 的 connect 函数 把 state 和函数与 store 建立联系 
  然后渲染组件
*/

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total }) => (
  <Cart
    products={products}
    total={total} />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.number
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps
)(CartContainer)
