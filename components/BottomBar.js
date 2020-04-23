

import React from 'react';
import { Text, View, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { indent, } from '../styles/dimensions';
const BottomBar = ({
    theme,
    setFontSize,
    setShowPreview,
    showForegrounds,
    showBackgrounds,
    rotateFonts,
    snapshot,
    fontSize,
    imageCard,
    setImageCard }) => (
        <View style={theme.bottomBar}>

            <View style={theme.bottomLeftBar}>
                <TouchableOpacity onPress={rotateFonts}>
                    <MaterialCommunityIcons name="format-text" size={indent * 1.8} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={theme.icon} onPress={showBackgrounds}>
                    <MaterialCommunityIcons name="format-color-fill" size={indent * 2} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={theme.icon} onPress={showForegrounds}>
                    <MaterialCommunityIcons name="palette" size={indent * 1.8} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={theme.icon} onPress={() => setFontSize(fontSize - 1)}>
                    <MaterialCommunityIcons name="format-font-size-decrease" size={indent * 1.8} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={theme.icon} onPress={() => setFontSize(fontSize + 1)}>
                    <MaterialCommunityIcons name="format-font-size-increase" size={32} ></MaterialCommunityIcons>
                </TouchableOpacity>

            </View>
            <View style={theme.bottomMiddleBar}>
                <View style={theme.tabs}>
                    <TouchableOpacity onPress={() => {
                        setImageCard(false)
                    }} style={[theme.tab, { borderBottomWidth: imageCard === false ? 5 : 1 }]}>
                        <Text style={{ fontFamily: 'Curiousness', }}>Letter Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setImageCard(true) }}
                        style={[theme.tab, { borderBottomWidth: imageCard === true ? 5 : 1 }]}>
                        <Text style={{ fontFamily: 'Curiousness', }}>Image Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={theme.bottomRightBar}>
                <TouchableOpacity onPress={() => setShowPreview(false)} style={theme.button}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={snapshot} style={theme.button}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

export default BottomBar;