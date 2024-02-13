import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';

import Card from '../../components/Card';

interface Props {
    data: {
        desc: string;
        brief: string;
        title: string;
    }
}

const ViewPost = () => {

    const route = useRoute();
    const doc = route.params as Props

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 90 }}>
                    <Text style={styles.title}>
                        Post
                    </Text>
                </View>

                <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>

                    <Card title={doc.data.title} description="" />

                    <View style={styles.description}>
                        <Text style={styles.btnDesc}>
                            {doc.data.desc}
                        </Text>
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

    description: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#A4133C',
        width: '100%',
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 50
    },

    btnDesc: {
        display: 'flex',
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 25,
        paddingTop: 25,
        fontSize: 16,
        marginTop: 10,
        color: '#ffff'
    },

    underline: {
        textDecorationLine: 'underline'
    },
    activityIndicator: {
        alignSelf: 'center',
        marginVertical: 200,
    }
})

export default ViewPost;
