import React, { useContext, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NewsContext } from "../../API/Context";

const RegisterScreen = () => {
  const { darkTheme } = useContext(NewsContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();
  const handleSubmit = async () => {
    try {
      const userData = {
        name,
        email,
        password,
      };

      const response = await fetch("YOUR_BACKEND_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful
        Alert.alert("Success", "Account created successfully!");
        navigation.navigate("Home"); // Navigate to the homepage
      } else {
        // Registration failed
        Alert.alert("Error", data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "An error occurred while creating the account");
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
        Register
      </Text>
      <Text
        style={{ ...styles.inputName, color: darkTheme ? "white" : "black" }}
      >
        Name
      </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(e) => {
          setName(e);
        }}
      />
      <Text
        style={{ ...styles.inputName, color: darkTheme ? "white" : "black" }}
      >
        Email
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(e) => {
          setEmail(e);
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
        onChange={(e) => {
          setPassword(e);
        }}
      />
      <Text
        style={{ ...styles.inputName, color: darkTheme ? "white" : "black" }}
      >
        Confirm Password
      </Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        secureTextEntry={true}
        onChange={(e) => {
          setConfirmPassword(e);
        }}
      />
      {/* <View style={styles.termsContainer}>
        <CheckBox value={termsAccepted} onValueChange={toggleTermsAcceptance} />
        <Text style={styles.termsText}>I accept the terms and conditions</Text>
      </View> */}
      <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
        <Text style={{ color: darkTheme ? "white" : "black" }}>Register</Text>
      </TouchableOpacity>
      <Text style={{ color: darkTheme ? "white" : "black" }}>
        Already have an account?{" "}
        <Text
          onPress={() => navigation.navigate("Login")}
          style={{ color: "blue" }}
        >
          Login
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
  registerButton: {},
});
export default RegisterScreen;
