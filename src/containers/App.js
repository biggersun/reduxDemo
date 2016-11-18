import React, { Component } from 'react'
import ProductsContainer from './ProductContainer'
import CartContainer from './CartContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Redux Example</h2>
        <hr/>
        <ProductsContainer />
        <hr/>
         <CartContainer />
      </div>
    )
  }
}