import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    HStack,
    UnorderedList,
    ListItem,
    VStack,
    Text,
    Box,
    Avatar,
    Flex
  } from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHome, faList, faLocationDot, faPhone, faCalendar,faRss ,faUser, faSignOut} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from 'react-router-dom'
import { logout } from '../contexts/useSession'

  

export default function DrawerMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate()


    function handleLogout(){
      logout()
      navigate('/')
      window.location.reload()
    }
  
    return (
      <HStack  alignSelf="flex-end" alignItems="flex-end" justifySelf="space-between" >
 
        <Button ref={btnRef} alignSelf="flex-end" backgroundColor="transparent" onClick={onOpen} padding="30px" _hover={{backgroundColor: 'transparent'}}>
          <FontAwesomeIcon size="1x" icon={faBars} color="#ffffff"/>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
            <VStack height={"full"} align="flex-start" marginTop={"16"} spacing="16">

            <VStack alignSelf="center">
                <Avatar src="https://bit.ly/dan-abramov" size="xl"/>
                <Text fontSize="15px" color="blue.900" fontWeight="bold">John Wick</Text> 
                
                <HStack border="1px" borderColor="blue.400">

                
                  <Box as={Flex} w="150px" height="30px" backgroundColor="blue.400" alignItems="center" justifyContent="center">
                    <Text color="whiteAlpha.900" fontWeight="bold" fontSize="12px">🌟 1541 points</Text>
                  </Box>

                  <Box w="30%" height="30px" backgroundColor="whiteAlpha.900">

                  </Box>

                </HStack>
            </VStack>


            <VStack width="full">

                    
                
                <Button colorScheme="blue" size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faHome} fontSize="16px"/><Link to="/recompensas"><Text>Início</Text></Link></HStack>
                   
                  </Button>
              
                </VStack>
              
                <VStack width="full">
                  <Button colorScheme="blue" size='lg' width={"full"}>
                    <HStack align="center" justify="center"><FontAwesomeIcon icon={faUser} fontSize="16px"/><Text>Alterar Cadastro</Text></HStack>
                   
                  </Button>
                </VStack>
                

                
                <VStack width="full">

                    
                
                <Button colorScheme="blue" size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faCalendar} fontSize="16px"/><Link to="/agenda"><Text>Agenda</Text></Link></HStack>
                   
                  </Button>
              
                </VStack>

                <VStack width="full">

                    
                
                <Button colorScheme="blue" size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faRss} fontSize="16px"/><Link to="/informativo"><Text>Novidades</Text></Link></HStack>
                   
                  </Button>
              
                </VStack>
                


                <VStack width="full">
                  <Button colorScheme="blue" size='lg' width={"full"} onClick={handleLogout}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faSignOut} fontSize="16px"/>
                  
                  <Text>Sair</Text>
            
                  </HStack>
                  </Button>
                </VStack>


            </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    )
}