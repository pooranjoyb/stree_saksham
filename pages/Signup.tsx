import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView } from 'react-native'
import FlashMessage from 'react-native-flash-message';
import { showMessage } from "react-native-flash-message";

// firebase
import db from '../utils/firebase/config';
import { doc, collection, query, where, setDoc, getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        const usersCollectionRef = collection(db, 'Users');
        const q = query(usersCollectionRef, where('username', '==', username));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            showMessage({
                message: "User already Exist!",
                description: "Use your Credentials to Login",
                type: "success",
            });
            return;
        }

        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, `${username}@gsc.com`, password);

            await setDoc(doc(db, 'Users', userCredential.user.uid), {
                username,
                password: password
            });

            showMessage({
                message: "Account Successfully Created!",
                description: "Use the Credentials to Login",
                type: "success",
            });
        } catch (error) {
            showMessage({
                message: "Error",
                description: `${error}`,
                type: "danger",
            });
        }

    }
    return (
        <>
            <View style={styles.container}>
                <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>
                    <Image source={require('../assets/images/woman2.png')}
                        style={styles.image} />
                    <Text style={styles.title}>
                        Hop into our community!
                    </Text>
                    <ScrollView >
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Username"
                                style={styles.input}
                                autoCapitalize="none"
                                value={username}
                                onChangeText={(text) => setUsername(text)}
                            />
                            <TextInput
                                secureTextEntry={true}
                                placeholder="Password"
                                style={styles.input}
                                autoCapitalize="none"
                                value={password}
                                onChangeText={text => setPassword(text)}
                            />

                            <Pressable
                                onPress={handleLogin}
                                style={styles.button2}>
                                <Text style={styles.btnText}>
                                    Signup
                                </Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
            <FlashMessage position="top" />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: "#FFB3C1",
        justifyContent: "center",

    },
    title: {
        color: '#590D22',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    container2: {
        height: '90%',
        width: '100%',
        borderRadius: 50
    },

    image: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
        width: '80%',
        marginTop: 40,
        borderRadius: 50,
        marginLeft: 40,
    },
    inputContainer: {
        marginTop: 50,
        display: 'flex',
        gap: 35,
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
        width: 314,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#590D22',
        borderRadius: 50
    },

    button1: {
        position: 'absolute',
        bottom: 160,
        left: 80,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        height: 66,
        width: 239,
        borderRadius: 50
    },
    button2: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF758F',
        height: 66,
        width: 239,
        borderRadius: 50
    },
    btnText: {
        display: 'flex',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 32,
        color: '#590D22'
    }
})

export default Signup