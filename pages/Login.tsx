import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    TextInput,
    ScrollView
} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();

    async function handleLogin() {
        try {
            navigation.navigate("Home" as never);
        } catch (err) {
            console.log(err)
        }

    }

    async function handleSignup () {
        try {
            navigation.navigate("Signup" as never);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>
                <Image source={require('../assets/images/woman2.png')}
                    style={styles.image} />
                <Text style={styles.title}>
                    Jump back to where you left off!
                </Text>
                <ScrollView >
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Username"
                            style={styles.input}
                            autoCapitalize="none"
                        />
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            style={styles.input}
                            autoCapitalize="none"
                        />

                        <Pressable onPress={handleLogin} style={styles.button2}>
                            <Text style={styles.btnText}>
                                Login
                            </Text>
                        </Pressable>
                        <View style={styles.title2}>
                            <Text onPress={handleSignup}>
                                Don't Have an account? <Text style={styles.underline}>Click here</Text>
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
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

    title2: {
        color: '#590D22',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
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
        width: 314,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#590D22',
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
    },

    underline: {
        textDecorationLine: 'underline'
    }
})

export default Login