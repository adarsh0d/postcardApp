import React, { useContext, useState, useEffect } from 'react';
import { View, Text, AsyncStorage, Dimensions, TouchableOpacity, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { ColorThemeContext } from '../AppContext'
import { FlatList } from 'react-native-gesture-handler';

import { halfVerticalIndent, indent, verticalIndent } from '../styles/dimensions';
const { width, height } = Dimensions.get('window');
const imagewidth = (width - (halfVerticalIndent / 2) * 2) / 4;
const LocalGalleryList = () => {
    const [photos, setPhotos] = useState([]);
    const { theme, setBackgroundImage } = useContext(ColorThemeContext);
    useEffect(() => {
        (async () => {

            const items = await AsyncStorage.getItem('savedImages');
            await setPhotos(JSON.parse(items));
        })();
    });
    const setImage = async () => {
        let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status == 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [16, 9],
                quality: 1
            });
            if (!result.cancelled) {
                setBackgroundImage({ uri: result.uri });
                await AsyncStorage.setItem('savedImages', JSON.stringify([...photos, result.uri].slice(0, 10)));
                setPhotos((photos) => [...photos, result.uri]);
            }
        }
    }
    const renderImage = ({ item, index }) => {
        if (index == 0) {
            return (
                <TouchableOpacity onPress={setImage} style={{ marginHorizontal: halfVerticalIndent / 6, marginBottom: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', height: imagewidth, width: imagewidth }}>
                    <MaterialCommunityIcons name="plus" size={imagewidth / 2}></MaterialCommunityIcons>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity onPress={() => setBackgroundImage({ uri: item })} style={{}}>
                <Image source={{ uri: item }} imageStyle={{ resizeMode: 'cover' }} style={{ marginHorizontal: halfVerticalIndent / 6, marginBottom: 2, height: imagewidth, width: imagewidth }}>
                </Image>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList numColumns={4} data={photos} renderItem={renderImage}
            ListEmptyComponent={<TouchableOpacity onPress={setImage} style={{ marginHorizontal: halfVerticalIndent / 6, marginBottom: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', height: imagewidth, width: imagewidth }}>
                <MaterialCommunityIcons name="plus" size={imagewidth / 2}></MaterialCommunityIcons>
            </TouchableOpacity>}></FlatList>
    )
}
export default LocalGalleryList;