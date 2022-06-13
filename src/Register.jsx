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

export default function Register() {

  const [value, setValue] = useState('')
    const navigate = useNavigate()
    
    function validate(value) {
        let error
        if (!value) {
          error = 'This field is required'
        } 
        return error
      }

  return (

      <VStack width="100%" height="100vh" alignItems="center" justifyContent="center" spacing={5} padding="15px">

        <Image src={logo} width="250px"/>
      
          
        <VStack spacing={10} overflowX="scroll" padding="15px">
        <Formik
      
      initialValues={{ cpf: '', 
      password: '', 
      nome: '', 
      email: '', 
      phone: '', 
      sexo: '',
      nascimento: ''
    }}
      onSubmit={(values, actions) => {
        
        console.log(values)
      }}

    >
      {(props) => (
        <Form>

      <Field name='nome' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.nome && form.touched.nome}>
                <FormLabel marginTop="12px" htmlFor='nome' textAlign="center" fontWeight="bold" color="blue.700">Nome completo</FormLabel>
                <Input {...field} id='nome' backgroundColor="gray.300" placeholder='Digite seu nome' />
                <FormErrorMessage>{form.errors.nome}</FormErrorMessage>
              </FormControl>
            )}
        </Field>




          <Field name='cpf' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.cpf && form.touched.cpf}>
                <FormLabel marginTop="12px" htmlFor='cpf' textAlign="center" fontWeight="bold" color="blue.700">CPF</FormLabel>
                <Input {...field} id='cpf' backgroundColor="gray.300" placeholder='Digite seu cpf' />
                <FormErrorMessage>{form.errors.cpf}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='email' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel marginTop="12px" htmlFor='email' textAlign="center" fontWeight="bold" color="blue.700">E-mail</FormLabel>
                <Input {...field} id='email' type="email" backgroundColor="gray.300" placeholder='Digite seu email' />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
        </Field>

        <Field name='phone' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                <FormLabel marginTop="12px" htmlFor='phone' textAlign="center" fontWeight="bold" color="blue.700">Telefone</FormLabel>
                <Input {...field} id='phone' type="phone" backgroundColor="gray.300" placeholder='Digite seu phone' />
                <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
              </FormControl>
            )}
        </Field>

            
          <Field name='password' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                <FormLabel marginTop="12px" htmlFor='password' textAlign="center" fontWeight="bold"  color="blue.700">Senha</FormLabel>
                <Input {...field} id='password' type="password" backgroundColor="gray.300" placeholder='Digite sua senha' />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='sexo' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.sexo && form.touched.sexo} border="1px" borderRadius="5px" borderColor="blue.700" marginTop="12px" padding="5px">
                <FormLabel htmlFor='sexo' textAlign="center" fontWeight="bold"  color="blue.700">Sexo</FormLabel>
                
                <RadioGroup onChange={setValue} id="sexo" value={value}>
                  <Stack marginTop="20px" direction='row'>
                    <Radio value='Masculino' >Masculino</Radio>
                    <Radio value='Feminino'>Feminino</Radio>
                  </Stack>
                </RadioGroup>

                <FormErrorMessage>{form.errors.sexo}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='nascimento' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.nascimento && form.touched.nascimento}>
                <FormLabel marginTop="12px" htmlFor='nascimento' textAlign="center" fontWeight="bold"  color="blue.700">Data de Nascimento</FormLabel>
                <Input {...field} id='nascimento' type="date"  backgroundColor="gray.300" placeholder='Data de nascimento' />
                <FormErrorMessage>{form.errors.nascimento}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='escolaridade' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.escolaridade && form.touched.escolaridade}>
                <FormLabel marginTop="12px" htmlFor='escolaridade' textAlign="center" fontWeight="bold"  color="blue.700">Escolaridade</FormLabel>
                <Input {...field} id='escolaridade' backgroundColor="gray.300" placeholder='Data de escolaridade' />
                <FormErrorMessage>{form.errors.escolaridade}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='altura' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.altura && form.touched.altura}>
                <FormLabel marginTop="12px" htmlFor='altura' textAlign="center" fontWeight="bold"  color="blue.700">Altura(cm)</FormLabel>
                <Input {...field} id='altura' type="number"  backgroundColor="gray.300" placeholder='Data de altura' />
                <FormErrorMessage>{form.errors.altura}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='peso' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.peso && form.touched.peso}>
                <FormLabel marginTop="12px" htmlFor='peso' textAlign="center" fontWeight="bold"  color="blue.700">Peso(Kg)</FormLabel>
                <Input {...field} id='peso' type="number"  backgroundColor="gray.300" placeholder='Data de peso' />
                <FormErrorMessage>{form.errors.peso}</FormErrorMessage>
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
            Registrar
          </Button>
        </Form>
      )}
      </Formik>


      <VStack alignSelf="flex-start" alignItems="flex-start" justifyContent="flex-start">
        <Link to="/">
          <Text color="blue.500">&lsaquo; Voltar</Text> 
        </Link>
      </VStack>
        </VStack>
      
     
      </VStack>

  )
}
