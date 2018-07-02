import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import { globalInitialState } from './reducers'
import App from './components/App'

const store = configureStore(globalInitialState)

class GameOfLife extends Component {

  componentDidMount () {

    StatusBar.setHidden(true)

  }

  render () {

    return (
      <Provider store={store}>
        <App />
      </Provider>
    )

  }
}

export default GameOfLife
