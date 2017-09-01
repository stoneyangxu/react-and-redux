import React from 'react'
import Summary from './Summary'
import Counter from './Counter'

class CounterPanel extends React.Component {

  render() {
    return (
      <div>
        <Counter caption="first"/>
        <Counter caption="second"/>
        <Counter caption="third"/>
        <Summary/>
      </div>
    )
  }
}

export default CounterPanel
