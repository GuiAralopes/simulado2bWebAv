'use client'

import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image
} from '@chakra-ui/react'


export default function Home() {
  return (
    
    <Container w='100%'>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '3xl', md: '3xl' }}
          lineHeight={'110%'}>
          Portal de Gerenciamento UVV Inova Week 2023
        </Heading>
        {/* Adicione o componente Image abaixo da Heading */}
        <Image
          src='/uvv-removebg-preview.png'
          alt='logo uvv'
          maxW='150px' // ajuste o tamanho conforme necessário
          mt={4} // ajuste a margem superior conforme necessário
        />
        <Text color={'gray.900'} maxW={'4x4'}>
        O maior evento universitário de inovação e empreendedorismo do ES!
        </Text>

        <Stack spacing={6} direction={'row'}>
          <Button as='a'
            href='https://github.com/GuiAralopes/simulado2bWebAv'
            rounded={'full'}
            px={6}
            color={'white'}
            colorScheme={'cyan'}
            _hover={{ bg: 'brand.100' }}>
            Repositório do projeto
          </Button>

        </Stack>

      </Stack>
    </Container>
  )
}
