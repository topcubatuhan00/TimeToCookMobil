import React, { useState, useEffect } from "react";
import { SafeAreaView, TextInput, View, Button, Text, FlatList, Keyboard, Modal, TouchableHighlight } from "react-native";
import Header from "./components/Header/Header";
import styles from './App.style'
import ProductCard from "./components/ProductCard/ProductCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-modern-datepicker'

function App() {
    const [name, setnameValue] = useState("");
    const [date, setDate] = useState();
    const [listItems, setListItems] = useState([]);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [addVisible, setAddVisible] = useState(false);

    const handleNameChange = (text) => {
        setnameValue(text);
    };

    const handleDateChange = (propDate) => {
        setDate(propDate);
    };

    const handleAddItem = async () => {
        if (name.trim() !== "") {
            const newItem = { name: name, date: date };
            setnameValue("");
            setDate("")

            try {
                const storedItems = await AsyncStorage.getItem('items');
                const parsedItems = storedItems ? JSON.parse(storedItems) : [];
                const updatedItems = [...parsedItems, newItem];
                await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
            } catch (error) {
                console.log(error);
            }
        }

        const getStoredItems = async () => {
            try {
                const storedItems = await AsyncStorage.getItem('items');
                const parsedItems = storedItems ? JSON.parse(storedItems) : [];
                setListItems(parsedItems);
            } catch (error) {
                console.log(error);
            }
        };

        getStoredItems();

    };
    const getStoredItems = async () => {
        try {
            const storedItems = await AsyncStorage.getItem('items');
            const parsedItems = storedItems ? JSON.parse(storedItems) : [];
            setListItems(parsedItems);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getStoredItems();
    }, []);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const renderItem = ({ item }) => <ProductCard product={item} getStoredItems={getStoredItems} />

    return (
        <SafeAreaView style={styles.baseContainer}>
            <Header style={styles.header} />
            <View style={styles.container}>
                <View style={[styles.listContainer]}>
                    <FlatList
                        data={listItems}
                        renderItem={renderItem}
                    />
                </View>
            </View>
            <View style={[styles.addContainer, isKeyboardOpen && { flex: 1, bottom: 250 }, !addVisible && { display: 'none' }]}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={handleNameChange}
                    placeholder="Ürün Adını Girin"
                    placeholderTextColor="#FFF"
                />
                {
                    date?.length > 0 ?
                        <Text style={styles.date}>SKT: {date}</Text>
                        :
                        <TouchableHighlight style={styles.SKTButton} onPress={() => setVisible(true)}>
                            <Text style={styles.SKTButtonText}>Son Kullanma Tarihi Sec</Text>
                        </TouchableHighlight>
                }
                <Modal visible={visible}>
                    <DatePicker
                        mode='calendar'
                        selected={date}
                        onDateChange={handleDateChange}
                    />
                    <Button color={'#112D4E'} onPress={() => setVisible(false)} title="Tamam" />
                </Modal>
                <TouchableHighlight style={styles.button} disabled={!name && !date} onPress={handleAddItem} >
                    <Text style={styles.buttonText}>Ekle</Text>
                </TouchableHighlight>
            </View>
            <View style={[styles.addButonBottom, addVisible && { display: 'none' }]}>
                <TouchableHighlight onPress={() => setAddVisible(true)}>
                    <Text style={styles.addButonBottomText}>+</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

export default App;
