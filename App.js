import React, { useReducer, useEffect, useMemo } from 'react';
import { AsyncStorage} from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import { AuthContext } from './AppContext'
function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}
export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  let [fontsLoaded] = useFonts({
    'Ansichtkaart': require('./assets/fonts/ansichtkaart.otf'),
    'BottleParty': require('./assets/fonts/bottleparty.otf'),
    'Bajorelle': require('./assets/fonts/Bajorelle.ttf'),
    'Charmelade': require('./assets/fonts/charmelade.otf'),
    'Curiousness': require('./assets/fonts/Curiousness.otf'),
    'BlackSingature': require('./assets/fonts/BlackSingature.ttf'),
    'Rembank': require('./assets/fonts/Rembank.otf'),
    'Caveat': require('./assets/fonts/Caveat-Regular.ttf'),
    'CaveatBold': require('./assets/fonts/Caveat-Bold.ttf'),
    'CongratsScript': require('./assets/fonts/CongratsScript-TTF.ttf'),
    'HighTide': require('./assets/fonts/HighTide-Demo.ttf'),
    'QueenGladys': require('./assets/fonts/QueenGladys-Regular.ttf'),
    'Yellowtail': require('./assets/fonts/Yellowtail-Regular.ttf'),
  });
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);
  const authContext = useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: data });
        AsyncStorage.setItem('userToken', data);
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={AuthScreen}
              options={{
                title: 'Sign in',
                headerShown: false,
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
              // User is signed in
              <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
              }} />
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
