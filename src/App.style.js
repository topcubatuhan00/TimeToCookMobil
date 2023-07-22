import { StyleSheet, Dimensions } from "react-native";

const windowHeight = (Dimensions.get("window").height);

export default StyleSheet.create({
    baseContainer: {
        height: windowHeight,
        backgroundColor: '#112D4E',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#112D4E',
        padding: 20,
    },
    addContainer:{
        borderTopWidth: 2,
        borderTopColor: '#112D4E',
        backgroundColor: '#3F72AF',
        borderRadius: 20,
        margin: 20
    },
    input: {
        backgroundColor: '#DBE2EF',
        borderWidth: 1,
        borderColor: '#112D4E',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 9,
        borderRadius: 20,
        padding: 10,
    },
    date: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    }
});