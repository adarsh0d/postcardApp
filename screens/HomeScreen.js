import React, { useState, useRef, useEffect } from 'react';
import { ImageBackground, Text, StyleSheet, TextInput, ScrollView, View, } from 'react-native';

import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import baseStyle from '../styles/baseStyle';
import { moderateScale } from '../styles/scalingUtils';

import { fonts, foreGrounds, letterBackgrounds, imgBackgrounds } from '../utils/consts';
import BottomBar from '../components/BottomBar'
import IconsPanel from '../components/IconsPanel';
import ImagePanel from '../components/ImagePanel';
import ColorsPanel from '../components/colorsPanel';
import { Pallet, BorderPallet } from '../utils/pallet';
import { ColorThemeContext } from '../AppContext'
import Letter from '../templates/postcards/letter1';
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

    const [font, setFont] = useState(0);
    const [theme, setTheme] = useState(themes[0]);
    const [fontSize, setFontSize] = useState(moderateScale(16));
    const [backgroundCount, setBackground] = useState(0);
    const [foregroundCount, setForeground] = useState(0);
    const [showStamp, setShowStamp] = useState(true);
    const [showStamps, setShowStamps] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [showForeGroundImages, setShowForeGroundImages] = useState(false);
    const [stampImage, setStampImage] = useState(null);
 
    const [showHeader, setShowHeader] = useState(true);
    const [showPrint, setShowPreview] = useState(false);
    const [imageCard, setCardType] = useState(false);
    const [fontColor, setFontColor] = useState(Pallet.flat()[0])
    const [borderColor, setBorderColor] = useState(BorderPallet.flat()[0])
    const [showColors, setShowColors] = useState(false);
    const [showBorderColors, setShowBorderColors] = useState(false);
    const [showTitle, setToggleTitle] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
                    const manipResult = await ImageManipulator.manipulateAsync(
                        uri,
                    );
                    Sharing.shareAsync(uri);
                }
            },
            error => console.error("Oops, snapshot failed", error)
        );


    }
    const setReset = () => {

    }
    const setImageCard = (val) => {
        setCardType(val);
        setBackground(0);
        if (val) {
            setFontSize(60)
            setFont(1);
            setTheme(themes[1]);
        } else {
            setFont(0)
            setFontSize(30);
            setTheme(themes[0]);
        }
    }
    useEffect(() => {
        //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    })
    const preview = () => {
        setShowPreview(true);
    }

    const printRef = useRef(null);

    const rotateFonts = () => {
        if (font + 1 > fonts.length) {
            setFont(0);
        } else {
            setFont(font + 1);
        }
    }
    const showBackgrounds = () => {
        const backgroundsToCheck = theme === 'light' ? letterBackgrounds : imgBackgrounds;
        if (backgroundCount + 1 < backgroundsToCheck.length) {
            setBackground(backgroundCount + 1);
        } else {
            setBackground(0);
        }
    }
    const showForegrounds = () => {
        if (foregroundCount + 1 < imgBackgrounds.length) {
            setForeground(foregroundCount + 1);
        } else {
            setForeground(0);
        }
    }
    const turnSide = (val) => {
        if (val === 'front') {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }
    const selectedTheme = themesStyleSheets(fontColor, borderColor)[theme];


    return (
        <ColorThemeContext.Provider value={selectedTheme}>
            <View style={selectedTheme.container}>
                <View style={selectedTheme.backgroundContainer} ref={printRef}>
                   <Letter></Letter>
                </View>

                {showStamps && (
                    <IconsPanel theme={selectedTheme} setStampImage={(icon) => {
                        setStampImage(icon)
                        setShowStamps(!showStamps)
                    }

                    }></IconsPanel>
                )}
                {showImages && (
                    <ImagePanel staticImages={letterBackgrounds} theme={selectedTheme} setStampImage={(icon) => {
                        setBackgroundImage(icon)
                        setShowImages(!showImages)
                    }

                    } close={() => setShowImages(!showImages)}></ImagePanel>
                )}
                {showForeGroundImages && (
                    <ImagePanel staticImages={imgBackgrounds} foreGround={true} theme={selectedTheme} setStampImage={(icon) => {
                        setForeGroundImage(icon)
                        setShowForeGroundImages(!showForeGroundImages)
                    }

                    } close={() => setShowForeGroundImages(!showForeGroundImages)}></ImagePanel>
                )}
                {showColors && (
                    <ColorsPanel theme={selectedTheme} pallet={Pallet} selectedColor={fontColor} setSelectedColor={(color) => {
                        setFontColor(color)
                        setShowColors(!showColors)
                    }

                    } close={() => setShowColors(!showColors)}></ColorsPanel>
                )}
                {showBorderColors && (
                    <ColorsPanel theme={selectedTheme} pallet={BorderPallet} selectedColor={borderColor} setSelectedColor={(color) => {
                        setBorderColor(color)
                        setShowBorderColors(!showBorderColors)
                    }

                    } close={() => setShowBorderColors(!showBorderColors)}></ColorsPanel>
                )}
                <Stack.Navigator>
                    <Stack.Screen name="Actions" component={BottomBar} />
                    <Stack.Screen name="Background" component={ImagePanel} />
                    <Stack.Screen name="Font Color" component={ColorsPanel} />
                </Stack.Navigator>
                {/* <BottomBar                   
                    imageCard={imageCard}
                    setImageCard={(val) => setImageCard(val)}
                    fontSize={fontSize}
                    setFontSize={(fontSize) => setFontSize(fontSize)}
                    setReset={() => setReset()}
                    showForegrounds={() => setShowForeGroundImages(!showForeGroundImages)}
                    showBackgrounds={() => setShowImages(!showImages)}
                    rotateFonts={() => rotateFonts()}
                    snapshot={() => snapshot()}
                    showBorderColors={() => setShowBorderColors(!showBorderColors)}
                    showColors={() => setShowColors(!showColors)}
                    hideAllPanels={() => hideAllPanels()}
                    toggleStamp={() => setShowStamp(!showStamp)}
                    showStamp={showStamp}
                    toggleTitle={() => setToggleTitle(!showTitle)}
                    showTitle={showTitle}
                >

                </BottomBar> */}
            </View>
        </ColorThemeContext.Provider>
    )

};
