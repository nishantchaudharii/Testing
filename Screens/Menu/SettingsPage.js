import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import React, { useContext, useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { NewsContext } from "../../API/Context";
import { useNavigation } from "@react-navigation/native";

const SettingsPage = () => {
  const { darkTheme, setDarkTheme } = useContext(NewsContext);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const toggleNotificationSwitch = () => setIsNotificationEnabled((e) => !e);
  const toggleNightSwitch = () => {
    setDarkTheme(!darkTheme);
  };
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "black" : "white",
      }}
    >
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Category")}
      >
        <Text style={styles.text}>Categories</Text>
      </TouchableOpacity>
      <View style={styles.toggle}>
        <Text style={styles.text}>Notification</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotificationSwitch}
          value={isNotificationEnabled}
        />
      </View>
      <View style={styles.toggle}>
        <Text style={styles.text}>Night Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkTheme ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNightSwitch}
          value={darkTheme}
        />
      </View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Notification")}
      >
        <Text style={styles.text}>Read Aloud Feature</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(2.5),
    flexDirection: "row",
  },
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(1.5),
  },
  text: {
    color: "grey",
    fontWeight: "600",
    fontSize: hp(2),
  },
});
export default SettingsPage;
