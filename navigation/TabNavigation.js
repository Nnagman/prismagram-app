import React from "react";
import { View, Platform } from "react-native";
import NavIcon from "../components/NavIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import Detail from "../screens/Detail";
import MessagesLink from "../components/MessagesLink";
import { stackStyles } from "./config";
import styles from "../styles";

const Tab = createBottomTabNavigator();

const stackFactory = (initialRoute) => {
  let Stack = createStackNavigator();
  let { name, params } = initialRoute.route;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { ...stackStyles },
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name={name}
        component={params.routeName}
        options={params.customConfig}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerTintColor: styles.blackColor, title: "Photo" }}
      />
    </Stack.Navigator>
  );
};

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#FAFAFA",
        },
      }}
      initialRouteName={"Search"}
    >
      <Tab.Screen
        name="Home"
        component={stackFactory}
        initialParams={{
          routeName: Home,
          customConfig: {
            title: "Home",
            headerRight: () => <MessagesLink />,
            headerTitle: <NavIcon name="logo-instagram" size={36} />,
            tabBarIcon: ({ focused }) => (
              <NavIcon
                focused={focused}
                name={Platform.OS === "ios" ? "ios-home" : "md-home"}
              />
            ),
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={stackFactory}
        initialParams={{
          routeName: Search,
          customConfig: {
            headerBackTitle: null,
            tabBarIcon: ({ focused }) => (
              <NavIcon
                focused={focused}
                name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              />
            ),
          },
        }}
      />
      <Tab.Screen
        name="Add"
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("PhotoNavigation");
          },
        })}
        component={View}
        initialParams={{
          customConfig: {
            tabBarIcon: ({ focused }) => (
              <NavIcon
                focused={focused}
                size={32}
                name={
                  Platform.OS === "ios"
                    ? "ios-add-circle-outline"
                    : "md-add-circle-outline"
                }
              />
            ),
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={stackFactory}
        initialParams={{
          routeName: Notifications,
          customConfig: {
            title: "Notifications",
            tabBarIcon: ({ focused }) => (
              <NavIcon
                focused={focused}
                name={
                  Platform.OS === "ios"
                    ? focused
                      ? "ios-heart"
                      : "ios-heart-empty"
                    : focused
                    ? "md-heart"
                    : "md-heart-empty"
                }
              />
            ),
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={stackFactory}
        initialParams={{
          routeName: Profile,
          customConfig: {
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <NavIcon
                focused={focused}
                name={Platform.OS === "ios" ? "ios-person" : "md-person"}
              />
            ),
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
