import React from 'react';
import {Button, Col, Row, Tag} from 'antd'
import * as CounterActions from '../redux/CounterActions'
import {connect} from 'react-redux'

const Counter = function({increase, decrease, count}) {
  return (
    <Row align="middle">
      <Col span={18}>
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>
      </Col>
      <Col span={6}>
        <Tag color="green">{count}</Tag>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state[ownProps.caption]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: () => {
      dispatch(CounterActions.increment(ownProps.caption))
    },
    decrease: () => {
      dispatch(CounterActions.decrement(ownProps.caption))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
