
import React from 'react';
import { Text,View,TouchableOpacity, ImageBackground} from 'react-native';

const StampArea = ({ viewStamps,theme, stampImage, showText = true }) => {
    
    if (stampImage) {
        return (
            <TouchableOpacity onPress={viewStamps} style={theme.stampList}>
                <ImageBackground source={require('../assets/free-stamp.png')} imageStyle={{ resizeMode: 'contain' }} style={theme.stampIcon}>
                </ImageBackground>
                {showText && (
                    <Text style={theme.stampAreaText}>Add a stamp</Text>
                )}
            </TouchableOpacity>
        )
    }
    return (
        <View style={theme.stampList}>
             <ImageBackground source={require('../assets/free-stamp.png')} imageStyle={{ resizeMode: 'contain' }} style={theme.stampIcon}>
                </ImageBackground>          
        </View>
    );
}

export default StampArea;