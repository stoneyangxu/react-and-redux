import React from 'react';
import {Button, Col, Row, Tag} from "antd";
import store from "../redux/Store";
import * as CounterActions from '../redux/CounterActions'

class ClickCounter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: this.getOwnState()
    }
    this.onChange = this.onChange.bind(this)
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  getOwnState() {
    return store.getState()[this.props.caption]
  }

  onChange() {
    this.setState({
      count: this.getOwnState()
    })
  }

  componentDidMount() {
    store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }

  increase() {
    store.dispatch(CounterActions.increment(this.props.caption))
  }

  decrease() {
    store.dispatch(CounterActions.decrement(this.props.caption))
  }


  render() {
    return (
      <Row align="middle">
        <Col span={18}>
          <Button onClick={this.increase}>+</Button>
          <Button onClick={this.decrease}>-</Button>
        </Col>
        <Col span={6}>
          <Tag color="green">{this.state.count}</Tag>
        </Col>
      </Row>
    );

  }
}

ClickCounter.defaultProps = {
  initValue: 0
};
export default ClickCounter;
