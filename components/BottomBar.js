

import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { indent, } from '../styles/dimensions';
import { ColorThemeContext } from '../AppContext';
import { useNavigation } from '@react-navigation/native';
const BottomBar = () => {
    const { theme, setFontSize, snapshot, showAddress, setShowAddress, showTitle, showStamp, setShowStamp, setShowTitle } = useContext(ColorThemeContext);
    const { navigate } = useNavigation();
    return (
        <View style={theme.bottomBar}>
            <View style={[theme.bottomLeftBar]}>
                <TouchableOpacity style={theme.option} onPress={() => navigate('Fonts')}>
                    <MaterialCommunityIcons style={theme.optionIcon} name="format-text" size={indent * 1.8} ></MaterialCommunityIcons>
                    <Text style={theme.optionText}>Font Style</Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme.option} onPress={() => navigate('Background')}>
                    <MaterialCommunityIcons style={theme.optionIcon} name="image-area" size={indent * 1.8} ></MaterialCommunityIcons>
                    <Text style={theme.optionText}>Background</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={theme.option} onPress={() => {
                    hideAllPanels()
                    showForegrounds()
                }}>
                    <MaterialCommunityIcons style={theme.optionIcon} name="image-area-close" size={indent * 1.8} ></MaterialCommunityIcons>
                    <Text style={theme.optionText}>Foreground</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={theme.option} onPress={() => navigate('Font Color')}>
                    <MaterialCommunityIcons style={theme.optionIcon} name="palette" size={indent * 1.8} ></MaterialCommunityIcons>
                    <Text style={theme.optionText}>Font Color</Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme.option} onPress={() => navigate('Border Color')}>
                    <MaterialCommunityIcons style={theme.optionIcon} name="border-all-variant" size={indent * 1.8} ></MaterialCommunityIcons>
                    <Text style={theme.optionText}>Border Color</Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme.option} onPress={() => setFontSize(2)}>
                    <MaterialCommunityIcons style={theme.optionIcon} name="format-font-size-increase" size={indent * 1.8} ></MaterialCommunityIcons>
                    <Text style={theme.optionText}>Increase Font Size</Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme.option} onPress={() => setFontSize(-2)}>
                    <MaterialCommunityIcons style={theme.optionIcon} name="format-font-size-decrease" size={indent * 1.8} ></MaterialCommunityIcons>
                    <Text style={theme.optionText}>Decrease Font Size</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={theme.option} onPress={() => navigate('Stamps')}>
                    <MaterialCommunityIcons style={theme.optionIcon} name="stamper" size={indent * 1.8} ></MaterialCommunityIcons>
                    <Text style={theme.optionText}>Stamps</Text>
                </TouchableOpacity> */}
                <View style={[theme.option, { flexDirection: 'row', alignSelf: 'center' }]}>
                    <Text style={theme.label}>Title</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={showTitle ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setShowTitle}
                        value={showTitle}
                    />
                </View>
                <View style={[theme.option, { flexDirection: 'row', alignSelf: 'center' }]}>
                    <Text style={theme.label}>Stamp</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={showStamp ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setShowStamp}
                        value={showStamp}
                    />
                </View>
                <View style={[theme.option, { flexDirection: 'row', alignSelf: 'center' }]}>
                    <Text style={theme.label}>Address</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={showAddress ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setShowAddress}
                        value={showAddress}
                    />
                </View>
            </View>

            {/* <View style={[theme.bottomRightBar, { marginVertical: 40, justifyContent: 'center', flexDirection: 'row' }]}>

                {/* <TouchableOpacity onPress={() => setReset(false)} style={theme.button}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Reset</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={snapshot} style={theme.button}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Share</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

export default BottomBar;