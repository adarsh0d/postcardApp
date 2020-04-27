import React, {useContext} from 'react';
import { ColorThemeContext } from '../AppContext';
import { useRoute } from '@react-navigation/native';
import ColorsPanel from '../components/colorsPanel';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ImagePanel from '../components/ImagePanel';

const Tab = createMaterialTopTabNavigator();
const BackgroundGalleryList = () => {
    return (
        <ImagePanel></ImagePanel>
    )
}
export default BackgroundGalleryList