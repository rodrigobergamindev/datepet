import React from 'react'
import {
    VStack,
    Button,
    Image,
  } from '@chakra-ui/react';

import logo from './images/logo.png'

export default function Dashboard() {


    

  return (

      <VStack width="100%" height="100vh" alignItems="center" justifyContent="center" spacing={12}>

        <Image src={logo} width="250px"/>
      
          
        <VStack spacing={10} width="100%" padding="20px">

        <Button
            mt={4}
            backgroundColor="#001f53"
            type='submit'
            width="100%"
            color="whiteAlpha.900"
          >
            Início
          </Button>

          <Button
            mt={4}
            backgroundColor="#001f53"
            type='submit'
            width="100%"
            color="whiteAlpha.900"
          >
            Sair
          </Button>
        </VStack>
      
     
      </VStack>

  )
}
