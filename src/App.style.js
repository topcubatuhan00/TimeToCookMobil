import { StyleSheet, Dimensions } from "react-native";

const windowHeight = (Dimensions.get("window").height) - 124;

export default StyleSheet.create({
    container: {
        padding: 10,
        paddingRight: 0,
        height: windowHeight,
    },
    addContainer: {
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    button: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#F4717F',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
    },
    SKTButton: {
        backgroundColor: '#D9C8C0',
    },
    SKTButtonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        letterSpacing: 1,
    },
    input: {
        backgroundColor: '#F4717F',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        color: 'white',
        fontSize: 20,
        paddingLeft: 30,
    },
    date: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: '#D9C8C0'
    },
    addButonBottom: {
        backgroundColor: '#F4717F',
        position: 'absolute',
        // top: 300,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        width: 100,
    },
    addButonBottomText: {
        fontSize: 48,
        color: 'white',
    }
});