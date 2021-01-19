import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from "./MealItem";

const MealList = props => {

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetailsScreen',
                        {
                            mealId: itemData.item.id,
                            //przesyłam dodatkowy parametr do komponentu ze szczegółami bo nie moge skorzystać
                            //z useselectora w navigationoptions a useEffect i przesyłanie parametru wewnątrz
                            // komponentu będzie działało z opóźnieniem
                            mealTitle: itemData.item.title
                        })
                }}
            />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
})

export default MealList
