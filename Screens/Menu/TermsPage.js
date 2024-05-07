import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../../API/Context";

const TermsPage = () => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View style={{ flex: 1, backgroundColor: darkTheme ? "black" : "white" }}>
      <Text style={{ color: darkTheme ? "white" : "black" }}>TermsPage</Text>
    </View>
  );
};

export default TermsPage;