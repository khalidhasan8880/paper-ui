
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Switch } from 'react-native-paper';
import { useEffect, useState } from 'react';
import SignUpScreen from './components/SignUp';


export default function App() {

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [data, setData] = useState({});

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn)
  };


 

  // useEffect(() => {
  //   // getUserData();
  // }, [isSwitchOn]);

  

  // async function getUserData() {
  //   const response = await fetch('http://192.168.0.3:3000/');
  
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  
  //   return await response.json();
  // }
  

  



 
  return (
    <View className='p-4' >
      {/* <Text className="text-lg text-red-600 font-bold">Yr meal is {isSwitchOn? 'On': 'Off'}. </Text>
    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} ></Switch> */}

    <SignUpScreen></SignUpScreen>
      {/* <StatusBar style="auto" /> */}
      {/* <Button onPress={} > Hit me</Button> */}
      {/* <TextInput>{count}</TextInput> */}
    </View>
  );
}


