import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
            <Button title='Przejdź dalej' onPress={() => {
                props.navigation.navigate('SzczegółyPrzepisu')
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CategoryMealsScreen
