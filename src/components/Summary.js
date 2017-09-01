import React from 'react'
import {connect} from 'react-redux'

const Summary = function({sum}) {
  return (
    <div>
      <hr />
      <span>{sum}</span>
    </div>
  )
}


const computeSum = (counterValues) => {
  let summary = 0;

  for (const key in counterValues) {
    if (counterValues.hasOwnProperty(key)) {
      summary += counterValues[key];
    }
  }
  return summary;

}


const mapStateToProps = (state, ownProps) => {
  return {
    sum: computeSum(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary)

