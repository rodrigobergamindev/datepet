import React, {useState, useEffect} from 'react'
import {
    VStack,
    Heading,
    HStack,
    Input,
    Text,
    Flex,
    Box,
    Avatar,
    Image
  } from '@chakra-ui/react';

import { Link, useNavigate } from "react-router-dom";
import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faPaperPlane, faPhoneFlip, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import graph from './images/graph.png'

export default function Pacient() {

    const navigate = useNavigate()
    


  return (

      <VStack width="100%" height="100vh" alignItems="center" justifyContent="center" spacing={5}>
        
        <Heading fontStyle="italic" fontWeight="normal" color="blue.700">Gestão de dados</Heading>


        <VStack width="70%" padding="5px" spacing={6} overflowX="scroll">
            <HStack width="100%" justifyContent="space-between" alignItems="flex-start">
                <Avatar size="lg" src="https://bit.ly/dan-abramov"/>

                <VStack alignItems="flex-start" color="blue.700">
                
                    <Text fontSize="17px" fontWeight="semibold">Samuel Spencer</Text>
                    <Text fontSize="10px" fontStyle="italic">samuel@gmail.com</Text>
                 
                    

                    <Text fontSize="12px">Contatos:</Text>

                    <HStack>
                    <FontAwesomeIcon icon={faPaperPlane} fontSize="12px" color="#001f53"/>
                    <FontAwesomeIcon icon={faPhoneFlip} fontSize="12px" color="#001f53"/>
                    </HStack>
                </VStack>

                <FontAwesomeIcon icon={faPencil} fontSize="15px" color="#001f53"/>
            </HStack>


            <HStack width="100%" color="gray.400" justifyContent="space-around">
                <VStack>
                    <Text fontStyle="italic" fontSize="10px">Arquivos</Text>
                    <Text color="blue.700" fontSize="20px" fontWeight="bold">03</Text>
                   
                </VStack>

                <VStack>
                    <Text fontStyle="italic" fontSize="10px">Formulários</Text>
                    <Text color="tomato" fontSize="20px" fontWeight="bold">02</Text>
                    
                </VStack>
            </HStack>

           <VStack>
           <Text fontStyle="italic" alignSelf="flex-start" fontSize="10px"color="gray.400">Tempo de Uso</Text>
            <Image src={graph}/>
           </VStack>

           <VStack  width="100%" alignItems="flex-start">
            <Heading fontSize="17px" color="gray.600" fontWeight="semibold" fontStyle="italic">Últimas atualizações</Heading>
            <Text color="gray.600" fontSize="11px">Paciente está a duas semanas sem consultar o médico. Última consulta foi realizada no dia: </Text>
            <Text color="gray.600" fontSize="11px" fontWeight="bold"> dd/mm/aa</Text>
           </VStack>

           <Text width="100%" color="gray.600" fontSize="11px" fontWeight="bold">Especialidade: Gastroentereologia</Text>

           <VStack width="100%" alignItems="flex-start">
            <Text width="100%" color="gray.600" fontSize="11px" fontStyle="italic">Último contato via email/telefone:</Text>
            <Text color="gray.600" fontSize="11px" fontWeight="bold"> dd/mm/aa</Text>
            </VStack> 

            <Box width="100%" backgroundColor="blue.700" borderRadius="5px">
                <VStack spacing={3} alignItems="flex-start" padding="10px">
                    <Text fontSize="15px" color="whiteAlpha.900">Formulário 1 - Pós-Tratamento</Text>
                    <Text fontSize="9px" color="whiteAlpha.900" fontStyle="italic">Perguntas: 50</Text>
                    
                    <VStack width="100%" alignItems="flex-start">
                    <Text fontSize="9px" color="whiteAlpha.900" fontWeight="light">Parceria: Bradesco Saúde</Text>
                    <Text fontSize="9px" color="whiteAlpha.900" fontWeight="light">Contato da parceria:</Text>
                    </VStack>

                    <HStack width="100%" justifyContent="space-between">
                        <HStack>
                        <Box border="1px" borderColor="white" padding="5px" paddingLeft="10px" paddingRight="10px">
                            <FontAwesomeIcon icon={faPaperPlane} fontSize="14px" color="white"/>
                        </Box>
                        
                        <Box border="1px" borderColor="white" padding="5px" paddingLeft="10px" paddingRight="10px">
                            <FontAwesomeIcon icon={faPhoneFlip} fontSize="14px" color="white"/>
                        </Box>
                        </HStack>

                        <HStack>
                            <FontAwesomeIcon icon={faPaperclip} fontSize="14px" color="white"/>
                            <Text fontSize="9px" color="whiteAlpha.900" fontWeight="light">3 attachments</Text>
                        </HStack>
                    </HStack>
                </VStack>   
            </Box>


            <Box width="100%" border="1px" borderColor="blue.700" borderRadius="5px">
                <VStack spacing={3} alignItems="flex-start" padding="10px">
                    <Text fontSize="15px" color="blue.700">Formulário 2 - Questionário</Text>
                    <Text fontSize="9px" color="blue.700" fontStyle="italic">Perguntas: 25</Text>
                    
                    <VStack width="100%" alignItems="flex-start">
                    <Text fontSize="9px" color="blue.700" fontWeight="light">Parceria: Bradesco Saúde</Text>
                    <Text fontSize="9px" color="blue.700" fontWeight="light">Contato da parceria:</Text>
                    </VStack>

                    <HStack width="100%" justifyContent="space-between">
                        <HStack>
                        <Box border="1px" borderColor="blue.700" padding="5px" paddingLeft="10px" paddingRight="10px">
                            <FontAwesomeIcon icon={faPaperPlane} fontSize="14px" color="#001f53"/>
                        </Box>
                        
                        <Box border="1px" borderColor="blue.700" padding="5px" paddingLeft="10px" paddingRight="10px">
                            <FontAwesomeIcon icon={faPhoneFlip} fontSize="14px" color="#001f53"/>
                        </Box>
                        </HStack>

                        <HStack>
                            <FontAwesomeIcon icon={faPaperclip} fontSize="14px" color="#001f53"/>
                            <Text fontSize="9px" color="blue.700" fontWeight="light">3 attachments</Text>
                        </HStack>
                    </HStack>
                </VStack>   
            </Box>
        </VStack>
      
     
      </VStack>

  )
}
