import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTimer } from '../actions';
import Timer from './Timer';

const TimerList = ({ timers, onTimerClick }) => (
  <ul>
    {timers.map(timer => (
      <Timer key={timer.id} {...timer} onClick={() => onTimerClick(timer.id)} />
    ))}
  </ul>
)

const mapStateToProps = state => {
  return {
    timers: state.timers.timers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTimerClick: id => {
      dispatch(removeTimer(id))
    }
  }
}

const MappedTimerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerList)

export default MappedTimerList;
