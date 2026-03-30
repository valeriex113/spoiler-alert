import React from 'react';
import { Text, View } from 'react-native';
import { displayDateStyles } from '../assets/styles/home.style';

const TodaysDate: React.FC = () => {
    const styles = displayDateStyles();
    const currentDate: Date = new Date();
    const displayDate: string = currentDate.toISOString().split('T')[0];

    return (
        <View style={styles.dateContainer}>
            <Text style={styles.dateText}>Today's Date</Text>
            <Text style={styles.date}>{displayDate}</Text>
        </View>
    );
};

export default TodaysDate;
