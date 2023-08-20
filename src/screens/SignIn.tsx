import { useState } from "react";
import { Center, Icon, Pressable, ScrollView, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Eye, EyeSlash} from 'phosphor-react-native';

import GroupSvg from '@assets/group.svg';
import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 dígitos.')
})

export function SignIn(): JSX.Element {
  const [show, setShow] = useState(false);
  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  async function handleSignIn({email, password}: FormDataProps){
    console.log(email, password);
  }

  return (    
    <ScrollView
      contentContainerStyle={{flexGrow: 1}} 
      showsVerticalScrollIndicator={false}
    >
      <VStack
        flex={1}
        paddingBottom={68}
      >
        <VStack        
          backgroundColor="gray.200"
          width="100%"          
          borderBottomLeftRadius={24}
          borderBottomRightRadius={24}
          paddingX={12}
          paddingBottom={68}
        >
          <Center
            marginTop={109}
            marginBottom={76}
          >
            <GroupSvg />
          </Center>

          <Center>
            <Text
              fontFamily="body"
              color="gray.800"
              fontSize="sm"
              marginBottom={4}
            >
              Acesse sua conta
            </Text>
            <Controller 
              control={control}
              name="email"
              render={({field: {onChange, value}}) =>(
                <Input 
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller 
              control={control}
              name="password"
              render={({field: {onChange, value}}) =>(
                <Input 
                  placeholder="Senha"
                  secureTextEntry={!show}                
                  onChangeText={onChange}
                  value={value}
                  returnKeyType='send'
                  onSubmitEditing={handleSubmit(handleSignIn)}
                  errorMessage={errors.email?.message}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon as={show ? <EyeSlash /> : <Eye />} size={5} mr="2" color="gray.600" />
                    </Pressable>
                  }
                />
              )}
            />
            <Button 
              title="Entrar"
              marginTop={8}              
            />
          </Center>
        </VStack>
        
        <Center 
          marginTop={"56px"}
          paddingX={12}
        >
          <Text
            fontFamily="body"
            color="gray.800"
            fontSize="sm"
            marginBottom={4}
          >
            Ainda não tem acesso?
          </Text>
          <Button 
            title="Criar uma conta"
            type="gray"           
          />
        </Center>

      </VStack>

    </ScrollView>
  )
}