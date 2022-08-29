import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  SectionList,
  Pressable,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NavigateToBooks = (props) =>{
  props.navigation.navigate("DashBoard");
};
const image2 ={
  uri:"https://media.istockphoto.com/photos/open-book-and-steaming-cup-of-coffee-on-wooden-table-picture-id1334372779?b=1&k=20&m=1334372779&s=170667a&w=0&h=lfTulHKBslG9K9UFwiV6IaM9B5eRM7wIGgWYr-BNb9A="
};

function Home1(props) {
  return (
    <View style={[
      styles.container,
      {
        flexDirection:"column",
      },
    ]}>
      <Image source={image2} style={styles.image}/>
      <View style={[styles.flexbox1, {flex:1,backgroundColor:"black"}]}>
        <Text style={styles.wellcome}>Welcome to Book World</Text>
      </View>

      <View style ={{flex:1, backgroundColor:"#F3E6F0"}}>
        <View
        style={{
          flex:1,
          flexDirection:"row",
          justifyContent:"space-between",
          marginVertical:30,
          padding:10,
        }}
        >
          <View style={{width:160, height:110, backgroundColor: "white"}}>
            <View style={styles.signupButto}>
              <TouchableOpacity
              onpress={() => navigation.navigate("DashBoard")}
              style={styles.obaz}>
<Text style ={styles.as}>Books</Text>
              </TouchableOpacity>
              </View>
              </View>

              <View style={{ width: 160, height: 110, backgroundColor: "white" }}>
            <View style={styles.signupButto}>
              <TouchableOpacity style={styles.obaz}>
                <Text style={styles.as}>About Us</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    
    
    </View>
  );
}

   

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical:100, backgroundColor:"#2a4d69" }}>
      
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ 
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#2a4d69" }}>

      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const Book_App = (props) =>{
  return (
    <Tab.Navigator
      initialRouteName="Home1"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "#009688" }}
    >
      <Tab.Screen
        name="Home1"
        component={Home1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={"black"} size={24} />
          ),
}}/> 
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={"black"} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
 
 container: {
  flex: 1,
 },
 wellcome:{
   fontWeight:"bold",
   fontSize:30,
   color:"white",
   textShadowRadius:100,
   textShadowColor:"black",
 },
 flexbox1:{
   justifyContent:"center",
   alignItems:"center",
   margin:5,
 },
 signupButto:{},
 button:{
   alignItems:"center",
   justifyContent:"center",
   paddingVertical:12,
   paddingHorizontal:32,
   borderRadius:4,
   elevation:3,
   backgroundColor:"white",
   height:100,
   borderRadius:10,
 },
 text:{
  fontSize: 16,
  lineHeight: 21,
  fontWeight: "bold",
  letterSpacing: 0.25,
  color: "#ee4035",
 },
 obaz: {
  backgroundColor: "#03396c",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
},
as: {
  fontSize: 18,
  fontWeight: "bold",
  color: "white",
},
image: {
  justifyContent: "center",
  height: 80,
  margin: 5,
  borderRadius: 10,
},
});

export default Book_App;  
