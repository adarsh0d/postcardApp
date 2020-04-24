import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity,Keyboard, TextInput as Input, ImageBackground, FlatList, KeyboardAvoidingView } from 'react-native';

import colors from '../styles/colors';
const ImagePanel = ({ setStampImage, foreGround = false,theme, close, staticImages }) => {
    const [images, setRemoteImages] = useState([])
    const [localImages, setLocalImages] = useState(staticImages)
    const [searchText, setSearchText] = useState('')
    const search = async () => {
        const response = await fetch('https://api.pexels.com/v1/search?query=' + searchText + '&per_page=15&page=1', {
            method: 'GET',
            headers: {
                Authorization: '563492ad6f9170000100000103288f085b2f42d0849779503bab972b'
            }
        });
        if (response.status === 200) {
            const result = await response.json();
            await setRemoteImages(result.photos);
        }
    };
    useEffect(() => {
        (async () => {
            const searchTerm = foreGround ? 'Pattern' : 'Old Paper';
            const response = await fetch('https://api.pexels.com/v1/search?query='+ searchTerm +'&per_page=15&page=1', {
                method: 'GET',
                headers: {
                    Authorization: '563492ad6f9170000100000103288f085b2f42d0849779503bab972b'
                }
            });
            if (response.status === 200) {
                const result = await response.json();
                await setRemoteImages(result.photos);
            }
        })();
    }, [])
    const renderIcon = ({ item }) => {
        if (item.localUrl) {
            return (
                <TouchableOpacity onPress={() => setStampImage(item.localUrl)} style={{ margin: 5 }}>
                    <ImageBackground source={item.localUrl} imageStyle={{ resizeMode: 'contain' }} style={theme.stampImage}>
                    </ImageBackground>
                </TouchableOpacity>
            )
        } else if (!item.localUrl) {
            return (
                <TouchableOpacity onPress={() => setStampImage({ uri: item.src.landscape })} style={{ margin: 5 }}>
                    <ImageBackground source={{ uri: item.src.original }} imageStyle={{ resizeMode: 'contain' }} style={theme.stampImage}>
                    </ImageBackground>
                </TouchableOpacity>
            )
        }
    }
    return (
        <View style={{ borderTopWidth: 1, borderColor: colors.brownDarker }}>
            <View style={{flexDirection: 'row'}}>
                <FlatList horizontal={true}
                    data={localImages}
                    renderItem={renderIcon}
                    keyExtractor={(item, index) => index}
                    ListEmptyComponent={<Text>Fetching</Text>}
                ></FlatList>
                <TouchableOpacity onPress={() => close()} style={[theme.button, theme.icon, { alignSelf: "flex-start", marginVertical: 5 }]}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Close</Text>
                </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: colors.brownDarker, marginHorizontal: 10 }}></View>
            <KeyboardAvoidingView style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginVertical: 5, justifyContent: 'flex-start'
            }}>
                <Input placeholder="Search Backgrounds"
                    onChangeText={(text) => setSearchText(text)}
                    disableFullscreenUI={true}
                    style={{
                        alignItems: 'center',
                        borderRadius: 4,
                        borderWidth: 1,
                        borderColor: colors.darkGrey,
                        fontFamily: 'Curiousness',
                        alignSelf: 'flex-start',
                        width: 400,
                        color: '#000',
                        paddingHorizontal: 10,
                        backgroundColor: '#ffffff'
                    }}
                />
                <TouchableOpacity onPress={() => {Keyboard.dismiss(); search()}} style={[theme.button, theme.icon, { alignSelf: "flex-start" }]}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Search</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <FlatList horizontal={true}
                data={images}
                renderItem={renderIcon}
                keyExtractor={(item, index) => index}
                ListEmptyComponent={<Text>Fetching</Text>}
            ></FlatList>
        </View>
    )
}
export default ImagePanel