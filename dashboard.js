import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native';

const DashBoard = ({navigation}) => {
    return (
        <View style={styles.container}>
              <Image style={styles.titleImage} source={{uri:"https://cdn.dribbble.com/users/6864812/screenshots/14994170/media/db2d45859cd6f9745355502112b89bb1.png"}}/>

              <ImageBackground source={Image} resizeMode="cover" style={styles.Image}>
      <Text style={{color:"#8b0000", fontSize:55}}>SL GAS</Text>
    </ImageBackground>

            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("details")}>
                <Text style={styles.btnText}>LP GAS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("SignIn")}>
                <Text style={styles.btnText}>Live Queue Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("SignIn")}>
                <Text style={styles.btnText}>Notifications</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF6347"
    },
    titleImage: {
        width: 100,
        height: 100,
        alignSelf: "center",
        flex: 1,
        backgroundColor: "black",
    },
    textScr: {
        color: "white",
        fontSize: 20,
    },
    inputContainer: {
        alignItems:"center",
        width: '80%',
        paddingTop: "2%",
        paddingBottom: "2%",
    },
   
    btn: {
        marginTop: 20,
        backgroundColor: '#7f678e',
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

export default DashBoard