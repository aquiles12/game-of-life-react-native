import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleCell } from '../../../actions/game'
import Cell from './component'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  toggleCell: bindActionCreators(toggleCell, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
