import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../../API/Context";

const SharePage = () => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View style={{ flex: 1, backgroundColor: darkTheme ? "black" : "white" }}>
      <Text style={{ color: darkTheme ? "white" : "black" }}>SharePage</Text>
    </View>
  );
};

export default SharePage;
