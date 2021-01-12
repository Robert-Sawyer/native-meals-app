import React from 'react'
import {View, Text, Button, StyleSheet, Platform} from 'react-native'
import {CATEGORIES} from "../data/data";
import Colors from "../constants/Colors";
import CategoriesScreen from "./CategoriesScreen";

const CategoryMealsScreen = props => {

    //odbieram tu nazwę parametru z CategoriesScreen
    const categoryId = props.navigation.getParam('categoryId')

    //dobieram się do tablicy kategorii i sprawdzam czy kategoria zgadza się z klikniętą przez usera na poprzednim ekranie
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title='Przejdź dalej' onPress={() => {
                props.navigation.navigate('MealDetailsScreen')
            }} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = navigationData => {

    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: `Kuchnia ${selectedCategory.title}`,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.headerColor : '#ea6a15',
        },
        headerTitleStyle: {
            alignSelf: 'flex-start',
            fontSize: 22,
        }
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
