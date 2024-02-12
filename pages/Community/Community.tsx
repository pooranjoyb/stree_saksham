import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import Card from '../../components/Card';

// firebase
import db from '../../utils/firebase/config';
import { doc, collection, query, where, setDoc, getDocs } from 'firebase/firestore';

interface POST {
    desc: string;
    brief: string;
    title: string;
}

const Community = () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState<POST[]>([]);


    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        const postsCollectionRef = collection(db, 'Community Posts');

        try {
            const snapshot = await getDocs(postsCollectionRef);
            const dbdata = snapshot.docs.map(doc => ({
                ...doc.data()
            }));
            setPosts(dbdata as any)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
            return [];
        }
    }

    const handlePostPress = (data: POST) => {
        navigation.navigate('ViewPost', { data });
    }; 

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 90 }}>
                    <Text style={styles.title}>
                        Community
                    </Text>
                </View>

                <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>

                    {loading ? (
                        <ActivityIndicator style={styles.activityIndicator} size="large" color="#A4133C" />
                    ) : (
                        posts.map((job, index) => (
                            <Pressable key={index} onPress={() => handlePostPress(job)}>
                                <Card key={index} title={job.title} description={job.brief} />
                            </Pressable>
                        ))
                    )}

                    <Pressable
                    onPress={() => navigation.navigate("CommunityPosts" as never)}
                    style={styles.button}>
                        <Text style={styles.btnText}>
                            Pen your Thoughts
                        </Text>
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
        fontSize: 40,
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

export default Community;
