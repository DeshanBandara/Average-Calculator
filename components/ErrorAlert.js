import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'

const ErrorAlert = () => {
  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertTitle}>Invalid Input!</Text>
      <Text style={styles.alertDescription}>Please Enter the Valid Number.</Text>
    </View>
  )
}

export default ErrorAlert

const styles = StyleSheet.create({
    alertContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        position: 'absolute',
        width: '100%',
        left: '0',
        top: '40%',
        paddingVertical: '10px'
    },
    alertTitle:{
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'white'
    },
    alertDescription:{
        fontSize: '17px',
        color: 'white'
    }
})