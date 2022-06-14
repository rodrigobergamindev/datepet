import React, {useState, useEffect} from 'react'
import {
    VStack,
    Heading,
    HStack,
    Input,
    Text,
    Flex,
    Box
  } from '@chakra-ui/react';

import { Link, useNavigate } from "react-router-dom";
import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {getSessionCookie} from './contexts/useSession'


export default function Gestao() {

    const navigate = useNavigate()
    
    useEffect(() => {
      
      if(getSessionCookie() === undefined) return navigate('/')
      if(getSessionCookie() === 'Paciente') return navigate('/recompensas')
     
  },[])


  return (

      <VStack width="100%" height="100vh" alignItems="center" justifyContent="center" spacing={5}>
        
        <Heading fontStyle="italic" fontWeight="normal" color="blue.700">Gestão de dados</Heading>


        <VStack borderBottom="2px" paddingBottom="20px" borderColor="gray.300" width="full" paddingLeft="20px" paddingRight="20px">
        <Text fontSize='xl' fontWeight="semibold" color="blue.700">Pesquise aqui</Text>
        <Flex 
        as="label"
        py="4"
        px="4"
        bg="#CBD5E0"
        maxWidth={600}
        width="100%"
        alignSelf="center"
        color="gray.700"
        borderRadius="10px"
        zIndex={333}
        >

          <Input 
            color="gray.700"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="CPF do paciente..."
            _placeholder={{color:'gray.400'}}
        />
      <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
        </Flex>
      </VStack>

        <VStack padding="20px" spacing={6}>
        <HStack width="100%" boxShadow="xl" borderBottom="1px" borderColor="gray.300" padding="10px">
            <Link to="/pacient"><Text>Samuel Spencer - 330.454.555-55</Text></Link>
            <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
        </HStack>

        <HStack width="100%" boxShadow="xl" borderBottom="1px" borderColor="gray.300" padding="10px">
        <Link to="/pacient"><Text>Samuel Spencer - 330.454.555-55</Text></Link>
            <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
        </HStack>


        <HStack width="100%" boxShadow="xl" borderBottom="1px" borderColor="gray.300" padding="10px">
        <Link to="/pacient"><Text>Samuel Spencer - 330.454.555-55</Text></Link>
            <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
        </HStack>

        <HStack width="100%" boxShadow="xl" borderBottom="1px" borderColor="gray.300" padding="10px">
        <Link to="/pacient"><Text>Samuel Spencer - 330.454.555-55</Text></Link>
            <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
        </HStack>

        <HStack width="100%" boxShadow="xl" borderBottom="1px" borderColor="gray.300" padding="10px">
        <Link to="/pacient"><Text>Samuel Spencer - 330.454.555-55</Text></Link>
            <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
        </HStack>
        </VStack>
      
     
      </VStack>

  )
}
