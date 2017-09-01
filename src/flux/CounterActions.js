import AppDispatcher from './AppDispatcher'
import * as ActionTypes from './ActionTypes'

export const increment = (caption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.INCREMENT,
    caption
  })
}

export const decrement = (caption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    caption
  })
}
