import React from "react";
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, StatusBar, ImageBackground} from 'react-native'

const SignIn = ({navigation}) => {
    return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#D3D3D3"/>

                
                {/*<Image style={styles.titleImage} source={require('./signin.png')}/>*/}
                <Image style={styles.titleImage} source={{uri:"https://cdn.vectorstock.com/i/1000x1000/78/67/books-icon-sign-icon-or-logo-design-with-three-vector-9177867.webp"}}/>

                <View style={styles.container}>
    <ImageBackground source={Image} resizeMode="cover" style={styles.Image}>
      <Text style={{color:"white", fontSize:55}}>Books World</Text>
    </ImageBackground>
  </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.headField}>Email</Text>
                    <TextInput style={styles.textField} placeholder={'Enter Your Email'}/>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.headField} >Password</Text>
                    <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Your Password'} />
                </View>

                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("DashBoard")}>
                    <Text style={styles.btnText}>SignIn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn2} onPress={()=>navigation.navigate("signup")}>
                    <Text style={styles.btnText2}>Signup</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate("Forgot")}>
                    <Text style={{color:"white",marginTop:10, marginBottom: 20}}>Forgot Password</Text>
                </TouchableOpacity>

            </View>
    )

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#722F37"
    },
    titleImage: {
        width: 150,
        height: 186,
        alignSelf: "center",
        flex: 1,
        backgroundColor: "black",
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
        backgroundColor: "#fff0e1",
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
        marginBottom: 10,
        backgroundColor: '#009933',
        borderRadius: 10,
        width: 300,
        alignItems: "center"
    },
    btn2: {
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        width: 300,
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    },
    btnText2: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    }
})
export default SignIn