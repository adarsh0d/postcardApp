import React, {useContext} from 'react';
import { ColorThemeContext } from '../AppContext';
import { useRoute } from '@react-navigation/native';

import ColorsPanel from '../components/colorsPanel';
const BackgroundColorsList = () => {
    const { setBackgroundColor, backgroundColor} = useContext(ColorThemeContext);
    const route = useRoute();
   
    return (
        <ColorsPanel pallet={route.params.pallet} setSelectedColor={(color) => setBackgroundColor(color)} selectedColor={backgroundColor}></ColorsPanel>
    )
}
export default BackgroundColorsList