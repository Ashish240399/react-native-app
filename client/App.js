import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import ProductDetailsPage from "./src/pages/ProductDetailsPage";
import CartPage from "./src/pages/CartPage";
import HomeTabs from "./src/HomeTabs/HomeTabs";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
      >
        <MainStack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="ProductDetails"
          component={ProductDetailsPage}
          // options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Cart"
          component={CartPage}
          // options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
