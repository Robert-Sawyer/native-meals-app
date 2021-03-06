import React from 'react'
import {FlatList} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from "../components/HeaderButton";
import {CATEGORIES} from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate('CategoryMealsScreen',
                        //dodaję parametry z tego ekranu na następny, żeby można było wyświetlić tylko przepisy z tej jednej
                        // kategorii
                        {
                            categoryId: itemData.item.id,
                        })
                }}/>
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}/>
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Kategorie',
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

export default CategoriesScreen

// Tworzę poniżej button w celu przejścia na inna stronę w nawigacji, konkretnie z przepisami z jednej kuchni
// wewnątrz obiektu props jest wiele różnych wbudowanych metod m.in. navigation, która pozwala na wykorzystanie
// funkcji navigate któa przyjmuje obiekt a w nim we właściwości routeName wpisuję jako string nazwę
// ekranu, który ma się wyrenderować w momencie kliknięcia w button. nazwa musi być taka sama jak
// w MealsNavigator
// UPDATE: alternatywnie można zamiast obiektu i routeName zastosować tylko to, co poniżej, czyli
// po prostu navigate('string z nazwą')
// Są inne alternatywne sposoby na wyrendereowanie strony poprzez nawigację,
// np. poprzez .push('Przepisy') - wtedy można przechodzić w kółko do tego samego ekranu, tzn nawet
// jeśli przechodzę z ekranu Przepisy na ekran Przepisy to i tak nastąpi przejście, tylko, że do tego samego
// ekranu (zastosowanie przy przechodzeniu z folderu do folderu ale z inną zawartością w apkach typu DropBox)
// poprzez .goBack(), albo pop() - bez zawartości. Te metody usuwają ekran ze stosu i wracają na poprzedni ekran.
// poprzez .popToTop() - wraca do pierwszej strony (pierwszej na początku na stosie),
// poprzez .replace('Przepisy') - zastępuje ekran na stosie; usuwa ze stosu pierwotnie pierwszy i ustawia nowy
// ekran na dole stosu - nie można wrócić do pierwotnie pierwszej strony (ma zastosowanie np. po logowaniu,
//     gdy user się loguje i nie chcę, żeby mógł wrócić do ekranu logowania bez wcześniejszego wylogowania)

// <Button title='Przejdź dalej' onPress={() => {
//     props.navigation.navigate('Przepisy')
// }} />
