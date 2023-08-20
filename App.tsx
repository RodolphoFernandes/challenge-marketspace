
import { StatusBar } from 'react-native';
import { NativeBaseProvider, VStack, Text } from "native-base";
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { THEME } from './src/theme';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular, Karla_700Bold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
          barStyle='dark-content'
          backgroundColor='transparent'
          translucent
        />
        <VStack>
          {fontsLoaded ? <SignUp /> : <Loading />}
        </VStack>
    </NativeBaseProvider>
  );
}
