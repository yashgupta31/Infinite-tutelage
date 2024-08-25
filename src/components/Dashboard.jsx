import { Box, Button, Icon, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
// import { CiBellOn } from 'react-icons/ci'
// import { GoBell } from 'react-icons/go'
// import { IoIosSearch } from 'react-icons/io'
// import { PiBell } from 'react-icons/pi'
import Search from './Search'

import QuickLinks from './QuickLinks'
import Overview from './Overview'
import Trading from './Trading'
import OpenTrade from './OpenTrade'


const Dashboard = () => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");


  return (
    <Box bg={'white'} display={'flex'} flexDirection={'column'} w={'100%'} h={'100%'} overflowX={'scroll'} >
      {/* -------------Top-------------------------- */}
      {
        isLargerThan800 && <Search />
      }
      
      {/* ----------bottom-------------------- */}
      <Box bg={'white'} display={'flex'} flexDirection={isLargerThan1000? 'row': 'column'} alignItems={'center'} justifyContent={'space-evenly'} pt={'1.7rem'}>
        <Box w={isLargerThan1000?'68%': '98%'} mb={'2rem'}  mt={!isLargerThan800 && '3rem'}>
          <QuickLinks />
          <Overview />
        
        </Box>

        {/* ---------------Right-------------------- */}
        {/* -------Top------- */}
        <Box w={isLargerThan1000?'27%': '98%'} h={'100%'}>
          <Box p={'1rem'} h={'23.5rem'} pb={'0px'}  borderRadius={'10px'} border={'1px solid lightgrey'}>
        <Text mb={'0.9rem'}>Trading Accounts</Text>
          <Trading />
          <Trading />
          </Box>

          {/* --------Bottom------- */}
          <Box mt={'1.7rem'} p={'1rem'} borderRadius={'10px'} border={'1px solid lightgrey'}>
            <Text mb={'0.8rem'}>Open Trades</Text>
            <OpenTrade clr={'#EBFFEE'} clr2={'#14AE5C'} name={'GBPUSD'} name2={'Long'} profit={'+56.00'} />
            <OpenTrade clr={'#EBFFEE'} clr2={'#EC221F'} name={'GBPUSD'} name2={'Long'} profit={'-0.09'} />
            <OpenTrade clr={'#FEE9E7'} clr2={'#EC221F'} name={'GBPUSD'} name2={'Short'} profit={'-1.09'} />
          
          </Box>



        </Box>

        

      </Box>

    </Box>
  )
}

export default Dashboard