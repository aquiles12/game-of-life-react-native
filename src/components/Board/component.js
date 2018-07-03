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

  // move steps forward every 1000ms
  playGameHandler = () => {
    const { nextStep, togglePlay, isPlaying } = this.props
    if (!isPlaying) nextStep()
    togglePlay()
  }

  drawRow = (row, x) => (
    row.map(
      (cell, y) => (
        <Cell key={`c${x}${y}`} x={x} y={y} value={cell} />
      )
    )
  )

  // this will activate the 6 x,y asked in the challenge
  activeDefaultCells = () => {
    this.props.setDefaultActiveBoard()
  }

  // maps board cells to cell components
  renderCells = () => this.props.board.map(
    (row, x) => <View key={`r${x}`}>{this.drawRow(row, x)}</View>
  )

  render = () => {
    const { isPlaying } = this.props
    return (
      <View>
        <View style={styles.titleArea}>
          <Text style={styles.title}>Conway's</Text>
          <Text style={styles.title}>Game of Life</Text>
        </View>
        <View style={styles.board}>
          {this.renderCells()}
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.activeDefaultCells}
        >
          <Text style={styles.buttonText}>
            Set Default Active Cells          
          </Text>
        </TouchableHighlight>
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
