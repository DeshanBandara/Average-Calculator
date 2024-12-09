import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CalculationResult = ({studentDetails, subject, average}) => {
  return (
    <View style={styles.resultForm}>
        <View style={styles.resultRow}>
            <Text style={{color:'white', fontWeight:'bold'}}>{`${studentDetails.firstName} ${studentDetails.lastName} your average marks is`}</Text>
        </View>
        <View style={styles.resultRow}>
            <Text style={{color:'white', fontWeight:'bold'}}>{average}</Text>
        </View>
    </View>
  )
}

export default CalculationResult

const styles = StyleSheet.create({
    resultForm:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'green',
        padding:"10px",
        marginTop:"5px"
    },
    resultRow:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    titleBox:{
        width:"150px",
        padding:"10px"
    }
})