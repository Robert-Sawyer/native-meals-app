import React from 'react'
import {View, StyleSheet} from "react-native";
import {useSelector} from 'react-redux'
import {CATEGORIES} from "../data/data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = props => {

    //odbieram tu nazwę parametru z CategoriesScreen
    const categoryId = props.navigation.getParam('categoryId')

    //useSelector jest po to by zarządzać wycinkiem stora reduxowego wewnątrz komponentu - w ten sposób mogę
    //dostać się do meals z combinereducers z App.js, a następnie do initialState i filteredMeals
    const availableMeals = useSelector(state => state.meals.filteredMeals)

    //filtruję wyświetlane przepisy sprawdzając czy w tablicy categorii w filteredMeals taka sama kategoria co
    //wybrana przez usera
    const displayedMeals = availableMeals.filter(meal => meal.categoryId.indexOf(categoryId) >= 0)

    if (displayedMeals.length === 0 || !displayedMeals) {
        return (
            <View style={styles.text}>
                <DefaultText>Nie znaleziono przepisów. Sprawdź swoje filtry.</DefaultText>
            </View>
        )
    }

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

const styles = StyleSheet.create({
    text: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})

export default CategoryMealsScreen
