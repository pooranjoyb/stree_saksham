import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React from 'react'

interface MiniCardProps {
    title: string;
    description: string;
}

const MiniCard = ({ title, description }: MiniCardProps) => {
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
        height: 133,
        width: 170,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 20
    },

    btnText: {
        display: 'flex',
        paddingLeft: 15,
        paddingRight: 20,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffff'
    },

    btnDesc: {
        display: 'flex',
        paddingLeft: 15,
        paddingRight: 20,
        fontSize: 15,
        marginTop: 10,
        color: '#ffff'
    }
})

export default MiniCard