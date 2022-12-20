import { View, Text } from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components/ui/button/button.component";

const SettingsScreen = (navigation: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button onPress={() => navigation.navigate("Details")}>Click</Button>
    </View>
  );
};

export default SettingsScreen;
