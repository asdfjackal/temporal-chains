import React, { Component } from 'react';

const Timer = ({ onClick, text, time }) => (
  <li>
      {text} - {time} seconds - <a onClick={onClick}>delete</a>
  </li>
)

export default Timer;
