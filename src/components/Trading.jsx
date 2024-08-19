import { Box, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Trading = () => {
    return (
        <Box color={'#344054'} bg={'#FCFCFD'} border={'1px solid lightgrey'} p={'0.8rem'} h={'9rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} mb={'1.3rem'} position={'relative'} borderRadius={'12px'}>
            
            <Box  color={'#344054'}>
                Master Account
            </Box>
            <Box display={'flex'} alignItems={'center'}>
                <Text bg={'#F2F4F7'} borderRadius={'17px'} p={'0px 9px'} color={'#344054'}>CTrader</Text> <Text ml={'0.5rem'} color={'#667085'}>#272738</Text>
            </Box>

            <Box display={'flex'} alignItems={'end'} >
                <Heading>0.00</Heading> <Text fontSize={'lg'} ml={'0.5rem'}>USD</Text>
            </Box>

            <Icon as={GoArrowUpRight} position={'absolute'} bottom={'1rem'} right={'1rem'} fontSize={'1.5rem'} />
        </Box>
    )
}

export default Trading