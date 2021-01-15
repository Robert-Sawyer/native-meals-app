import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {MEALS} from "../data/data";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId')

    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    )
}

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight: () =>
        //HeaderButtons wymaga zdefiniowania komponentu, którym jest mój CHB, w Item za to definiuję nazwę ikony
        //z pakietu w dokumentacji expo-vectors
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Favorite' iconName='ios-star-outline' onPress={() => {
                    console.log('Wciskam buttona')
                }}/>
            </HeaderButtons>
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MealDetailsScreen
