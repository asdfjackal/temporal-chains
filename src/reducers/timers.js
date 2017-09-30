const timers = (state = {
  timers: [],
  nextTimerId: 0
}, action) => {
  switch (action.type) {
    case 'ADD_TIMER':
      return {
        timers: [
          ...state.timers,
          {
            id: state.nextTimerId,
            text: action.text,
            time: action.time
          }
        ],
        nextTimerId: state.nextTimerId + 1
      }
    case 'REMOVE_TIMER':
      return Object.assign({}, state, {
        timers: state.timers.filter(timer =>
          !(timer.id === action.id)
        )
      });
    default:
      return state
  }
}

export default timers
