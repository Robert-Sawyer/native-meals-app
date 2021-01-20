import React from 'react'
import {View, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import MealList from "../components/MealList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = props => {

    //dobieram się tutaj do ulubionych przepisów i to je wrzucam do listy wyświetlanych przepisów
    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.text}>
                <DefaultText>Nie masz żadnych ulubionych przepisów</DefaultText>
            </View>
        )
    }

    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    )
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Ulubione',
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

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default FavoritesScreen
