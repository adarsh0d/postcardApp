import React from 'react';
import { Text,View,TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../styles/colors';

const ColorsPanel = ({ setSelectedColor, pallet, theme, selectedColor }) => {
    const renderIcon = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => setSelectedColor(item)} style={[theme.stampImage, { margin: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: item, borderWidth: 1, borderColor: colors.brownDarker }]}>
                { item === selectedColor && ( 
                   <MaterialCommunityIcons color={colors.white} name="check" size={32} style={{borderColor: colors.brownDarker, borderWidth: 1, borderRadius: 50}}></MaterialCommunityIcons> 
                )}
                { item === "transparent" && (
                    <Text style={{fontSize: 10}}>Transparent</Text>
                )}
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ borderTopWidth: 10, borderColor: colors.brownDarker }}>
            <FlatList horizontal={true}
                data={pallet.flat()}
                renderItem={renderIcon}
                keyExtractor={(item, index) => index}
            ></FlatList>
        </View>
    )
}
export default ColorsPanel