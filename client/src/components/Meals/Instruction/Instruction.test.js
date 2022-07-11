import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import Instruction from "./Instruction.js"
import store from "../../../store/store.js"
import "@testing-library/jest-dom"

test("renders the instruction header correctly", () => {
  const mockInstructions = { analyzedInstructions: [{steps: [{step: "step 1"}]}]}
  
  render(
    <Provider store={store}>
      <Instruction {...mockInstructions} />
    </Provider>
  )

  const instructionHeader = screen.getByText(/Instructions/i)
  expect(instructionHeader).toBeInTheDocument()
})