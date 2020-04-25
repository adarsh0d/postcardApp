import { Dimensions } from 'react-native';
import { verticalIndent, indent, halfVerticalIndent } from './dimensions';
const { width, height } = Dimensions.get('window');

import fontSizes from './fontSizes'
import colors from './colors';
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
            fontSize: 30,
            textAlign: 'left',
            paddingHorizontal: indent,
            alignSelf: 'flex-start',
            fontFamily: 'BottleParty',
            height: '100%',
            color: fontColor,
            textAlignVertical: 'top',
            padding: 10
        },
        pinBox: {
            borderWidth: 1,
            borderColor: borderColor,
            borderStyle: 'dotted',
            marginRight: 5,
            marginTop: 10,
            height: indent * 2,
            width: indent * 2,
            textAlign: 'center',
            fontSize: fontSizes.xxmedium,
            color: fontColor
        },
        addressBoxInput: {
            borderStyle: 'dotted',
            fontSize: fontSizes.xxmedium,
            color: fontColor
        },
        addressBox: {
            borderBottomWidth: 1,
            borderBottomColor: borderColor,
            marginBottom: 10,

        },
        addressBlock: {
            marginHorizontal: 20,
            marginBottom: 10,
        },
        foreGround: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        backgroundContainer: {
            margin: 30,
        },
        backGround: {
            height: 400,
            width: 800,
            elevation: 10,
        },
        cardContainer: {
            flex: 1,
            padding: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        cardLeft: {
            flex: 0.5,
            height: '100%',
            borderRightWidth: 1,
            borderRightColor: borderColor,
        },
        cardRight: {
            flex: 0.5,
            width: '100%',
            paddingVertical: 20,
        },
        cardHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            height: verticalIndent * 4,
        },
        cardTitle: {
            alignSelf: 'center',
            color: fontColor
        },
        cardStamp: {
            alignSelf: 'flex-end'
        },
        cardText: {
            fontSize: 22,
            fontFamily: 'Curiousness',
            borderBottomWidth: 2,
            borderColor: fontColor,
            textDecorationColor: 'transparent',
            color: fontColor,
        },
        extraBorder: {
            fontSize: 2,
            fontFamily: 'Curiousness',
            borderBottomWidth: 2,
            borderBottomColor: fontColor
        },
        bottomBar: {
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            color: colors.white,
            flexDirection: 'row',
            height: indent * 2.5,
            padding: 5,
            justifyContent: 'space-between'
        },
        bottomLeftBar: {
            flex: 1,
            alignSelf: 'flex-start',
            flexDirection: 'row',
        },
        bottomMiddleBar: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        bottomRightBar: {
            flex: 1,
            alignSelf: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        button: {
            borderRadius: 20,
            alignSelf: 'flex-end',
            marginRight: 8,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingVertical: 5,
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
        messageAreaFront: {
            alignSelf: 'flex-start',
            padding: 10,
            marginTop: 5,
            width: '100%',
        },
        messageAreaBack: {
            alignSelf: 'flex-start',
        },
        stampImage: {
            width: 80,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
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
            height: indent * 5,
            width: indent * 5,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        stampAreaText: {
            fontFamily: 'Curiousness',
            textAlign: 'center',
            opacity: 0.3,
            color: fontColor,
            fontSize: fontSizes.verySmall
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
        }

    }
}
export default baseStyle;