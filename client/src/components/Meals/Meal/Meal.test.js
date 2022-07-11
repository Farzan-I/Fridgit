import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import Meal from "./Meal.js"
import store from "../../../store/store.js"
import "@testing-library/jest-dom"
import mockMealData from '../mockMealData.js'

test("renders meal tile correctly", () => {

  render(
    <Provider store={store}>
      <Meal {...mockMealData}/>
    </Provider>
  )

  const mealTitle = screen.getByText(/Egg Fried Rice/i)
  expect(mealTitle).toBeInTheDocument()
})