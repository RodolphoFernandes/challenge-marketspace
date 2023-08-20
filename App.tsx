
import { StatusBar } from 'react-native';
import { NativeBaseProvider, VStack, Text } from "native-base";
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { THEME } from './src/theme';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';
import { Home } from '@screens/Home';


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
          <VStack>
            {fontsLoaded ? <Home /> : <Loading />}
          </VStack>
        
            
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
