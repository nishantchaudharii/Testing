import React, { useContext } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { NewsContext } from "../API/Context";
const SingleNews = ({ item, index }) => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.ImageUrl }} />
      </View>
      <View
        style={{
          ...styles.contentContainer,
          backgroundColor: darkTheme ? "black" : "white",
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.Title}
        </Text>
        <Text
          style={{
            ...styles.description,
            color: darkTheme ? "white" : "black",
          }}
        >
          {item.Description}
        </Text>
        <Text style={styles.source}>
          Short by <Text>{item.author ?? "unknown"} </Text>
        </Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.buttons}>
            <MaterialIcons name="share" size={hp(3.15)} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Feather name="bookmark" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        blurRadius={30}
        source={{ uri: item.ImageUrl }}
        style={styles.backgroundImage}
      >
        <TouchableOpacity onPress={() => Linking.openURL(item.ReadMoreUrl)}>
          <Text style={{ fontSize: hp(1.9), color: "white" }}>
            '{item.ReadMoreText}'
          </Text>
          <Text style={{ fontSize: hp(1.9), color: "white" }}>Read More</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default SingleNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 0.6,
    justifyContent: "flex-start",
    padding: hp(1.89),
  },
  title: {
    fontSize: hp(2.7),
    marginBottom: hp(2),
  },
  description: {
    fontSize: hp(2),
    marginBottom: hp(2),
  },
  source: {
    fontSize: hp(2),
    color: "#696969",
    marginBottom: hp(2),
  },
  backgroundImage: {
    flex: 0.1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingLeft: hp(2),
  },
  options: {
    flexDirection: "row",
  },
  buttons: {
    marginRight: hp(2),
  },
});
