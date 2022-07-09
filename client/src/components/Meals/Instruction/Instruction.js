import React from "react"


const Instruction = (props) => {

  console.log(props.instructionData[0].steps)


  if (props.instructionData[0].steps) {
    const instructionList = props.instructionData[0].steps.map((step) => {
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
  return (<div>
    <h1>Instructions</h1>
  </div>)
}

}

export default Instruction;