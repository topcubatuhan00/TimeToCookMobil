import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ProductCard.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductCard = ({ product, getStoredItems }) => {

    const [className, setClassName] = useState(false)
    const [diffDay, setDiffDay] = useState()

    const deleteProduct = async () => {
        const storedItems = await AsyncStorage.getItem('items');
        const parsedItems = storedItems ? JSON.parse(storedItems) : [];
        const updatedItems = parsedItems.filter(item => item.name !== product.name);
        await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
        getStoredItems()
    }

    useEffect(() => {
        const today = new Date();
        const [year, month, day] = product.date.split('/');
        const target = new Date(year, month - 1, day);
        today.setHours(0, 0, 0, 0);
        target.setHours(0, 0, 0, 0);
        const differenceInMilliseconds = target - today;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        setDiffDay(differenceInDays)
        if (differenceInDays <= 1) {
            setClassName(true)
        }
        if (differenceInDays <= 0) {
            // deleteProduct()
        }

    }, [product.date]);

    return (
        <View style={styles.BaseContainer}>
            <View style={diffDay <= 0 ? styles.Dangercontainer : diffDay <= 1 ? styles.Warningcontainer : styles.container}>
                <Text style={styles.date}>{diffDay <= 0 ? 'Son Kullanma Tarihi Geçmiş Ürün' : diffDay <= 1 ? 'Bugün tüketilmeli' : `${diffDay} Gün Ömrü Kaldı`}</Text>
                <Text style={styles.text}>{product.name}</Text>
            </View>
            {/* <TouchableOpacity onPress={async () => {
                deleteProduct()
            }}>
                <Text style={styles.deleteButton}>Sil</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default ProductCard;
