import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const OpenTrade = ({clr, clr2, name, name2, profit}) => {

  return (
    <Box p={'0.8rem'} bg={'#FCFCFD'} position={'relative'} mb={'1.2rem'} border={'1px solid lightgrey'} borderRadius={'9px'}>
    <Box display={'flex'} alignItems={'center'}>
        <Text>{name}</Text> <Text ml={'0.7rem'} bg={clr} borderRadius={'10px'} p={'0px 5px'} >{name2}</Text>
    </Box>

    <Box display={'flex'} alignItems={'end'}>
        <Text fontSize={'lg'} fontWeight={500} color={clr2}>{profit}</Text><Text ml={'5px'}>USD</Text>
    </Box>

    <Text position={'absolute'} right={'0.7rem'} top={'0.7rem'}>0.12</Text>
    </Box>
  )
}

export default OpenTrade