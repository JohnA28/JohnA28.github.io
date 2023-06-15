/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, } from "@chakra-ui/react"

function PortfolioItem({title, imgUrl, stack, link, description}){
  return (
    <Card maxW ='sm'>

    <CardBody> 
    <Image
    boxSize='240px'
    objectFit='fill'
    src={imgUrl}
    alt='project picture'
    />

    <Stack mt='6' spacing='3'>
    <Heading size='md'>{title}</Heading>
    
  


    <Text> 

    Stack: <br/>
    
    {stack.map(item =>(
      <span>
      {item}
      </span>

    ))}
    
    <br />
    <br />
    <br />

    {description}
    </Text>
    </Stack>
    </CardBody>

    <Divider />

    <CardFooter>
    <ButtonGroup spacing='2'>
    <Button variant='ghost' colorScheme="blue" as='a' href={link}>
    link 
    </Button>
    </ButtonGroup>
    </CardFooter>
    </Card>
  )
}


export default PortfolioItem