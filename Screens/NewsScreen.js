import React, { useContext, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NewsContext } from "../API/Context";
import SingleNews from "../Components/SingleNews";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import LoginPopUp from "./Authentication/LoginPopUp";
import { newsdata } from "../API/data";

const NewsScreen = () => {
  const swiperRef = useRef(null);
  const navigation = useNavigation();
  const data = newsdata;
  const { darkTheme } = useContext(NewsContext);
  //const { news: data } = useContext(NewsContext);
  const [isModalVisible, setModalVisible] = useState(false);

  //const [activeIndex, setActiveIndex] = useState(0);
  const scrollBack = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(0);
    }
  };

  const handleIndexChanged = (index) => {
    if (index >= 3) {
      scrollBack();
      setModalVisible(true);
      console.log(isModalVisible);
      console.log(index);
    }
  };
  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        horizontal={false}
        showsPagination={false}
        //onIndexChanged={handleIndexChanged}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slide}>
            <SingleNews item={item} />
          </View>
        ))}
      </Swiper>
      <LoginPopUp isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: darkTheme ? "white" : "black" }}>Login</Text>
          </TouchableOpacity>
          <Text
            style={{ marginBottom: 10, color: darkTheme ? "white" : "black" }}
          >
            Or
          </Text>

          <Text
            onPress={() => navigation.navigate("Register")}
            style={{ color: "blue" }}
          >
            Register
          </Text>
        </View>
      </LoginPopUp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalContent: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});

export default NewsScreen;
