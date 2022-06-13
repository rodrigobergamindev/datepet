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
import doctor from './images/doctor.jpg'
import yoga from './images/yoga.jpg'

export default function Informativo() {


    

  return (

      <VStack width="100%" alignItems="center" justifyContent="center" paddingTop="50px" spacing={12}>

        <Image src={logo} width="250px"/>
      
          
        <VStack width="100%">

        
        <HStack  height="350px" boxShadow="xl" overflowX="scroll" alignItems="flex-start" padding="20px">
            
            <VStack height="100%" width="70%" color="blue.900" padding="5px" backgroundColor="blue.200">
                <Image src={doctor}/>
                <Text fontSize="13px" fontWeight="bold">Médico - Renato Luz</Text>
                <Text fontSize="10px" fontWeight="bold">Especialidade: gastroentereologia</Text>

                <Text fontSize="11px" height="100%">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Text>
            </VStack>
           

            <VStack  alignItems="space-between"  justifyContent="space-between" width="100%" height="100%">
                <VStack>
                <Heading fontSize="17px" fontStyle="italic" color="blue.900">10 dicas de pós-operatório</Heading>
                <Text fontSize="13px">1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <Text fontSize="13px">2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <Text fontSize="13px">3. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </VStack>
               
                <Button
            mt={4}
            backgroundColor="#001f53"
            type='submit'
            width="50%"
            color="whiteAlpha.900"
            alignSelf="flex-end"
          >
            Ler mais
          </Button>
            </VStack>

        </HStack>


        <HStack width="100%" height="300px" boxShadow="xl" overflowX="scroll" padding="20px">
           

        <Image src={yoga} width="40%" height="100%" objectFit="cover"/>



            <VStack height="100%" width="100%" color="whiteAlpha.900" padding="5px" backgroundColor="blue.900">
               <Text fontSize="19px" fontWeight="bold">Lorem Ipsum</Text>

               <Text fontSize="13px" height="100%" overflowX="scroll">
               There are many variations of passages of Lorem Ipsum available, 
               but the majority have suffered alteration in some form, by injected humour, 
               or randomised words which don't look even slightly believable. 
               If you are going to use a passage of Lorem Ipsum, you need to be sure 
               there isn't anything embarrassing hidden in the middle of text.
               </Text>
            </VStack>
        </HStack>


            
        </VStack>
      
     
      </VStack>

  )
}
