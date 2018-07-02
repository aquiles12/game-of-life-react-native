import { combineReducers } from 'redux'
import ui, { initialState as uiInitialState } from './ui'
import game, { initialState as gameInitialState } from './game'

const reducers = { ui, game }

// Exporting inital states
export const globalInitialState = {
  ui: uiInitialState,
  game: gameInitialState,
}

export default combineReducers(reducers)
