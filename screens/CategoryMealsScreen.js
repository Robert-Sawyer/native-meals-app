import React from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import {CATEGORIES, MEALS} from "../data/data";
import MealItem from "../components/MealItem";


const CategoryMealsScreen = props => {

    //odbieram tu nazwę parametru z CategoriesScreen
    const categoryId = props.navigation.getParam('categoryId')

    //filtruję wyświetlane przepisy sprawdzając czy w tablicy categorii w MEALS jest w ogóle taka sama kategoria co
    //wybrana przez usera
    const displayedMeals = MEALS.filter(meal => meal.categoryId.indexOf(categoryId) >= 0)

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetailsScreen',
                        {
                            mealId: itemData.item.id
                        })
                }}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
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
        paddingHorizontal: 15,
    },
})

export default CategoryMealsScreen
