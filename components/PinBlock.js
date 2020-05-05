import React, { useContext, useRef } from 'react';

import { ColorThemeContext } from '../AppContext'
import { TextInput, View, } from 'react-native';
const PinBlock = () => {
    const disableFullscreenUI = true;
    const editable = true;
    const refs = {
        addressLine1: useRef(null),
        addressLine2: useRef(null),
        addressLine3: useRef(null),
        pin1: useRef(null),
        pin2: useRef(null),
        pin3: useRef(null),
        pin4: useRef(null),
        pin5: useRef(null),
        pin6: useRef(null)
    }
    const { theme, font, address, setAddress } = useContext(ColorThemeContext);
    return (
        <View style={theme.pinBlock}>
            <TextInput
                style={[theme.pinBox, { fontFamily: font }]}
                placeholderTextColor={theme.placeholder.color}
                keyboardType="numeric"
                maxLength={1}
                returnKeyType="next"
                disableFullscreenUI={disableFullscreenUI}
                editable={editable}
                value={address.pin1}
                ref={refs['pin1']}
                onChangeText={(text) => {
                    if (text) {
                        refs['pin2'].current.focus();
                    }
                    setAddress({ ...address, pin1: text })

                }}
            />
            <TextInput
                style={[theme.pinBox, { fontFamily: font }]}
                placeholderTextColor={theme.placeholder.color}
                ref={refs['pin2']}
                keyboardType="numeric"
                disableFullscreenUI={disableFullscreenUI}
                returnKeyType="next"
                editable={editable}
                maxLength={1}
                value={address.pin2}
                onChangeText={(text) => {
                    if (text) {
                        refs['pin3'].current.focus()
                    }
                    setAddress({ ...address, pin2: text })

                }}
            />
            <TextInput
                style={[theme.pinBox, { fontFamily: font }]}
                placeholderTextColor={theme.placeholder.color}
                keyboardType="numeric"
                returnKeyType="next"
                disableFullscreenUI={disableFullscreenUI}
                ref={refs['pin3']}
                editable={editable}
                maxLength={1}
                value={address.pin3}
                onChangeText={(text) => {

                    if (text) {
                        refs['pin4'].current.focus()
                    }
                    setAddress({ ...address, pin3: text })
                }}
            />
            <TextInput
                style={[theme.pinBox, { fontFamily: font }]}
                placeholderTextColor={theme.placeholder.color}
                keyboardType="numeric"
                returnKeyType="next"
                disableFullscreenUI={disableFullscreenUI}
                ref={refs['pin4']}
                editable={editable}
                maxLength={1}
                value={address.pin4}
                onChangeText={(text) => {

                    if (text) {
                        refs['pin5'].current.focus()
                    }
                    setAddress({ ...address, pin4: text })
                }}
            />
            <TextInput
                style={[theme.pinBox, { fontFamily: font }]}
                placeholderTextColor={theme.placeholder.color}
                keyboardType="numeric"
                returnKeyType="next"
                disableFullscreenUI={disableFullscreenUI}
                ref={refs['pin5']}
                editable={editable}
                value={address.pin5}
                maxLength={1}
                onChangeText={(text) => {

                    if (text) {
                        refs['pin6'].current.focus()
                    }
                    setAddress({ ...address, pin5: text })
                }}
            />
            <TextInput
                style={[theme.pinBox, { fontFamily: font }]}
                placeholderTextColor={theme.placeholder.color}
                keyboardType="numeric"
                disableFullscreenUI={disableFullscreenUI}
                maxLength={1}
                ref={refs['pin6']}
                value={address.pin6}
                editable={editable}
                onChangeText={(text) => setAddress({ ...address, pin6: text })}
            />
        </View>
    )

}

export default PinBlock;