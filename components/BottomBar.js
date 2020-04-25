

import React from 'react';
import { Text, View, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { indent, } from '../styles/dimensions';
const BottomBar = ({
    theme,
    setFontSize,
    setReset,
    showForegrounds,
    showColors,
    showBackgrounds,
    rotateFonts,
    snapshot,
    fontSize,
    imageCard,
    showBorderColors,
    setImageCard ,
    hideAllPanels,
    showStamp,
    toggleStamp,
    showTitle,
    toggleTitle
}) => (
        <View style={theme.bottomBar}>

            <View style={theme.bottomLeftBar}>
                <TouchableOpacity onPress={rotateFonts}>
                    <MaterialCommunityIcons name="format-text" size={indent * 1.8} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={theme.icon} onPress={() => {
                    hideAllPanels()
                    showBackgrounds()
                }}>
                    <MaterialCommunityIcons name="image-area" size={indent * 2} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={theme.icon} onPress={() => {
                    hideAllPanels()
                    showForegrounds()
                }}>
                    <MaterialCommunityIcons name="image-area-close" size={indent * 2} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={theme.icon} onPress={() => {
                    hideAllPanels()
                    showColors()
                }}>
                    <MaterialCommunityIcons name="palette" size={indent * 1.8} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={theme.icon} onPress={() => {                    
                    hideAllPanels();
                    showBorderColors()
                }}>
                    <MaterialCommunityIcons name="border-all-variant" size={32} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={theme.icon} onPress={() => setFontSize(fontSize - 4)}>
                    <MaterialCommunityIcons name="format-font-size-decrease" size={indent * 1.8} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity style={theme.icon} onPress={() => setFontSize(fontSize + 4)}>
                    <MaterialCommunityIcons name="format-font-size-increase" size={32} ></MaterialCommunityIcons>
                </TouchableOpacity>
                

            </View>
            {/*<View style={theme.bottomMiddleBar}>
                <View style={theme.tabs}>
                    <TouchableOpacity onPress={() => {
                        setImageCard(false)
                    }} style={[theme.tab, { borderBottomWidth: imageCard === false ? 5 : 1 }]}>
                        <Text style={{ fontFamily: 'Curiousness', }}>Letter Card</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => { setImageCard(true) }}
                        style={[theme.tab, { borderBottomWidth: imageCard === true ? 5 : 1 }]}>
                        <Text style={{ fontFamily: 'Curiousness', }}>Image Card</Text>
                    </TouchableOpacity>
                </View>
            </View>*/}
            <View style={theme.bottomRightBar}>
            <View style={[theme.icon, {flexDirection: 'row', alignSelf: 'center'}]}>
                    <Text style={theme.label}>Title</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={showTitle ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleTitle}
                        value={showTitle}
                    />
                </View>
            <View style={[theme.icon, {flexDirection: 'row', alignSelf: 'center'}]}>
                    <Text style={theme.label}>Stamp</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={showStamp ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleStamp}
                        value={showStamp}
                    />
                </View>
                <TouchableOpacity onPress={() => setReset(false)} style={theme.button}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={snapshot} style={theme.button}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

export default BottomBar;