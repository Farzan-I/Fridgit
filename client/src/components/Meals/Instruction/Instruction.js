import React, { useState, useEffect } from "react";
import axios from 'axios';


const Instruction = (props) => {

  console.log(props.instructionData[0].steps)

  const instructions = props.instructionData[0].steps.map((step) => {
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
      {instructions}
    </div>
  )
}


export default Instruction;