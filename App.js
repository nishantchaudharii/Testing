import "react-native-gesture-handler";
import React, { useContext } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Context, { NewsContext } from "./API/Context";
import Navigation from "./Components/Navigation";

function App() {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View style={{ flex: 1, backgroundColor: darkTheme ? "black" : "white" }}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Navigation />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
