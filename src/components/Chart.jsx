import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../utils/utils'

const Chart = () => {
    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
    const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
    const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Box color={'#98A2B3'} h={isLargerThan600? '20.5rem': '60%'} display={'flex'}>
        <Box w={'7%'} fontSize={!isLargerThan1000 && '0.5rem'} fontWeight={!isLargerThan1000 && 600} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'} >
            <Text>$1500</Text>
            <Text>$1000</Text>
            <Text>$500</Text>
            <Text>$250</Text>
            <Text>0</Text>
        </Box>
{/* -------------------right------------------- */}
        
        <Box w={'93%'} display={'flex'} alignItems={'end'} justifyContent={'space-evenly'} >
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'} w={'100%'}h={'70%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'} >Jan</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box className='inner-bar' bg={'#AD8EDD'}  w={'100%'}h={'45%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Feb</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box  bg={'#AD8EDD'}  w={'100%'}h={'80%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Mar</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'}  w={'100%'}h={'20%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Aug</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'} w={'100%'}h={'90%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Apr</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'} w={'100%'}h={'60%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>May</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'} w={'100%'}h={'67%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Jun</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'} w={'100%'}h={'27%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Jul</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'} w={'100%'}h={'90%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Aug</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'} w={'100%'}h={'40%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Sept</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'} w={'100%'}h={'50%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Oct</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'} w={'100%'}h={'13%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Nov</Text>
            </Box>
            {/* ------each bar---------- */}
            <Box w={'4%'} h={'100%'} display={'flex'} alignItems={'end'} position={'relative'}>
                <Box bg={'#AD8EDD'} w={'100%'}h={'28%'} borderRadius={'5px 5px 0px 0px'}></Box>
                <Text position={'absolute'} bottom={'-1.8rem'} left={'-0.2rem'} transform={!isLargerThan1000 && 'rotate(90deg)'} fontSize={!isLargerThan500 && 'xs'}>Dec</Text>
            </Box>
            {/* --------------------------------- */}
        </Box>

    </Box>
  )
}

export default Chart