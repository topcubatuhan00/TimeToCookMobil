import { StyleSheet, Dimensions } from "react-native";

const windowHeight = (Dimensions.get("window").height) - 100;
const innerHeight = (Dimensions.get("window").height) - 300

export default StyleSheet.create({
    baseContainer: {
        height: windowHeight,
        backgroundColor: '#DBE2EF'
    },
    container: {
        // height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#DBE2EF'
    },
    button: {
        backgroundColor: 'red'
    },
    listContainer: {
        maxHeight: innerHeight,
        overflow: 'scroll'
    },
    addContainer:{
        borderTopWidth: 2,
        borderTopColor: '#112D4E',
    },
    input: {
        borderWidth: 1,
        borderColor: '#112D4E',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 9,
        borderRadius: 20,
        padding: 10,
    }
});