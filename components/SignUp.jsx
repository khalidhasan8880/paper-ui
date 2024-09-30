import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { supabase } from '../lib/supabase';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)




  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session, user },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    
    console.log(user);
    

    // const { error: profileError } = await supabase
    // .from('profiles')
    // .insert([
    //   { id: user.id, display_name: displayName }
    // ]);
  
// if ( error) {Alert.alert('error')}

   
    // .update({ display_name: displayName })
    // .eq('id', data.user.id);
    
    // if (updateError) throw updateError;
    // if (data) {
    //   await fetch('http://192.168.0.4:3000/', {
    //     method:'post',
    //     headers:{
    //       'content-type':'application/json'
    //     },
    //     body:JSON.stringify({email, name})
    //   })
    // }

    // if (error) Alert.alert(error.message)
    // if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }



  
  return (
    <View className='flex-1 justify-center p-4 bg-gray-100'>
      <Text className='text-xl font-bold text-center mb-4'>Sign Up</Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        className='mb-4'
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        className='mb-4'
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        className='mb-4'
      />
      <Button mode="contained" onPress={signUpWithEmail} className='mt-4'>
        Sign Up
      </Button>
    </View>
  );
};

export default SignUpScreen;

