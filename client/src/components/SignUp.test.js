import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import SignUp from "./SignUp.js"
import store from "../store/store.js"
import "@testing-library/jest-dom"

test('renders the signup header prompt', () => {
  render(
    <Provider store={store}>
      <SignUp />
    </Provider>
  )

  const signUpHeader = screen.getByText(/Join the no-waste revolution.../i)
  expect(signUpHeader).toBeInTheDocument()
})