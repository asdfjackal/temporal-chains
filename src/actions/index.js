export const addTimer = (text, time) => {
  return {
    type: 'ADD_TIMER',
    text,
    time
  }
}

export const removeTimer = (id) => {
  return {
    type: 'REMOVE_TIMER',
    id
  }
}
