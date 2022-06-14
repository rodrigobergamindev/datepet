import React from 'react'
import {
    VStack,
    Button,
    Image,
    Avatar,
    Text,
    Flex,
    HStack,
    Box,
  } from '@chakra-ui/react';

import logo from './images/logo.png'

export default function Resgatar() {


    

  return (

      <VStack width="100%" height="100vh" alignItems="center" justifyContent="center" spacing={12}>

        <Image src={logo} width="250px"/>

        <VStack>
            <Avatar src="https://bit.ly/dan-abramov" size="xl"/>
            <Text fontSize="15px" color="blue.900" fontWeight="bold">John Wick</Text> 

            <HStack border="1px" borderColor="blue.400">

                
                  <Box as={Flex} w="150px" height="30px" backgroundColor="blue.400" alignItems="center" justifyContent="center">
                    <Text color="whiteAlpha.900" fontWeight="bold" fontSize="12px">🌟 1750 points</Text>
                  </Box>

                  <Box w="10%" height="30px" backgroundColor="whiteAlpha.900">

                  </Box>

                </HStack>
        </VStack>
          
        <VStack spacing={5} width="100%" padding="20px">

            
        <Text textAlign="center"  fontWeight="bold" fontSize="13px" color="blue.900" fontStyle="italic">A Boston Scientific agradece!
        <br/>
        Resgate aqui sua recompensa, ela chegará no e-mail cadastrado.
        </Text> 

        <Button
           
            backgroundColor="#001f53"
            type='submit'
            width="100%"
            color="whiteAlpha.900"
          >
            Resgatar
          </Button>

        </VStack>
      
     
      </VStack>

  )
}
