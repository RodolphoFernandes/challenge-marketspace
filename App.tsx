
import { StatusBar } from 'react-native';
import { NativeBaseProvider, VStack, Text } from "native-base";
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';
import { SignUp } from './src/screens/SignUp';
import { Home } from './src/screens/Home';


export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular, Karla_700Bold
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider theme={THEME}>
        
        <StatusBar 
          barStyle='dark-content'
          backgroundColor='transparent'
          translucent
        />
          
        {fontsLoaded ? <Home /> : <Loading />}
            
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
