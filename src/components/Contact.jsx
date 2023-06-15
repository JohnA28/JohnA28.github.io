import { Button, Flex, FormControl, Input, Textarea, VStack } from "@chakra-ui/react"
import Title from "./Title"

function Contact(){
  return (
    <Flex bg='brand.400' p='150px' align='center' justify='center'>


    <VStack>
    <Title>Contact</Title>

    <form 
    action="https://getform.io/f/bca56d45-2b31-4f01-b4a3-7c1c3d71664d"
    method="POST">

    
    <FormControl>
    <Input name="name" placeholder="Name" bg='white' m='2px'/>
    <Input name="email" placeholder="Email Address" type='email' bg='white' m='2px' />
    <Textarea name="message" placeholder="Message" bg='white' m='2px' />
    <Button colorScheme="green" type="submit" m='2px'>Submit</Button>
    </FormControl>  


    </form>
    </VStack>
  
    </Flex>
  )
}


export default Contact