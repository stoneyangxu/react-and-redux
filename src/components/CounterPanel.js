import React from 'react';
import {Card} from "antd";
import ClickCounter from "./ClickCounter";
import store from "../redux/Store";

class CounterPanel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      sum: this.getOwnState()
    }
    this.updateValue = this.updateValue.bind(this)
  }

  getOwnState() {
    const counterValues = store.getState()
    let summary = 0;

    for (const key in counterValues) {
      if (counterValues.hasOwnProperty(key)) {
        summary += counterValues[key];
      }
    }
    return summary;

  }

  componentDidMount() {
    store.subscribe(this.updateValue)
  }

  componentWillUnmount() {
    store.unsubscribe(this.updateValue)
  }

  updateValue() {
    this.setState({
      sum: this.getOwnState()
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
