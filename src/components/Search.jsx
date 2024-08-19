import { Box, Icon, Input, InputGroup, InputLeftElement, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { PiBell } from 'react-icons/pi'
// import React from 'react'

const Search = () => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  return (
    <Box bg={'#FCFCFD'} h={'5rem'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'0rem 1.6rem'} borderBottom={'0.5px solid lightgrey'}>
        <Text fontSize={'lg'} fontWeight={600}>Dashboard</Text>
        <Box h={'2.2rem'} w={isLargerThan1000?'28%': '50%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
      <InputGroup  w={'17rem'} h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderRadius={'10px'}>
    <InputLeftElement pointerEvents='none' h={'100%'} >
      <Icon as={IoIosSearch} color='#667085' fontSize={'1.2rem'} />
    </InputLeftElement>
    <Input type='tel' placeholder='Search...' fontSize={'sm'} size={'sm'} w={'100%'} h={'100%'} />
  </InputGroup>
  <Icon as={PiBell} color={'#667085'} h={'100%'} fontSize={'1.2rem'}/>
  </Box>
 
      </Box>
  )
}

export default Search