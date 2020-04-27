import React, {useContext} from 'react';
import { Text,View,TouchableOpacity, ImageBackground, FlatList} from 'react-native';

import colors from '../styles/colors';
import { ColorThemeContext } from '../AppContext';
import { iconsUrls} from '../utils/consts';
const IconsPanel = () => {
    const { theme, setStampImage } = useContext(ColorThemeContext);
    const renderIcon = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => setStampImage(item.url)} style={{ margin: 5 }}>
                <ImageBackground source={item.url} imageStyle={{ resizeMode: 'contain' }} style={theme.stampImage}>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                numColumns={6}
                data={iconsUrls}
                renderItem={renderIcon}
                keyExtractor={(item, index) => index}
            ></FlatList>
            <Text style={{ fontFamily: 'Curiousness', paddingHorizontal: 10 }}>
                Icons made by <Text onPress={() => Linking.openURL('https://www.flaticon.com/authors/roundicons')}> Roundicons</Text> from <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://www.flaticon.com')}></Text>www.flaticon.com
            </Text>
        </View>
    )
}
export default IconsPanel