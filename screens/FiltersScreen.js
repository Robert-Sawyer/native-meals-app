import React, { useState, useEffect, useCallback } from 'react'
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

    const {navigation} = props

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    //chcę zapisać moje filtry i do tego potrzebuję aktualneo stanu wewnątrz komponentu. Ale przycisk zapisu
    //znajdje się w headerze, czyli navigationOptions musi otrzymać te dane a więc muszę przenieść informacje
    //o stanie komponentu na zewnątrz, do opcji navigacji
    //uzywam usecallback po to, że pozwala on opakować funkcję dzięki czemu ta funkcja jest buforowana przez
    //React i jest odtwarzana tylko wtedy gdy zmieniły się jej zależności - wymienione w tablicy
    //jeśli cokolwiek innego spowoduje ponowne renderowanie całęgo komponentu to dzięki usecallback ta funkcja
    //nie zostanie wykonana
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(appliedFilters)

    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    //chcę, żeby po każdej zmianie stanu filtrów komponent na nowo sie renderował i żeby zapis filtrów przyciskiem
    //działał za każdym razem - do tego będe uzywał parametrów
    useEffect(() => {
        //tworzę parametr save i przypisuję mu wskaźnik do funkcji savefilters a później odbieram go niżej,
        //poza komponentem, w navigationoptions
        //w skrócie: jeśli zmieni sie któryś z 4 stanów funkcja saveFilters się odtworzy, a ponieważ jest zaleźnościś
        //useeffect to useeffect też się wywoła ponownie i zaktualizuje się wystawiony parametr i z nowa zawartością
        //zostanie odebrany w navigationoptions
        navigation.setParams({save: saveFilters})
    }, [saveFilters])

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
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer()
                }}/>
            </HeaderButtons>
        ),
        headerRight:(
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Save' iconName='ios-save' onPress={navData.navigation.getParam('save')}/>
            </HeaderButtons>
        ),
    }
}

export default FiltersScreen
