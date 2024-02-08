import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    TextInput
} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();

    async function handleLogin() {
        try {
            navigation.navigate("Home" as never);
        } catch (err) {

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
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                        autoCapitalize="none"
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        autoCapitalize="none"
                    />
                </View>

                <Pressable onPress={handleLogin} style={styles.button2}>
                    <Text style={styles.btnText}>
                        Login
                    </Text>
                </Pressable>
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
        padding: 20,
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
        position: 'absolute',
        bottom: 70,
        left: 80,
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

export default Login