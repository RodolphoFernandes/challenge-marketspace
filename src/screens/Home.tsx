import React, { useCallback, useRef, useMemo } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { 
  Avatar, 
  HStack, 
  Icon, 
  Pressable, 
  ScrollView, 
  Text, 
  VStack 
} from "native-base";
import {ArrowRight, Tag, MagnifyingGlass, Sliders} from 'phosphor-react-native';
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function Home(): JSX.Element {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["70%", "90%"], []);

  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);

  const handleSnapPress = useCallback(() => {
    console.log('Fui pressionado')
    sheetRef.current?.snapToIndex(1);
  }, []);
  
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return (
    <VStack px={6} >
      <HStack 
        bg="gray.200" 
        // pt={16} 
        // pb={5} 
        // px={8} 
        alignItems="center" 
        justifyContent="space-between"
        height={11}
      >
        <Avatar 
          size={45}
          //marginBottom={4}
          borderWidth={2}
          borderColor="lightBlue.700"
          source={{
            uri: 'https://github.com/RodolphoFernandes.png'
          }}
        />

        <VStack>
          <Text 
          fontFamily="body"
          color="gray.900"
          fontSize="md"        
          >
            Boas vindas,
          </Text>
          <Text 
            fontFamily="heading"
            color="gray.900"
            fontSize="md"    
          >
            Rodolpho!
          </Text>
        </VStack>            

        <Button type="dark" title="Criar anúncio" />
      </HStack>

      <Text 
        fontFamily="body"
        color="gray.600"
        fontSize="sm"
        mt={8}
        mb={3}        
      >
        Seus produtos anunciados para venda 
      </Text>

      <HStack 
        bg="lightBlue.700:alpha.10"
        justifyContent="space-between"
        alignItems="center"
        height={16}
        paddingLeft={4}
        paddingRight={5}
        py={3}
      >
        <HStack
          justifyContent="space-between"
          alignItems="center"
          
        >
          <Icon as={<Tag color="#364D9D"/>} size={5} marginRight={4} />
          <VStack>            
            <Text 
              fontFamily="heading"
              color="gray.800"
              fontSize="xl"    
            >
              4
            </Text>
            <Text 
            fontFamily="body"
            color="gray.800"
            fontSize="xs"        
            >
              anúncios ativos
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <Text 
            fontFamily="heading"
            color="blue.900"
            fontSize="xs"
            marginRight={3}    
          >
            Meus anúncios
          </Text>
          <Icon as={<ArrowRight color="#364D9D"/>} size={4}  />
        </HStack>
      </HStack>

      <Text 
        fontFamily="body"
        color="gray.600"
        fontSize="sm"
        mt={8}
        mb={3}        
      >
        Compre produtos variados
      </Text>

      <Input
        placeholder="Buscar anúncio"
        InputRightElement={
          <HStack>
            <Pressable 
              marginRight={3}
              borderRightWidth={1}
              borderRightColor="gray.400"
              onPress={() => console.log('teste')}
            >
              <Icon as={<MagnifyingGlass /> } size={5} mr="2" color="gray.600" />
            </Pressable>

            <Pressable onPress={handleSnapPress}>
              <Icon as={<Sliders /> } size={5} mr="2" color="gray.600" />
            </Pressable>
          </HStack>
          
        }
      />

      <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
        >
          <BottomSheetView>
            <Text>Awesome 🔥</Text>
          </BottomSheetView>
        </BottomSheet>
    </VStack>
  )
}