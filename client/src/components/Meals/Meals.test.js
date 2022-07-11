import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import Meals from "./Meals.js"
import store from "../../store/store.js"
import "@testing-library/jest-dom"
import mockMealData from './mockMealData'

test("renders meals", () => {
  render (
    <Provider store={store}>
      <Meals {...mockMealData}/>
    </Provider>
  )

})