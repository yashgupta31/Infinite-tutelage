import { Box, Button, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../utils/utils'
import { TfiDownload } from 'react-icons/tfi'
import { RiDownloadLine } from 'react-icons/ri'
import Chart from './Chart'

const Overview = () => {
  return (
    <Box h={'30.5rem'} mt={'1.8rem'} p={'0.7rem 0.9rem'} borderRadius={'9px'} border={'1px solid lightgrey'}>
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
      <Text fontWeight={500}>Overview</Text>
      <Button color={colors.primary} colorScheme='teal' variant='ghost'>
        <Icon as={RiDownloadLine} mr={'0.6rem'} fontSize={'1.3rem'} />
        Download Report
      </Button>
    </Box>
    <Box mt={'1.5rem'} mb={'1rem'}>
    <Button color={'lightgrey'} colorScheme='teal' variant='ghost' fontSize={'1.1rem'} size={'sm'}>Monthly</Button>
    <Button color={'#282828'} bg={'#F1EBF9'} fontSize={'1.1rem'} size={'sm'}>Yearly</Button>
</Box>
{/* ---------------Bar Diagram--------------- */}
<Chart />
  </Box>
  )
}

export default Overview