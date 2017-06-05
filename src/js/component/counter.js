import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {addNumber,addLow} from '../action/UsesrAction'
import { connect } from "react-redux"
class Counter extends Component {
  render() {
    const { value, onIncreaseClick , onIncreaseClicks } = this.props
    return (
      <div>
        <button onClick={onIncreaseClicks}>HIGHa</button>
        <button onClick={onIncreaseClick}>LOW</button>
        <span>{value}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    value: state.number
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(addNumber()),
    onIncreaseClicks: () => dispatch(addLow())
  }
}
export default connect(
  mapStateToProps,mapDispatchToProps
)(Counter)
