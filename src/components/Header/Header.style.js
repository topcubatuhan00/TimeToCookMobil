import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#544E50',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#DBE2EF',
        borderBottomWidth: 2,
        height: 100,
    },
    image: {
        width: 300,
        height: 90,
        borderRadius: 100,
    },
    text:{
        fontStyle: 'italic',
        color: '#F9F7F7',
        fontSize: 24,
    }
})