import React, {useState, useEffect} from 'react'
import {
    VStack,
    Button,
    Image,
    HStack,
    Text,
    Box,
    Grid
  } from '@chakra-ui/react';



import logo from './images/logo.png'
import cobasi from './images/cobasi.png'
import royalcannin from './images/royalcannin.png'
import petz from './images/petz.png'
import pedigree from './images/pedigree.png'

import { Link, useNavigate } from "react-router-dom";
import {getSessionCookie} from './contexts/useSession'
import Logo from './Logo';

export default function Rewards() {

    const navigate = useNavigate()
    


    useEffect(() => {
        if(getSessionCookie() === undefined) return navigate('/')
    },[])

  return (

      <VStack width="100%" mt={10} alignItems="center" justifyContent="center" spacing={12}>

        <Logo/>


        <Text alignSelf="center" justifySelf="center" textAlign="center" fontSize="lg" fontStyle="italic" color="#3E2723">
            Olá John Wick!
            <br/>
            Aqui você poderá resgatar suas recompensas, aproveite nossos descontos!
        </Text>
      
          
        <Grid width="100%" maxWidth="1100px" templateColumns="repeat(4,1fr)">

        
        <Box boxShadow="xl" maxWidth="250px" width="100%"   height="320px" >

            <VStack width="100%" height="100%" alignItems="flex-start" border="1px" borderColor="gray.300" padding="10px" justifyContent="space-between">
                <Image src={petz} width="100%"/>

                <Text fontSize="15px" fontWeight="bold" color="blue.900">Petz</Text>
                <Text fontSize="13px" fontStyle="italic" color="blue.900">Obtenha descontos exclusivos da rede Petz!</Text>

                <Button
                backgroundColor="#3E2723"
                border="2px"
                color="whiteAlpha.900"
                fontSize="15px"
                onClick={() => navigate('/rescue')}

                >
                    Resgate agora
                </Button>
            </VStack>
        </Box>


        <Box boxShadow="xl" maxWidth="250px" width="100%"  border="1px" borderColor="gray.300" padding="10px" height="320px" >

            <VStack width="100%" height="100%" alignItems="flex-start" justifyContent="space-between">
                <Image src={cobasi} height="175px" width="100%"/>

                <Text fontSize="15px" fontWeight="bold" color="blue.900">Cobasi</Text>
                <Text fontSize="13px" fontStyle="italic" color="blue.900">Produtos exclusivos da Cobasi para os nossos parceiros!</Text>

                <Button
                backgroundColor="#3E2723"
                border="2px"
                color="whiteAlpha.900"
                fontSize="15px"
                onClick={() => navigate('/rescue')}
                >
                    Resgate agora
                </Button>
            </VStack>
        </Box>

        <Box boxShadow="xl" maxWidth="250px" width="100%"  border="1px" borderColor="gray.300" padding="10px" height="320px">

            <VStack width="100%" height="100%" alignItems="flex-start" justifyContent="space-between">
                <Image src={royalcannin} height="175px" width="100%"/>

                <Text fontSize="15px" fontWeight="bold" color="blue.900">Royal Cannin</Text>
                <Text fontSize="13px" fontStyle="italic" color="blue.900">Assinatura no plano premium da Royal Canin com 50% off</Text>

                <Button
                backgroundColor="#3E2723"
                border="2px"
                color="whiteAlpha.900"
                fontSize="15px"
                onClick={() => navigate('/rescue')}
                >
                    Resgate agora
                </Button>
            </VStack>
        </Box>

        <Box boxShadow="xl" maxWidth="250px" width="100%"  border="1px" borderColor="gray.300" padding="10px" height="320px">

            <VStack width="100%" height="100%"  alignItems="flex-start" justifyContent="space-between">
                <Image src={pedigree} height="175px" width="100%"/>

                <Text fontSize="15px" fontWeight="bold" color="blue.900">Pedigree</Text>
                <Text fontSize="13px" fontStyle="italic" color="blue.900">Descontos em toda linha Pedigree</Text>

                <Button
                backgroundColor="#3E2723"
                border="2px"
                color="whiteAlpha.900"
                fontSize="15px"
                onClick={() => navigate('/rescue')}
                >
                    Resgate agora
                </Button>
            </VStack>
        </Box>


            
        </Grid>
      
     
      </VStack>

  )
}