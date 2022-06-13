import React from 'react'
import {
    VStack,
    Button,
    Image,
    Avatar,
    Text,
  } from '@chakra-ui/react';

import logo from './images/logo.png'
import { Link, useNavigate } from "react-router-dom";


export default function DashboardPacient() {


  const navigate = useNavigate()

  return (

      <VStack width="100%" height="100vh" alignItems="center" justifyContent="center" spacing={12}>

        <Image src={logo} width="250px"/>

        <VStack>
            <Avatar src="https://bit.ly/dan-abramov" size="xl"/>
            <Text fontSize="15px" color="blue.900" fontWeight="bold">John Wick</Text> 
        </VStack>
          
        <VStack spacing={5} width="100%" padding="20px">

        <Button
           
            backgroundColor="#001f53"
            type='submit'
            width="100%"
            color="whiteAlpha.900"
            onClick={() => navigate('/agenda')}
          >
            Agenda
          </Button>

          <Button
           
            backgroundColor="#001f53"
            type='submit'
            width="100%"
            color="whiteAlpha.900"
            onClick={() => navigate('/gestao')}
          >
           Início
          </Button>

          <Button
           
            backgroundColor="#001f53"
            type='submit'
            width="100%"
            color="whiteAlpha.900"
            onClick={() => navigate('/dashboard')}
          >
           Alterar Cadastro
          </Button>

          <Button
           
            backgroundColor="#001f53"
            type='submit'
            width="100%"
            color="whiteAlpha.900"
            onClick={() => navigate('/')}
          >
            Sair
          </Button>
        </VStack>
      
     
      </VStack>

  )
}
