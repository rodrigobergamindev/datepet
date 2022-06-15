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
    Heading
  } from '@chakra-ui/react';

import {Formik, Field, Form} from 'formik'
import { Link, useNavigate } from "react-router-dom";
import background from './images/background.jpg'
import { setSessionCookie, getSessionCookie } from './contexts/useSession';
import Logo from './Logo';

export default function SignIn() {

  const [value, setValue] = useState('Paciente')
  const [session, setSession] = useState(getSessionCookie())
  const navigate = useNavigate()

    useEffect(() => {
    
        if(session) return navigate('/profile')
      
    },[session])
   
    
    function validate(value) {
        let error
        if (!value) {
          error = 'This field is required'
        } 
        return error
      }
      

  return (
    <Grid templateColumns='repeat(2, 1fr)'  width="100%" height="100vh" justifyItems="center">

    
      <Image src={background} height="100%" objectFit="cover" width="100%"/>
  
      <VStack  borderRadius="5px" borderColor="gray.300" alignSelf="center" alignItems="center" justifyContent="center" spacing={12}>

        <Logo/>

  
      <VStack  spacing={10} border="1px" borderColor="gray.300" padding="20px">
        <Formik
initialValues={{ username: '', password: '' }}
onSubmit={(values, actions) => {

const {username, password} = values

actions.setSubmitting(false)
if(username === 'admin' && password === 'admin'){

    setSessionCookie(username)
    return setTimeout(() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      window.location.reload()
      navigate('/profile')
      
    } , 1000)


}else {
  alert('invalid credentials')
}

}}

>
{(props) => (
<Form>
  <Field name='username' validate={validate}>
    {({ field, form }) => (
      <FormControl isInvalid={form.errors.username && form.touched.username}>
        <FormLabel htmlFor='username' textAlign="center" fontWeight="bold" color="blue.700">Username</FormLabel>
        <Input {...field} id='username' backgroundColor="gray.300" placeholder='type your username' />
        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
      </FormControl>
    )}
  </Field>

    
  <Field name='password' validate={validate}>
    {({ field, form }) => (
      <FormControl isInvalid={form.errors.password && form.touched.password}>
        <FormLabel marginTop="12px" htmlFor='password' textAlign="center" fontWeight="bold"  color="blue.700">Password</FormLabel>
        <Input {...field} id='password' type="password" backgroundColor="gray.300" placeholder='type your password' />
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
      </VStack>
      </VStack>


    </VStack>
     
      </Grid>

  )
}
