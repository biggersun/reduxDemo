/**
	通过 react-redux 的 connect 函数 把 state 和函数与 store 建立联系 
	然后渲染组件
*/

import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers'
import { addToCart } from '../actions'
import ProductsList from '../components/ProductList.jsx'
import ProductItem from '../components/ProductItem.jsx'

class ProductContainer extends Component{
	render() {
		const { products,addToCart } = this.props
		return (
			<ProductsList title="product">
				{ products.map( product => 
						<ProductItem 
							key={product.id}
							product={product}
							onAddToCartClicked={() => addToCart(product.id)}
						 />
					)
				}
			</ProductsList>
		)
	}
}

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

//从store拿 state
function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.products)
  }
}

//state,函数与 store 绑定
export default connect(
  mapStateToProps,
  { addToCart }
)(ProductContainer)

