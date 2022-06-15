import { Box, Button, Image, VStack, Text, HStack, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Cookies} from 'react-cookie'

export default function Profile() {

    const navigate = useNavigate()
    const cookies = new Cookies()
    
    const [pets, setPets] = useState(Array.from(Object.entries(cookies.getAll())))

 
    function handleRemoveReminder(key){
        cookies.remove(`${key}`)
        window.location.reload()
    }

  return (
    <VStack spacing={10} height="100vh" padding="50px"  width="100%">

          <VStack justifyContent="space-between" alignItems="flex-start" width="100%">
          {
            pets.map(item => {
                if(item[0] !== 'session') {
                    return (
                        <HStack width="100%" key={item[0]} >
                            <Box >
                            <Button 
                            colorScheme="red"
                             size="sm" 
                            borderRadius="5px" 
                                fontSize="xl"
                                onClick={() => handleRemoveReminder(item[0])}>X</Button>


                                <Text fontSize="sm">{new Date(item[1].date).toLocaleDateString('pt-BR', {
                                    dateStyle:'medium'
                                }).toUpperCase()}</Text>

                                <Text fontSize="sm" fontWeight="bold">
                                    {item[1].hour}
                                </Text>
                            </Box>

                            <VStack width="100%" height="100%" backgroundColor="#3E2723" color="whiteAlpha.900" alignItems="flex-start" borderRadius="10px" padding="10px">
                                <Text fontWeight="bold" fontStyle="italic">
                                    Lembrete: {item[1].title.toUpperCase()}
                                </Text>
                                <Text fontSize="sm">
                                    Pet: {item[1].name}
                                </Text>

                                <Text fontSize="sm">
                                    Tarefa: {item[1].description}
                                </Text>
                            </VStack>
                        </HStack>
                    )
                }

            })
          }
          </VStack>
            
           <HStack
          position="absolute"
          right="20px"
          bottom="20px"
           >
            <Button 
                 colorScheme="blue"
                  size="lg" 
                  borderRadius="5px" 
                  fontSize="xl"
                  onClick={() => navigate('/create')}
                  >Add Reminder</Button>

             <Button 
              
              colorScheme="red"
               size="lg" 
               borderRadius="5px" 
               fontSize="xl"
             
               >Sign Out</Button>
           </HStack>
           
            
        </VStack>
  )
}
