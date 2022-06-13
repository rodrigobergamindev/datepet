import React, {useState, useEffect} from 'react'
import {
    VStack,
    Button,
    Image,
    HStack,
    Text,
    Box
  } from '@chakra-ui/react';



import logo from './images/logo.png'
import bradesco from './images/bradesco.png'
import ultrafarma from './images/ultrafarma.png'
import { Link, useNavigate } from "react-router-dom";


export default function Recompensas() {

    const navigate = useNavigate()
    

  return (

      <VStack width="100%" mt={10} alignItems="center" justifyContent="center" spacing={12}>

        <Image src={logo} width="250px"/>
      
          
        <VStack spacing={10} width="100%" padding="40px">

        
        <Box boxShadow="xl" width="100%" overflowX="scroll" border="1px" borderColor="gray.200" padding="10px">

            <VStack width="100%" alignItems="flex-start">
                <Image src={bradesco} width="100%"/>

                <Text fontSize="15px" fontWeight="bold" color="blue.900">Bradesco Saúde</Text>
                <Text fontSize="13px" fontStyle="italic" color="blue.900">Recebe benefícios em consultas e exames com Bradesco Saúde, parceria com a Boston Scientific</Text>

                <Button
                backgroundColor="#001f53"
                border="2px"
                color="whiteAlpha.900"
                fontSize="15px"
                onClick={() => navigate('/questionario')}
                >
                    Resgate agora
                </Button>
            </VStack>
        </Box>


        <Box boxShadow="xl" width="100%" overflowX="scroll" border="1px" borderColor="gray.200" padding="10px">

            <VStack width="100%" alignItems="flex-start">
                <Image src={ultrafarma} width="100%"/>

                <Text fontSize="15px" fontWeight="bold" color="blue.900">Ultrafarma</Text>
                <Text fontSize="13px" fontStyle="italic" color="blue.900">Desconto em qualquer Ultrafarma de todo o Brasil. Mais de 40% de desconto, receba agora!</Text>

                <Button
                backgroundColor="#001f53"
                border="2px"
                color="whiteAlpha.900"
                fontSize="15px"
                >
                    Resgate agora
                </Button>
            </VStack>
        </Box>
            
        </VStack>
      
     
      </VStack>

  )
}
