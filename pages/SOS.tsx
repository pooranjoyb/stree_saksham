import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    Linking,
} from 'react-native'
import React from 'react'

const SOS = () => {

    const handleSOSCall = () => {
        Linking.openURL('tel:911');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Emergency Help Needed?
            </Text>
            <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>
                <View style={styles.imageContainer}>
                    <Pressable onPress={handleSOSCall}>
                        <Image source={require('../assets/images/sos.png')}
                            style={styles.image} />
                    </Pressable>
                </View>

                <Pressable style={styles.button1}>
                    <Text style={styles.btnText}>
                        REPORT THREAT
                    </Text>
                </Pressable>
                <Pressable style={styles.button2}>
                    <Text style={styles.btnText2}>
                        Post Abuse in Community
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
        position: 'absolute',
        top: 0,
        marginTop: 10,
        color: '#590D22',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 42,
        fontWeight: 'bold',
        padding: 10,
    },

    container2: {
        height: '60%',
        width: '100%',
        position: 'relative',
        borderRadius: 50
    },

    imageContainer: {
        position: 'absolute',
        top: 40,
        left: 50
    },

    image: {
        height: 315,
        width: 300,
        borderRadius: 50,
    },

    button1: {
        position: 'absolute',
        bottom: 30,
        left: 50,
        textAlign: 'center',
        backgroundColor: '#A4133C',
        height: 66,
        width: 333,
        borderRadius: 50
    },

    button2: {
        position: 'absolute',
        bottom: -80,
        left: 50,
        textAlign: 'center',
        backgroundColor: '#A4133C',
        height: 66,
        width: 333,
        borderRadius: 50
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
    }
})

export default SOS;

