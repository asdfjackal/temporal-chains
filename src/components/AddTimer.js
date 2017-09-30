import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTimer } from '../actions';

class AddTimer extends Component{
  constructor(props){
    super(props);

    this.state = {
      text: '',
      time: null
    }
  }

  handleTextChange = event => {
    this.setState({text: event.target.value});
  }

  handleTimeChange = event => {
    this.setState({time: event.target.value});
  }

  handleAddTimer = event => {
    event.preventDefault();
    this.props.dispatch(addTimer(this.state.text, this.state.time));
  }

  render(){
    return(
      <div className='row'>
        <form>
          <div className="eight columns">
            <input className="u-max-full-width u-full-width" type="text" value={this.state.text} placeholder="Enter Timer Description" onChange={this.handleTextChange}/>
          </div>
          <div className="two columns">
            <input className="u-max-full-width u-full-width" type="number" value={this.state.time} placeholder="# of seconds" onChange={this.handleTimeChange} />
          </div>
          <div className="two columns">
            <input className="button-primary" type="submit" value="Add Timer" onClick={this.handleAddTimer} />
          </div>
        </form>
      </div>
    )
  }
}

const MappedTimer = connect()(AddTimer);

export default MappedTimer;
