import React, { useState } from 'react'
import {View, Text, StyleSheet, Switch, Platform} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FiltersSwitch = props => {
    return (
        <View style={styles.filtersContainer}>
            <Text>{props.label}</Text>
            <Switch
                // trackColor={{true: Colors.tabBarColor}}
                // thumbColor={Platform.OS === 'android' ? Colors.tabBarColor : ''}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    )
}

const FiltersScreen = props => {

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Dostępne filtry</Text>
            <FiltersSwitch label='Bezglutenowe' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
            <FiltersSwitch label='Bez laktozy' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
            <FiltersSwitch label='Wegańskie' state={isVegan} onChange={newValue => setIsVegan(newValue)}/>
            <FiltersSwitch label='Wegetariańskie' state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    },
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        width: '60%',
    },
})

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filtry',
        headerTitleStyle: {
            marginLeft: 10,
            fontSize: 24,
        },
        headerLeft:
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer()
                }}/>
            </HeaderButtons>
    }
}

export default FiltersScreen
