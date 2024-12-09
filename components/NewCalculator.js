import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { isValidElement, useState } from 'react'
import { Button, TextInput } from 'react-native-web'
import ErrorAlert from './ErrorAlert'
import CalculationResult from './CalculationResult'

const NewCalculator = () => {
    const [StudentDetails, setStudentDetails] = useState ({FirstName:'', LastName:'', Email:'', Password:''})
    const [Marks, setMarks] = useState ({Subject1:'', Subject2:'', Subject3:''})
    const [AverageMarks, setAverage] = useState (0)
    const [isValid, setIsValid] = useState(true)
    const [isShowResult, setIsShowResult] = useState(false)

    const studentDetailsInput = (Event, Name) => {
        const{value} = Event.target
        const keyExist = StudentDetails.hasOwnProperty(Name)
        if(keyExist){
            const obj={}
            obj[Name] = value
            setStudentDetails({...StudentDetails,...obj})
        }
    }

    const subjectMarksInput = (Event, Mark) => {
        const{value} = Event.target
        const keyExist = Marks.hasOwnProperty(Mark)
        if(keyExist){
            if(!isNaN(value)){
                const obj={}
                obj[Mark] = value
                setMarks({...Marks,...obj})
            }
            else{
                setIsValid(false)
                setTimeout(()=>{
                    setIsValid(true)
                },1000)
            }
        }
    }

    const MarksAverage = () => {
        let Total=0
        const values = Object.values(Marks)
        values.map((index, value)=>(
            Total += parseInt(index)
        ))
        let AVERAGE = Total/3
        setAverage(AVERAGE)
        setIsShowResult(true)
    }


  return (
    <View style={styles.calculatorContentContainer}>
        <Text style={styles.title}>Student Registration</Text>
        <View style={styles.inputBoxes}>
            <TextInput style={styles.inputBoxes} onChange={(e) => studentDetailsInput(e, 'FirstName')} placeholder='First Name'/>
            <TextInput style={styles.inputBoxes} onChange={(e) => studentDetailsInput(e, 'LastName')} placeholder='Last Name'/>
            <TextInput style={styles.inputBoxes} onChange={(e) => studentDetailsInput(e, 'Email')} placeholder='Email'/>
            <TextInput style={styles.inputBoxes} onChange={(e) => studentDetailsInput(e, 'Password')} placeholder='Password' secureTextEntry={true}/>
        </View>

        <Text style={styles.title}>Enter Marks</Text>
        <View>
            <TextInput 
                style={styles.inputBoxes}
                onChange={(e) => subjectMarksInput(e, 'Subject1')} 
                value={Marks.Subject1||''}
                placeholder='Subject 1 Marks'
                inputMode='numeric'
                keyboardType='numeric'/>
            <TextInput 
                style={styles.inputBoxes}
                onChange={(e) => subjectMarksInput(e, 'Subject2')} 
                value={Marks.Subject2||''}
                placeholder='Subject 2 Marks'
                inputMode='numeric'
                keyboardType='numeric'/>
            <TextInput 
                style={styles.inputBoxes}
                onChange={(e) => subjectMarksInput(e, 'Subject3')} 
                value={Marks.Subject3||''}
                placeholder='Subject 3 Marks'
                inputMode='numeric'
                keyboardType='numeric'/>
        </View>
        <Button title='REGISTER & CALCULATE AVERAGE' onPress={() => MarksAverage()} disabled={Marks.Subject1 && Marks.Subject2 && Marks.Subject3 ? false : true}/>
            {isValid ? '' : <ErrorAlert/>}
            {isShowResult ? <CalculationResult studentDetails={StudentDetails} subjects={Marks} average={AverageMarks}/>: ''}
    </View>
  )
}

export default NewCalculator

const styles = StyleSheet.create({
    calculatorContentContainer:{ 
        padding:"10px",
        borderRadius:"10px",
        backgroundColor: '#FFFFFF',
    },
    title:{
        fontSize:"20px",
        fontWeight:'bold',
        fontFamily:"calibri",
        textAlign:"center",
        margin:'10px'
    },
    inputBoxes:{
        padding: "5px",
        marginVertical: "5px",
        border: "1px black solid",
    },
    outputBox:{
        padding: "10px",
        textAlign:"center",
        fontWeight:"bold",
    }
})