import React from 'react'
import * as Google from 'expo-google-app-auth';
import { Text, View, TouchableOpacity, Button, Image } from "react-native";
import { AuthContext } from '../AppContext'
import { useNavigation } from '@react-navigation/native';

const IOS_CLIENT_ID =
    "your-ios-client-id";
const ANDROID_CLIENT_ID = 
    "416354194866-b8h33m3nbh5748fgknvk7j0slanudneu.apps.googleusercontent.com";
const AuthScreen = () => {
    const { signIn } = React.useContext(AuthContext);
    const { navigate } = useNavigation();
    const signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                androidStandaloneAppClientId: "416354194866-vlq6e2sggv4fnsi93qjbed9e32ubundm.apps.googleusercontent.com",
                iosStandaloneAppClientId: "416354194866-aveppk83q8qvfhs6rbu0oekc0f6cjtqo.apps.googleusercontent.com",
                scopes: ["profile", "email"]
            });

            if (result.type === "success") {
                navigate("Home"); //after Google login redirect to Profile                               
                signIn(result.accessToken);
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            console.log('LoginScreen.js.js 30 | Error with login', e);
            return { error: true };
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/icon.png')} style={{ marginBottom: 30 }}></Image>
            <TouchableOpacity onPress={signInWithGoogle}>
                <Image source={require('../assets/btn_google.png')}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default AuthScreen;