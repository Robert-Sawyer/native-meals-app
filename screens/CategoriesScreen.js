import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Some normal text!</Text>
            {/*Tworzę button w celu przejścia na inna stronę w nawigacji, konkretnie z przepisami z jednej kuchni
            wewnątrz obiektu props jest wiele różnych wbudowanych metod m.in. navigation, która pozwala na wykorzystanie
            funkcji navigate któa przyjmuje obiekt a w nim we właściwości routeName wpisuję jako string nazwę
            ekranu, który ma się wyrenderować w momencie kliknięcia w button. nazwa musi być taka sama jak
            w MealsNavigator
            UPDATE: alternatywnie można zamiast obiektu i routeName zastosować tylko to, co poniżej, czyli
            po prostu navigate('string z nazwą')*/}
            <Button title='Przejdź dalej' onPress={() => {
                props.navigation.navigate('Przepisy')
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

export default CategoriesScreen
