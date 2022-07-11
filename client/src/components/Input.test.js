import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Input from './Input.js'
import { ReactDOM } from 'react-dom'
import "@testing-library/jest-dom"
import store from "../store/store.js"

test('renders the whats in your fridge prompt', () => {
  render(
    <Provider store={store}>
     <Input />
    </Provider>
  )
  const fridgeHeader = screen.getByText(/What's in your fridge?/i)
  expect(fridgeHeader).toBeInTheDocument() 
})