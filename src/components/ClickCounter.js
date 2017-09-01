import React, {PropTypes} from 'react';
import * as CounterActions from '../redux/CounterActions'
import Counter from './Counter'

class ClickCounter extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      count: this.getOwnState()
    }
    this.onChange = this.onChange.bind(this)
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  getOwnState() {
    return this.context.store.getState()[this.props.caption]
  }

  onChange() {
    this.setState({
      count: this.getOwnState()
    })
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange)
  }

  increase() {
    this.context.store.dispatch(CounterActions.increment(this.props.caption))
  }

  decrease() {
    this.context.store.dispatch(CounterActions.decrement(this.props.caption))
  }


  render() {
    return (
      <Counter count={this.state.count} increase={this.increase} decrease={this.decrease} />
    )

  }
}

ClickCounter.contextTypes = {
  store: PropTypes.object
}

export default ClickCounter;
