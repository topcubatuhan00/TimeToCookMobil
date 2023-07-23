import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#DBE2EF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 2,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    BaseContainer:{
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    Dangercontainer: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#F56A4D',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 2,
    },
    Warningcontainer: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#F9D162',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 2,
    },
    deleteButton:{
        fontSize: 28
    }
})