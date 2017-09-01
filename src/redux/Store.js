import {createStore} from 'redux'
import reducer from './Reducer'

const counterValues = {
  first: 1,
  second: 10,
  third: 100,
}

const store = createStore(reducer, counterValues)

export default store
