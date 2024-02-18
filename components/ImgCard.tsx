import { View, Linking, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

interface ImgCardProps {
    image: string;
    link: string;
}

const ImgCard = ({ link, image }: ImgCardProps) => {
    return (
        <View style={styles.button}>
            <Pressable onPress={() => Linking.openURL(link)}>
                <Image source={{
                    uri: image
                }}
                    style={styles.image} />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#A4133C',
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%',
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 50
    },
    image: {
        height: 200,
        width: 350,
        borderRadius: 50,
    },

    btnText: {
        display: 'flex',
        paddingLeft: 25,
        paddingRight: 25,
        fontWeight: 'bold',
        fontSize: 22,
        color: '#ffff'
    },

    btnDesc: {
        display: 'flex',
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 16,
        marginTop: 10,
        color: '#ffff'
    }
})

export default ImgCard