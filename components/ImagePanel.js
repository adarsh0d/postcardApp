import React, { useEffect, useState, useReducer, useContext } from 'react';
import { Text, View, TouchableOpacity, Keyboard, TextInput as Input, Image, ScrollView, FlatList, KeyboardAvoidingView } from 'react-native';
import { ColorThemeContext } from '../AppContext';
import colors from '../styles/colors';
import { Dimensions } from 'react-native';
import { halfVerticalIndent, indent, verticalIndent } from '../styles/dimensions';
import { MaterialIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

const ImagePanel = ({ foreGround = false, }) => {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'NEXT_PAGE':
                    return {
                        ...prevState,
                        pageNo: prevState.pageNo + 1
                    }
                case 'PREV_PAGE':
                    return {
                        ...prevState,
                        pageNo: prevState.pageNo - 1
                    }
            }
        }, {
        pageNo: 1
    })
    const { theme, setBackgroundImage } = useContext(ColorThemeContext);
    const [images, setRemoteImages] = useState([])
    const [searchText, setSearchText] = useState('')
    const search = async (pageNo) => {
        console.log(pageNo);
        let searchTerm = ''
        if (!searchText) {
            searchTerm = 'Old Paper';
        } else {
            searchTerm = searchText
        }
        const response = await fetch('https://api.pexels.com/v1/search?query=' + searchTerm + '&per_page=100&page=' + pageNo, {
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
    const setPrevPage = async () => {
        if(state.pageNo - 1 >= 1) {
            dispatch({type: 'PREV_PAGE'})
            search(state.pageNo - 1)
        }
    }
    const setNextPage = async () => {
        dispatch({type: 'NEXT_PAGE'})
        search(state.pageNo + 1)
    }
    const imagewidth = (width - (halfVerticalIndent / 2) * 2) / 4;
    useEffect(() => {
        (async () => {
            const searchTerm = foreGround ? 'Pattern' : 'Old Paper';
            const response = await fetch('https://api.pexels.com/v1/search?query=' + searchTerm + '&per_page=100&page=1', {
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
                <TouchableOpacity onPress={() => setBackgroundImage(item.localUrl)} style={{ marginHorizontal: 2, marginBottom: 2 }}>
                    <Image source={item.localUrl} imageStyle={{ resizeMode: 'cover' }} style={{ marginHorizontal: halfVerticalIndent / 6, marginBottom: 2, height: imagewidth, width: imagewidth }}>
                    </Image>
                </TouchableOpacity>
            )
        } else if (!item.localUrl) {
            return (
                <TouchableOpacity onPress={() => setBackgroundImage({ uri: item.src.landscape })} style={{}}>
                    <Image source={{ uri: item.src.tiny }} imageStyle={{ resizeMode: 'cover' }} style={{ marginHorizontal: halfVerticalIndent / 6, marginBottom: 2, height: imagewidth, width: imagewidth }}>
                    </Image>
                </TouchableOpacity>
            )
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    paddingVertical: halfVerticalIndent,
                    paddingHorizontal: halfVerticalIndent / 2
                }}>
                    <KeyboardAvoidingView style={{
                        flexDirection: 'row',
                    }}>
                        <Input placeholder="Search Gallery"
                            onChangeText={(text) => setSearchText(text)}
                            disableFullscreenUI={true}
                            style={{
                                alignItems: 'center',
                                borderRadius: 20,
                                borderWidth: 1,
                                borderColor: colors.darkGrey,
                                fontFamily: 'Curiousness',
                                alignSelf: 'flex-start',
                                color: '#000',
                                width: width / 2,
                                paddingHorizontal: 10,
                                backgroundColor: '#ffffff'
                            }}
                        />
                        <TouchableOpacity onPress={() => { Keyboard.dismiss(); search() }} style={[theme.button, theme.icon, { alignSelf: "flex-start" }]}>
                            <Text style={{ fontFamily: 'Curiousness', }}>Search</Text>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={setPrevPage} >
                            <MaterialIcons name="navigate-before" style={{ opacity: state.pageNo < 2 ? 0.1 : 1 }} size={indent * 1.8}></MaterialIcons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={setNextPage}>
                            <MaterialIcons name="navigate-next" size={indent * 1.8}></MaterialIcons>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    numColumns={4}
                    data={images}
                    renderItem={renderIcon}
                    keyExtractor={(item, index) => index}
                    ListEmptyComponent={<Text>Fetching</Text>}
                ></FlatList>
            </View>
        </View>
    )
}
export default ImagePanel