import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function Phototabs() {
  return (
    <Tab.Navigator tabBarPosition="bottom">
      <Tab.screen name="SelectPhoto" component={SelectPhoto} />
      <Tab.screen name="TakePhoto" component={TakePhoto} />
    </Tab.Navigator>
  );
}

function PhotoNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Phototabs" component={Phototabs} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
    </Stack.Navigator>
  );
}

export default PhotoNavigation;
