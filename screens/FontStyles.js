import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';
import { ColorThemeContext } from '../AppContext';

import { fonts} from '../utils/consts';

const FontStyles = ({ setSelectedColor, pallet, selectedColor }) => {
    const { theme, setFontStyle } = useContext(ColorThemeContext);
    
    const renderFont = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => setFontStyle(item)} style={[{ margin: 5, padding: 10, borderBottomWidth: 1, borderColor: colors.brownDarker }]}>
                    <Text style={{ fontSize: 23, fontFamily: item }}>{item}</Text>
                </TouchableOpacity>
               
            </View>
        )
    }
    return (

        <FlatList
            data={fonts}
            renderItem={renderFont}
            keyExtractor={(item, index) => index}
        ></FlatList>
    )
}
export default FontStyles