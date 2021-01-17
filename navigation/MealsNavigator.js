import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.tabBarColor : '#ea6a15',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontSize: 23,
    }
}

const MealsNavigator = createStackNavigator({
    CategoriesScreen: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Kategorie',
            headerTitleStyle: {
                marginLeft: 10,
                fontSize: 24,
            }
        }
    },
    CategoryMealsScreen: {
        screen: CategoryMealsScreen
    },
    MealDetailsScreen: MealDetailsScreen,
}, {
    //żeby nie ustawiać stylów w komponencie można a nawet powinno się to zrobić tutaj, w Nawigatorze, do tego służy
    //właściwość defaultNavigationOptions wbudowana w createStacknavigator i będąca właściwością w drugim obiekcie,
    //opcjonalnym argumentem w cSN (inne właściwości w tym obiekcie to np.cardStyle, containerOptions, albo headerMode)
    //style poniżej, w dNO będą nadpisane jeśli wystąpi konflikt ze stylami wpisanymi powyżej, w obiekcie
    // navigationOptions, jeśli nie ma konfliktów wtedy style są mergowane. Najwyższy priorytet mają style powyżej,
    //nadpiszą nawet style zdefiniowane w pliku komponentu.
    defaultNavigationOptions: defaultNavOptions
})

const FavNavigator = createStackNavigator({
    FavoritesScreen: {
        screen: FavoritesScreen,
        navigationOptions: {
            headerTitle: 'Ulubione',
            headerTitleStyle: {
                marginLeft: 10,
                fontSize: 24,
            }
        }
    },
    MealDetail: MealDetailsScreen
},{
    defaultNavigationOptions: defaultNavOptions
})

const tabScreenConfig = {
    Meal: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Wszystkie',
            tabBarIcon: (tabInfo) => {
                //tintColor jest tym kolorem który definiuję niżej, w tabBarOptions
                return <Ionicons name='restaurant' color={tabInfo.tintColor} size={22}/>
            },
            tabBarColor: Colors.tabBarColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Ulubione',
            tabBarIcon: (tabInfo) => {
                //tintColor jest tym kolorem który definiuję niżej, w tabBarOptions
                return <Ionicons name='ios-star' color={tabInfo.tintColor} size={22}/>
            },
            //tabBarColor zadziała tylko z włączoną opcją shifting, niżej w configu, bez tego tylko barStyle itp
            tabBarColor: Colors.tabBarColor
        }
    }
}

const MealFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        //warto pokombinować z kolorami tu i na górze, w tabScreenConfig i shifting, bo można osiągnąć ciekawszy efekt
        activeColor: Colors.headerColor,
        shifting: false,
        barStyle: {
            backgroundColor: Colors.tabBarColor
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.headerColor
        }
    })

export default createAppContainer(MealFavTabNavigator)
