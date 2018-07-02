import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import Board from './Board'
import styles from './App.styles'

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.app}>
        <Board />
      </View>
    )
  }
}
