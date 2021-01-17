import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons'

const CustomHeaderButton = props => {
    //poprzez {...props} przekazuję do komponentu wszystkie propsy naraz
    return <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color='#fff'/>
}

export default CustomHeaderButton
