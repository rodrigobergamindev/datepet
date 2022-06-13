import React, {useState, useEffect} from 'react'
import {
    VStack,
    Button,
    Image,
    HStack,
    Text,
    Box,
    Heading
  } from '@chakra-ui/react';


import { Link, useNavigate } from "react-router-dom";
import logo from './images/logo.png'
import bradesco from './images/bradesco.png'
import ultrafarma from './images/ultrafarma.png'

export default function Questionario() {


    

  return (

      <VStack width="100%" alignItems="center" justifyContent="center" paddingTop="50px" spacing={12}>

        <Image src={logo} width="250px"/>
      
          
          <VStack padding="40px" spacing={12}>
            <Heading fontWeight="light" fontStyle="italic" color="blue.900">Questionário</Heading>

            <Box >
            <Text>
                Preencha todos os campos. Ao concluir nossa pesquisa, resgate sua recompensa.
                <br/>
                <br/>
                <strong>ajuda</strong>: Para anexar os arquivos clique em "upload" e selecione o(s) exame(s).

                <br/>
                <br/>
                clique em "próximo" pra iniciar o questionário.
             </Text>
            </Box>

            <Text color="blue.400" alignSelf="flex-end">Próximo</Text>
          </VStack>


        
     
      </VStack>

  )
}
