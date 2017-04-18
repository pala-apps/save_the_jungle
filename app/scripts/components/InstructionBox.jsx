import React from 'react'
import Step from './Step.jsx'

const InstructionBox = React.createClass({

  render: function() {
    const steps = this.props.instructions.map((instruction, index)=>{
      return <Step
        key={index}
        position={index}
        instruction={instruction}
        onUpdateInstruction={this.props.updateInstruction}
      />
    })
    return (
      <div className="instruction-box">
        <div className="panel-header">
          {this.props.name}
        </div>
        <div className="panel-body">
          { steps }
        </div>
      </div>
    );
  }
});


export default InstructionBox
