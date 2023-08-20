import { Center, Spinner } from "native-base";

export function Loading(): JSX.Element {
  return (
    <Center flex={1} backgroundColor="gray.100">
      <Spinner color="blue.900" />
    </Center>
  )
}