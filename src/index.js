/**
	入口文件 

	createStore(reducer,applyMiddleware()) 创建 store 添加中间件
	store.dispatch() 初始化 store

	Provider 和 connect 为 react-redux 的关键字
*/
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'

var middleware = [ thunk, logger()]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts()) //getAllProducts : 异步action

render(
	<Provider store={store}>
		<App/>
	</Provider>,
  document.getElementById('root')
)