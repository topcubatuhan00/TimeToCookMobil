import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ProductCard.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductCard = ({ product, getStoredItems }) => {
    return (
        <View style={styles.BaseContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>{product.name}</Text>
                <Text style={styles.date}>{product.date}</Text>
            </View>
            <TouchableOpacity onPress={async () => {
                const storedItems = await AsyncStorage.getItem('items');
                const parsedItems = storedItems ? JSON.parse(storedItems) : [];
          
                // Step 2: Remove the product from the list
                const updatedItems = parsedItems.filter(item => item.name !== product.name);
                await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
                getStoredItems()
            }}>
                <Text style={styles.deleteButton}>Sil</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductCard;
