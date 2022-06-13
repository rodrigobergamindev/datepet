import React from 'react'
import {
    VStack,
    Button,
    Image,
    Avatar,
    Text,
  } from '@chakra-ui/react';

import logo from './images/logo.png'

export default function Resgatar() {


    

  return (

      <VStack width="100%" height="100vh" alignItems="center" justifyContent="center" spacing={12}>

        <Image src={logo} width="250px"/>

        <VStack>
            <Avatar src="https://bit.ly/dan-abramov" size="xl"/>
            <Text fontSize="15px" color="blue.900" fontWeight="bold">John Wick</Text> 
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
