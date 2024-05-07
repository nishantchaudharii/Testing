import { Text, View } from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../../API/Context";

const ProfileScreen = () => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View style={{ flex: 1, backgroundColor: darkTheme ? "black" : "white" }}>
      <Text style={{ color: darkTheme ? "white" : "black" }}>
        ProfileScreen
      </Text>
    </View>
  );
};

export default ProfileScreen;
