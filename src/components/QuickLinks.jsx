import React from 'react'
import { Box, Icon, Text, useMediaQuery } from '@chakra-ui/react'
import { GoArrowDownLeft, GoArrowUpRight } from 'react-icons/go'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuUserCheck } from 'react-icons/lu'
import { MdStarPurple500 } from 'react-icons/md'

const QuickLinks = () => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <Box bg={'white'} p={'1rem'} borderRadius={'9px'} border={'1px solid lightgrey'}>
    <Text mb={'1rem'}>Quick Links</Text>
    <Box display={'flex'} flexWrap={'wrap'} justifyContent={isLargerThan500?'start': 'center'} >
      {/* each--- */}
      <Box bg={'#FCFCFD'}  w={'7rem'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={GoArrowDownLeft} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Deposite</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'7rem'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={GoArrowUpRight} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Withdraw</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'7rem'}  fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={IoSettingsOutline} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Settings</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'7rem'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={LuUserCheck} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Verification</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'} w={'7rem'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={MdStarPurple500} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Bonuses</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'} w={'7rem'}  fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={GoArrowDownLeft} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Deposite</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'} w={'7rem'}  fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={GoArrowDownLeft} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Deposite</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'} w={'7rem'}  fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={GoArrowDownLeft} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Deposite</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'} w={'7rem'}  fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={GoArrowDownLeft} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Deposite</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'} w={'7rem'}  fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={GoArrowDownLeft} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Deposite</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'} w={'7rem'}  fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} mr={'0.4rem'} mt={'0.4rem'}>
        <Icon as={GoArrowDownLeft} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Deposite</Text>
      </Box>
      {/* ------------------- */}
    </Box>
  </Box>
  )
}

export default QuickLinks