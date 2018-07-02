import { TOGGLE_CELL, NEXT_STEP, TOGGLE_PLAY } from '../actions/game'
import {
  generateEmptyBoard,
  getNextBoard,
  toggleInBoard,
} from '../helpers/game-of-life'

const initialState = {
  board: generateEmptyBoard(10),
  isPlaying: false,
}

export default (state = initialState, action) => {

  switch (action.type) {

    case TOGGLE_CELL:
      return {
        ...state,
        board: toggleInBoard(action.x, action.y, state.board),
      }

    case NEXT_STEP:
      return {
        ...state,
        board: getNextBoard(state.board),
      }

    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      }

    default:
      return state

  }

}
