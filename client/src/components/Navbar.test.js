import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import Navbar from "./Navbar.js"
import store from "../store/store.js"
import "@testing-library/jest-dom"

test('renders the project name', () => {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
  const nameElement = screen.getByText(/Brains On Brioche/i)
  expect(nameElement).toBeInTheDocument()
})