import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React from 'react'

interface CardProps {
    title: string;
    description: string;
}

const Card = ({ title, description }: CardProps) => {
    return (
        <View style={styles.button}>
            <Text style={styles.btnText}>
                {title}
            </Text>
            <Text style={styles.btnDesc}>
                {description}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#A4133C',
        // height: 133,
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%',
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 50
    },

    btnText: {
        display: 'flex',
        paddingLeft: 25,
        paddingRight: 25,
        fontWeight: 'bold',
        fontSize: 22,
        color: '#ffff'
    },

    btnDesc: {
        display: 'flex',
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 16,
        marginTop: 10,
        color: '#ffff'
    }
})

export default Card