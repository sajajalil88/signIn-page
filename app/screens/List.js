import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {FIREBASE_AUTH} from '../../firebaseConfig';
import { Button } from 'react-native';



const List = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button onPress={() => navigation.navigate('details')} title="open details" />
      <Button onPress={() =>FIREBASE_AUTH.signOut()} title='Logout' />
     </View>
  )
}

export default List

const styles = StyleSheet.create({})