import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const handleSOS = () => {
        // Handle SOS button press
    };

    return (
        <View style={styles.container}>
            {/* Hamburger Button */}
            <TouchableOpacity style={styles.hamburgerButton} onPress={() => navigation.navigate("DrawerNavigator" as never)}>
                <FontAwesome name="bars" size={24} color="black" />
            </TouchableOpacity>

            {/* User Icon and Info */}
            <View style={styles.userContainer}>
                <Image source={require('../assets/user-icon.png')} style={styles.userIcon} />
                <View style={styles.userInfo}>
                    <Text>User Name</Text>
                    <Text>Member since 3 Months</Text>
                </View>
            </View>

            {/* SOS Button */}
            <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
                <Text>SOS</Text>
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Home</Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text>Legal Reforms</Text>
                    <Text>Know your legal rights and learn to defend yourself!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Therapy Sessions</Text>
                    <Text>Fight with your mental trauma!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Rehabilitation</Text>
                    <Text>Get yourself a Work and be independent!</Text>
                </TouchableOpacity>
                <View style={styles.sectionHeader}>
                    <Text>Career Management</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text>Freelancing</Text>
                    <Text>Find Remote Works</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Personal Guide</Text>
                    <Text>Let us guide you through</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Financial Guidance</Text>
                    <Text>Manage Your Money</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Jobs</Text>
                    <Text>Get yourself a Job!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    hamburgerButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    userIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userInfo: {
        flexDirection: 'column',
    },
    sosButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        flex: 1,
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10,
    },
    sectionHeader: {
        backgroundColor: '#EEEEEE',
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
    },
});

export default Home;
