import React from "react";
import { Image, SafeAreaView, Text } from "react-native";
import styles from './Header.style'

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../images/logo-color.png')} style={styles.image} />
        </SafeAreaView>
    )
}

export default Header;