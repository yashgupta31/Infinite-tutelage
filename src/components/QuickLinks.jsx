import React from 'react'
import { Box, Center, Icon, Text, useMediaQuery } from '@chakra-ui/react'
import { GoArrowDownLeft, GoArrowUpRight, GoGraph } from 'react-icons/go'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuUserCheck } from 'react-icons/lu'
import { MdOutlineAnalytics, MdStarPurple500 } from 'react-icons/md'
import { BsGraphUp } from 'react-icons/bs'
import { BiTransfer } from 'react-icons/bi'
import { LiaHistorySolid } from 'react-icons/lia'
import { HiOutlineUser } from 'react-icons/hi'
import { RiExchange2Line } from 'react-icons/ri'

const QuickLinks = () => {
  const [isLargerThan300] = useMediaQuery("(min-width: 300px)");
  const [isLargerThan540] = useMediaQuery("(min-width: 540px)");
  const [isLargerThan930]= useMediaQuery("(min-width: 930px)")
  const [isLargerThan1312] = useMediaQuery("(min-width: 1312px)");
  const [isBetween1220And1312] = useMediaQuery("(min-width: 1220px) and (max-width: 1312px)");
  const [isBetween1010And1110] = useMediaQuery("(min-width: 1010px) and (max-width: 1110px)");
  const [isBetween1350And1490] = useMediaQuery("(min-width: 1350px) and (max-width: 1490px)");

  // let gapValue= 
  // isLargerThan1312? 1 : 
  // isBetween1220And1312? 4 : 
  // isLargerThan930? (isBetween1010And1110? 4: isBetween1350And1490? 3 :  2) : isLargerThan540? 4: isLargerThan300? 8: 2;

  let gapValue = 
  isLargerThan1312 ? 1 : 
  isBetween1350And1490 ? 3 : 
  isBetween1220And1312 ? 4 : 
  isBetween1010And1110 ? 4 : 
  isLargerThan930 ? 2 : 
  isLargerThan540 ? 4 : 
  isLargerThan300 ? 8 : 
  2;



  return (
    <Box bg={'white'} width={'auto'} p={'1rem'} borderRadius={'9px'} border={'1px solid lightgrey'}>
    <Text mb={'1rem'}>Quick Links</Text>
    <Box  gap={gapValue} w={'auto'} display={'flex'} flexWrap={'wrap'} justifyContent={isLargerThan930? isBetween1010And1110? "center": "start": 'center'}>
      {/* each--- */}
      <Box bg={'#FCFCFD'}  w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Icon as={GoArrowDownLeft} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Deposite</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'} w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'}  fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Icon as={GoArrowUpRight} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Withdraw</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Icon as={IoSettingsOutline} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Settings</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Icon as={LuUserCheck} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Verification</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Icon as={MdStarPurple500} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Bonuses</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Icon as={GoGraph} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>MT5</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} >
        <Icon as={BiTransfer} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Transfer</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} >
        <Icon as={LiaHistorySolid} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>History</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} >
        <Icon as={HiOutlineUser} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Partner</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} >
        <Icon as={RiExchange2Line} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Exchange</Text>
      </Box>
      {/* ------------------- */}
      <Box bg={'#FCFCFD'}  w={'10%'} p={'0.5rem 3.5rem'} borderRadius={'5px'} fontWeight={500}  h={'4.9rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Icon as={MdOutlineAnalytics} fontSize={'1.4rem'} color={'#667085'} />
        <Text color={'#344054'}>Analytics</Text>
      </Box>
      {/* ------------------- */}
    </Box>
  </Box>
  )
}

export default QuickLinks