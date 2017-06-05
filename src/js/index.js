import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter from './component/counter'
import { Provider } from 'react-redux'
import store from "./store/store"

var rootInstance = ReactDOM.render(<Provider store={store}>
  <Counter />
</Provider>,document.getElementById('app'))

if(module.hot){
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider(
    {
      getRootInstances: function(){
        return [rootInstance];
      }
    }
  )
}
