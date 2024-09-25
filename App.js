import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './components/MyButton';
import { Switch } from 'react-native-paper';
import { useEffect, useState } from 'react';


export default function App() {

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

 
  return (
    <View className="flex-1 items-center justify-center" >
      <Text>Your meal is {isSwitchOn? 'On': 'Off'}. </Text>
    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} ></Switch>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}


