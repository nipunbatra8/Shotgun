import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

export default function FindARide({ navigation }) {
    let [fontsLoaded] = useFonts({
        Quicksand_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/splash.png')}>
                </ImageBackground>
            </View >
        );
    } else {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/FindARide.png')}>
                    <View style={styles.imageContainer}>

                        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('FindARide2')}>
                            <Text style={styles.loginText}>Continue</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtn: {
        width: 135,
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 500
    },
    loginText: {
        color: "black",
        fontFamily: 'Quicksand_700Bold',
        fontSize: 20,
        fontWeight: 'bold'
    }
});