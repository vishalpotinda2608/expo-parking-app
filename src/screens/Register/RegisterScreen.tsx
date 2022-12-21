import { View,StyleSheet } from "react-native";
import React,{useState} from "react";
import { Layout, Text, Button, Input } from "@ui-kitten/components";


const RegisterScreen = (props:any) => {
const [mobile, setMobile] = useState('')
const [pincode,setPincode]=useState('');
const [name,setName]=useState('')
const [email,setEmail]=useState('');

  const goToLogin=()=>{
    props.navigation.goBack();
  }
  return (
    <Layout
    style={{
      padding:10,
      flex:1
     
    }}

  >
    <Text style={styles.title}>Registration</Text>
            <Input
          style={{ marginBottom: 8 }}
          placeholder="Enter Fullname"
          value={mobile}
          onChangeText={(nextValue) => setName(nextValue)}
        />
            <Input
          style={{ marginBottom: 8 }}
          placeholder="10 Digit Mobile No"
          value={mobile}
          onChangeText={(nextValue) => setMobile(nextValue)}
          maxLength={10}
        />
            <Input
          style={{ marginBottom: 8 }}
          placeholder="Enter Email ID"
          value={email}
          onChangeText={(nextValue) => setEmail(nextValue)}
        />
        <Input
          maxLength={6}
          style={{ marginBottom: 8 }}
          placeholder="6 digit PinCode"
          value={pincode}
          secureTextEntry={true}
          onChangeText={(nextValue) => setPincode(nextValue)}
        />
        <Button>Register</Button>
    </Layout>
  );
};

export default RegisterScreen;


const styles=StyleSheet.create({
  title:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20,
    marginVertical:10
  }
})