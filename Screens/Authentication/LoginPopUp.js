import React from "react";
import { Modal, StyleSheet, View } from "react-native";

const LoginPopUp = ({ children, isVisible }) => {
  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
});

export default LoginPopUp;
