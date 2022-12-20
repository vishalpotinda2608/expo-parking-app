import { View, Text } from "react-native";
import React from "react";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../Home/HomeScreen";
import SettingsScreen from "../Settings/SettingsScreen";
import ProfileScreen from "../Profile/Profile";
import LoginScreen from "../Login/LoginScreen";
const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator initialRouteName="Login">
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
