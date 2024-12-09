import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react'
import NewCalculator from '../components/NewCalculator';

const App = () => {
  return (
    <View style={styles.viweContainer}>
      <NewCalculator/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  viweContainer:{
    padding:"50px"
  }
})