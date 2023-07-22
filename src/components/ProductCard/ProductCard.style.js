import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 20,
        margin: 10,
        borderRadius: 15,
        backgroundColor: '#DBE2EF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    BaseContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },
    Dangercontainer: {
        padding: 20,
        margin: 10,
        borderRadius: 15,
        backgroundColor: '#EB6440',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
    },
    deleteButton:{
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
    }
})