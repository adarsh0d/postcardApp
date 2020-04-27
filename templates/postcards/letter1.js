import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, TouchableHighlight, Text, PixelRatio, Image, TouchableOpacity, TextInput, ScrollView, View, } from 'react-native';


import layout from '../layout';

const renderChildren = config => {
    // @refresh reset
    const [ children, setChildren] = useState(config);
    return children ? children.map((child, ind) => {    
        const newChildren = child.children ? [...child.children] : [];
        const { containerType, styleProps, options, value } = child
            
        if (newChildren.length) {
            switch (containerType) {
                case "View":
                    return (<View {...options}  style={{ ...styleProps }}>{renderChildren(newChildren)}</View>)
                case "ImageBackground":
                    return (<ImageBackground {...options} style={{...styleProps}}>{renderChildren(newChildren)}</ImageBackground>)
                 case "KeyboardAvoidingView":
                    return (<KeyboardAvoidingView {...options} style={{ ...styleProps }}>{renderChildren(newChildren)}</KeyboardAvoidingView>)
               case "TouchableHighlight":
                    return (<TouchableHighlight {...options} style={{ ...styleProps }}>{renderChildren(newChildren)}</TouchableHighlight>)
                case "TouchableOpacity":
                    return (<TouchableOpacity {...options} style={{ ...styleProps }}>{renderChildren(newChildren)}</TouchableOpacity>)
                default:
                    return (<View {...options} style={{ ...styleProps }}>{renderChildren(newChildren)}</View>)
            }
        } else {
            switch (containerType) {
                case "TextInput":
                    return (<TextInput {...options} style={{ ...styleProps }}></TextInput>)
                case "Text":
                    return (<Text {...options} style={{ ...styleProps }}>{value}</Text>)
                
            }
        }

    }) : null
}

const Letter= () => {
    // const [foregroundImage, setForeGroundImage] = useState(imgBackgrounds[0].localUrl);
    // const [backgroundImage, setBackgroundImage] = useState(letterBackgrounds[0].localUrl);
    // const [font, setFont] = useState(0);

    // const [stampImage, setStampImage] = useState(null);
    // const [fontSize, setFontSize] = useState(moderateScale(16));
    // return (
    //     <ImageBackground source={backgroundImage} imageStyle={{ resizeMode: 'cover' }} style={selectedTheme.backGround}>
    //         <View style={selectedTheme.cardContainer}>
    //             <View style={selectedTheme.cardLeft}>
    //                 <TextAreaBlock theme={selectedTheme} fontSize={fontSize} font={font} setSideBlock={(val) => turnSide(val)}></TextAreaBlock>
    //             </View>
    //             <View style={selectedTheme.cardRight}>
    //                 <View style={selectedTheme.cardHeader}>
    //                     <View style={selectedTheme.cardTitle}>
    //                         <TextInput
    //                             disableFullscreenUI={true}
    //                             style={selectedTheme.cardText}
    //                             defaultValue="POST-CARD"
    //                             underlineColorAndroid="transparent"
    //                         />
    //                         <Text style={selectedTheme.extraBorder}></Text>
    //                     </View>
    //                     <View style={selectedTheme.cardStamp}>
    //                         <StampArea theme={selectedTheme} viewStamps={() => setShowStamps(!showStamps)} stampImage={stampImage} showText={false}></StampArea>
    //                     </View>
    //                 </View>
    //                 <View style={selectedTheme.addressBlock}>
    //                     <AddressBlock theme={selectedTheme} editable={true} setParentAddress={(val) => setAddress(val)} font={font}></AddressBlock>
    //                 </View>
    //             </View>
    //         </View>
    //     </ImageBackground>
    // )
   
    const [config, setConfig] = useState(layout)
    const { title, children, height, width } = config;
    return (
        <Container title={title} children={children}/>
    )
}
const Container = props => {
    return (
      <View >
          {renderChildren(props.children)}
      </View>
    )  
}

export default Letter;