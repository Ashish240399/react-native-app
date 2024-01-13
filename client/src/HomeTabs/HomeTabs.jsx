import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/tabs/Home";
import Category from "../pages/tabs/Category";
import Favorites from "../pages/tabs/Favorites";
import More from "../pages/tabs/More";

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
