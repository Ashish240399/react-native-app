// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "../pages/tabs/Home";
// import Category from "../pages/tabs/Category";
// import Favorites from "../pages/tabs/Favorites";
// import More from "../pages/tabs/More";

// const Tab = createBottomTabNavigator();
// const HomeTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeTab"
//       screenOptions={{ headerShown: false }}
//     >
//       <Tab.Screen name="HomeTab" component={Home} />
//       <Tab.Screen name="Category" component={Category} />
//       <Tab.Screen name="Favorites" component={Favorites} />
//       <Tab.Screen name="More" component={More} />
//     </Tab.Navigator>
//   );
// };

// export default HomeTabs;

// const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/tabs/Home";
import Category from "../pages/tabs/Category";
import Favorites from "../pages/tabs/Favorites";
import More from "../pages/tabs/More";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "More") {
            iconName = focused
              ? "ellipsis-horizontal"
              : "ellipsis-horizontal-outline";
          }

          // You can return any component that you like here!
          return (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                marginTop: focused ? -45 : 0,
              }}
            >
              <View style={focused ? styles.focusedIcon : styles.unfocusedIcon}>
                <Ionicons name={iconName} size={18} color={color} />
                {!focused && <Text style={{ color }}>{route.name}</Text>}
              </View>
            </View>
          );
        },
        tabBarActiveTintColor: "#E0B420",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { display: "flex", width: Dimensions.get("window").width },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="Categories"
        component={Category}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{ tabBarLabel: () => null }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({
  focusedIcon: {
    height: 56,
    width: 56,
    backgroundColor: "black",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  unfocusedIcon: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
