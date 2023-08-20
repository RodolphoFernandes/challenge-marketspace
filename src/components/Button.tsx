import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;  
  type?: 'lightBlue' | 'dark' | 'gray';
}

export function Button({title, type = 'lightBlue', ...rest}: Props): JSX.Element {
  const typeColor = type === "lightBlue" ? "lightBlue.700" : 
              type === "gray" ? "gray.300" : "gray.900";

  const typeColorPressed = type === "lightBlue" ? "lightBlue.600" : 
              type === "gray" ? "gray.200" : "gray.800";
  
  return (
    <ButtonNativeBase
      w='full'
      h={11}
      bg={typeColor}
      borderWidth={0}     
      borderColor={typeColor}
      rounded="sm"
      _pressed={{
        bg: typeColorPressed
      }}
      {...rest}
    >
      <Text 
        color={type === "lightBlue" ? "gray.800" :"gray.100"} 
        fontFamily="heading" 
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}