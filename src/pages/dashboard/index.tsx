'use client'

import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import NavBar from '@/components/navbar'

export default function blogPostWithImage() {
  return (
    <>
      <NavBar />
      <Box minHeight="100vh" display="flex" flexDirection="column" pb={55}>
        <Center py={6} flex={1} flexDirection={'column'} >
          <Box
            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            border="20px solid"
            borderColor={useColorModeValue('gray.200', 'gray.700')} // Cor da borda
          >

            <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image
                src={
                  '/inovaweek-tratada.jpg'
                }
                fill
                alt="Example"
              />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Post 01
              </Heading>
              <Text color={'gray.500'}>
                A Universidade Vila Velha traz novamente uma edição do Inovaweek! 
                Realize a inscrição do seu grupo e aproveite o maior evento
                de inovação universitário!  
              </Text>
            </Stack>
          </Box>

          <Box
            maxW={'445px'}
            w={'full'}
            mt={10}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            border="20px solid"
            borderColor={useColorModeValue('gray.200', 'gray.700')} // Cor da borda
          >

            <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image
                src={
                  '/uvv.png'
                }
                fill
                alt="Example"
              />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Post 02
              </Heading>
              <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </Text>
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  )
}
