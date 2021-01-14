import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {CATEGORIES, MEALS} from "../data/data";


const CategoryMealsScreen = props => {

    //odbieram tu nazwę parametru z CategoriesScreen
    const categoryId = props.navigation.getParam('categoryId')

    //filtruję wyświetlane przepisy sprawdzając czy w tablicy categorii w MEALS jest w ogóle taka sama kategoria co
    //wybrana przez usera
    const displayedMeals = MEALS.filter(meal => meal.categoryId.indexOf(categoryId) >= 0)

    const renderMealItem = itemData => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
            />
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CategoryMealsScreen
