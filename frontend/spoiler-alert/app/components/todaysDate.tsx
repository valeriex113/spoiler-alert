import React from 'react';
import { Text, View } from 'react-native';
import { displayDateStyles } from '../assets/styles/home.style';

const dayofWeekMap: {[key: number]: string} = {
    0: "Sunday", 
    1: "Monday", 
    2: "Tuesday", 
    3: "Wednesday", 
    4: "Thursday", 
    5: "Friday", 
    6: "Saturday"
};

const monthOfYearMap: {[key: number]: string} = {
    0: "January", 
    1: "February", 
    2: "March", 
    3: "April", 
    4: "May", 
    5: "June", 
    6: "July", 
    7: "August", 
    8: "September", 
    9: "October", 
    10: "November", 
    11: "December"
};

const TodaysDate: React.FC = () => {
    const styles = displayDateStyles();
    const currentDate: Date = new Date();
    const dayOfWeek: number = currentDate.getDay();
    const day: number = currentDate.getDate();     
    const month: number = currentDate.getMonth();         
    const year: number = currentDate.getFullYear();

    return (
        <View style={styles.dateContainer}>
            <Text style={styles.date}>{dayofWeekMap[dayOfWeek]}, {day} {monthOfYearMap[month]} {year}</Text>
        </View>
    );
};

export default TodaysDate;
