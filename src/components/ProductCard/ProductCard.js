import React from 'react';
import { Text, View } from 'react-native';
import styles from './ProductCard.style'

const ProductCard = ({product}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{product.name}</Text>
            <Text style={styles.date}>{product.date}</Text>
        </View>
    )
}

export default ProductCard;