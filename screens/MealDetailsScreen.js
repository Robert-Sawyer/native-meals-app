import React from 'react'
import {useSelector} from 'react-redux'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import DefaultText from "../components/DefaultText";
import {MEALS} from "../data/data";
import CustomHeaderButton from "../components/HeaderButton";

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailsScreen = props => {

    //dobieram się tutaj do wszystkich przepisów i w nich znajduję przepis z odpowiednim id
    const availableMeals = useSelector(state => state.meals.meals)

    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}min</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Składniki</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Kroki</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )
}

MealDetailsScreen.navigationOptions = navigationData => {
    // const mealId = navigationData.navigation.getParam('mealId')
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    // const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: mealTitle,
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
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    listItem: {
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
})

export default MealDetailsScreen
