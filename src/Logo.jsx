import { Box, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from './images/logo.png'

export default function Logo() {
  return (
    <HStack>
        <Heading color="#3E2723">DATE</Heading>
        <Heading color="gray.300">PET</Heading>
        <Image src={logo} objectFit="fill" maxW="70px" maxHeight="70px"/>
    </HStack>
  )
}
