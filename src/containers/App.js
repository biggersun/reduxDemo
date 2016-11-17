import React, { Component } from 'react'
import ProductsContainer from './ProductContainer.jsx'
import CartContainer from './CartContainer.jsx'

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