import React, { useContext, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import NewsScreen from "../Screens/NewsScreen";
import CategoryScreen from "../Screens/Settings and Privacy/CategoryScreen";
import RegisterScreen from "../Screens/Authentication/RegisterScreen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ProfileScreen from "../Screens/Settings and Privacy/ProfileScreen";
import PrivacyPage from "../Screens/Menu/PrivacyPage";
import TermsPage from "../Screens/Menu/TermsPage";
import SavedArticles from "../Screens/Menu/SavedArticles";
import RatePage from "../Screens/Menu/RatePage";
import SharePage from "../Screens/Menu/SharePage";
import FeedbackPage from "../Screens/Menu/FeedbackPage";
import LoginScreen from "../Screens/Authentication/LoginScreen";
import { category } from "../API/data";
import NotificationPage from "../Screens/Settings and Privacy/NotificationPage";
import AboutPage from "../Screens/Menu/AboutPage";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Switch,
} from "react-native";
import { NewsContext } from "../API/Context";
import SettingsPage from "../Screens/Menu/SettingsPage";
const categories = category;
const ProfileNavigation = () => {
  const { darkTheme, setDarkTheme } = useContext(NewsContext);
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => (
          <CustomDrawerContent
            {...props}
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
          />
        )}
        screenOptions={{
          headerStyle: {
            backgroundColor: darkTheme ? "black" : "white",
          },
          headerTintColor: darkTheme ? "white" : "black",
        }}
      >
        <Drawer.Screen
          name="Feed"
          component={NewsScreen}
          options={{
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.reloadButton}>
                  <AntDesign
                    name="search1"
                    size={24}
                    color={darkTheme ? "white" : "black"}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reloadButton}>
                  <MaterialCommunityIcons
                    name="reload"
                    size={24}
                    color="#1e90ff"
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Drawer.Screen name="Category" component={CategoryScreen} />
        <Drawer.Screen name="Saved Articles" component={SavedArticles} />
        <Drawer.Screen name="Share App" component={SharePage} />
        <Drawer.Screen name="Rate App" component={RatePage} />
        <Drawer.Screen name="Feedback" component={FeedbackPage} />
        <Drawer.Screen name="Terms & Conditions" component={TermsPage} />
        <Drawer.Screen name="Privacy Policy" component={PrivacyPage} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Notification" component={NotificationPage} />
        <Drawer.Screen name="About" component={AboutPage} />
        <Drawer.Screen name="Settings and Privacy" component={SettingsPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const CustomDrawerContent = ({ navigation, darkTheme, setDarkTheme }) => {
  const [singleCategory, setSingleCategory] = useState("");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  return (
    <ScrollView
      style={{
        ...styles.drawerContent,
        backgroundColor: darkTheme ? "black" : "white",
      }}
    >
      <DrawerItem label="Feed" onPress={() => navigation.navigate("Feed")} />
      <DrawerItem
        label="Saved Articles"
        onPress={() => navigation.navigate("Saved Articles")}
      />
      <TouchableOpacity
        onPress={toggleCategoryDropdown}
        style={styles.drawerItem}
      >
        <Text style={styles.drawerItemText}>Categories</Text>
        <MaterialCommunityIcons
          name={isCategoryDropdownOpen ? "chevron-up" : "chevron-down"}
          size={24}
          color="grey"
        />
      </TouchableOpacity>
      {isCategoryDropdownOpen && (
        <View style={styles.dropdown}>
          {categories.map((category) => (
            <TouchableOpacity
              style={styles.categoryItem}
              key={category.id}
              onPress={() => {
                setSingleCategory(category.id), navigation.navigate("Feed");
              }}
            >
              <Text style={styles.drawerItemText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <DrawerItem
        label="Settings and Privacy"
        onPress={() => navigation.navigate("Settings and Privacy")}
      />
      <DrawerItem
        label="Terms and Conditions"
        onPress={() => navigation.navigate("Terms & Conditions")}
      />
      <DrawerItem label="About" onPress={() => navigation.navigate("About")} />
      <DrawerItem
        label="Privacy Policy"
        onPress={() => navigation.navigate("Privacy Policy")}
      />
      <DrawerItem
        label="Share App"
        onPress={() => navigation.navigate("Share App")}
      />
      <DrawerItem
        label="Rate App"
        onPress={() => navigation.navigate("Rate App")}
      />
      <DrawerItem
        label="Feedback"
        onPress={() => navigation.navigate("Feedback")}
      />
      <DrawerItem label="Logout" />
    </ScrollView>
  );
};

const DrawerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
      <Text style={styles.drawerItemText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggle: {
    flexDirection: "row", // Align children horizontally
    alignItems: "center", // Center children vertically
    justifyContent: "space-between", // Space items evenly
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(1.5),
  },
  reloadButton: {
    paddingRight: hp(2),
  },
  drawerContent: {
    paddingHorizontal: hp(1),
  },
  drawerItem: {
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(2.5),
    flexDirection: "row",
  },
  dropdown: {
    //backgroundColor: "#f9f9f9",
    // paddingVertical: hp(1),
    paddingHorizontal: hp(2),
  },
  drawerItemText: {
    color: "grey",
    fontWeight: "600",
    fontSize: hp(2),
  },
  categoryItem: {
    paddingVertical: hp(1),
    flexDirection: "row",
  },
});

export default ProfileNavigation;
