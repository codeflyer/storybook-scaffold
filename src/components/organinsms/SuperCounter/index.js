import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../../atoms/button'

export class SuperCounter extends React.Component {
  render () {
    return (
      <div>
        <div>{this.props.counter}</div>
        <Button onClick={this.props.onClick}>Add</Button>
        <Button onClick={this.props.onReset}>Reset</Button>
      </div>
    )
  }
}

SuperCounter.propTypes = {
  counter: PropTypes.number,
  onClick: PropTypes.func,
  onReset: PropTypes.func
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      console.log('ADD')
      dispatch({ type: 'ADD' })
    },
    onReset: () => {
      console.log('RESET')
      dispatch({ type: 'RESET' })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperCounter)
