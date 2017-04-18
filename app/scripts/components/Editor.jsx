import React from 'react'
import Step from './Step.jsx'
import InstructionBox from './InstructionBox.jsx'

const Editor = React.createClass({
  onRunClick:function(){
    console.log('running game')
    this.props.runGame( this.state );
  },

  getInitialState:function(){
    return {
      instructionsHuman: [
        'walkRight', 'walkRight', 'walkRight', 'walkRight',
        'walkRight', 'walkRight', 'walkRight', 'walkRight'
      ],
      instructionsAnimal:[
        'walkRight', 'walkRight', 'walkRight', 'walkRight',
        'walkRight', 'walkRight', 'walkRight', 'walkRight'
      ]
    }
  },

  updateInstructionAnimal:function(position){
    const newInstructions = this.state.instructionsAnimal.map((instruction, index)=>{
      if(index === position){
        if(instruction === 'walkDown'){
          return 'walkRight'
        }else{
          return 'walkDown'
        }
      }
      return instruction
    })
    this.setState({instructionsAnimal: newInstructions})
  },

  updateInstructionHuman:function(position){
    const newInstructions = this.state.instructionsHuman.map((instruction, index)=>{
      if(index === position){
        if(instruction === 'walkDown'){
          return 'walkRight'
        }else{
          return 'walkDown'
        }
      }
      return instruction
    })
    this.setState({instructionsHuman: newInstructions})
  },

  stepsUpdate:function(e){
    console.log('steps updated', e.target.value)
    this.setState( {steps: e.target.value} )
  },
  render: function() {
    return (
      <div>
        <div className="editor-container">
          <InstructionBox
            name={"animal"}
            instructions={this.state.instructionsAnimal}
            updateInstruction={this.updateInstructionAnimal}
          />
          <InstructionBox
            name={"human"}
            instructions={this.state.instructionsHuman}
            updateInstruction={this.updateInstructionHuman}
          />
        </div>
        <input className="btn-run" id="run" type="button" name="name" value="Run!" onClick={this.onRunClick}/>
      </div>
    );
  }
});


export default Editor


{/*<div className="panel-header">
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
</div>*/}
