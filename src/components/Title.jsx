/* eslint-disable react/prop-types */
import { Heading } from "@chakra-ui/react";

function Title({children, id}) {
  return (
    <Heading 
    as='u'
    font='bold'
     id={id && id}>
    {children}
    </Heading>
  )
}

export default Title