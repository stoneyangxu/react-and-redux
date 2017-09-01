import React from 'react';
import {Button, Col, Row, Tag} from "antd";
import CounterStore from "../flux/CounterStore";
import * as CounterActions from '../flux/CounterActions'

class ClickCounter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    }
    this.onChange = this.onChange.bind(this)
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  onChange() {
    this.setState({
      count: CounterStore.getCounterValues()[this.props.caption]
    })
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange)
  }

  increase() {
    CounterActions.increment(this.props.caption)
  }

  decrease() {
    CounterActions.decrement(this.props.caption)
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
