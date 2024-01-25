import React from 'react'
import Login from './components/login'
import { Provider } from 'react-redux';
import store from './components/store';
const App = () => {
  return (
    <Provider store={store}>
    <Login />
    </Provider>
  )
}

export default App