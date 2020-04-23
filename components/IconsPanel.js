import React from 'react';
import { Text,View,TouchableOpacity, ImageBackground, FlatList} from 'react-native';

import colors from '../styles/colors';

import { iconsUrls} from '../utils/consts';
const IconsPanel = ({ setStampImage, theme }) => {
    const renderIcon = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => setStampImage(item.url)} style={{ margin: 5 }}>
                <ImageBackground source={item.url} imageStyle={{ resizeMode: 'contain' }} style={theme.stampImage}>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ borderTopWidth: 10, borderColor: colors.brownDarker }}>
            <FlatList horizontal={true}
                data={iconsUrls}
                renderItem={renderIcon}
            ></FlatList>
            <Text style={{ fontFamily: 'Curiousness', paddingHorizontal: 10 }}>
                Icons made by <Text onPress={() => Linking.openURL('https://www.flaticon.com/authors/roundicons')}> Roundicons</Text> from <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://www.flaticon.com')}></Text>www.flaticon.com
            </Text>
        </View>
    )
}
export default IconsPanel