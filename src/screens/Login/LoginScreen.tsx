import { View } from "react-native";
import React, { useState } from "react";
import { Layout, Text, Button, Input } from "@ui-kitten/components";
import { Icon } from "@ui-kitten/components";
import { TextStyleProps } from "@ui-kitten/components/devsupport";
import NavigationString from "../../Constasts/NavigationString";
 const  LoginScreen=(props:any)=> {

  const [mobileNo, setmobileNo] = useState("");
  const [pincode, setPincode] = useState("");


  function loginHandler() {
    console.log(mobileNo,pincode);

    if(mobileNo=="8329241021" && pincode=="123456"){
     props.navigation.navigate(NavigationString.DASHBOARD)
    }
    
  }

  const MobileIcon = () => {
    return <Icon name="smartphone" />;
  };

  const onRegisterHandler=()=>{
    props.navigation.navigate(NavigationString.REGISTER)
  }

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
      }}
    >
      <Text
        style={{ marginBottom: 70 }}
        textBreakStrategy="highQuality"
        category="h2"
      >
        Parking Ticket
      </Text>
      <Text category="s2"> Your automated parking management system</Text>

      <View style={{ width: "250px" }}>
        <Input
          style={{ marginBottom: 8 }}
          placeholder="10 Digit Mobile No"
          value={mobileNo}
          onChangeText={(nextValue) => setmobileNo(nextValue)}
          accessoryLeft={MobileIcon}
          maxLength={10}
        />
        <Input
          maxLength={6}
          style={{ marginBottom: 8 }}
          placeholder="6 digit PinCode"
          value={pincode}
          secureTextEntry={true}
          onChangeText={(nextValue) => setPincode(nextValue)}
        />

        <Button onPress={() => loginHandler()}>LOGIN</Button>
        <Button appearance="ghost">Forgot PinCode?</Button>
        <Button appearance="outline" onPress={onRegisterHandler}>New User? Register here</Button>
      </View>
    </Layout>
  );
}


export default LoginScreen;