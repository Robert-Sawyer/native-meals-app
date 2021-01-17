import React from 'react'
import {CATEGORIES, MEALS} from "../data/data";
import MealList from "../components/MealList";


const CategoryMealsScreen = props => {

    //odbieram tu nazwę parametru z CategoriesScreen
    const categoryId = props.navigation.getParam('categoryId')

    //filtruję wyświetlane przepisy sprawdzając czy w tablicy categorii w MEALS jest w ogóle taka sama kategoria co
    //wybrana przez usera
    const displayedMeals = MEALS.filter(meal => meal.categoryId.indexOf(categoryId) >= 0)

    return (
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    )
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: `Kuchnia ${selectedCategory.title}`,
    }
}

export default CategoryMealsScreen
