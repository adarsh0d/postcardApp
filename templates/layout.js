
import { fonts, foreGrounds, letterBackgrounds, imgBackgrounds } from '../utils/consts';
const messageArea = {
    containerType: 'View',
    children: [{
        containerType: 'TextInput',
        options: {
            placeholder: 'Type here'
        },
        styleProps: {

        }
    }]
};


const TextAreaBlock = {
    containerType: 'KeyboardAvoidingView',
    styleProps: {

    },
    options: {

    },
    children: [{ ...messageArea }]
}
const layout = {

    // @refresh reset
    title: 'Letter pad',
    key: 'LetterPad1',
    height: 1600,
    width: 800,
    children: [{
        title: 'background',
        key: 'background',
        containerType: 'ImageBackground',
        options: {
            source: letterBackgrounds[0].localUrl,
            imageStyle: { resizeMode: 'cover' }
        },
        styleProps: {
            height: 500,
            width: 500
        },
        children: [{
            containerType: 'View',
            styleProps: {
            },
            children: [{

            }]

        }, {
            containerType: 'TextInput',
            options: {
                placeholder: 'Type here'
            },
            styleProps: {
                width: 150,
                borderWidth: 1,
                borderColor: '#654321'
            },

        }, {
            containerType: 'Text',
            styleProps: {
                fontFamily: 'Curiousness'
            },
            value: 'asdjlsakj'
        }, {
            containerType: 'TextInput',
            options: {
                placeholder: 'Type here'
            },
            styleProps: {
                width: 300,
                borderWidth: 1,
                borderColor: '#654321'
            },
        }]
    }]
};
export default layout;