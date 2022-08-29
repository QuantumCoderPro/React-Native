import React from "react";
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, StatusBar} from 'react-native'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#420025"/>
           
            {/*<Image style={styles.titleImage} source={require('./signin.png')}/>*/}
            <Image style={styles.titleImage} source={{uri:"https://image.shutterstock.com/image-vector/lock-reload-icon-isolated-on-600w-1593519457.jpg"}}/>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Enter Your Email</Text>
                <TextInput style={styles.textField} placeholder={'Enter Your Email'}/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("SignIn")}>
                <Text style={styles.btnText}>Sent OneTime Password</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#722F37",
    },
    titleImage: {
        width: 180,
        height: 160,
        alignSelf: "center"
    },
    textScr: {
        color: "white",
        fontSize: 20,
    },
    inputContainer: {
        width: '80%',
        paddingTop: "2%",
        paddingBottom: "2%",
    },
    textField: {
        backgroundColor: "white",
        padding: "2%",
        borderRadius: 6,
    },
    headField: {
        marginTop: 15,
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    btn: {
        marginTop: 20,
        backgroundColor: '#32CD32',
        borderRadius: 10,
        width: 250,
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    }
})
export default SignIn