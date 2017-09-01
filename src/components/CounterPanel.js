import React, {PropTypes} from 'react';
import Summary from './Summary'

class CounterPanel extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      sum: this.getOwnState()
    }
    this.updateValue = this.updateValue.bind(this)
  }

  getOwnState() {
    const counterValues = this.context.store.getState()
    let summary = 0;

    for (const key in counterValues) {
      if (counterValues.hasOwnProperty(key)) {
        summary += counterValues[key];
      }
    }
    return summary;

  }

  componentDidMount() {
    this.context.store.subscribe(this.updateValue)
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.updateValue)
  }

  updateValue() {
    this.setState({
      sum: this.getOwnState()
    })
  }

  render() {
    return (
      <Summary sum={this.state.sum} />
    )
  }
}


CounterPanel.contextTypes = {
  store: PropTypes.object
}

export default CounterPanel;
