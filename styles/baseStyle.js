import { Dimensions } from 'react-native';
import { verticalIndent, indent, halfVerticalIndent, containerWidth } from './dimensions';
const { width, height } = Dimensions.get('window');

import fontSizes from './fontSizes'
import colors from './colors';

const addressBlock = (fontColor, borderColor) => {
    return {
        pinBlock: {
            flex: 1,
            flexDirection: 'row',
            marginTop: halfVerticalIndent
        },
        pinBox: {
            borderWidth: 1,
            borderColor: borderColor,
            borderStyle: 'dotted',
            marginRight: 5,
            marginTop: 10,
            height: verticalIndent,
            width: verticalIndent,
            textAlign: 'center',
            fontSize: fontSizes.verySmall,
            color: fontColor
        },
        addressBoxInput: {
            borderStyle: 'dotted',
            fontSize: fontSizes.small,
            color: fontColor,
            height: verticalIndent * 1.2,
            textAlignVertical: 'bottom'
        },
        addressBox: {
            borderBottomWidth: 1,
            borderBottomColor: borderColor,
        },
        addressBlock: {
            flex: 1,
        },
    }
}
const bottomBar = (fontColor, borderColor) => {
    return {
        bottomBar: {
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            color: colors.white,
        },
        bottomLeftBar: {
            flexDirection: 'row',
            marginVertical: verticalIndent,
            flexWrap: 'wrap',
            alignItems: 'flex-start'
        },
        bottomMiddleBar: {
            flexDirection: 'row',
        },
        bottomRightBar: {
            flex: 1,
        },
        option: {
            width: width / 3,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: verticalIndent
        },
        optionIcon: {
            marginBottom: halfVerticalIndent
        },
        optionText: {
            fontSize: fontSizes.small,
            fontFamily: "Curiousness"
        },
    }
};
const baseStyle = (fontColor = colors.black, borderColor = colors.darkBrown) => {
    return {
        container: {
            backgroundColor: colors.white,
            flex: 1
        },
        viewShot: {
            backgroundColor: colors.white
        },
        label: {
            fontSize: fontSizes.medium,
            fontFamily: "Curiousness"
        },
        textArea: {
            textAlign: 'left',
            alignSelf: 'flex-start',
            fontFamily: 'BottleParty',
            height: '100%',
            color: fontColor,
            textAlignVertical: 'top',
        },
        
        foreGround: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        backgroundContainer: {
            margin: 0,
        },
        backGround: {
            elevation: 10,
            aspectRatio: 16/9
        },
        cardContainer: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingVertical: halfVerticalIndent,
        },
        cardLeft: {
            flex: 0.5,
            borderRightWidth: 1,
            borderRightColor: borderColor,
            paddingHorizontal: halfVerticalIndent,
        },
        cardRight: {
            flex: 0.5,
            paddingHorizontal: halfVerticalIndent,
            paddingVertical: indent
        },
        cardHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        cardTitle: {
            alignSelf: 'center',
            color: fontColor,
        },
        cardStamp: {
            alignSelf: 'flex-end',
        },
        cardText: {
            fontFamily: 'Curiousness',
            borderBottomWidth: 2,
            borderColor: fontColor,
            textDecorationColor: 'transparent',
            color: fontColor,
            fontSize: fontSizes.small
        },
        extraBorder: {
            fontSize: 2,
            fontFamily: 'Curiousness',
            borderBottomWidth: 2,
            borderBottomColor: fontColor
        },

        button: {
            borderRadius: 20,
            alignSelf: 'flex-end',
            marginRight: indent / 2,
            alignItems: 'center',
            textAlign: 'center',
            paddingVertical: halfVerticalIndent / 2,
            borderWidth: 1,
            borderColor: colors.brownDarker,
            width: indent * 5.5
        },
        icon: {
            marginLeft: halfVerticalIndent / 3
        },
        placeholder: {
            color: fontColor
        },

        stampIcon: {
            width: indent * 2,
            height: indent * 2,
            alignItems: 'center',
            justifyContent: 'center',
        },
        messageAreaFront: {
            alignSelf: 'flex-start',
            paddingHorizontal: halfVerticalIndent,
            paddingVertical: halfVerticalIndent,
            width: '100%',
        },
        messageAreaBack: {
            alignSelf: 'flex-start',
        },
        stampImage: {
            width: indent * 3,
            height: indent * 3,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5
        },
        stampList: {
            fontFamily: 'Curiousness',
            textAlign: 'center',
            opacity: 1,
            fontSize: fontSizes.verySmall
        },
        stampArea: {
            borderColor: borderColor,
            borderWidth: 1,
            height: verticalIndent * 2,
            width: verticalIndent * 2,
            padding: indent,
            justifyContent: 'center',
            alignItems: 'center',
        },
        stampArea: {
            borderColor: borderColor,
            borderWidth: 1,
            height: verticalIndent * 2,
            width: verticalIndent * 2,
            padding: indent,
            justifyContent: 'center',
            alignItems: 'center',
        },
        tab: {
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: borderColor,
            paddingHorizontal: halfVerticalIndent
        },
        tabs: {
            flexDirection: 'row',
            marginBottom: 10,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            paddingHorizontal: indent
        },
        ...addressBlock(fontColor, borderColor),
        ...bottomBar(fontColor, borderColor)

    }
}
export default baseStyle;