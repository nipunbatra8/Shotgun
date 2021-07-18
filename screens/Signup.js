import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import firebase from 'firebase';

export default function Signup({ navigation }) {
    let [fontsLoaded] = useFonts({
        Quicksand_700Bold, Quicksand_500Medium
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const signUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                if (password === confirm) {
                    navigation.navigate('Profile')
                } else { Alert.alert('Please confirm your password correctly') }
            }, (error) => { Alert.alert(error.message); });
    }

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
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/background.png')}>
                    <View style={styles.imageContainer}>

                        <Image style={styles.banner} resizeMode="contain" source={require('../assets/banner.png')}></Image>

                        <Text style={styles.bannerText}> Sign Up </Text>

                        <View style={styles.inputView}>
                            <Image style={styles.emailImage} source={require('../assets/EmailIcon.png')}></Image>
                            <Text style={styles.placeholder}>Email</Text>
                            <TextInput style={styles.inputText}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            ></TextInput>
                        </View>

                        <View style={styles.passwordView}>
                            <Image style={styles.emailImage} source={require('../assets/PasswordIcon.png')}></Image>
                            <Text style={styles.placeholder}>Password</Text>
                            <TextInput style={styles.passwordText}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                            ></TextInput>
                        </View>

                        <View style={styles.passwordView}>
                            <Image style={styles.emailImage} source={require('../assets/PasswordIcon.png')}></Image>
                            <Text style={styles.placeholder}>Password</Text>
                            <TextInput style={styles.passwordText}
                                value={confirm}
                                onChangeText={setConfirm}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                            ></TextInput>
                        </View>

                        <View style={styles.container2}>
                            <TouchableOpacity style={styles.loginBtn} onPress={signUp}>
                                <Text style={styles.loginText}>Continue</Text>
                            </TouchableOpacity>
                            <Image style={styles.googleIcon} source={require('../assets/google.png')}></Image>
                        </View>

                        <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.paragraph}> Already have an account? </Text>
                            <Text style={styles.loginText}>Log In</Text>
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
    banner: {
        width: 350,
        height: 200,
        marginTop: -20
    },
    bannerText: {
        color: "black",
        fontFamily: 'Quicksand_700Bold',
        fontSize: 50,
        fontWeight: 'bold',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputView: {
        flexDirection: 'row',
        width: "80%",
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 60,
        marginTop: 15
    },
    passwordView: {
        flexDirection: 'row',
        width: "80%",
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 60,
        marginTop: 15
    },
    inputText: {
        height: 50,
        width: "75%",
        fontSize: 18,
        color: "black",
        marginTop: 15,
        marginLeft: -34
    },
    passwordText: {
        height: 50,
        width: "75%",
        fontSize: 18,
        color: "black",
        marginTop: 16,
        marginLeft: -62
    },
    placeholder: {
        color: "#A0A3BD",
        marginLeft: 22,
        marginTop: 8
    },
    emailImage: {
        height: 30,
        width: 35,
        marginLeft: 20,
        marginTop: 15
    },
    loginBtn: {
        width: 135,
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    },
    loginText: {
        color: "black",
        fontFamily: 'Quicksand_700Bold',
        fontSize: 20,
        fontWeight: 'bold'
    },
    signupBtn: {
        width: '80%',
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    paragraph: {
        color: "black",
        fontFamily: 'Quicksand_500Medium',
        fontSize: 17,
        marginBottom: 2
    },
    googleIcon: {
        width: 39,
        height: 39,
        marginLeft: 15
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});