// @flow
import React, { PureComponent } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import Cell from './Cell'
import styles from './style'

class BoardComponent extends PureComponent {

  componentWillReceiveProps(nextProps) {
    const { nextStep, board } = this.props
    const { isPlaying, board: nextBoard } = nextProps
    if (isPlaying && board && nextBoard !== board) {
      setTimeout(() => nextStep(), 1000)
    }
  }

  nextStepHandler = () => this.props.nextStep()

  playGameHandler = () => {
    const { nextStep, togglePlay, isPlaying } = this.props
    if (!isPlaying) nextStep()
    togglePlay()
  }

  // maps board cells to html cell components
  renderCells = () => this.props.board.map(
    (row, x) => row.map(
      (cell, y) => (
        <Cell key={`c${x}${y}`} x={x} y={y} value={cell} />
      )
    )
  )

  render = () => {
    const { isPlaying } = this.props
    return (
      <View>
        <View style={styles.board}>
          {this.renderCells()}
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.nextStepHandler}
        >
          <Text style={styles.buttonText}>
            Next Step!
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.playGameHandler}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {isPlaying ? 'Stop Game!' : 'Start Game!'}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

}

export default BoardComponent
