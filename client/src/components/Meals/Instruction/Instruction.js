import React from "react"
import '../../../style.css'


const Instruction = (props) => {
  
  if (props.analyzedInstructions[0]) {
    const instructionList = props.analyzedInstructions[0].steps.map((step) => {
    return (
      <div>
        <ul>
          <li>
          {step.step}
          </li>
        </ul>
      </div>
      )
    })
  
  return (
    <div className="recipe--instructions" data-cy="recipe-instructions">
      <h1> Instructions:</h1>
      {instructionList}
    </div>
  )
} else {
  return (<div className="recipe--instructions" data-cy="recipe-instructions">
    <h1 className="instructions-title">Instructions:</h1>
    <p >Sorry this recipe does not have any available instructions. Please visit:</p>
    <a href={props.sourceUrl}>{props.sourceUrl}</a>
  </div>)
}

}

export default Instruction;