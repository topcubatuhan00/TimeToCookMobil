import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Modal, TouchableWithoutFeedback, FlatList, Alert } from 'react-native';
import styles from './ProductCard.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from './meals'

const ProductCard = ({ product, getStoredItems }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [diffDay, setDiffDay] = useState()
    const [meals, setMeals] = useState([])

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
    }, [product.date]);

    const handleClickProduct = () => {
        setModalVisible(true)

        const selectedProductData = data.find((item) => item.item === product.name.toLowerCase());
        if (selectedProductData) {
            setMeals(selectedProductData.meal)
        } else {
            Alert.alert(
                'Tarif Bulunamadı',
                'Bu ürüne ait tarif bilgisi bulunamadı.'
            )
        }
    }

    const renderReceipe = ({ item }) => (
        <View style={styles.receipeView}>
            <Text style={styles.receipeName}>
                {item.name}
            </Text>
            <Text style={styles.receipeDescription}>
                {item.recipe}
            </Text>
        </View>
    )

    const handleClickRemoveItemButton = () => {
        deleteProduct();
        setModalVisible(false)
    }

    return (
        <View style={styles.BaseContainer}>
            <TouchableOpacity onPress={async () => {
                deleteProduct()
            }}>
                <Text style={styles.deleteButton}>
                    🗑️
                </Text>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => handleClickProduct()} >
                <View style={diffDay <= 0 ? styles.Dangercontainer : diffDay <= 1 ? styles.Warningcontainer : styles.container}>
                    <Text style={styles.date}>{diffDay <= 0 ? 'Son Kullanma Tarihi Geçmiş Ürün' : diffDay <= 1 ? 'Bugün tüketilmeli' : `${diffDay} Gün Ömrü Kaldı`}</Text>
                    <Text style={styles.text}>{product.name}</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible && meals.length > 0}>
                <Text style={styles.receipeTitle}>İstersen Bu Yemekleri Deneyebilirsin</Text>
                <FlatList
                    data={meals}
                    renderItem={renderReceipe}
                />
                <View style={styles.receipeButtonContainer}>
                    <View>
                        <TouchableOpacity
                            style={styles.receipeCloseButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.receipeCloseButtonText}>
                                Kapat
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.receipeButtonRemove}
                            onPress={() => handleClickRemoveItemButton()}
                        >
                            <Text style={styles.receipeButtonRemoveItem}>
                                Yiyeceği Kaldır
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ProductCard;
