import React, { useState, useRef, useEffect, useReducer } from 'react';
import { ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, View, AsyncStorage, } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import colors from '../styles/colors';
import baseStyle from '../styles/baseStyle';
import { moderateScale } from '../styles/scalingUtils';

import { letterBackgrounds, fonts } from '../utils/consts';
import AddressBlock from '../components/AddressBlock';
import TextAreaBlock from '../components/TextAreaBlock';
import StampArea from '../components/StampsArea';
import BottomBar from '../components/BottomBar'
import IconsPanel from '../components/IconsPanel';
import BackgroundScreen from './BackgroundScreen';
import { ColorThemeContext } from '../AppContext';
import { Pallet, BorderPallet } from '../utils/pallet';
import BorderColors from './BorderColors';
import FontColors from './FontColors';
import FontStyles from './FontStyles';

const Stack = createStackNavigator();
const themesStyleSheets = (fontColor, borderColor) => {
    return {
        light: StyleSheet.create(baseStyle(fontColor, borderColor)),
        dark: StyleSheet.create({
            ...baseStyle,
            container: {
                flex: 1
            },
            cardContainer: {
                ...baseStyle.cardContainer,
                padding: 0,
            },
            cardRight: {
                ...baseStyle.cardRight,
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                padding: 10,
                margin: 0
            },

            cardLeft: {
                ...baseStyle.cardLeft,
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRightWidth: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                padding: 10,
                margin: 0
            },
            placeholder: {
                ...baseStyle.placeholder,
                color: 'rgba(255,255,255, 0.3)'
            },
            textArea: {
                ...baseStyle.textArea,
                color: colors.white,
                fontSize: 30
            },
            pinBox: {
                ...baseStyle.pinBox,
                borderColor: 'rgba(255,255,255,1)',
                borderWidth: 0,
                borderBottomWidth: 1,
                opacity: 1,
                color: colors.white,
                marginRight: 0
            },
            addressBox: {
                ...baseStyle.addressBox,
                borderBottomColor: 'rgba(255,255,255,1)',

            },
            addressBlock: {
                marginHorizontal: 20,
                marginVertical: 10,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 10,
                padding: 20
            },
            addressBoxInput: {
                ...baseStyle.addressBoxInput,
                color: colors.white,
                opacity: 1

            },
            cardText: {
                ...baseStyle.cardText,
                borderColor: 'rgba(255,255,255,1)',
                color: colors.white
            },
            extraBorder: {
                ...baseStyle.extraBorder,
                borderBottomColor: 'rgba(255,255,255,1)'
            },
            stampArea: {
                ...baseStyle.stampArea,
                borderColor: 'rgba(255,255,255,1)'
            },
            stampAreaText: {
                ...baseStyle.stampAreaText,
                color: 'rgba(255,255,255,0.6)'
            }
        })
    }
};

const themes = ['light', 'dark'];
export default HomeScreen = () => {
    // useEffect(() => {
    //     async () => {
    //         const items = await AsyncStorage.getItem('cards');
    //         console.log(items)

    //     }
    // })
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'SET_FONT_FAMILY':
                    return {
                        ...prevState,
                        font: action.payload,
                    };
                case 'SET_BACKGROUND':
                    return {
                        ...prevState,
                        backgroundImage: action.payload,
                    };
                case 'SET_FONT_SIZE':
                    return {
                        ...prevState,
                        fontSize: prevState.fontSize + action.payload,
                    };
                case 'SET_FONT_COLOR':
                    return {
                        ...prevState,
                        fontColor: action.payload
                    };
                case 'SET_BORDER_COLOR':
                    return {
                        ...prevState,
                        borderColor: action.payload
                    };
                case 'SET_STAMP_IMAGE':
                    return {
                        ...prevState,
                        stampImage: action.payload
                    };
                case 'SET_FONT_STYLE':
                    return {
                        ...prevState,
                        font: action.payload
                    };
                case 'SET_BACKGROUND_COLOR':
                    return {
                        ...prevState,
                        backgroundColor: action.payload,
                        backgroundImage: ''
                    }
                case 'SET_BACKGROUND_FILM':
                    return {
                        ...prevState,
                        alpha: action.payload,
                    }
                case 'SET_SHOW_TITLE':
                    return {
                        ...prevState,
                        showTitle: !prevState.showTitle,
                    }
                case 'SET_SHOW_TITLE':
                    return {
                        ...prevState,
                        showTitle: !prevState.showTitle,
                    }
                case 'SET_SHOW_STAMP':
                    return {
                        ...prevState,
                        showStamp: !prevState.showStamp,
                    }
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            backgroundImage: letterBackgrounds[0].localUrl,
            font: fonts[0],
            fontSize: moderateScale(16),
            stampImage: null,
            fontColor: Pallet.flat()[0],
            borderColor: BorderPallet.flat()[0],
            alpha: 0,
            backgroundColor: 'none',
            showTitle: true,
            showStamp: true
        }

    );
    const [theme, setTheme] = useState(themes[0]);



    const printRef = useRef(null);


    const turnSide = (val) => {
        if (val === 'front') {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }
    const selectedTheme = themesStyleSheets(state.fontColor, state.borderColor)[theme];

    const homepageContext = React.useMemo(
        () => ({
            theme: selectedTheme,
            fontColor: state.fontColor,
            borderColor: state.borderColor,
            font: state.font,
            stampImage: state.stampImage,
            backgroundColor: state.backgroundColor,
            alpha: state.alpha,
            showTitle: state.showTitle,
            showStamp: state.showStamp,
            setBackgroundImage: async data => {
                dispatch({ type: 'SET_BACKGROUND', payload: data });
            },
            setFontSize: async data => {
                dispatch({ type: 'SET_FONT_SIZE', payload: data });
            },
            setFontColor: async data => {
                dispatch({ type: 'SET_FONT_COLOR', payload: data });
            },
            setBorderColor: async data => {
                dispatch({ type: 'SET_BORDER_COLOR', payload: data });
            },
            setStampImage: async data => {
                dispatch({ type: 'SET_STAMP_IMAGE', payload: data });
            },
            setFontStyle: async data => {
                dispatch({ type: 'SET_FONT_STYLE', payload: data });
            },
            setBackgroundColor: async data => {
                dispatch({ type: 'SET_BACKGROUND_COLOR', payload: data });
            },
            setBackgroundAlpha: async data => {
                dispatch({ type: 'SET_BACKGROUND_FILM', payload: data });
            },
            setShowStamp: async data => {
                dispatch({ type: 'SET_SHOW_STAMP', payload: data });
            },
            setShowTitle: async data => {
                dispatch({ type: 'SET_SHOW_TITLE', payload: data });
            },

        }),
        [
            state.fontColor,
            state.borderColor,
            state.stampImage,
            state.backgroundColor,
            state.alpha,
            state.showTitle,
            state.showStamp
        ]
    );
    const snapshot = async () => {
        captureRef(printRef, {
            format: "png",
            quality: 1,
            width: 1600,
            height: 800
        }).then(
            async (uri) => {
                const sharingAvailable = await Sharing.isAvailableAsync();
                if (sharingAvailable) {
                    Sharing.shareAsync(uri);
                    // const savedCards = await AsyncStorage.getItem('cards');
                    // const savedCardsObj = JSON.parse(savedCards);
                    // AsyncStorage.setItem('cards', [savedCardsObj, ...state]);
                }
            })
    }
    const ShareButton = () => {
        return (
            <View style={[selectedTheme.bottomRightBar, { alignSelf: 'center', marginVertical: 10, justifyContent: 'center', flexDirection: 'row' }]}>
                <TouchableOpacity onPress={snapshot} style={selectedTheme.button}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Share</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <ColorThemeContext.Provider value={homepageContext}>
            <View style={selectedTheme.container}>
                <View style={selectedTheme.backgroundContainer}>
                    <ImageBackground ref={printRef} source={state.backgroundImage} imageStyle={{ resizeMode: 'cover' }} style={[selectedTheme.backGround, { backgroundColor: state.backgroundColor }]}>
                        <View style={[selectedTheme.cardContainer, { backgroundColor: `rgba(0, 0, 0, ${state.alpha})` }]}>
                            <View style={selectedTheme.cardLeft}>
                                <TextAreaBlock theme={selectedTheme} fontSize={state.fontSize} font={state.font} setSideBlock={(val) => turnSide(val)}></TextAreaBlock>
                            </View>
                            <View style={selectedTheme.cardRight}>
                                <View style={selectedTheme.cardHeader}>
                                    {state.showTitle && (
                                        <View style={selectedTheme.cardTitle}>
                                            {theme === 'light' && (
                                                <TextInput
                                                    disableFullscreenUI={true}
                                                    style={[selectedTheme.cardText]}
                                                    defaultValue="POST-CARD"
                                                    underlineColorAndroid="transparent"
                                                />
                                            )}
                                            <Text style={selectedTheme.extraBorder}></Text>
                                        </View>
                                    )}
                                    {state.showStamp && (
                                        <View style={selectedTheme.cardStamp}>
                                            <StampArea theme={selectedTheme} stampImage={state.stampImage} showText={false}></StampArea>
                                        </View>
                                    )}
                                </View>
                                <View style={selectedTheme.addressBlock}>
                                    <AddressBlock theme={selectedTheme} editable={true} setParentAddress={(val) => setAddress(val)} font={state.font}></AddressBlock>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>


                <Stack.Navigator>
                    <Stack.Screen name="Actions" component={BottomBar} options={{

                        headerRight: () => (
                            <ShareButton></ShareButton>
                        ),
                    }} />
                    <Stack.Screen name="Fonts" component={FontStyles} options={{
                        headerRight: () => (
                            <ShareButton></ShareButton>
                        )
                    }} />
                    <Stack.Screen name="Background" component={BackgroundScreen}
                        initialParams={{ pallet: Pallet }} options={{
                            headerRight: () => (
                                <ShareButton></ShareButton>
                            )
                        }} />
                    <Stack.Screen name="Font Color" component={FontColors}
                        initialParams={{ pallet: Pallet }} options={{
                            headerRight: () => (
                                <ShareButton></ShareButton>
                            )
                        }}
                    />
                    <Stack.Screen name="Border Color" component={BorderColors} options={{
                        headerRight: () => (
                            <ShareButton></ShareButton>
                        )
                    }}
                        initialParams={{ pallet: BorderPallet }} options={{
                            headerRight: () => (
                                <ShareButton></ShareButton>
                            )
                        }}
                    />
                    <Stack.Screen name="Stamps" component={IconsPanel} options={{
                        headerRight: () => (
                            <ShareButton></ShareButton>
                        )
                    }}
                    />
                </Stack.Navigator>

            </View>
        </ColorThemeContext.Provider>
    )

};
