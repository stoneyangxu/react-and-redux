import React from 'react';
import store from "../redux/Store";
import * as CounterActions from '../redux/CounterActions'
import Counter from './Counter'

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
      <Counter count={this.state.count} increase={this.increase} decrease={this.decrease} />
    )

  }
}

ClickCounter.defaultProps = {
  initValue: 0
};
export default ClickCounter;
