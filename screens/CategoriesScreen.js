import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Some text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    styles: {
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
})

export default CategoriesScreen
