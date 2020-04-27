import React, { useContext } from 'react';
import { View, Slider, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ColorsPanel from '../components/colorsPanel';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import BackgroundGalleryList from './BackgroundGalleryList';
import BackgroundColorsList from './BackgroundColorsList';
import LocalGalleryList from './LocalGalleryList';
import { halfVerticalIndent, verticalIndent } from '../styles/dimensions';
import { ColorThemeContext } from '../AppContext';
const BackgroundScreen = () => {
    const route = useRoute();
    const {alpha, setBackgroundAlpha} = useContext(ColorThemeContext);
    return (
        <View style={{ flex: 1 }}>
            <View style={{paddingVertical: halfVerticalIndent}}>
                <Text style={{ fontFamily: 'Curiousness', fontSize: 12 , paddingHorizontal: verticalIndent}}>Set Background Overlay</Text>
                <Slider onSlidingComplete={(value) => setBackgroundAlpha(value)} value={alpha} style={{width: '100%', margin: 0, transform: [{ scaleY: 1.5 }]}} thumbTintColor="#000" />
            </View>
            <View style={{ flex: 1 }}>
                <Tab.Navigator>
                    <Tab.Screen name="Image" component={BackgroundGalleryList} />
                    <Tab.Screen name="Colors" component={BackgroundColorsList} initialParams={{ pallet: route.params.pallet }} />
                   <Tab.Screen name="Gallery" component={LocalGalleryList}/> 
                </Tab.Navigator>
            </View>
        </View>
    )
}
export default BackgroundScreen