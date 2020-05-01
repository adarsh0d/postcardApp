
import React, { useRef, useState, useEffect, useContext } from 'react';
import {
    Text, KeyboardAvoidingView, TextInput, View, FlatList,
    Dimensions, StyleSheet,
    Animated,
} from 'react-native';
import fontSizes from '../styles/fontSizes';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { ColorThemeContext } from '../AppContext';
let dropzoneHeight = 200;
let itemHeight = 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: itemHeight,
        height: itemHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});

let FlatItem = ({ item }) => {
    let translateX = new Animated.Value(0);
    let translateY = new Animated.Value(0);
    let height = new Animated.Value(20);
    let onGestureEvent = Animated.event([
        {
            nativeEvent: {
                translationX: translateX,
                translationY: translateY,
            },
        },
    ]);
    let onGestureTopEvent = Animated.event([
        {
            nativeEvent: {
                translationY: height,
            },
        },
    ]);
    let _lastOffset = { x: 0, y: 0 };
    let onHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            _lastOffset.x += event.nativeEvent.translationX;
            _lastOffset.y += event.nativeEvent.translationY;
            translateX.setOffset(_lastOffset.x);
            translateX.setValue(0);
            translateY.setOffset(_lastOffset.y);
            translateY.setValue(0);
        }
    };
    return (
        <View>
            <PanGestureHandler onGestureEvent={onGestureTopEvent}>
                <Animated.View
                    style={{
                        widht: 10,
                        height,
                        backgroundColor: 'blue',
                        transform: [{ translateX }, { translateY }],
                    }}
                />
            </PanGestureHandler>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}>
                <Animated.View
                    style={[
                        styles.item,
                        { transform: [{ translateX }, { translateY }] },
                    ]}>
                    <Text>{item.id}</Text>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

let data = [
    { key: 1, id: 1 },
    { key: 2, id: 2 },
    { key: 3, id: 3 },
    { key: 4, id: 4 },
];
const TextAreaBlock = ({ defaultSide, fontSize = fontSizes.xxmedium, editable = true, font, theme, setSideBlock, showButtons = false }) => {
    const [height, setHeight] = useState(50);

    const [side, setSide] = useState(defaultSide ? defaultSide : 'front');
    const textRef = useRef(null);
    const updateSize = (size) => {
        setHeight(size);
    }

    const {frontText, setFrontText} = useContext(ColorThemeContext);;
    return (
        <KeyboardAvoidingView>
            {showButtons && (
                <View style={theme.tabs}>
                    <TouchableOpacity onPress={() => {
                        setSide('front');
                        setSideBlock('front')
                    }} style={[theme.tab, { borderBottomWidth: side === 'front' ? 5 : 1 }]}>
                        <Text style={{ fontFamily: 'Curiousness', }}>Front</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setSide('back'); setSideBlock('back') }}
                        style={[theme.tab, { borderBottomWidth: side === 'back' ? 5 : 1 }]}>
                        <Text style={{ fontFamily: 'Curiousness', }}>Back</Text>
                    </TouchableOpacity>
                </View>
            )}

            {side === 'front' && (
                <View style={theme.messageAreaFront}>
                    {/* <View style={styles.container}>
                        <FlatItem item={data[0]} />
                    </View> */}
                    <TextInput
                        style={[theme.textArea, {fontFamily: font, fontSize: fontSize }]}
                        placeholderTextColor='rgba(0,0,0,0.3)'
                        placeholder="Type Something Here"
                        multiline
                        editable={editable}
                        ref={textRef}
                        disableFullscreenUI={true}
                        value={frontText}                        
                        onChangeText={(text) => setFrontText(text)}
                    />

                </View>
            )}
            {side === 'back' && (
                <View style={theme.messageAreaBack}>
                    <TextInput
                        style={[theme.textArea, { height: height, fontFamily: font, fontSize: fontSize }]}
                        placeholder="Type..."
                        placeholderTextColor={theme.placeholder.color}
                        multiline
                        onChangeText={(text) => setBackText(text)}
                        editable={editable}
                        maxLength={500}
                        onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}
                    />

                </View>)}

        </KeyboardAvoidingView>
    )
}

export default TextAreaBlock;