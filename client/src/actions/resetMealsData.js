export const resetMealData = () => async (dispatch) => {
    dispatch({ type: 'RESET_MEAL_DATA', payload: [] });
}
