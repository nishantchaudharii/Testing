import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NewsContext } from "../../API/Context";

const LoginScreen = () => {
  const { darkTheme } = useContext(NewsContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleSubmit = async (email, password) => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert("Login Successful");
        navigation.navigate("News");
      } else {
        Alert.alert("Login Failed", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while logging in");
    }
  };
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "black" : "white",
      }}
    >
      <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
        Login
      </Text>
      <Text
        style={{ ...styles.inputName, color: darkTheme ? "white" : "black" }}
      >
        Email id
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
      />
      <Text
        style={{ ...styles.inputName, color: darkTheme ? "white" : "black" }}
      >
        Password
      </Text>
      <TextInput
        style={styles.input}
        value={password}
        secureTextEntry={true}
        onChange={(password) => {
          setPassword(password);
        }}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={{ color: darkTheme ? "white" : "black" }}>Login</Text>
      </TouchableOpacity>
      <Text style={{ color: darkTheme ? "white" : "black" }}>
        Don't have an account?{" "}
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{ color: "blue" }}
        >
          Register
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
