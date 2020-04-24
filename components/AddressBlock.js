
import React, {useRef, useState} from 'react';
import { TextInput, View, } from 'react-native';
import { fonts} from '../utils/consts';
const AddressBlock = ({ font, theme, editable = true, disableFullscreenUI = true }) => {
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
    return (
        <View>
            <View style={theme.addressBox}>
                <TextInput

                    style={[theme.addressBoxInput, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    disableFullscreenUI={disableFullscreenUI}
                    editable={editable}
                    ref={refs['addressLine1']}
                    value={address.addressLine1}
                    selectionColor="transparent"
                    onSubmitEditing={() => {
                        refs['addressLine2'].current.focus()
                    }}
                    onChangeText={(text) => setAddress({ ...address, addressLine1: text })}
                />
            </View>
            <View style={theme.addressBox}>
                <TextInput
                    style={[theme.addressBoxInput, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    disableFullscreenUI={disableFullscreenUI}
                    editable={editable}
                    value={address.addressLine2}
                    ref={refs['addressLine2']}
                    onSubmitEditing={() => {
                        refs['addressLine3'].current.focus()
                    }}
                    onChangeText={(text) => setAddress({ ...address, addressLine2: text })}
                />
            </View>
            <View style={theme.addressBox}>
                <TextInput
                    style={[theme.addressBoxInput, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    disableFullscreenUI={disableFullscreenUI}
                    editable={editable}
                    ref={refs['addressLine3']}
                    onSubmitEditing={() => {
                        refs['pin1'].current.focus()
                    }}
                    value={address.addressLine3}
                    onChangeText={(text) => setAddress({ ...address, addressLine3: text })}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                width: '100%'
            }}>
                <TextInput
                    style={[theme.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    keyboardType="numeric"
                    maxLength={1}
                    returnKeyType="next"
                    disableFullscreenUI={disableFullscreenUI}
                    editable={editable}
                    value={address.pin1}
                    ref={refs['pin1']}
                    onChangeText={(text) => {
                        setAddress({ ...address, pin1: text })
                        if (text) {
                            refs['pin2'].current.focus();
                        }
                    }}
                />
                <TextInput
                    style={[theme.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    ref={refs['pin2']}
                    keyboardType="numeric"
                    disableFullscreenUI={disableFullscreenUI}
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
                    style={[theme.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    keyboardType="numeric"
                    returnKeyType="next"
                    disableFullscreenUI={disableFullscreenUI}
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
                    style={[theme.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    keyboardType="numeric"
                    returnKeyType="next"
                    disableFullscreenUI={disableFullscreenUI}
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
                    style={[theme.pinBox, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    keyboardType="numeric"
                    returnKeyType="next"
                    disableFullscreenUI={disableFullscreenUI}
                    ref={refs['pin5']}
                    editable={editable}
                    value={address.pin5}
                    maxLength={1}
                    onChangeText={(text) => {
                        setAddress({ ...address, pin5: text })
                        if (text) {
                            refs['pin6'].current.focus()
                        }
                    }}
                />
                <TextInput
                    style={[theme.pinBox, { fontFamily: fonts[font] }]}
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
        </View>
    )
}

export default AddressBlock;