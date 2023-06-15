import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

function Hero(){
  return (
    <Flex bg='brand.200' p='150px' align='center' justify='right'>
    
    <VStack>

    <Heading>John Alban</Heading>

    <Text> Software Engineer & Web Developer </Text>

    </VStack>
    

    <Image
    mx='150px'
    borderRadius='full'
    boxSize='md'
    src="/assets/Graduation.jpeg"
    alt="John Alban"
    >
    </Image>
  
    </Flex>
  )
}

export default Hero