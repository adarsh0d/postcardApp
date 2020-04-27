import React, {useContext} from 'react';
import { ColorThemeContext } from '../AppContext';
import { useRoute } from '@react-navigation/native';

import ColorsPanel from '../components/colorsPanel';
const FontColors = () => {
    const { setFontColor, fontColor} = useContext(ColorThemeContext);
    const route = useRoute();
   
    return (
        <ColorsPanel pallet={route.params.pallet} setSelectedColor={(color) => setFontColor(color)} selectedColor={fontColor}></ColorsPanel>
    )
}
export default FontColors