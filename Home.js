import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function Home({ navigation }) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Clickme = () => {
    AsyncStorage.clear();
    alert("Account Deleted")
    navigation.navigate("Sign In");
  };
  const Click = async () => {
    try {
      await AsyncStorage.setItem("username", name);
      await AsyncStorage.setItem("Password", password);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("Sign In");
  };
  const Clickhere = () => {
    navigation.navigate("My Profile");
  };
   const Click_Map = () => {
     navigation.navigate("Location");
   };
    const Click_Namaz = () => {
      navigation.navigate("Namaz");
    };
     const Click_Context = () => {
       navigation.navigate("Context");
     };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("name").then((value) => {
        if (value != null) {
          setname(value);
        }
      });
      AsyncStorage.getItem("email").then((value) => {
        if (value != null) {
          setemail(value);
        }
      });
      AsyncStorage.getItem("password").then((value) => {
        if (value != null) {
          setpassword(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/img.png")}></Image>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>My email is {email}</Text>
      <TouchableOpacity style={styles.button1} onPress={Clickhere}>
        <Text style={styles.text1}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={Click}>
        <Text style={styles.text1}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={Clickme}>
        <Text style={styles.text1}>Delete Account</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button2} onPress={Click_Map}>
        <Text style={styles.text1}>Map</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.button2} onPress={Click_Namaz}>
        <Text style={styles.text1}>Namaz Timing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={Click_Context}>
        <Text style={styles.text1}>Context API</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
  image: {
    height: 150,
    width: 340,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  button1: {
    height: 40,
    width: 300,
    backgroundColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white",
    marginTop: 50,
    marginLeft: 30,
  },
  button2: {
    height: 40,
    width: 300,
    backgroundColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white",
    marginTop: 10,
    marginLeft: 30,
  },
});
