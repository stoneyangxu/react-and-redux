import AppDispatcher from "./AppDispatcher";
import * as ActionTypes from "./ActionTypes";
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
  first: 1,
  second: 10,
  third: 100
}

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function() {
    return counterValues;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
  if (action.type === ActionTypes.INCREMENT) {
    counterValues[action.caption] ++;
    CounterStore.emitChange();
  } else if (action.type === ActionTypes.DECREMENT) {
    counterValues[action.caption] --;
    CounterStore.emitChange();
  }
});

export default CounterStore;
