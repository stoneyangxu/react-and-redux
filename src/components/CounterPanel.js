// @flow

import React from 'react';
import {Card} from "antd";
import ClickCounter from "./ClickCounter";

class CounterPanel extends React.Component {

  constructor(props) {
    super(props)

    this.initValues = [1, 10, 100]
    const sum = this.initValues.reduce((a, b) => a + b, 0)
    this.state = {
      sum: sum
    }
    this.updateValue = this.updateValue.bind(this)
  }

  updateValue(preValue, nextValue) {
    const increase = nextValue - preValue
    this.setState({
      sum: this.state.sum + increase
    })
  }

  render() {
    return (
      <div>
        <Card title={this.state.sum} bordered={false} style={{width: 300}}>
          <ClickCounter caption="first"/>
          <ClickCounter caption="second"/>
          <ClickCounter caption="third"/>
        </Card>
      </div>
    )
  }
}

export default CounterPanel;
