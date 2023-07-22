import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ProductCard.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductCard = ({ product, getStoredItems }) => {

    const [className,SetClassName] = useState(false)

    useEffect(() => {
        const today = new Date();
  
        // targetDate'ı yıl, ay ve gün olarak ayrı elemanlara bölelim
        const [year, month, day] = product.date.split('/');
        
        // Yeni bir Date nesnesi oluşturalım
        const target = new Date(year, month - 1, day);
      
        // Tarihleri sadece gün olarak alalım (saat, dakika, saniye vs. göz ardı edilsin)
        today.setHours(0, 0, 0, 0);
        target.setHours(0, 0, 0, 0);
      
        // İki tarih arasındaki farkı hesaplayalım
        const differenceInMilliseconds = target - today;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
      
        
        if (differenceInDays <= 1) {
            console.log('tarih yaklaşıyor');
            SetClassName(true)
        } else {
            console.log('daha var');
        }

    }, [product.date]);

    return (
        <View style={styles.BaseContainer}>
            <View style={className ? styles.Dangercontainer : styles.container}>
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
