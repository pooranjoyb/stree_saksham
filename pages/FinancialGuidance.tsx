import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Linking } from 'react-native';

import Card from '../components/Card';
import ImgCard from '../components/ImgCard';

const FinancialGuidance = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>
                    Financial Guidance for you
                </Text>
                <Text style={styles.title2}>
                    Videos to Guide You
                </Text>

                <LinearGradient colors={['#FF4D6D', '#FF8FA3', '#FFB3C1']} style={styles.container2}>

                    <ImgCard image='https://i.ytimg.com/vi/wesf3KaJqAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWTMldXqXzGH2LRuVMVXyNZihS8A' link='https://www.youtube.com/watch?v=wesf3KaJqAA' />

                    <ImgCard image='https://i.ytimg.com/vi/tV70FFrFN74/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfn8CaIHSEL_IycANvUwHnTnu6ZA' link='https://www.youtube.com/watch?v=tV70FFrFN74' />

                    <ImgCard image='https://i.ytimg.com/vi/xAGyhkWoDX8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvs0Ig4br7Q_OKpyd4F3YF4N1Zbg' link='https://www.youtube.com/watch?v=xAGyhkWoDX8' />

                    <ImgCard image='https://i.ytimg.com/vi/IIKr2915l2g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWUknuw_cCoXg3e4-EytShCTTHFA' link='https://www.youtube.com/watch?v=IIKr2915l2g' />

                    <ImgCard image='https://i.ytimg.com/vi/A7r2vCxa3pI/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhHIFIocjAP&rs=AOn4CLBA5MWDZSsrqOBIrdb0A78n1a6UMw' link='https://www.youtube.com/watch?v=A7r2vCxa3pI' />

                    <ImgCard image='https://i.ytimg.com/vi/-FP7IVNN4bI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCShDMksBmme-VPPQzSGv6S2BGcg' link='https://www.youtube.com/watch?v=-FP7IVNN4bI' />

                    <ImgCard image='https://i.ytimg.com/vi/HQzoZfc3GwQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhFErHWWlYkRLr94prNSPLVUUSqg' link='https://www.youtube.com/watch?v=HQzoZfc3GwQ' />



                    <View style={{ height: 80 }}>
                        <Text style={styles.title2}>
                            Access Zerodha's Resources with us
                        </Text>
                    </View>
                    <Pressable onPress={() => Linking.openURL("https://zerodha.com/varsity/module/introduction-to-stock-markets/")}>
                        <Card title='Introduction to Stock Markets' description='The stock market can play a pivotal role in ensuring your financial security. In this module, you will learn how to get started in the stock market, its fundamentals, how it functions, and the various intermediaries that appertain it.' />
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("https://zerodha.com/varsity/module/technical-analysis/")}>
                        <Card title='Technical Analysis' description='Technical Analysis (TA) helps in developing a point of view. In this module, we will discover the complex attributes, various patterns, indicators, and theories of TA that will help you as a trader to find upright trading opportunities in the market.' />
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("https://zerodha.com/varsity/module/fundamental-analysis/")}>
                        <Card title='Fundamental Analysis' description="The Fundamental Analysis (FA) module explores Equity research by reading financial statements and annual reports, calculating and analyzing Financial Ratios, and evaluating the intrinsic value of a stock to find long-term investing opportunities." />
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("https://zerodha.com/varsity/module/futures-trading/")}>
                        <Card title='Futures Trading' description="Futures Trading is a segment of the derivatives market. This module covers the various intricacies involved in undergoing a futures trade, including margins, leverages, pricing, etc. It also discusses the use of derivatives for hedging purposes." />
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL("https://zerodha.com/varsity/module/option-theory/")}>
                        <Card title='Options Theory for Professional Trading' description="Options Trading is a segment of the derivatives segment. Options contracts grant the buyer the right to buy/sell the underlying without a compulsory obligation. This module discusses options contracts, pricing, and their profit and loss payoffs." />
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
    title2: {
        flex: 1,
        color: '#590D22',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
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

export default FinancialGuidance;
