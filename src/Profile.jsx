import { Box, Button, Image, VStack, Text, HStack, Heading, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Cookies} from 'react-cookie'
import {logout} from './contexts/useSession'

export default function Profile() {

    const navigate = useNavigate()
    const cookies = new Cookies()
    
    const [pets, setPets] = useState(Array.from(Object.entries(cookies.getAll())))

 
    function handleRemoveReminder(key){
        cookies.remove(`${key}`)
        window.location.reload()
    }

    function handleLogout(){
        logout()
        navigate('/')
        window.location.reload()
    }


  return (
    <VStack spacing={10} height="100vh" padding="50px"  width="100%">
          <HStack
          alignSelf="center"
          justifySelf="center"
          maxWidth="1200px"
          width="100%"
          
          justifyContent="flex-end"
          >
           <Button 
                colorScheme="blue"
                 size="lg" 
                 borderRadius="5px" 
                 fontSize="xl"
                 onClick={() => navigate('/create')}
                 >Add Task</Button>

            <Button 
             
             colorScheme="red"
              size="lg" 
              borderRadius="5px" 
              fontSize="xl"
              onClick={handleLogout}
              >Sign Out</Button>
          </HStack>
          
          <HStack justifyContent="flex-start" alignItems="flex-start" maxWidth="1200px" width="100%" spacing={10}>
          {
            pets.map(item => {
                if(item[0] !== 'session') {
                    return (
                        <VStack width="100%" maxWidth="250px" key={item[0]} backgroundColor="yellow.200" boxShadow="dark-lg" transition="all 0.3s ease" transform="rotate(10deg)" _hover={
                            
                                {
                                    transform:"rotate(0deg)",
                                    
                                }
                            
                        }>
                            <HStack width="100%" >
                            <Box 
                            as={Flex}
                            alignItems="center"
                            justifyContent="center"
                            padding="5px"
                            backgroundColor="green.500"
                            color="white"
                             size="sm" 
                            width="35px"
                            
                            cursor="pointer"
                            fontSize="md"
                            onClick={() => handleRemoveReminder(item[0])}>✓</Box>


                                <Text fontSize="md">{new Date(item[1].date).toLocaleDateString('pt-BR', {
                                    dateStyle:'medium'
                                }).toUpperCase()}</Text>

                                <Text fontSize="md" fontWeight="bold">
                                    {item[1].hour}
                                </Text>
                            </HStack>

                            <VStack width="100%" height="100%" color="#3E2723" alignItems="flex-start" borderRadius="10px" padding="10px" fontFamily="Architects Daughter">
                                <Text fontSize="3xl" fontStyle="italic">
                                   {item[1].title}
                                </Text>
                                <Text fontSize="sm">
                                    Pet: {item[1].name}
                                </Text>

                                <Text fontSize="sm">
                                    Tarefa: {item[1].description}
                                </Text>
                            </VStack>
                        </VStack>
                    )
                }

            })
          }
          </HStack>
            
            
        </VStack>
  )
}
