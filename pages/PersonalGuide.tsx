import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Linking } from 'react-native';

import Card from '../components/Card';

const PersonalGuide = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 90 }}>
                    <Text style={styles.title}>
                        Personal Guidance for you
                    </Text>
                </View>

                <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>
                    <Pressable onPress={() => Linking.openURL("https://www.youtube.com/watch?v=NIGEZ0rgEV8")}>
                        <Card title='Traveling Alone' description='Stay safe on public transit, be aware, be empowered.' />
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("https://m.youtube.com/watch?v=L_QIij6l-aI")}>
                        <Card title='Pack your Bag' description='Backpacking Hacks for Women' />
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("https://www.youtube.com/watch?v=T7aNSRoDCmg")}>
                        <Card title='Be Brave!' description="Women's Self-Defense Techniques for everyday sitations" />
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("https://www.youtube.com/watch?v=T7aNSRoDCmg")}>
                        <Card title='The Jed Foundation' description="Mental Health Resources for Teens & Young Adults" />
                    </Pressable>
                </LinearGradient>
            </ScrollView>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: "#FFB3C1",
        justifyContent: "center",
    },

    container2: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50
    },
    title: {
        flex: 1,
        marginTop: 10,
        color: '#590D22',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
    },

    button: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A4133C',
        height: 66,
        marginTop: 20,
        width: '100%',
        borderRadius: 50
    },

    btnText: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        color: '#ffff'
    },

    underline: {
        textDecorationLine: 'underline'
    },

    careerBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center'
    },
    activityIndicator: {
        alignSelf: 'center',
        marginVertical: 200,
    }
})

export default PersonalGuide;
