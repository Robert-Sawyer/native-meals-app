import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";

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
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.headerColor : '#ea6a15',
        },
        headerTitleStyle: {
            fontSize: 23,
        }
    }
})

export default createAppContainer(MealsNavigator)
