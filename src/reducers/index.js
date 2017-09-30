import { combineReducers } from 'redux'
import timers from './timers'

const temporalChains = combineReducers({
  timers,
})

export default temporalChains
