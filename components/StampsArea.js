
import React from 'react';
import { Text,View,TouchableOpacity, ImageBackground} from 'react-native';

const StampArea = ({ viewStamps,theme, stampImage, showText = true }) => {
    if (stampImage) {
        return (
            <TouchableOpacity onPress={viewStamps} style={theme.stampList}>
                <ImageBackground source={stampImage} imageStyle={{ resizeMode: 'contain' }} style={theme.stampImage}>
                </ImageBackground>
                {showText && (
                    <Text style={theme.stampAreaText}>Add a stamp</Text>
                )}
            </TouchableOpacity>
        )
    }
    return (
        <View style={theme.stampArea}>
            <TouchableOpacity onPress={viewStamps}>
                <Text style={theme.stampAreaText}>Add a stamp</Text>
            </TouchableOpacity>
        </View>
    );
}

export default StampArea;