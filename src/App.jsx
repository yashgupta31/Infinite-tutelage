import { Box, Heading, Icon, useMediaQuery } from '@chakra-ui/react'
import './App.css'
import SideBar from './components/sidebar'
import Dashboard from './components/Dashboard'
import { colors } from './utils/utils';
import { IoMenuOutline } from 'react-icons/io5';
import { useState } from 'react';
import MobileBar from './components/MobileBar';

function App() {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const [isOpen, setIsOpen]= useState(false)

  return (
    <Box h={'147vh'} bg={'pink'} display={'flex'}>
      {
        isLargerThan500 ? <SideBar /> :
        <Box  position={'fixed'} zIndex={999} top={'0'} w={'100%'} bg={'white'} h={'3.5rem'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'0rem 1rem'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
          <Heading fontSize={'1rem'} textAlign={'center'} lineHeight={'1rem'} color={colors.secondary}>Ditch <br /> <Heading fontSize={'1rem'} ml={'0.9rem'}>Dollar</Heading></Heading>
        <Icon as={IoMenuOutline} fontSize={'2rem'} onClick={()=> setIsOpen(!isOpen)} zIndex={999}/>
        </Box>
      }
      {
        isOpen && <MobileBar />
      }
     
     <Dashboard />


    </Box>
  )
}

export default App
