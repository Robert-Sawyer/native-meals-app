import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import MealsNavigator from "./navigation/MealsNavigator";
import {enableScreens} from 'react-native-screens'
import {createStore, combineReducers} from 'redux'
import mealsReducer from "./store/reducers/meals";
import {Provider} from 'react-redux'

//dodaję enableScreens aby zwiększyć wydajność - nie wpływa to na wygląd an funkcjonowanie apki
enableScreens()

const rootReducer = combineReducers({
    meals: mealsReducer,
})

const store = createStore(rootReducer)

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })
}

export default function App() {

    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={console.warn}
            />
        );
    }

    return (
        <Provider store={store}>
            <MealsNavigator/>
        </Provider>
    )
}
