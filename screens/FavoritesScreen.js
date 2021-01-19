import React from 'react'
import {useSelector} from 'react-redux'
import MealList from "../components/MealList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const FavoritesScreen = props => {

    //dobieram się tutaj do ulubionych przepisów i to je wrzucam do listy wyświetlanych przepisów
    const favMeals = useSelector(state => state.meals.favoriteMeals)

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

export default FavoritesScreen
