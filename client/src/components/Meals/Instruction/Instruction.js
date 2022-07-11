import React from "react"


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
    <div>
      <h1> Instructions</h1>
      {instructionList}
    </div>
  )
} else {
  return (
  
    <div>
      <h1>Instructions</h1>
      <p>Sorry this recipe does not have any available instructions. Please visit</p>
      <a value="recipe-link" href={props.sourceUrl}>{props.sourceUrl}</a>
    </div>)
}

}

export default Instruction;