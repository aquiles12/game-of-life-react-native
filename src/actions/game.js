export const TOGGLE_CELL = 'TOGGLE_CELL'
export const NEXT_STEP = 'NEXT_STEP'
export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const DEFAULT_ACTIVE_BOARD = 'DEFAULT_ACTIVE_BOARD'

export const toggleCell = (x, y) => ({ type: TOGGLE_CELL, x, y })
export const nextStep = () => ({ type: NEXT_STEP })
export const togglePlay = () => ({ type: TOGGLE_PLAY })
export const setDefaultActiveBoard = () => ({ type: DEFAULT_ACTIVE_BOARD })
