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

                    <Card title={doc.data.title} description={doc.data.desc} />

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

export default ViewPost;
