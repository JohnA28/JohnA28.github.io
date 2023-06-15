/* eslint-disable react/no-unescaped-entities */
import { Flex, VStack, Text } from "@chakra-ui/react"
import Title from "./Title"


//add padding if text looks weird
function Aboutme(){
  return (
    <Flex p='150px' align="center" justify="center" bg="brand.300">

    <VStack>
    <Title>About Me</Title>

    <Text fontSize='xl'> 
    I'm a CUNY graduate with a degree in computer science. Understanding and questioning is at the heart <br />
    of who I am as a person. In every aspect of my life my curiosity to learn more drives me forward and <br />
    helps me grow into the best version of myself. My upbringing in NYC has not only influenced my love of <br />
    art and culture but also helped me unerstand and appreciate the different perspectives and ideas people <br />
    can bring with their unique experiences. I love to be part of teams that challenge my thoughts and ideas, <br />
    cooperation helps accelarate growth. Please feel free to contact me using the form below.
    </Text>

    </VStack>
  
    </Flex>
  )
}


export default Aboutme