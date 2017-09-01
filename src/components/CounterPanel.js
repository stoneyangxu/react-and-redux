// @flow

import React from 'react';
import {Card} from "antd";
import ClickCounter from "./ClickCounter";
import SummaryStore from "../flux/SummaryStore";

class CounterPanel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      sum: SummaryStore.getSummary()
    }
    this.updateValue = this.updateValue.bind(this)
  }

  componentDidMount() {
    SummaryStore.addChangeListener(this.updateValue)
  }

  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.updateValue)
  }

  updateValue() {
    this.setState({
      sum: SummaryStore.getSummary()
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
