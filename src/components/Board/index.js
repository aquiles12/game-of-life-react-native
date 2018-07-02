import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextStep, togglePlay } from '../../actions/game'
import Board from './component'

const mapStateToProps = state => ({
  board: state.game.board,
  isPlaying: state.game.isPlaying,
})

const mapDispatchToProps = dispatch => ({
  nextStep: bindActionCreators(nextStep, dispatch),
  togglePlay: bindActionCreators(togglePlay, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
