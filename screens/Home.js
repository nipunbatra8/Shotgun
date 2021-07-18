import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/background.png')}>
                <View style={styles.imageContainer}>
                    <Image style={styles.banner} resizeMode="contain" source={require('../assets/banner.png')}></Image>

                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.loginText}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    },
    banner: {
        width: 350,
        height: 200,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtn: {
        width: 131,
        backgroundColor: "#EFF0F6",
        borderColor: "#2A5075",
        borderRadius: 50,
        borderWidth: 3,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 20
    },
    loginText: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold"
    },
    signupBtn: {
        width: 131,
        backgroundColor: "#EFF0F6",
        borderColor: "#2A5075",
        borderRadius: 50,
        borderWidth: 3,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    }
});