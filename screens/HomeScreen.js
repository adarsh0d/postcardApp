import React, { useState, useRef, useEffect } from 'react';
import { ImageBackground, Text, StyleSheet,  TextInput, ScrollView, View,} from 'react-native';

import ViewShot from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";
import * as ScreenOrientation from 'expo-screen-orientation';

import fontSizes from '../styles/fontSizes'
import colors from '../styles/colors';
import baseStyle from '../styles/baseStyle';

import { fonts, foreGrounds, letterBackgrounds, imgBackgrounds} from '../utils/consts';
import AddressBlock from '../components/AddressBlock';
import TextAreaBlock from '../components/TextAreaBlock';
import StampArea from '../components/StampsArea';
import BottomBar from '../components/BottomBar'
import IconsPanel from '../components/IconsPanel';

const themesStyleSheets = {
    light: StyleSheet.create(baseStyle),
    dark: StyleSheet.create({
        ...baseStyle,
        container: {
            flex: 1
        },
        cardContainer: {
            ...baseStyle.cardContainer,
            padding: 0,
        },  
        cardRight:{
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
};




const themes = ['light', 'dark'];
export default HomeScreen = () => {

    const [font, setFont] = useState(0);
    const [theme, setTheme] = useState(themes[0]);
    const [fontSize, setFontSize] = useState(fontSizes.big);
    const [backgroundCount, setBackground] = useState(0);
    const [foregroundCount, setForeground] = useState(0);
    const [showStamps, setShowStamps] = useState(false);
    const [stampImage, setStampImage] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const [showPrint, setShowPreview] = useState(false);
    const [imageCard, setCardType] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const snapshot = async () => {
        const result = await printRef.current.capture();
        const sharingAvailable = await Sharing.isAvailableAsync();
        if (sharingAvailable) {
            const manipResult = await ImageManipulator.manipulateAsync(
                result,
            );
            Sharing.shareAsync(result);
        }

    }
    const setImageCard = (val) => {        
        setCardType(val);
        setBackground(0);
        if(val) {
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
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
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
        const backgroundsToCheck = theme === 'light'? letterBackgrounds: imgBackgrounds;
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
    const selectedTheme = themesStyleSheets[theme];
    return (
        <View style={selectedTheme.container}>
            <ScrollView >
                <ScrollView horizontal={true}>
                    <ViewShot ref={printRef} style={selectedTheme.viewShot}>
                        <ImageBackground source={imgBackgrounds[foregroundCount]} imageStyle={{ resizeMode: 'cover' }} ref={printRef} style={selectedTheme.foreGround}>
                            <View style={selectedTheme.backgroundContainer}>
                                <ImageBackground source={theme === 'light'? letterBackgrounds[backgroundCount]: imgBackgrounds[backgroundCount]} imageStyle={{ resizeMode: 'cover',  }} style={selectedTheme.backGround}>
                                    <View style={selectedTheme.cardContainer}>
                                        <View style={selectedTheme.cardLeft}>
                                            {showHeader && (
                                                <TextAreaBlock theme={selectedTheme} fontSize={fontSize} font={font} setSideBlock={(val) => turnSide(val)}></TextAreaBlock>
                                            )}
                                        </View>
                                        <View style={selectedTheme.cardRight}>
                                            <View style={selectedTheme.cardHeader}>
                                                <View style={selectedTheme.cardTitle}>
                                                    {theme === 'light' && (
                                                        <TextInput 
                                                            disableFullscreenUI={true} 
                                                            style={selectedTheme.cardText} 
                                                            defaultValue="POST-CARD"
                                                            underlineColorAndroid="transparent"
                                                        />
                                                    )}
                                                    <Text style={selectedTheme.extraBorder}></Text>
                                                </View>
                                                <View style={selectedTheme.cardStamp}>
                                                    <StampArea theme={selectedTheme} viewStamps={() => setShowStamps(!showStamps)} stampImage={stampImage} showText={false}></StampArea>
                                                </View>
                                            </View>
                                            <View style={selectedTheme.addressBlock}>
                                                <AddressBlock theme={selectedTheme} editable={true} setParentAddress={(val) => setAddress(val)} font={font}></AddressBlock>
                                            </View>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ImageBackground>
                    </ViewShot>
                </ScrollView>
            </ScrollView>

            {showStamps && (
                <IconsPanel theme={selectedTheme} setStampImage={(icon) => {
                    setStampImage(icon)
                    setShowStamps(!showStamps)
                }

                }></IconsPanel>
            )}
            <BottomBar 
                theme={selectedTheme}
                imageCard={imageCard}
                setImageCard = {(val) => setImageCard(val)}
                fontSize={fontSize} 
                setFontSize={(fontSize) => setFontSize(fontSize)} 
                setShowPreview={() => setShowPreview()}
                showForegrounds={() =>showForegrounds()}
                showBackgrounds={() =>showBackgrounds()}
                rotateFonts={() => rotateFonts()}
                snapshot={() => snapshot()}
            >

            </BottomBar>
           </View>
    )

};
