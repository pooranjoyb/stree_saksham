import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Linking } from 'react-native';

import Card from '../components/Card';

const Skill = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 90 }}>
                    <Text style={styles.title}>
                        Enhance your Skills
                    </Text>
                </View>

                <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>
                    <Pressable onPress={() => Linking.openURL("https://www.pmkvyofficial.org/jobrole")}>
                        <Card title='PMKVY' description='Pradhan Mantri Kaushal Vikas Yojana (PMKVY) is the flagship scheme of the Ministry of Skill Development and Entrepreneurship (MSDE) implemented by National Skill Development Corporation (NSDC). The objective of this Skill Certification scheme is to enable Indian youth to take up industry relevant skill training that will help them in securing a better livelihood.' />
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("https://www.coirservices.gov.in/frm_login.aspx")}>
                        <Card title='Mahila Coir Yojana' description='Mahila Coir Yojana (MCY) is the a women oriented self employment programme in the coir industry, which aims to providing self employment to rural women artisans in regions producing coir fibre. The conversion of coir fibre into yarn on motorized ratts in rural households provides scope for large scale employment, improvement in productivity and quality, better working conditions and higher income. The scheme is being implemented by the Government through the Coir Board under its Coir Vikas Yojana.' />
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
        fontSize: 25,
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

export default Skill;
