// @flow

import React from 'react';
import {Button, Col, Row, Tag} from "antd";

type Props = {
  initValue: number,
  onValueChanged: func
}

class ClickCounter extends React.Component<Props> {


  constructor(props) {
    super(props)
    this.state = {
      count: props.initValue
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  increase() {
    this.updateValue(true)
    this.setState({
      count: this.state.count + 1
    })
  }

  decrease() {
    this.updateValue(false)
    this.setState({
      count: this.state.count - 1
    })
  }

  updateValue(isIncrease) {
    const preValue = this.state.count
    const nextValue = isIncrease ? preValue + 1 : preValue - 1

    this.props.onValueChanged(preValue, nextValue)
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
