import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Card from '../components/Card';
import MiniCard from '../components/MiniCard';

const Home = () => {
    const navigation = useNavigation();

    const nav = (link: string) => {
        navigation.navigate(link as never)
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 90 }}>
                    <Text style={styles.title}>
                        Home
                    </Text>
                </View>

                <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>

                    <Pressable onPress={() => navigation.navigate("LegalReforms" as never)}>
                        <Card title="Legal Reforms" description="Know your legal rights and learn to defend yourself!" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Therapy" as never)}>
                        <Card title="Therapy Sessions" description="Fight with your mental trauma!" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Community" as never)}>
                        <Card title="Community" description="Join the community" />
                    </Pressable>

                    <Text style={styles.title2}>
                        Career Management
                    </Text>

                    <View style={styles.careerBox}>

                        <Pressable onPress={() => navigation.navigate("Jobs" as never)}>
                            <MiniCard title="Jobs" description="Get yourself a Job!" />
                        </Pressable>

                        <MiniCard title="Freelancing" description="Find Remote Works" />
                        <MiniCard title="Personal Guide" description="Let us guide you through" />
                        <MiniCard title="Financial Guidance" description="Manage your money" />
                    </View>
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
        height: '100%',
        width: '100%',
        zIndex: 100,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50,
        paddingBottom: 30
    },

    title: {
        position: 'absolute',
        top: 0,
        left: '35%',
        marginTop: 10,
        color: '#590D22',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 10,
    },

    title2: {
        color: '#590D22',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
    },

    btnText: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 32,
        marginTop: 10,
        color: '#ffff'
    },

    btnText2: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        marginTop: 15,
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
    }
})

export default Home;
