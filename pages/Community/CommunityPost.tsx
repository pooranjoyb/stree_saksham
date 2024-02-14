import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from "react-native-flash-message";

// firebase
import db from '../../utils/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

interface POST {
    desc: string;
    brief: string;
    title: string;
}

const CommunityPosts = () => {

    const [title, setTitle] = useState('');
    const [brief, setBrief] = useState('');
    const [desc, setDesc] = useState('');

    const handlePost = async () => {
        const postData: POST = {
            title,
            brief,
            desc
        };
        try {
            await addDoc(collection(db, 'Community Posts'), postData);
            showMessage({
                message: "Successfully Posted to Community",
                description: 'Get community support :)',
                type: "success",
            });
        } catch (error) {
            showMessage({
                message: `${error}`,
                type: "danger",
            });
        }
    }

    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ height: 90 }}>
                        <Text style={styles.title}>
                            Pen your Thoughts
                        </Text>
                    </View>

                    <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>

                        <View style={styles.inputContainer}>
                            <TextInput
                                value={title}
                                onChangeText={setTitle}
                                placeholder="Title"
                                style={styles.input}
                                autoCapitalize="none"
                            />
                            <TextInput
                                value={brief}
                                onChangeText={setBrief}
                                placeholder="Brief"
                                style={styles.input}
                                autoCapitalize="none"
                            />
                            <TextInput
                                value={desc}
                                onChangeText={setDesc}
                                placeholder="Description"
                                style={styles.input1}
                                autoCapitalize="none"
                                multiline={true}
                            />
                        </View>

                        <Pressable
                            onPress={handlePost}
                            style={styles.button}>
                            <Text style={styles.btnText}>
                                Post
                            </Text>
                        </Pressable>

                    </LinearGradient>
                </ScrollView>
            </View >
            <FlashMessage position="top" />
        </>
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
        fontSize: 35,
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

    inputContainer: {
        marginTop: 20,
        display: 'flex',
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        height: 66,
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#590D22',
        borderRadius: 50
    },

    input1: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        height: 300,
        paddingLeft: 30,
        paddingRight: 30,
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#590D22',
        borderRadius: 50
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

export default CommunityPosts;
