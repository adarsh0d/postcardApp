
import React, {useRef, useState} from 'react';
import { Text,KeyboardAvoidingView, TextInput, View, } from 'react-native';
import { fonts} from '../utils/consts';

const TextAreaBlock = ({ defaultSide, fontSize = fontSizes.xxmedium, editable = true, font, theme,  setSideBlock, showButtons = false }) => {
    const [height, setHeight] = useState(50);

    const [side, setSide] = useState(defaultSide ? defaultSide : 'front');
    const textRef = useRef(null);
    const updateSize = (size) => {
        setHeight(size);
    }
    const [frontText, setFrontText] = useState('');    
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
            {/* {editable && (
                <View style={{ paddingHorizontal: indent * 2.5, alignSelf: 'flex-end' }}>
                    <Text style={{ fontFamily: 'Curiousness', opacity: 0.6 }}>Max: 500 Characters</Text>
                </View>
            )} */}
            {side === 'front' && (
                <View style={theme.messageAreaFront}>
                    <TextInput
                        style={[theme.textArea, { fontFamily: fonts[font], fontSize: fontSize }]}
                        placeholder="Type..."
                        placeholderTextColor={theme.placeholder.color}
                        multiline
                        editable={editable}
                        maxLength={500}
                        ref={textRef}
                        value={frontText}
                        disableFullscreenUI={true}
                        onChangeText={(text) => setFrontText(text)}
                    />

                </View>
            )}
            {side === 'back' && (
                <View style={theme.messageAreaBack}>
                    <TextInput
                        style={[theme.textArea, { height: height, fontFamily: fonts[font], fontSize: fontSize }]}
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