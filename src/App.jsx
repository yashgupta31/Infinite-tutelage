import { Box, Heading, Icon, Input, InputGroup, InputLeftElement, useMediaQuery } from '@chakra-ui/react'
import './App.css'
import SideBar from './components/sidebar'
import Dashboard from './components/Dashboard'
import { colors } from './utils/utils';
import { IoMenuOutline } from 'react-icons/io5';
import { useState } from 'react';
import MobileBar from './components/MobileBar';
import { IoIosSearch } from 'react-icons/io';
import { PiBell } from 'react-icons/pi';
import MyLogo from './components/MyLogo';
import MobileBar2 from './components/MobileBar2';

function App() {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isOpen, setIsOpen]= useState(false)

  return (
    <Box h={'145vh'} bg={'pink'} display={'flex'}  >
      {
        isLargerThan800 ? <SideBar /> :
        <Box  position={'fixed'} zIndex={999} top={'0'} w={'100%'} bg={colors.primary} h={'3.5rem'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'0rem 1rem'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
          {/* <Heading fontSize={'1rem'} textAlign={'center'} lineHeight={'1rem'} color={colors.secondary}>Ditch <br /> <Heading fontSize={'1rem'} ml={'0.9rem'}>Dollar</Heading></Heading> */}
        <MyLogo wid={'4rem'} hei={'3rem'} />
          <Box h={'2rem'} w={isLargerThan1000?'28%': '50%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
      <InputGroup  w={'17rem'} h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderRadius={'10px'}>
    <InputLeftElement pointerEvents='none' h={'100%'} >
      <Icon as={IoIosSearch} color='lightgrey' fontSize={'1.2rem'} />
    </InputLeftElement>
    <Input type='tel' placeholder='Search...' fontSize={'sm'} size={'sm'} w={'100%'} h={'100%'} color={'lightgrey'} _placeholder={{ color: 'lightgrey' }} />
  </InputGroup>
  <Icon as={PiBell} color='lightgrey' ml={'1rem'} h={'100%'} fontSize={'1.2rem'}/>
  </Box>
        <Icon as={IoMenuOutline} color={'#282828'} cursor={'pointer'} fontSize={'2rem'} onClick={()=> setIsOpen(!isOpen)} zIndex={999}/>
        </Box>
      }
      {
        (isOpen && !isLargerThan800 )&& <MobileBar2 setIsOpen={setIsOpen} />
      }
     
     <Dashboard />


    </Box>
  )
}

export default App
