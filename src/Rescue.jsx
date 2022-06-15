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
import Logo from './Logo';
import {useNavigate} from 'react-router-dom'

export default function Rescue() {


    const navigate = useNavigate()

  return (

      <VStack width="100%" mt="40px" alignItems="center" justifyContent="center" spacing={5}>

        <Logo/>

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

            
        <Text textAlign="center"  fontWeight="bold" fontSize="22px"  fontStyle="italic">
        Resgate aqui sua recompensa, ela chegará no e-mail cadastrado.
        </Text> 

        <Button
           
            colorScheme="blue"
            type='submit'
            color="whiteAlpha.900"
            size="lg"
            onClick={() => navigate('/profile')}
          >
            Resgatar
          </Button>

        </VStack>
      
     
      </VStack>

  )
}