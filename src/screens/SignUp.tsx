import { useState } from "react";
import { Avatar, Center, Icon, Pressable, ScrollView, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Eye, EyeSlash, PencilSimpleLine} from 'phosphor-react-native';

import LogoSvg from '@assets/logo.svg';
import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  name: string;
  email: string;
  tel: string;
  password: string;
  confirmed_password: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  tel: yup.string().required('Informe o telefone'),
  password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  confirmed_password: yup.string().required('Informe a confirmação de senha.')
  .oneOf([yup.ref('password')], 'As senhas devem ser iguais.')
})

export function SignUp(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmePassword, setShowConfirmePassword] = useState(false);

  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  async function handleSignUp({name, email, tel, password,confirmed_password}: FormDataProps){
    console.log({name, email, tel, password,confirmed_password});
  }
  
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}} 
      showsVerticalScrollIndicator={false}
    >
      <VStack 
        flex={1}
        backgroundColor="gray.200"
        height="full"
        px={12}
        paddingTop={68}
        paddingBottom={12}
      >
         <Center
          marginBottom={8}
         >
            <LogoSvg />
            <Text 
              fontFamily="heading" 
              color="gray.900" 
              fontSize={20}
              marginTop={3}
            >
              Boas vindas!
            </Text>
            <Text
              fontFamily="body"
              fontSize={14}
              color="gray.800"
              textAlign="center"
              marginTop={2}
            >
            Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
            </Text>
         </Center>

         <Center>
          <Avatar 
            size={24}
            marginBottom={4}
            borderWidth={2}
            borderColor="lightBlue.700"
            source={{
              uri: 'https://avatars.githubusercontent.com/u/26528485?v=4'
            }}
          >
            <Avatar.Badge 
              bgColor="lightBlue.700" 
              size={10}
              alignItems="center"
              justifyContent="center"
              borderWidth={0}
              children={
                <Pressable onPress={() => console.log('fui pressionado')}>
                  <Icon as={<PencilSimpleLine />} size={3} color="gray.200" />
                </Pressable>
              }
            />
              

          </Avatar>

          <Controller 
            control={control}
            name="name"
            render={({field: {value, onChange}}) => (
              <Input 
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                autoCapitalize="words"
                errorMessage={errors.name?.message}
              />
            )}
          />
          
          <Controller 
            control={control}
            name="email"
            render={({field: {value, onChange}}) => (
              <Input 
                placeholder="E-mail"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />

          <Controller 
            control={control}
            name="tel"
            render={({field: {value, onChange}}) => (
              <Input 
                placeholder="Telefone"
                value={value}
                onChangeText={onChange}
                keyboardType="number-pad"
                autoCapitalize="none"
              />
            )}
          />

          <Controller 
            control={control}
            name="password"
            render={({field: {onChange, value}}) =>(
              <Input 
                placeholder="Senha"
                secureTextEntry={!showPassword}                
                onChangeText={onChange}
                value={value} 
                errorMessage={errors.email?.message}
                InputRightElement={
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Icon as={showPassword ? <EyeSlash /> : <Eye />} size={5} mr="2" color="gray.600" />
                  </Pressable>
                }
              />
            )}
          />

          <Controller 
            control={control}
            name="confirmed_password"
            render={({field: {onChange, value}}) =>(
              <Input 
                placeholder="Confirmar senha"
                secureTextEntry={!showConfirmePassword}                
                onChangeText={onChange}
                value={value}
                returnKeyType='send'
                onSubmitEditing={handleSubmit(handleSignUp)}
                errorMessage={errors.email?.message}
                InputRightElement={
                  <Pressable onPress={() => setShowConfirmePassword(!showConfirmePassword)}>
                    <Icon as={showConfirmePassword ? <EyeSlash /> : <Eye />} size={5} mr="2" color="gray.600" />
                  </Pressable>
                }
              />
            )}
          />

          <Button 
            type="dark" 
            title="Criar"
            onPress={handleSubmit(handleSignUp)}
          />

          <Text
            marginTop={12}
            marginBottom={4}
            fontFamily="body"
            fontSize={14}
            color="gray.800"
          >
            Já tem uma conta?
          </Text>
          <Button type="gray" title="Ir para o login" />
         </Center>
        </VStack>

    </ScrollView>
  )
}