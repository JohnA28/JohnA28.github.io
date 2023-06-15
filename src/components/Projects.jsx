/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Flex, HStack, VStack } from "@chakra-ui/react"
import PortfolioItem from "./Portfolioitem"
import portfolio from "../data/portfolio"
import Title from "./Title"

function Projects(){
  return (
    <Flex bg='brand.100' p='150px'align="center" justify="center">
    <VStack>
    <Title>Projects</Title>
    <HStack>
    {portfolio.map(project => (
      <PortfolioItem 
      imgUrl={project.imgUrl}
      title={project.title}
      stack={project.stack}
      link={project.link}
      description={project.description}
      />
    ))}

    </HStack>
    </VStack>

    </Flex>
  )
}


export default Projects