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
import { faBars,faHome, faCalendar,faRss ,faPaw, faSignOut} from '@fortawesome/free-solid-svg-icons'
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

            </VStack>


              <VStack width="full">

                <Button colorScheme="blue" size='lg' width={"full"} onClick={() => {
                  navigate('/profile')
                  window.location.reload()
                }}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faHome} fontSize="16px"/>
                  
                    <Text>Account</Text></HStack>
                   
                  </Button>
              
                </VStack>

                

                <VStack width="full">

                    
                
                <Button colorScheme="blue" size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faPaw} fontSize="16px"/><Link to="/informativo"><Text>My Pets</Text></Link></HStack>
                   
                  </Button>
              
                </VStack>
                


                <VStack width="full">
                  <Button colorScheme="blue" size='lg' width={"full"} onClick={handleLogout}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faSignOut} fontSize="16px"/>
                  
                  <Text>Sing Out</Text>
            
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