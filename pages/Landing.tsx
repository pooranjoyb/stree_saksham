import { LinearGradient } from 'expo-linear-gradient';
import { 
    View,
    Text, 
    StyleSheet, 
    Image,
    Pressable,
    Linking
} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
    const navigation = useNavigation();

    async function handleLogin() {
        try {
            navigation.navigate("Login" as never);
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Stree-Saksham Welcomes You!
            </Text>
            <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>
                <Image source={require('../assets/images/woman.png')}
                    style={styles.image} />

                    <Pressable style={styles.button1} onPress={() => Linking.openURL("https://docs.google.com/document/d/1L2Izh9X-gOnezRhdy_xLXs7Jac3b16n2MFiIkzAin9c/edit?usp=drive_link")}>
                        <Text style={styles.btnText}>
                            Get Started
                        </Text>
                    </Pressable>
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
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 42,
        padding: 60,
    },
    container2: {
        height: '70%',
        width: '100%',
        borderRadius: 50
    },

    image: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width: '90%',
        marginTop: 25,
        borderRadius: 50,
        marginLeft: 20,
    },
    button1:{
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
    button2:{
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
    btnText:{
        display: 'flex',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 32,
        color: '#590D22'
    }
})

export default Landing