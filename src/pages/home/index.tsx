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
          Programação Avançada para Web Simulado 2º Bimestre
        </Heading>
        {/* Adicione o componente Image abaixo da Heading */}
        <Image
          src='/nextlogo.png'
          alt='Descrição da imagem'
          maxW='150px' // ajuste o tamanho conforme necessário
          mt={4} // ajuste a margem superior conforme necessário
        />
        <Text color={'gray.500'} maxW={'3xl'}>
          O Projeto foi desenvolvido com Next.js, Chakra UI e Typescript.
        </Text>

        <Stack spacing={6} direction={'row'}>
          <Button as='a'
            href='https://github.com/GuiAralopes/simulado2bWebAv'
            rounded={'full'}
            px={6}
            colorScheme={'cyan'}
            _hover={{ bg: 'brand.100' }}>
            Repositório GitHub
          </Button>

        </Stack>

      </Stack>
    </Container>
  )
}
