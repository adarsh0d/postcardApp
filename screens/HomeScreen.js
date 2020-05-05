import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ImageBackground, Text, StyleSheet, TextInput, Dimensions, ScrollView, TouchableOpacity, View, AsyncStorage, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
import { ColorThemeContext, AddressContext, TextAreaContext } from '../AppContext';
import { Pallet, BorderPallet } from '../utils/pallet';
import BorderColors from './BorderColors';
import FontColors from './FontColors';
import FontStyles from './FontStyles';
import { indent, halfVerticalIndent } from '../styles/dimensions';
const { width, height } = Dimensions.get('window');
const Stack = createMaterialTopTabNavigator();
const themesStyleSheets = (fontColor, borderColor, aspectRatio) => {
    return {
        light: StyleSheet.create(baseStyle(fontColor, borderColor, aspectRatio)),
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
                case 'HIDE_ADDRESS':
                    return {
                        ...prevState,
                        showAddress: action.payload,
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
                case 'SET_SIZE':
                    return {
                        ...prevState,
                        aspectRatio: action.payload
                    };
                case 'SET_FRONT_TEXT':
                    return {
                        ...prevState,
                        frontText: action.payload
                    };
                case 'SET_ADDRESS':
                    return {
                        ...prevState,
                        address: action.payload
                    };
                case 'RESET':
                    return {
                        ...prevState,
                        frontText: '',
                        address: {
                            addressLine1: '',
                            addressLine2: '',
                            addressLine3: '',
                            pin1: '',
                            pin2: '',
                            pin3: '',
                            pin4: '',
                            pin5: '',
                            pin6: ''
                        }
                    }
            }
        },
        {
            backgroundImage: letterBackgrounds[0].localUrl,
            font: fonts[0],
            fontSize: moderateScale(20),
            stampImage: null,
            fontColor: Pallet.flat()[0],
            borderColor: BorderPallet.flat()[0],
            alpha: 0,
            backgroundColor: 'none',
            showTitle: true,
            showStamp: true,
            showAddress: true,
            aspectRatio: [4, 3],
            frontText: '',
            address: {
                addressLine1: '',
                addressLine2: '',
                addressLine3: '',
                pin1: '',
                pin2: '',
                pin3: '',
                pin4: '',
                pin5: '',
                pin6: ''
            }

        }

    );

    const [theme] = useState(themes[0]);



    const printRef = useRef(null);


    const turnSide = (val) => {
        if (val === 'front') {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }
    const selectedTheme = themesStyleSheets(state.fontColor, state.borderColor, state.aspectRatio)[theme];
    const [printInProgress, setPrintInProgress] = useState(false)
    useEffect(() => {
        if (printInProgress) {
            captureRef(printRef, {
                format: "png",
                quality: 1,
                width: width,
                height: width * (state.aspectRatio[1] / state.aspectRatio[0])
            }).then(
                async (uri) => {
                    setPrintInProgress(false);
                    const sharingAvailable = await Sharing.isAvailableAsync();
                    if (sharingAvailable) {
                        Sharing.shareAsync(uri);
                        // const savedCards = await AsyncStorage.getItem('cards');
                        // const savedCardsObj = JSON.parse(savedCards);
                        // AsyncStorage.setItem('cards', [savedCardsObj, ...state]);
                    }
                })

        }
    }, [printInProgress])
    const homepageContext = useMemo(
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
            showAddress: state.showAddress,
            aspectRatio: state.aspectRatio,
            setSize: async data => {
                dispatch({ type: 'SET_SIZE', payload: data });
            },
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
            setShowAddress: async data => {
                dispatch({ type: 'HIDE_ADDRESS', payload: data })
            },
            setAspectRatio: async data => {
                dispatch({ type: 'SET_SIZE', payload: data })
            },



        }),
        [
            state.fontColor,
            state.borderColor,
            state.stampImage,
            state.backgroundColor,
            state.alpha,
            state.showTitle,
            state.showStamp,
            state.showAddress,
            state.aspectRatio,
        ]
    );
    const addressContext = useMemo(
        () => ({
            address: state.address,
            setAddress: async data => {
                dispatch({ type: 'SET_ADDRESS', payload: data })
            }
        }),
        [
            state.address
        ]
    );
    const textAreaContext = useMemo(
        () => ({
            frontText: state.frontText,
            setFrontText: async data => {
                dispatch({ type: 'SET_FRONT_TEXT', payload: data })
            },

        }),
        [
            state.frontText,
        ]
    );
    const snapshot = async () => {
        setPrintInProgress(!printInProgress);
    }
    const ShareButton = () => {
        return (
            <View style={[selectedTheme.bottomRightBar, { justifyContent: 'flex-end', marginVertical: 10, flexDirection: 'row' }]}>
                <TouchableOpacity onPress={() => { dispatch({ type: 'RESET' }) }}>
                    <MaterialCommunityIcons name="plus" size={indent * 1.8} ></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity onPress={snapshot} style={{ marginLeft: 5 }}>
                    <MaterialCommunityIcons name="share" size={indent * 1.8} ></MaterialCommunityIcons>
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <ColorThemeContext.Provider value={homepageContext}>

            <View style={selectedTheme.container}>
                <View style={selectedTheme.backgroundContainer}>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, }}>
                        <View style={{ alignSelf: 'center', flexDirection: 'row', flex: 1 }}>
                            <TouchableOpacity onPress={() => homepageContext.setFontSize(2)}>
                                <MaterialCommunityIcons name="format-font-size-increase" size={indent * 1.8} ></MaterialCommunityIcons>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => homepageContext.setFontSize(-2)}>
                                <MaterialCommunityIcons name="format-font-size-decrease" size={indent * 1.8} ></MaterialCommunityIcons>
                            </TouchableOpacity>
                        </View>
                        <ShareButton></ShareButton>
                    </View>
                    <ImageBackground ref={printRef} source={state.backgroundImage} imageStyle={{ resizeMode: 'cover' }} style={[selectedTheme.backGround, { backgroundColor: state.backgroundColor }]}>
                        <View style={[selectedTheme.cardContainer, { backgroundColor: `rgba(0, 0, 0, ${state.alpha})` }]}>
                            <View style={selectedTheme.cardLeft}>
                                <TextAreaContext.Provider value={textAreaContext}>
                                    {!printInProgress ? (
                                        <TextAreaBlock theme={selectedTheme} fontSize={state.fontSize} font={state.font} setSideBlock={(val) => turnSide(val)}></TextAreaBlock>
                                    ) : (
                                            <View style={selectedTheme.messageAreaFront}>
                                                <Text style={[selectedTheme.textArea, { fontFamily: state.font, fontSize: state.fontSize }]} >
                                                    {state.frontText}
                                                </Text>
                                            </View>)}
                                </TextAreaContext.Provider>
                            </View>
                            {(state.showAddress || state.showTitle || state.showStamp) && (
                                <View style={selectedTheme.cardRight}>
                                    <View style={selectedTheme.cardHeader}>
                                        {state.showTitle && (
                                            <View style={selectedTheme.cardTitle}>
                                                {theme === 'light' && (
                                                    <Text
                                                        style={[selectedTheme.cardText]}
                                                    >
                                                        POST-CARD
                                                    </Text>
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
                                    {state.showAddress && (
                                        <AddressContext.Provider value={addressContext}>

                                            <View style={selectedTheme.addressBlock}>
                                                <AddressBlock theme={selectedTheme} editable={true} setParentAddress={(val) => setAddress(val)} font={state.font}></AddressBlock>
                                            </View>

                                        </AddressContext.Provider>
                                    )}
                                </View>
                            )}
                        </View>
                        <View
                            style={
                                selectedTheme.logo
                            }>
                            <Text style={{
                                transform: [{
                                    rotate: '0deg',
                                }], fontFamily: 'sans-serif-medium', textAlign: 'center', width: '100%', fontSize: 12, color: '#fff'
                            }}>CHITTHI</Text></View>
                    </ImageBackground>

                </View>


                <Stack.Navigator
                    tabBarOptions={{
                        showIcon: true,
                        showTitle: false,
                        iconStyle: { height: 0 }
                    }}
                >

                    <Stack.Screen name="Fonts" component={FontStyles}
                        tabBarOptions={{
                            showIcon: true,
                        }}
                        options={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                // You can return any component that you like here!
                                return <MaterialCommunityIcons name="format-text" size={indent * 1.5} ></MaterialCommunityIcons>;
                            },
                            tabBarLabel: ''
                        })} />
                    <Stack.Screen name="Background" component={BackgroundScreen}

                        initialParams={{ pallet: Pallet }}
                        options={{
                            tabBarIcon: () => { return (<MaterialCommunityIcons name="image-area" size={indent * 1.5} ></MaterialCommunityIcons>) },

                            tabBarLabel: ''

                        }} tabBarOptions={{
                            showIcon: true
                        }} />
                    <Stack.Screen name="Stamps" component={IconsPanel} options={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            // You can return any component that you like here!
                            return <MaterialCommunityIcons name="stamper" size={indent * 1.5} ></MaterialCommunityIcons>;
                        },
                        tabBarLabel: ''
                    })}
                    />
                    <Stack.Screen name="Font Color" component={FontColors}
                        initialParams={{ pallet: Pallet }}
                        options={{
                            tabBarIcon: () => { return (<MaterialCommunityIcons name="palette" size={indent * 1.5} ></MaterialCommunityIcons>) },
                            tabBarLabel: ''
                        }} tabBarOptions={{
                            showIcon: true
                        }}
                    />
                    <Stack.Screen name="Border Color" component={BorderColors}
                        initialParams={{ pallet: BorderPallet }} options={{
                            tabBarIcon: () => { return (<MaterialCommunityIcons name="border-all-variant" size={indent * 1.5} ></MaterialCommunityIcons>) },
                            tabBarLabel: ''
                        }} tabBarOptions={{
                            showIcon: true
                        }}
                    />
                    <Stack.Screen name="Actions" component={BottomBar} tabBarOptions={{
                        showIcon: true,
                    }}
                        options={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                // You can return any component that you like here!
                                return <MaterialCommunityIcons name="settings" size={indent * 1.5} ></MaterialCommunityIcons>;
                            },
                            tabBarLabel: ''
                        })} />

                </Stack.Navigator>

            </View>

        </ColorThemeContext.Provider>
    )

};
