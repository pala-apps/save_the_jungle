import React from 'react'
const instructionToImageClassMap ={
  walkRight: "fa fa-angle-right",
  walkDown: "fa fa-angle-down"

}
function Step({position, instruction}){
  const imageClasses = instructionToImageClassMap[instruction]
  console.log( 'image clases', imageClasses)
  return(
    <div className='panel-item'>
      <i className={imageClasses} aria-hidden="true"></i>
    </div>
  )
}

export default Step
