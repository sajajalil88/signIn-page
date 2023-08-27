import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react/cjs/react.production.min'
import { FIREBASE_AUTH } from '../../firebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[loading, setLoading] = useState(false);
 const auth = FIREBASE_AUTH

const signIn = async () =>{
  setLoading(true);
  try{
    const response = await signInWithEmailAndPassword(auth,email,password);
    alert('Check your emails!');
  }
  catch(error){
    console.log(error);
    alert('Registration failed !' + error.message);
  }
  finally{
    setLoading(false);
  }
}

const signUp = async () =>{
  setLoading(true);
  try{
    const response = await createUserWithEmailAndPassword(auth,email,password);
    alert('Check your emails!');
    console.log(response)
  }
  catch(error){
    console.log(error);
  }
  finally{
    setLoading(false);
  }
}


  return (

    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" >
     <TextInput style={styles.input}
     value={email}
     placeholder="email"
     autoCapitalize="none" onChangeText={(text) => setEmail(text)}>
     </TextInput>

     <TextInput style={styles.input}
     value={password}
     placeholder="password"
     secureTextEntry={true}
     autoCapitalize="none" onChangeText={(text) => setPassword(text)}>
     </TextInput>

     {loading ? <ActivityIndicator size="large" color="#0000ff" />
     : <>
     <Button title="Login" onPress={() => signIn()} />
     <Button title="signUp" onPress={() => signUp()} />
     </>
     }
     </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
container:{
  marginHorizontal:20,
  flex:1,
  justifyContent:'center',
},
input : {
marginVertical:4,
height:50,
borderWidth:1,
borderRadius:4,
padding:10,
backgroundColor:'#fff',
},

})