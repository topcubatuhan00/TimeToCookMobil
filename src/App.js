import React, { useState, useEffect } from "react";
import { SafeAreaView, TextInput, View, Button, Text, FlatList, Keyboard, Modal, TouchableHighlight, Image } from "react-native";
import Header from "./components/Header/Header";
import styles from './App.style'
import ProductCard from "./components/ProductCard/ProductCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-modern-datepicker'
import { TextField } from "native-base";

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
                setAddVisible(false);
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
                {
                    listItems.length > 0 || addVisible ?
                        <FlatList
                            data={listItems}
                            renderItem={renderItem}
                        />
                        :
                        <View>
                            <Text style={{ fontSize: 38, textAlign: 'center', marginTop: 250 }}>Listeleneck Ürün Bulunamadı Yenisi Ekle</Text>
                            <Image style={styles.arrow} source={{ uri: 'https://t3.ftcdn.net/jpg/05/94/38/92/360_F_594389223_fK28cMRlNoIfKGUE1Y9l6abCnsC28CrI.jpg' }} />
                        </View>
                }
            </View>

            <Modal style={styles.addModal} visible={addVisible}>
                <View>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={handleNameChange}
                        placeholder="Ürün Adını Girin"
                        placeholderTextColor="#FFF"
                    />
                    <View>
                        <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold',color:'#EF6262'}}>Son Kullanma Tarihini Seçiniz</Text>
                        <DatePicker
                            mode='calendar'
                            selected={date}
                            onDateChange={handleDateChange} 
                        />
                    </View>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableHighlight onPress={() => setAddVisible(!addVisible)} underlayColor={'transparent'} style={{width:100, backgroundColor:'#FF6666',padding:7,marginRight:5,borderRadius:10}}><Text style={{textAlign:'center',fontSize:20,color:'#FFF'}}>Kapat</Text></TouchableHighlight>
                    <TouchableHighlight disabled={!name && !date} onPress={handleAddItem} underlayColor={'transparent'} style={[{width:100, backgroundColor:'#898121',padding:7,marginLeft:5,borderRadius:10},!name && !date && {opacity: .5}]}><Text style={{textAlign:'center',fontSize:20,color:'#FFF'}}>Kaydet</Text></TouchableHighlight>
                </View>
            </Modal>
            <View style={[styles.addButonBottom, addVisible && { display: 'none' }]}>
                <TouchableHighlight onPress={() => setAddVisible(true)} underlayColor={'transparent'}>
                    <Text style={styles.addButonBottomText}>+</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

export default App;
