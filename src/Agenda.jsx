import React from 'react'
import {
    VStack,
    Button,
    Image,
    Avatar,
    Text,
    Heading,
    HStack,
    Box,
  } from '@chakra-ui/react';

import logo from './images/logo.png'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Agenda() {


    

  return (

      <VStack width="100%" height="100vh" alignItems="center" justifyContent="center" spacing={12}>
          
        <VStack spacing={5} width="100%" padding="20px" overflowX="scroll">

            
            <Heading fontStyle="italic" fontWeight="light" color="blue.900">Agenda</Heading>

            <HStack width="100%" alignItems="center" justifyContent="space-between">
                <Text fontSize="19px" fontWeight="bold">{new Date().toLocaleDateString('pt-BR', {
                    dateStyle: 'full'
                })}</Text>
                <FontAwesomeIcon icon={faBell} fontSize="30px" color="#001f53"/>
            </HStack>


            <HStack width="100%" maxWidth="100%"  alignItems="center" justifyContent="space-between">

                <VStack borderRadius="50px" backgroundColor="blue.600" padding="7px" width="100%">
                    <Text fontSize="13px" color="whiteAlpha.900">Seg</Text>
                    <Text fontSize="13px" color="whiteAlpha.900">12</Text>
                </VStack>
                

                <VStack borderRadius="50px" backgroundColor="blue.400" padding="7px" width="100%">
                    <Text fontSize="13px" color="whiteAlpha.900">Ter</Text>
                    <Text fontSize="13px" color="whiteAlpha.900">13</Text>
                </VStack>


                <VStack borderRadius="50px" backgroundColor="blue.400" padding="7px" width="100%">
                    <Text fontSize="13px" color="whiteAlpha.900">Qua</Text>
                    <Text fontSize="13px" color="whiteAlpha.900">14</Text>
                </VStack>


                <VStack borderRadius="50px" backgroundColor="blue.400" padding="7px" width="100%">
                    <Text fontSize="13px" color="whiteAlpha.900">Qui</Text>
                    <Text fontSize="13px" color="whiteAlpha.900">15</Text>
                </VStack>


                <VStack borderRadius="50px" backgroundColor="blue.400" padding="7px" width="100%">
                    <Text fontSize="13px" color="whiteAlpha.900">Sex</Text>
                    <Text fontSize="13px" color="whiteAlpha.900">16</Text>
                </VStack>

                <VStack borderRadius="50px" backgroundColor="blue.400" padding="7px" width="100%">
                    <Text fontSize="13px" color="whiteAlpha.900">Sab</Text>
                    <Text fontSize="13px" color="whiteAlpha.900">17</Text>
                </VStack>

                <VStack borderRadius="50px" backgroundColor="blue.400" padding="7px" width="100%">
                    <Text fontSize="13px" color="whiteAlpha.900">Dom</Text>
                    <Text fontSize="13px" color="whiteAlpha.900">18</Text>
                </VStack>
                
            </HStack>


            <HStack width="100%">

                <VStack >
                    <Text fontSize="13px">08:00 a.m</Text>

                    <Box height="50px" width="3px" backgroundColor="green.200"/>
                </VStack>

                <VStack 
                borderLeft="4px"
                width="100%"
                height="100%"
                 borderTopLeftRadius="10px"
                  borderBottomLeftRadius="10px" 
                  borderColor="blue.200"
                  alignItems="flex-start"
                  justifyContent="center"
                 paddingLeft="20px"
                 boxShadow="xl"
                  >
                    <Text fontSize="15px" fontWeight="bold">Meditar ou correr</Text>
                    <Text fontSize="15px" fontWeight="bold">remédio </Text>
                </VStack>
            </HStack>

            <HStack width="100%">

                <VStack >
                    <Text fontSize="13px">09:45 a.m</Text>

                    <Box height="50px" width="3px" backgroundColor="yellow.200"/>
                </VStack>

                <VStack 
                width="100%"
                height="100%"
                 backgroundColor="blue.900"
                  alignItems="flex-start"
                  justifyContent="center"
                 paddingLeft="20px"
                 boxShadow="xl"
                 borderRadius="5px"
                  >
                    <Text fontSize="15px" fontWeight="bold" color="whiteAlpha.900">Café da manhã e frutas</Text>
                    <Text fontSize="15px" fontWeight="bold" color="whiteAlpha.900">Checar pressão</Text>
                </VStack>
            </HStack>

            <HStack width="100%">

                <VStack >
                    <Text fontSize="13px">10:50 a.m</Text>

                    <Box height="50px" width="3px" backgroundColor="red.200"/>
                </VStack>

                <VStack 
                width="100%"
                height="100%"
                backgroundColor="red.100"
                alignItems="flex-start"
                justifyContent="center"
                paddingLeft="20px"
                boxShadow="xl"
                borderRadius="5px"
                >
                    <Text fontSize="15px" fontWeight="semibold" color="black">Remédio 2</Text>
                </VStack>
            </HStack>

            <HStack width="100%">

                <VStack >
                    <Text fontSize="13px">02:40 p.m</Text>

                    <Box height="50px" width="3px" backgroundColor="purple.200"/>
                </VStack>

                <VStack 
                width="100%"
                height="100%"
                backgroundColor="blue.900"
                alignItems="flex-start"
                justifyContent="center"
                paddingLeft="20px"
                boxShadow="xl"
                borderRadius="5px"
                >
                    <Text fontSize="15px" fontWeight="semibold" color="whiteAlpha.900">Almoço</Text>
                </VStack>
            </HStack>


            <HStack width="100%">

                <VStack >
                    <Text fontSize="13px">04:00 p.m</Text>

                    <Box height="50px" width="3px" backgroundColor="blue.200"/>
                </VStack>

                <VStack 
                borderLeft="4px"
                width="100%"
                height="100%"
                 borderTopLeftRadius="10px"
                  borderBottomLeftRadius="10px" 
                  borderColor="blue.600"
                  alignItems="flex-start"
                  justifyContent="center"
                 paddingLeft="20px"
                 boxShadow="xl"
                 backgroundColor="blue.200"
                  >
                    <Text fontSize="15px" fontWeight="bold">Lanche da tarde e frutas</Text>
                    <Text fontSize="15px" fontWeight="bold">remédio 1 </Text>
                </VStack>
            </HStack>
        </VStack>
      
     
      </VStack>

  )
}
