import { render, screen } from '@testing-library/react'
import MissedIngredient from "./MissedIngredient.js"
import "@testing-library/jest-dom"

test('contains the name of ingredient', () => {
  render(<MissedIngredient name="salmon"/>)
  const ingredientTile = screen.getByText(/salmon/i)
  expect(ingredientTile).toBeInTheDocument()
})