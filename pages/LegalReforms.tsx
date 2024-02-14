import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Linking } from 'react-native';

import Card from '../components/Card';

const LegalReforms = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 90 }}>
                    <Text style={styles.title}>
                        Legal Reforms
                    </Text>
                </View>

                <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>

                    <Pressable onPress={() => Linking.openURL("http://ncw.nic.in/sites/default/files/THEIMMORALTRAFFIC%28PREVENTION%29ACT1956_2.pdf")}>

                        <Card title='The Immoral Traffic Act' description='(Prevention) 1956'></Card>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("http://ncw.nic.in/sites/default/files/THEDOWRYPROHIBITIONACT1961_0.pdf")}>
                        <Card title='The Dowry Prohibition Act' description='1961 (28 of 1961) (Amended in 1986)'></Card>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("http://ncw.nic.in/sites/default/files/TheProtectionofWomenfromDomesticViolenceAct2005_0.pdf")}>
                        <Card title='Protection of Women from Domestic Violence Act' description='2005'></Card>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("http://ncw.nic.in/sites/default/files/SexualHarassmentofWomenatWorkPlaceAct2013_0.pdf")}>
                        <Card title='The Sexual Harassment of Women at Workplace Act' description='Prevention and Prohibition 2013'></Card>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("http://ncw.nic.in/sites/default/files/The_Criminal_Law_Amendment_Act_2013_0.pdf")}>
                        <Card title='The Criminal Law Act' description='Amendment Act - 2013'></Card>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("http://ncw.nic.in/sites/default/files/TheIndecentRepresentationofWomenProhibitionAct1986_2.pdf")}>
                        <Card title='The Indecent Representation of Women Act' description='(Prohibition) Act 1986'></Card>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("http://ncw.nic.in/sites/default/files/THEINDIANPENALCODE1860_0.pdf")}>
                        <Card title='The Indian Penal Code' description='1860'></Card>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("http://ncw.nic.in/sites/default/files/THEINDIANEVIDENCEACT1872_0.pdf")}>
                        <Card title='The Indian Evidence Act' description='1872'></Card>
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

export default LegalReforms;
