
import React, {useRef} from 'react';
import { TextInput, View, } from 'react-native';
import { fonts} from '../utils/consts';
const AddressBlock = ({ font, theme, setParentAddress: setAddress, address, editable = true, disableFullscreenUI = true }) => {
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
            <View style={theme.addressBox}>
                <TextInput

                    style={[theme.addressBoxInput, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    disableFullscreenUI={disableFullscreenUI}
                    editable={editable}
                    onChangeText={(text) => setAddress({ ...address, addressLine1: text })}
                />
            </View>
            <View style={theme.addressBox}>
                <TextInput
                    style={[theme.addressBoxInput, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    disableFullscreenUI={disableFullscreenUI}
                    editable={editable}
                    onChangeText={(text) => setAddress({ ...address, addressLine2: text })}
                />
            </View>
            <View style={theme.addressBox}>
                <TextInput
                    style={[theme.addressBoxInput, { fontFamily: fonts[font] }]}
                    placeholderTextColor={theme.placeholder.color}
                    disableFullscreenUI={disableFullscreenUI}
                    editable={editable}
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
                    editable={editable}
                    onChangeText={(text) => setAddress({ ...address, pin6: text })}
                />
            </View>
        </View>
    )
}

export default AddressBlock;