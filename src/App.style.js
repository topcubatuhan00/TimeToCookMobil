import { StyleSheet, Dimensions } from "react-native";

const windowHeight = (Dimensions.get("window").height) - 200;
const Height = (Dimensions.get("window").height)-24;

export default StyleSheet.create({
    baseContainer: {
        height: Height
    },
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
        backgroundColor: '#544E50',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
    },
    SKTButton: {
        backgroundColor: '#544E50',
    },
    SKTButtonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        letterSpacing: 1,
    },
    input: {
        backgroundColor: '#544E50',
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    date: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: '#544E50',
        color: '#E9E3E3'
    },
    addButonBottom: {
        backgroundColor: '#544E50',
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 10,
        borderRadius: 50,
        width: 80,
    },
    addButonBottomText: {
        fontSize: 48,
        textAlign: 'center',
        color: '#E9E3E3',
        backgroundColor: 'transparent',
    },
    subAddContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        backgroundColor: '#544E50'
    }
});