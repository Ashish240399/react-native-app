import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import ProductDetailsPage from "./src/pages/ProductDetailsPage";
import CartPage from "./src/pages/CartPage";
import HomeTabs from "./src/HomeTabs/HomeTabs";
import CartContextProvider from "./src/context/cart/CartContextProvider";
import FavContextProvider from "./src/context/favorites/FavContextProvider";
import ProductContextProvider from "./src/context/products/ProductContextProvider";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <ProductContextProvider>
        <CartContextProvider>
          <FavContextProvider>
            <NavigationContainer>
              <MainStack.Navigator
                initialRouteName="HomePage"
                screenOptions={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                  headerShown: false,
                }}
              >
                <MainStack.Screen
                  name="HomePage"
                  component={HomeTabs}
                  options={{ headerShown: false }}
                />
                <MainStack.Screen
                  name="ProductDetails"
                  component={ProductDetailsPage}
                  options={{ headerShown: false }}
                />
                <MainStack.Screen
                  name="Cart"
                  component={CartPage}
                  options={{ headerShown: false }}
                />
              </MainStack.Navigator>
            </NavigationContainer>
          </FavContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // overflow: "hidden",
  },
});
