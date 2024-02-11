import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { Linking } from "react-native";

import Card from '../components/Card';

interface Job {
    company: string;
    title: string;
    jobProviders: {
        url: string
    }[]
}

const Jobs = () => {

    const [jobname, setnJobname] = useState('Content Creator');
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleSearch();
    }, [])

    const handleSearch = async () => {
        setLoading(true);
        try {
            const options = {
                method: 'GET',
                url: 'https://jobs-api14.p.rapidapi.com/list',
                params: {
                    query: jobname,
                    location: 'India',
                    distance: '1.0',
                    language: 'en_GB',
                    remoteOnly: 'false',
                    datePosted: 'month',
                    employmentTypes: 'fulltime;parttime;intern;contractor',
                    index: '0'
                },
                headers: {
                    'X-RapidAPI-Key': '098adbcc37msh7245f958e5aebfap1d25fcjsn32eabc9b69da',
                    'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
                }
            };

            const response = await axios.request(options);
            setJobs(response.data.jobs);
        } catch (error) {
            console.error(error);
        }finally {
            setLoading(false);
        }

    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 90 }}>
                    <Text style={styles.title}>
                        Jobs
                    </Text>
                </View>

                <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Search"
                            style={styles.input}
                            autoCapitalize="none"
                            value={jobname}
                            onChangeText={text => setnJobname(text)}
                        />
                        <Pressable onPress={handleSearch}>
                            <Image source={require('../assets/images/search.png')}
                                style={styles.image} />
                        </Pressable>
                    </View>

                    {loading ? (
                        <ActivityIndicator style={styles.activityIndicator} size="large" color="#A4133C" />
                    ) : (
                        jobs.map((job, index) => (
                            <Pressable key={index} onPress={() => Linking.openURL(job.jobProviders[0].url)}>
                                <Card key={index} title={job.company} description={job.title} />
                            </Pressable>
                        ))
                    )}

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

    image: {
        height: 35,
        width: 30,
    },

    inputContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },

    input: {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 15,
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        width: 330,
        height: 68,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#A4133C',
        borderRadius: 50
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
    },
    activityIndicator: {
        alignSelf: 'center',
        marginVertical: 200,
    }
})

export default Jobs;
