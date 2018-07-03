import { 
  TOGGLE_CELL, 
  NEXT_STEP, 
  TOGGLE_PLAY, 
  DEFAULT_ACTIVE_BOARD, 
} from '../actions/game'
import {
  generateEmptyBoard,
  getNextBoard,
  toggleInBoard,
  setDefaultActiveBoard,
} from '../helpers/game-of-life'

const initialState = {
  board: generateEmptyBoard(50),
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

    case DEFAULT_ACTIVE_BOARD: 
      return {
        ...state,
        board: setDefaultActiveBoard(),
      }

    default:
      return state

  }

}
