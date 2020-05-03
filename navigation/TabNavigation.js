import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import MessagesLink from "../components/MessagesLink";

const Tab = createBottomTabNavigator();

const stackFactory = (initialRoute) => {
  let Stack = createStackNavigator();
  let { name, params } = initialRoute.route;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={params.routeName}
        options={params.customConfig}
      />
    </Stack.Navigator>
  );
};

function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={stackFactory}
        initialParams={{
          routeName: Home,
          customConfig: {
            title: "Home",
            headerRight: () => <MessagesLink />,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={stackFactory}
        initialParams={{ routeName: Search, customConfig: { title: "Search" } }}
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
      />
      <Tab.Screen
        name="Notifications"
        component={stackFactory}
        initialParams={{
          routeName: Notifications,
          customConfig: { title: "Notifications" },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={stackFactory}
        initialParams={{
          routeName: Profile,
          customConfig: { title: "Profile" },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
