import { StyleSheet, Dimensions } from "react-native";

const windowHeight = (Dimensions.get("window").height) - 215;
const Height = (Dimensions.get("window").height) - 24;

export default StyleSheet.create({
    baseContainer: {
        height: Height
    },
    container: {
        padding: 10,
        paddingRight: 0,
        height: windowHeight,
    },
    input: {
        backgroundColor: '#E7B10A',
        color: 'white',
        fontSize: 20,
        paddingLeft: 10,
        margin: 20,
        borderRadius: 20,
    },
    addButonBottom: {
        backgroundColor: '#435B66',
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 10,
        borderRadius: 50,
        width: 50,
        margin: 5,
    },
    addButonBottomText: {
        fontSize: 26,
        textAlign: 'center',
        color: '#E9E3E3',
        backgroundColor: 'transparent',
    },
    arrow: {
        width: 150, 
        height: 150, 
        position: 'absolute', 
        left: 150, 
        top: 400, 
        transform: [{ rotate: '90deg' }]
    },
    buttonsView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
});