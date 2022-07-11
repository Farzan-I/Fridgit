import { render, screen } from '@testing-library/react'
import UsedIngredient from "./UsedIngredient.js"
import "@testing-library/jest-dom"

test('ingredient tile contains the name of ingredient', () => {
  render(<UsedIngredient name="salmon"/>)
  const ingredientTile = screen.getByText(/salmon/i)
  expect(ingredientTile).toBeInTheDocument()
})