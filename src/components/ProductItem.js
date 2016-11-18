import React, { Component, PropTypes } from 'react'
import Product from './Product.js'

export default class ProductItem extends Component {
  render() {
    const { product,onAddToCartClicked } = this.props
    return (
      <div>
        <Product 
          title={ product.title }
          price={ product.price }/>  
        <button 
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? '增加到购物车' : '售完'}
        </button>
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}
