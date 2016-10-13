import React from 'react'
const Editor = React.createClass({
  onRunClick:function(){
    console.log('running game')
    this.props.runGame(this.state.steps);
  },
  getInitialState:function(){
    return { steps: 0 }
  },
  stepsUpdate:function(e){
    console.log('steps updated', e.target.value)
    this.setState( {steps: e.target.value} )
  },
  render: function() {
    return (
      <div>
        <div className="panel-header">
          LEVEL 1
        </div>
        <div className="panel-body">
          We're on a mission to save the jungle! Before we can start we need to enter by moving to the right location. Enter how many steps you think Theo needs to move...
          <div className="user-input">
            <span className="var-name">
              steps =
            </span>
            <input id="steps" type="number" name="name" value={ this.state.steps } onChange={ this.stepsUpdate }></input>
          </div>

          <div className="fn-call">
            Move("Theo", steps, "RIGHT")
          </div>
          <input className="btn-run" id="run" type="button" name="name" value="Run!" onClick={this.onRunClick}>
          </input>
          <p>When we click run we tell Theo to move right by the number of steps! Because we can change the number of steps we can call this variable.</p>
        </div>
      </div>
    );
  }
});

export default Editor
