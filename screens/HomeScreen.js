import React, { useState, useRef } from 'react';
import { ImageBackground, Text, StyleSheet, KeyboardAvoidingView, Linking, Image, Keyboard, TextInput, ScrollView, View, PixelRatio, Dimensions } from 'react-native';
import colors from '../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import ViewShot from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";
import { verticalIndent, indent, halfVerticalIndent } from '../styles/dimensions';
import { scale } from '../styles/scalingUtils'
import fontSizes from '../styles/fontSizes'
const styles = StyleSheet.create({
    textArea: {
        fontSize: 30,
        textAlign: 'left',
        paddingHorizontal: indent * 2.5,
        alignSelf: 'flex-start',
        fontFamily: 'BottleParty',
    },
    pinBox: {
        borderWidth: 1,
        borderColor: '#654321',
        borderStyle: 'dotted',
        opacity: 0.6,
        marginRight: 5,
        marginTop: 10,
        height: 40,
        width: 40,
        textAlign: 'center',
        fontSize: fontSizes.xxmedium
    },
    addressBoxInput: {
        borderStyle: 'dotted',
        opacity: 0.6,
        fontSize: fontSizes.xxmedium,
    },
    addressBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#654321',
        marginBottom: 10,
    }
})
const fonts = [
    'Bajorelle',
    'Charmelade',
    'Rembank'
]
const AddressBlock = ({ font, setParentAddress: setAddress, address, editable = true }) => {
    const refs = {
        pin1: useRef(null),
        pin2: useRef(null),
        pin3: useRef(null),
        pin4: useRef(null),
        pin5: useRef(null),
        pin6: useRef(null)
    }
    return (
        <View>
            <View style={styles.addressBox}>
                <TextInput
                    value={address.addressLine1}
                    style={[styles.addressBoxInput, { fontFamily: fonts[font] }]}
                    placeholderTextColor='#000'
                    editable={editable}
                    onChangeText={(text) => setAddress({ ...address, addressLine1: text })}
                />
            </View>
            <View style={styles.addressBox}>
                <TextInput
                    value={address.addressLine2}
                    style={[styles.addressBoxInput, { fontFamily: fonts[font] }]}
                    placeholderTextColor='#000'
                    editable={editable}
                    onChangeText={(text) => setAddress({ ...address, addressLine2: text })}
                />
            </View>
            <View style={styles.addressBox}>
                <TextInput
                    value={address.addressLine3}
                    style={[styles.addressBoxInput, { fontFamily: fonts[font] }]}
                    placeholderTextColor='#000'
                    editable={editable}
                    onChangeText={(text) => setAddress({ ...address, addressLine3: text })}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                width: '100%'
            }}>
                <TextInput
                    style={[styles.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor='#000'
                    keyboardType="numeric"
                    maxLength={1}
                    returnKeyType="next"
                    editable={editable}
                    value={address.pin1}
                    onChangeText={(text) => {
                        setAddress({ ...address, pin1: text })
                        if (text) {
                            refs['pin2'].current.focus();
                        }
                    }}
                />
                <TextInput
                    style={[styles.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor='#000'
                    ref={refs['pin2']}
                    keyboardType="numeric"
                    returnKeyType="next"
                    editable={editable}
                    maxLength={1}
                    value={address.pin2}
                    onChangeText={(text) => {
                        setAddress({ ...address, pin2: text })
                        if (text) {
                            if (text) {
                                refs['pin3'].current.focus()
                            }
                        }
                    }}
                />
                <TextInput
                    style={[styles.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor='#000'
                    keyboardType="numeric"
                    returnKeyType="next"
                    ref={refs['pin3']}
                    editable={editable}
                    maxLength={1}
                    value={address.pin3}
                    onChangeText={(text) => {
                        setAddress({ ...address, pin3: text })
                        if (text) {
                            refs['pin4'].current.focus()
                        }
                    }}
                />
                <TextInput
                    style={[styles.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor='#000'
                    keyboardType="numeric"
                    returnKeyType="next"
                    ref={refs['pin4']}
                    editable={editable}
                    maxLength={1}
                    value={address.pin4}
                    onChangeText={(text) => {
                        setAddress({ ...address, pin4: text })
                        if (text) {
                            refs['pin5'].current.focus()
                        }
                    }}
                />
                <TextInput
                    style={[styles.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor='#000'
                    keyboardType="numeric"
                    returnKeyType="next"
                    ref={refs['pin5']}
                    editable={editable}
                    maxLength={1}
                    value={address.pin5}
                    onChangeText={(text) => {
                        setAddress({ ...address, pin5: text })
                        if (text) {
                            refs['pin6'].current.focus()
                        }
                    }}
                />
                <TextInput
                    style={[styles.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor='#000'
                    keyboardType="numeric"
                    maxLength={1}
                    ref={refs['pin6']}
                    editable={editable}
                    value={address.pin6}
                    onChangeText={(text) => setAddress({ ...address, pin6: text })}
                />
            </View>
        </View>
    )
}
const TextAreaBlock = ({ defaultSide, fontSize = fontSizes.xxmedium, editable = true, font, setParentFrontText: setFrontText, frontText, setParentBackText: setBackText, backText, setSideBlock, showButtons = false }) => {
    const [height, setHeight] = useState(50);

    const [side, setSide] = useState(defaultSide ? defaultSide : 'front');

    const updateSize = (size) => {
        setHeight(size);
    }
    return (
        <KeyboardAvoidingView>
            {showButtons && (
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10, alignItems: 'flex-end', justifyContent: 'flex-end', paddingHorizontal: indent * 2.5
                }}>
                    <TouchableOpacity onPress={() => {
                        setSide('front');
                        setSideBlock('front')
                    }} style={[{ alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingVertical: 5, borderWidth: 1, borderColor: '#654321', width: 100 }, { borderBottomWidth: side === 'front' ? 5 : 1 }]}>
                        <Text style={{ fontFamily: 'Curiousness', }}>Front</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setSide('back'); setSideBlock('back') }}
                        style={[{ alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingVertical: 5, borderWidth: 1, borderColor: '#654321', width: 100 }, { borderBottomWidth: side === 'back' ? 5 : 1 }]}>
                        <Text style={{ fontFamily: 'Curiousness', }}>Back</Text>
                    </TouchableOpacity>
                </View>
            )}
            {editable && (
                <View style={{ paddingHorizontal: indent * 2.5, alignSelf: 'flex-end' }}>
                    <Text style={{ fontFamily: 'Curiousness', opacity: 0.6 }}>Max: 500 Characters</Text>
                </View>
            )}
            {side === 'front' && (
                <View style={{ alignSelf: 'flex-start', marginTop: 5 }}>
                    <TextInput
                        style={[styles.textArea, { height: height, fontFamily: fonts[font], fontSize: fontSize }]}
                        placeholder="Type..."
                        placeholderTextColor='rgba(0,0,0,0.3)'
                        multiline
                        onChangeText={(text) => setFrontText(text)}
                        value={frontText}
                        editable={editable}
                        maxLength={500}
                        onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}
                    />

                </View>
            )}
            {side === 'back' && (
                <View style={{ alignSelf: 'flex-start', }}>
                    <TextInput
                        style={[styles.textArea, { height: height, fontFamily: fonts[font], fontSize: fontSize }]}
                        placeholder="Type..."
                        placeholderTextColor='rgba(0,0,0,0.3)'
                        multiline
                        onChangeText={(text) => setBackText(text)}
                        value={backText}
                        editable={editable}
                        maxLength={500}
                        onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}
                    />

                </View>)}

        </KeyboardAvoidingView>
    )
}
const StampArea = ({ viewStamps, stampImage, showText = true }) => {
    if (stampImage) {
        return (
            <TouchableOpacity onPress={viewStamps} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={stampImage} imageStyle={{ resizeMode: 'contain' }} style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center' }}>
                </ImageBackground>
                {showText && (
                    <Text style={{
                        fontFamily: 'Curiousness', textAlign: 'center', opacity: 0.3,
                    }}>Add a stamp</Text>
                )}
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ borderColor: '#654321', borderWidth: 1, height: indent * 5, width: indent * 5, padding: 20, justifyContent: 'center', alignItems: 'center', }}>
            <TouchableOpacity onPress={viewStamps}>
                <Text style={{
                    fontFamily: 'Curiousness', textAlign: 'center', opacity: 0.3, fontSize: fontSizes.verySmall
                }}>Add a stamp</Text>
            </TouchableOpacity>
        </View>
    );
}
const HeaderArea = () => {
    return (
        <View style={{ alignSelf: 'center' }}>
            <Text style={{ fontSize: fontSizes.big * 1.2, fontFamily: 'Curiousness', borderBottomWidth: 2, borderColor: '#654321' }}>POST-CARD</Text>
            <Text style={{ fontSize: 2, fontFamily: 'Curiousness', borderBottomWidth: 2, borderColor: '#654321' }}></Text>
        </View>
    );
}
const IconsPanel = ({ setStampImage }) => {
    const renderIcon = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => setStampImage(item.url)} style={{ margin: 5 }}>
                <ImageBackground source={item.url} imageStyle={{ resizeMode: 'contain' }} style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center' }}>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ borderTopWidth: 10, borderColor: '#654321' }}>
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

const _renderBackgroundItem = ({ item }) => {
    return (
        <View style={{ borderWidth: 1, borderColor: '#654321', margin: 5 }}>
            <ImageBackground source={item.url} imageStyle={{ resizeMode: 'cover' }} style={{ width: 220, height: 120, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: fontSizes.xxmedium, fontFamily: 'Curiousness', }}>{item.name}</Text>
            </ImageBackground>
        </View>
    )
}
const backgrounds = [
    require('../assets/browntexture.jpg'),
    require('../assets/floral2.jpg'),
    require('../assets/fresh.jpg'),
    require('../assets/floral3.jpg'),
    require('../assets/floral4.jpg'),
    require('../assets/floral5.jpg'),
]

const iconsUrls = [
    {
        url: require('../assets/free-stamp.png'),
        name: 'Black Jack',
        id: 'black-jack'
    }, {
        url: require('../assets/icons/gambling/cards.png'),
        name: 'Cards',
        id: 'cards'
    }, {
        url: require('../assets/icons/gambling/chips-1.png'),
        name: 'Chips1',
        id: 'chips1'
    }, {
        url: require('../assets/icons/gambling/chips-2.png'),
        name: 'Chips2',
        id: 'chips2'
    }, {
        url: require('../assets/icons/gambling/chips.png'),
        name: 'Chips',
        id: 'chips'
    }, {
        url: require('../assets/icons/gambling/clover.png'),
        name: 'Clover',
        id: 'clover'
    }, {
        url: require('../assets/icons/gambling/clubs-1.png'),
        name: 'Clubs-1',
        id: 'clubs-1'
    }, {
        url: require('../assets/icons/gambling/clubs.png'),
        name: 'Clubs',
        id: 'clubs'
    }, {
        url: require('../assets/icons/gambling/croupier.png'),
        name: 'Croupier',
        id: 'croupier'
    }, {
        url: require('../assets/icons/gambling/diamonds-1.png'),
        name: 'Diamonds1',
        id: 'diamonds1'
    }, {
        url: require('../assets/icons/gambling/diamonds.png'),
        name: 'Diamonds',
        id: 'diamonds'
    }, {
        url: require('../assets/icons/gambling/dice.png'),
        name: 'Dice',
        id: 'dice'
    }, {
        url: require('../assets/icons/gambling/dices.png'),
        name: 'Dices',
        id: 'dices'
    }, {
        url: require('../assets/icons/gambling/domino.png'),
        name: 'Domino',
        id: 'domino'
    }, {
        url: require('../assets/icons/gambling/gambling.png'),
        name: 'Gambling',
        id: 'gambling'
    }, {
        url: require('../assets/icons/gambling/hearts-1.png'),
        name: 'Hearts1',
        id: 'hearts1'
    }, {
        url: require('../assets/icons/gambling/hearts.png'),
        name: 'Hearts',
        id: 'hearts'
    }, {
        url: require('../assets/icons/gambling/horseshoe.png'),
        name: 'Horsehoe',
        id: 'horsehoe'
    }, {
        url: require('../assets/icons/gambling/money.png'),
        name: 'Money',
        id: 'money'
    }, {
        url: require('../assets/icons/gambling/poker.png'),
        name: 'Poker',
        id: 'poker'
    }, {
        url: require('../assets/icons/gambling/roulette.png'),
        name: 'Roulette',
        id: 'roulette'
    }, {
        url: require('../assets/icons/gambling/slot-machine.png'),
        name: 'Slot Machine',
        id: 'slot-machine'
    }, {
        url: require('../assets/icons/gambling/spades-1.png'),
        name: 'Spades1',
        id: 'spades-1'
    }, {
        url: require('../assets/icons/gambling/spades.png'),
        name: 'Spades',
        id: 'spades'
    }
]

const foreGrounds = [
    require('../assets/floral3.jpg'),
    require('../assets/floral8.jpg'),
    require('../assets/floral.jpg'),
    require('../assets/flower9.jpg'),
]

const backgroundUrls = [
    {
        url: require('../assets/browntexture.jpg'),
        name: 'Default',
        id: 'default'
    }, {
        url: require('../assets/floral.jpg'),
        name: 'Floral',
        id: 'floral'
    }, {
        url: require('../assets/fresh.jpg'),
        name: 'Fresh',
        id: 'fresh'
    }
]
export default HomeScreen = () => {

    const [font, setFont] = useState(0);
    const [fontSize, setFontSize] = useState(fontSizes.big);
    const [backgroundCount, setBackground] = useState(0);
    const [foregroundCount, setForeground] = useState(0);
    const [showStamps, setShowStamps] = useState(false);
    const [stampImage, setStampImage] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const [showPrint, setShowPreview] = useState(false);
    const [frontText, setFrontText] = useState('');
    const [backText, setBackText] = useState('');
    const [printInProgress, setPrintInProgress] = useState(false);
    const snapshot = async () => {
        const result = await printRef.current.capture();
        const sharingAvailable = await Sharing.isAvailableAsync();
        if (sharingAvailable) {
            const manipResult = await ImageManipulator.manipulateAsync(
                result,
                [{ rotate: 270 }],
                { compress: 1, format: ImageManipulator.SaveFormat.PNG }
            );
            Sharing.shareAsync(manipResult.uri);
        }

    }

    const preview = () => {
        // ScreenOrientation.lockAsync(ScreenOrientationOrientationLock.LANDSCAPE);
        setShowPreview(true);
    }
    const [address, setAddress] = useState({
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
        pin1: '',
        pin2: '',
        pin3: '',
        pin4: '',
        pin5: '',
        pin6: ''
    })
    const printRef = useRef(null);

    const PrintPreview = () => {

        const { width, height } = Dimensions.get('window');

        return (
            <View style={{ backgroundColor: '#fff', flex: 1, paddingTop: verticalIndent * 2, }}>
                <ScrollView >
                    <ScrollView  horizontal={true}>
                        <ViewShot ref={printRef} style={{ backgroundColor: '#FFF' }}>
                            <ImageBackground source={foreGrounds[foregroundCount]} imageStyle={{ resizeMode: 'cover' }} ref={printRef} style={{ width: undefined, height: undefined, }}>
                                <View style={{ margin: 20, }}>
                                    <ImageBackground source={backgrounds[backgroundCount]} imageStyle={{ resizeMode: 'cover' }} style={{ width: scale(400 * 0.8), height: scale(800 * 0.8), borderRadius: 10, elevation: 5, borderColor: '#000', }}>
                                        <View style={{ flex: 1, padding: 20 }}>
                                            <View style={{ transform: [{ rotate: '90deg' }], flex: 0.5, paddingRight: 20, height: scale(height * 0.4), borderRightWidth: 1, borderRightColor: '#654321', }}>
                                                <Text style={[{ fontFamily: fonts[font], fontSize: fontSize, }]}>{frontText}</Text>
                                            </View>
                                            <View style={{ transform: [{ rotate: '90deg' }], paddingTop: 30, flex: 0.5 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                                    <View style={{ alignSelf: 'center' }}>
                                                        <Text style={{ fontSize: 22, fontFamily: 'Curiousness', borderBottomWidth: 2, borderColor: '#654321' }}>POST-CARD</Text>
                                                        <Text style={{ fontSize: 2, fontFamily: 'Curiousness', borderBottomWidth: 2, borderColor: '#654321' }}></Text>
                                                    </View>
                                                    <View>
                                                        <StampArea stampImage={stampImage} showText={false}></StampArea>
                                                    </View>
                                                </View>
                                                <View style={{ width: '100%' }}>
                                                    <AddressBlock editable={false} address={address} setParentAddress={(val) => setAddress(val)} font={font}></AddressBlock>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>

                                </View>

                            </ImageBackground>
                        </ViewShot>
                    </ScrollView>
                </ScrollView>
                {/* <ScrollView>
                <ViewShot ref={printRef} style={{ flexShrink: 1, width: '100%', height: '100%' }}>
                    <ImageBackground source={require('../assets/floral.jpg')} imageStyle={{ resizeMode: 'cover' }} ref={printRef} style={{ width: '100%', height: '100%', flexShrink: 1 }}>
                        <View style={{ flexShrink: 1, padding: 20}}>
                            <ImageBackground source={backgrounds[backgroundCount]} imageStyle={{ resizeMode: 'cover' }} style={{ width: undefined, height: undefined, borderRadius: 10, elevation: 3, borderColor: '#000' }}>
                                <View style={{ paddingHorizontal: 20, height: scale(595), paddingVertical: 10, flex: 1 }}>
                                    <View style={{ transform: [{ rotate: '90deg' }], flex: 0.5, borderRightWidth: 1, borderRightColor: '#654321', paddingHorizontal: 30 }}>
                                        <Text style={[{ fontFamily: fonts[font], fontSize: fontSize, paddingVertical: 20 }]}>{frontText}</Text>
                                    </View>
                                    <View style={{ transform: [{ rotate: '90deg' }], flex: 0.5, paddingHorizontal: 30 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ alignSelf: 'center' }}>
                                                <Text style={{ fontSize: 22, fontFamily: 'Curiousness', borderBottomWidth: 2, borderColor: '#654321' }}>POST-CARD</Text>
                                                <Text style={{ fontSize: 2, fontFamily: 'Curiousness', borderBottomWidth: 2, borderColor: '#654321' }}></Text>
                                            </View>
                                            <View>
                                                <StampArea stampImage={stampImage} showText={false}></StampArea>
                                            </View>
                                        </View>
                                        <View>
                                            <AddressBlock editable={false} address={address} setParentAddress={(val) => setAddress(val)} font={font}></AddressBlock>
                                        </View>
                                    </View>
                                </View>

                            </ImageBackground>
                        </View>
                    </ImageBackground>
                </ViewShot>
                </ScrollView> */}
                <View style={{ marginTop: indent, backgroundColor: 'rgba(255, 255, 255, 0.3)', color: '#fff', flexDirection: 'row', height: indent * 2.5, padding: 5, justifyContent: 'space-between' }}>

                    <View style={{ flex: 1, alignSelf: 'flex-start', flexDirection: 'row', }}>
                        <TouchableOpacity onPress={rotateFonts}>
                            <MaterialCommunityIcons name="format-text" size={indent * 1.8} ></MaterialCommunityIcons>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: halfVerticalIndent / 3 }} onPress={showBackgrounds}>
                            <MaterialCommunityIcons name="format-color-fill" size={indent * 2} ></MaterialCommunityIcons>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: halfVerticalIndent / 3 }} onPress={showForegrounds}>
                            <MaterialCommunityIcons name="palette" size={indent * 1.8} ></MaterialCommunityIcons>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: halfVerticalIndent / 3 }} onPress={() => setFontSize(fontSize - 1)}>
                            <MaterialCommunityIcons name="format-font-size-decrease" size={indent * 1.8} ></MaterialCommunityIcons>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: halfVerticalIndent / 3 }} onPress={() => setFontSize(fontSize + 1)}>
                            <MaterialCommunityIcons name="format-font-size-increase" size={32} ></MaterialCommunityIcons>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => setShowPreview(false)} style={{ borderRadius: 20, alignSelf: 'flex-end', marginRight: 8, alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingVertical: 5, borderWidth: 1, borderColor: '#654321', width: indent * 5.5 }}>
                        <Text style={{ fontFamily: 'Curiousness', }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={snapshot} style={{ borderRadius: 20, alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingVertical: 5, borderWidth: 1, borderColor: '#654321', width: indent * 5.5 }}>
                        <Text style={{ fontFamily: 'Curiousness', }}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const rotateFonts = () => {
        if (font + 1 > fonts.length) {
            setFont(0);
        } else {
            setFont(font + 1);
        }
    }
    const showBackgrounds = () => {
        if (backgroundCount + 1 < backgrounds.length) {
            setBackground(backgroundCount + 1);
        } else {
            setBackground(0);
        }
    }
    const showForegrounds = () => {
        if (foregroundCount + 1 < foreGrounds.length) {
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
    if (showPrint) {
        return (
            <PrintPreview></PrintPreview>
        )
    }
    return (
        <ImageBackground ref={printRef} source={backgrounds[backgroundCount]} imageStyle={{ resizeMode: 'cover' }} style={{ width: '100%', height: '100%', }}>
            <ScrollView>
                <View collapsable={false} style={{ paddingTop: indent * 2.5, flex: 1 }}>
                    {showHeader && (
                        <View style={{ flexDirection: 'row', paddingHorizontal: indent * 2.5, justifyContent: 'space-between' }}>
                            <HeaderArea></HeaderArea>
                            <StampArea stampImage={stampImage} viewStamps={() => setShowStamps(!showStamps)}></StampArea>
                        </View>
                    )}
                    {showHeader && (
                        <View style={{ padding: indent * 2.5 }}>
                            <AddressBlock address={address} setParentAddress={(val) => setAddress(val)} font={font}></AddressBlock>
                        </View>
                    )}
                    <ScrollView>
                        <TextAreaBlock fontSize={fontSize} frontText={frontText} backText={backText} setParentFrontText={(val) => setFrontText(val)} setParentBackText={(val) => setBackText(val)} font={font} setSideBlock={(val) => turnSide(val)}></TextAreaBlock>
                    </ScrollView>
                </View>
                {showStamps && (
                    <IconsPanel setStampImage={(icon) => {
                        setStampImage(icon)
                        setShowStamps(!showStamps)
                    }

                    }></IconsPanel>
                )}
            </ScrollView>
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', color: '#fff', flexDirection: 'row', height: indent * 2.5, padding: 5, justifyContent: 'space-between' }}>

                <View style={{ flex: 1, alignSelf: 'flex-start', flexDirection: 'row', }}>
                    <TouchableOpacity onPress={rotateFonts}>
                        <MaterialCommunityIcons name="format-text" size={indent * 1.8} ></MaterialCommunityIcons>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: halfVerticalIndent / 3 }} onPress={showBackgrounds}>
                        <MaterialCommunityIcons name="format-color-fill" size={indent * 2} ></MaterialCommunityIcons>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: halfVerticalIndent / 3 }} onPress={() => setFontSize(fontSize - 1)}>
                        <MaterialCommunityIcons name="format-font-size-decrease" size={indent * 1.8} ></MaterialCommunityIcons>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: halfVerticalIndent / 3 }} onPress={() => setFontSize(fontSize + 1)}>
                        <MaterialCommunityIcons name="format-font-size-increase" size={indent * 1.8} ></MaterialCommunityIcons>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={preview} style={{ borderRadius: 20, alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingVertical: halfVerticalIndent / 1.8, borderWidth: 1, borderColor: '#654321', width: indent * 6 }}>
                    <Text style={{ fontFamily: 'Curiousness', }}>Preview</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
