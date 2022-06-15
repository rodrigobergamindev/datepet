import React, {useState, useEffect} from 'react'
import {
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Image,
    Radio, 
    RadioGroup,
    Stack,
    HStack,
    Text,
    Grid,
    GridItem,
    Box,
    Heading,
    Textarea
  } from '@chakra-ui/react';

import {Formik, Field, Form} from 'formik'
import { Link, useNavigate } from "react-router-dom";
import background from './images/background.jpg'
import { setSessionCookie, getSessionCookie } from './contexts/useSession';
import Logo from './Logo';
import {Cookies} from 'react-cookie'

export default function Create() {

  const [value, setValue] = useState('Paciente')
  const [session, setSession] = useState(getSessionCookie())
  const navigate = useNavigate()
  const cookies = new Cookies()


    useEffect(() => {
    
        if(!session) return navigate('/')
      
    },[session])
   
    
    function validate(value) {
        let error
        if (!value) {
          error = 'This field is required'
        } 
        return error
      }
      

  return (
    
  
      <VStack height="100vh"  justifySelf="center" alignSelf="center" width="100%" alignItems="center" justifyContent="center" spacing={12}>

        <Logo/>

  
      <VStack spacing={10} width="100%" maxWidth="450px" padding="40px" border="1px" borderRadius="10px" borderColor="gray.300">
        <Formik
        initialValues={{ title: '', date: '', name: '', hour: '', description: '' }}
            onSubmit={(values, actions) => {
            
                cookies.set(`${values.name}`, values)
               
                navigate('/profile')
            }}>

            {(props) => (
            <Form>
                <Field name='title' validate={validate}>
                    {({ field, form }) => (
      <FormControl isInvalid={form.errors.title && form.touched.title}>
        <FormLabel htmlFor='title' textAlign="left" fontWeight="bold" color="blue.700">Title</FormLabel>
        <Input {...field} id='title' backgroundColor="gray.300" placeholder='type title' />
        <FormErrorMessage>{form.errors.title}</FormErrorMessage>
      </FormControl>
    )}
  </Field>

    
  <Field name='date' validate={validate}>
    {({ field, form }) => (
      <FormControl isInvalid={form.errors.date && form.touched.date}>
        <FormLabel htmlFor='date' textAlign="left" fontWeight="bold" color="blue.700">Date</FormLabel>
        <Input {...field} id='date' type="date" backgroundColor="gray.300" placeholder='type date' />
        <FormErrorMessage>{form.errors.date}</FormErrorMessage>
      </FormControl>
    )}
  </Field>

  <Field name='hour' valiname={validate}>
    {({ field, form }) => (
      <FormControl isInvalid={form.errors.hour && form.touched.hour}>
        <FormLabel htmlFor='hour' textAlign="left" fontWeight="bold" color="blue.700">Hour</FormLabel>
        <Input {...field} id='hour' backgroundColor="gray.300" placeholder='type hour' />
        <FormErrorMessage>{form.errors.hour}</FormErrorMessage>
      </FormControl>
    )}
  </Field>

  <Field name='description' valiname={validate}>
    {({ field, form }) => (
      <FormControl isInvalid={form.errors.description && form.touched.description}>
        <FormLabel htmlFor='description' textAlign="left" fontWeight="bold" color="blue.700">Description</FormLabel>
        <Input {...field} as={Textarea} id='description' backgroundColor="gray.300" placeholder='type description' />
        <FormErrorMessage>{form.errors.description}</FormErrorMessage>
      </FormControl>
    )}
  </Field>

  <Field name='name' valiname={validate}>
    {({ field, form }) => (
      <FormControl isInvalid={form.errors.name && form.touched.name}>
        <FormLabel htmlFor='name' textAlign="left" fontWeight="bold" color="blue.700">Pet name</FormLabel>
        <Input {...field} id='name' backgroundColor="gray.300" placeholder='type name' />
        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
      </FormControl>
    )}
  </Field>

  

  <Button
    mt={4}
    colorScheme="blue"
    isLoading={props.isSubmitting}
  
    type='submit'
    
  >
    Send
  </Button>
</Form>
)}
        </Formik>
      </VStack>


    </VStack>
     


  )
}
