import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native';

const DashBoard = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <View style={styles.container}>
            
                    <TextInput style={styles.textField} placeholder={'Book Name'}/>
                    <TextInput style={styles.textField} placeholder={'Book Author'}/>
       
                </View>

                

                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("details")}>
                    <Text style={styles.btnText}>Search</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#bda685"
    },
    
    textScr: {
        color: "white",
        fontSize: 20,
    },
    inputContainer: {
        alignItems:"center",
        width: '100%',
        paddingTop: "10%",
        paddingBottom: "30%",
        
    },
    textField: {
        padding: "10%",
        borderRadius: 6,
        backgroundColor:"white",
        marginBottom: 30,

       
    },
   
    btn: {
        marginBottom: 10,
        backgroundColor: '#009933',
        borderRadius: 10,
        width: 370,
        alignItems: "center"
    
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        alignItems: "center"
    }
   
})

export default DashBoard