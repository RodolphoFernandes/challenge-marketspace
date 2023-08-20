import {Input as NativeBaseInput, IInputProps, FormControl, WarningOutlineIcon } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({ errorMessage, isInvalid,...rest}:Props): JSX.Element {
  const invalid = !!errorMessage || isInvalid;

  return(
    <FormControl
      isInvalid={invalid}
      mb={4}
    >
      
      <NativeBaseInput
        backgroundColor="gray.100"
        height={11}
        paddingX={4}
        paddingY={3}
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        color="gray.900"
        placeholderTextColor="gray.500"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500"                    
        }}
        _focus={{
          bg:"gray.100",
          borderWidth:1,
          borderColor:"lightBlue.700"
        }}
        {...rest}
      />
      <FormControl.ErrorMessage 
        leftIcon={<WarningOutlineIcon size="xs" />}
        _text={ {color: "red.500"}}
      >
        {errorMessage}
      </FormControl.ErrorMessage>
      
    </FormControl>
  )
}