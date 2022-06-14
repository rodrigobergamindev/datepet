import { Box, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from './images/logo.png'

export default function Logo() {
  return (
    <HStack>
        <Heading color="tomato">DATE</Heading>
        <Heading color="gray.700">PET</Heading>
        <Image src={logo} objectFit="fill" maxW="70px" maxHeight="70px"/>
    </HStack>
  )
}
