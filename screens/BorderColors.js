import React, {useContext} from 'react';
import { ColorThemeContext } from '../AppContext';
import { useRoute } from '@react-navigation/native';
import ColorsPanel from '../components/colorsPanel';

const BorderColors = () => {
    const { setFontColor,setBorderColor, borderColor} = useContext(ColorThemeContext);
    const route = useRoute();
   
    return (
        <ColorsPanel pallet={route.params.pallet} setSelectedColor={(color) => setBorderColor(color)} selectedColor={borderColor}></ColorsPanel>
    )
}
export default BorderColors