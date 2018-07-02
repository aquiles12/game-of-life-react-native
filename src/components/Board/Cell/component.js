// @flow
import React, { PureComponent } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './style'

class CellComponent extends PureComponent {

  clickHandler = () => {
    const { toggleCell, x, y } = this.props
    toggleCell(x, y)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.clickHandler}
        style={[styles.cell, this.props.value ? styles.alive : null]}
      />
    )
  }

}

export default CellComponent
