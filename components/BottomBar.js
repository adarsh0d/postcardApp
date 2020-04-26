

import React, {useContext} from 'react';
import { Text, View, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { indent, } from '../styles/dimensions';
import { ColorThemeContext } from '../AppContext';
import { useNavigation } from '@react-navigation/native';
const BottomBar = ({
    setFontSize,
    setReset,
    showForegrounds,
    showColors,
    showBackgrounds,
    rotateFonts,
    snapshot,
    fontSize,
    showBorderColors,
    hideAllPanels,
}) => {
    const theme = useContext(ColorThemeContext);
    const { navigate }  = useNavigation();
    return (
        <View style={theme.bottomBar}>
            <View style={[theme.bottomLeftBar]}>
                <TouchableOpacity style={theme.option} onPress={rotateFonts}>
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
                <TouchableOpacity style={theme.option} onPress={() => {
                    hideAllPanels();
                    showBorderColors()
                }}>
                    <MaterialCommunityIcons style={theme.optionIcon} name="border-all-variant" size={indent * 1.8} ></MaterialCommunityIcons>
                    <Text style={theme.optionText}>Border</Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme.option} onPress={() => setFontSize(fontSize - 4)}>
                    <MaterialCommunityIcons style={theme.optionIcon} name="format-font-size-decrease" size={indent * 1.8} ></MaterialCommunityIcons>
                    <Text style={theme.optionText}>Font Size</Text>
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
            <View style={[theme.bottomRightBar, { marginVertical: 40, flexDirection: 'row' }]}>

                <TouchableOpacity onPress={() => setReset(false)} style={theme.button}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={snapshot} style={theme.button}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomBar;