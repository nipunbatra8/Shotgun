import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

export default function Profile({ navigation }) {
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
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/Profile.png')}>
                    <View style={styles.imageContainer}>

                        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('HostARide')}>
                            <Text style={styles.loginText}>Host a Ride</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('FindARide')}>
                            <Text style={styles.loginText}>Request a Ride</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('TripCalculator')}>
                            <Text style={styles.loginText}>Trip Calculator</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Explore')}>
                            <Text style={styles.loginText}>Explore</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Options')}>
                            <Text style={styles.loginText}>Options</Text>
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
        width: 272,
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 54,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 223,
        marginRight: 3
    },
    loginText: {
        color: "black",
        fontFamily: 'Quicksand_700Bold',
        fontSize: 28,
        fontWeight: 'bold'
    },
    Btn: {
        width: 272,
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 54,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 23,
        marginRight: 3
    }
});