import { Box, Button, Image, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Profile() {

    const navigate = useNavigate()

    const [pets, setPets] = useState([])

  return (
    <VStack spacing={10} width="100%" padding="40px">

        
        <Box boxShadow="xl" width="100%" overflowX="scroll" border="1px" borderColor="gray.200" padding="10px">

            <VStack width="100%" alignItems="flex-start">
                <Image src="" width="100%"/>

                <Text fontSize="15px" fontWeight="bold" color="blue.900">Bradesco Saúde</Text>
                <Text fontSize="13px" fontStyle="italic" color="blue.900">Recebe benefícios em consultas e exames com Bradesco Saúde, parceria com a Boston Scientific</Text>

                <Button
                backgroundColor="#001f53"
                border="2px"
                color="whiteAlpha.900"
                fontSize="15px"
                onClick={() => navigate('/questionario')}
                >
                    Ver agenda do pet
                </Button>
            </VStack>
        </Box>


            
        </VStack>
  )
}
