import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#112D4E',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#DBE2EF',
        borderBottomWidth: 2, 
    },
    image: {
        width: 170,
        height: 90,
        borderRadius: 100,
    },
    text:{
        fontStyle: 'italic',
        color: '#F9F7F7',
        fontSize: 24,
    }
})