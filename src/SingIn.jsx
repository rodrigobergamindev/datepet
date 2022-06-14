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
    Text
  } from '@chakra-ui/react';

import {Formik, Field, Form} from 'formik'
import { Link, useNavigate } from "react-router-dom";
import logo from './images/logo.png'
import { setSessionCookie, getSessionCookie } from './contexts/useSession';
import Logo from './Logo';
import axios from 'axios';


export default function SignIn() {

  const [value, setValue] = useState('Paciente')
  const [session, setSession] = useState(getSessionCookie())
  const navigate = useNavigate()
   
    
    function validate(value) {
        let error
        if (!value) {
          error = 'This field is required'
        } 
        return error
      }
      

  return (

      <VStack width="100%" height="100vh" alignItems="center" justifyContent="center" spacing={12}>

        <Logo/>
      
          
        <VStack spacing={10}>
        <Formik
      initialValues={{ username: '', password: ''}}
      onSubmit={(values, actions) => {
        
        const {username, password} = values

        
       
        
      }}

    >
      {(props) => (
        <Form>
          <Field name='username' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.username && form.touched.username}>
                <FormLabel htmlFor='username' textAlign="center" fontWeight="bold" color="blue.700">Username</FormLabel>
                <Input {...field} id='username' backgroundColor="gray.300" placeholder='@myusername...' />
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

            
          <Field name='password' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                <FormLabel marginTop="12px" htmlFor='password' textAlign="center" fontWeight="bold"  color="blue.700">Password</FormLabel>
                <Input {...field} id='password' type="password" backgroundColor="gray.300" placeholder='password' />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>


          <Button
            mt={4}
            colorScheme="blue"
            isLoading={props.isSubmitting}
          
            type='submit'
            width="100%"
          >
            Entrar
          </Button>
        </Form>
      )}
      </Formik>


      <VStack alignSelf="flex-start" alignItems="flex-start" justifyContent="flex-start">
        <Link to="/register">
          <Text color="blue.500">+ Criar conta</Text> 
        </Link>

        <Link to="/forgot">
          <Text color="blue.500">Esqueci a senha</Text> 
        </Link>
      </VStack>
        </VStack>
      
     
      </VStack>

  )
}
