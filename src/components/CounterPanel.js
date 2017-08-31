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
          <ClickCounter initValue={this.initValues[0]} onValueChanged={this.updateValue}/>
          <ClickCounter initValue={this.initValues[1]} onValueChanged={this.updateValue}/>
          <ClickCounter initValue={this.initValues[2]} onValueChanged={this.updateValue}/>
        </Card>
      </div>
    )
  }
}

export default CounterPanel;
