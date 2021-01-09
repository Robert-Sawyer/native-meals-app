import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigator = createStackNavigator({
    Kategorie: CategoriesScreen,
    Przepisy: {
        screen: CategoryMealsScreen
    },
    SzczegółyPrzepisu: MealDetailsScreen,
})

export default createAppContainer(MealsNavigator)
