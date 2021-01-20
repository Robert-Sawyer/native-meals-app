import {MEALS} from "../../data/data";
import {TOGGLE_FAVORITE, SET_FILTERS} from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            //sprawdzam czy dodawany ulubiony przepis istnieje - jeśli tak to index będzie większy lub równy zero
            //chodzi o moment kliknięcia w gwiazdkę - muszę wiedzieć czy toggle następuje z powodu dodania
            //przepisu czy use chce usunąć przepis z listy ulubionych. Funkcja splice usuwa a concat tworzy nową
            //tablicę, kopiując starą i dodając element z nawiasu
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.splice(existingIndex, 1)
                return {
                    ...state, favoriteMeals: updatedFavMeals
                }
            }
            else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters
            const filteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                }
                return true
            })
            return {...state, filteredMeals: filteredMeals}
        default: return state

    }
}

export default mealsReducer
