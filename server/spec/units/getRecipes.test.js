const mockAPIResponse = require('./recipeAPIDataMock')
const fetchRecipes = require('../../externalApi/recipes')

const foo = 1

describe('random', () => {
  it('is random', () => {
    expect(foo).toBe(1)
  })
})

// mockAPIResponse = [
//   {
//   "id":12345,
//   "title":"Quick Apple Pies",
//   "usedIngredientCount":3,
//   "missedIngredientCount":1
//   },
//   {
//     "id":23456,
//     "title":"Cinnamon Apple Crisp",
//     "usedIngredientCount":1,
//     "missedIngredientCount":2
//   },
//   {
//     "id":34567,
//     "title":"Mom's Apple Pie",
//     "usedIngredientCount":2,
//     "missedIngredientCount":4
//   }
// ]

// const fetchRecipes = require('../../externalApi/recipes')
// jest.mock('../../externalApi/recipes', () => jest.fn(() => {
//   return mockAPIResponse
// }))

// // import mockAPIResponse from './recipeAPIDataMock.js'

// describe('getRecipe', () => {
//   it('fetches recipe info from external API', () => {
//     getRecipes
//     expect(fetchRecipes()).toHaveBeenCalledTimes(1)
//   })
// })
