import React from 'react'
import {useSelector} from 'react-redux'
import {CATEGORIES} from "../data/data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {

    //odbieram tu nazwę parametru z CategoriesScreen
    const categoryId = props.navigation.getParam('categoryId')

    //useSelector jest po to by zarządzać wycinkiem stora reduxowego wewnątrz komponentu - w ten sposób mogę
    //dostać się do meals z combinereducers z App.js, a następnie do initialState i filteredMeals
    const availableMeals = useSelector(state => state.meals.filteredMeals)

    //filtruję wyświetlane przepisy sprawdzając czy w tablicy categorii w filteredMeals taka sama kategoria co
    //wybrana przez usera
    const displayedMeals = availableMeals.filter(meal => meal.categoryId.indexOf(categoryId) >= 0)

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
