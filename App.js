import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from './screens/HomeScreen';
function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}
export default function App() {
  let [fontsLoaded] = useFonts({
    'Ansichtkaart': require('./assets/fonts/ansichtkaart.otf'),
    'BottleParty': require('./assets/fonts/bottleparty.otf'),
    'Bajorelle': require('./assets/fonts/Bajorelle.ttf'),
    'Charmelade': require('./assets/fonts/charmelade.otf'),
    'Curiousness': require('./assets/fonts/Curiousness.otf'),
    'BlackSingature': require('./assets/fonts/BlackSingature.ttf'),
    'Rembank': require('./assets/fonts/Rembank.otf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
