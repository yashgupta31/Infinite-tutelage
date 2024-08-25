import { Box, Heading, Icon, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { colors } from '../utils/utils'
import { LuLayoutDashboard } from 'react-icons/lu'
import { TiSocialGithub } from 'react-icons/ti'
import { FaGithubAlt } from 'react-icons/fa'
import { HiOutlineCube } from 'react-icons/hi'
import { FiPieChart, FiUser } from 'react-icons/fi'
import { RiExchangeBoxLine, RiLogoutBoxLine } from 'react-icons/ri'
import { PiWallet } from 'react-icons/pi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { GoChevronLeft, GoChevronRight, GoHistory } from 'react-icons/go'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { LiaHeadphonesAltSolid } from 'react-icons/lia'

const MobileBar = () => {
  return (
    <Box bg={colors.primary} color={'white'} zIndex={999} w={'19rem'} h={'140vh'} position={'fixed'} left={0} top={0} display={'flex'} flexDirection={'column'} alignItems={'center'} pt={'5rem'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
            {/* {
                flag ? <Icon as={GoChevronLeft} onClick={() => setFlag(false)} color={'black'} fontSize={'1.9rem'} bg={'white'} borderRadius={'50%'} p={'0.3rem'} position={'absolute'} right={'-0.8rem'} top={'1.7rem'} cursor={'pointer'} /> :
                    <Icon as={GoChevronRight} onClick={() => setFlag(true)} color={'black'} fontSize={'1.9rem'} bg={'white'} borderRadius={'50%'} p={'0.3rem'} position={'absolute'} right={'-0.8rem'} top={'1.7rem'} cursor={'pointer'} />

            }
            {
                flag ? <Heading pt={'1.2rem'} h={'9rem'} w={'100%'} textAlign={'center'} lineHeight={'2rem'} color={colors.secondary}>Ditch <br /> <Heading ml={'3rem'}>Dollar</Heading></Heading> :
                    <Heading pt={'1.2rem'} h={'9rem'} w={'100%'} textAlign={'center'}></Heading>
            } */}



            {/* ----------top sidebar----------- */}
            <Box w={'100%'}  >
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={LuLayoutDashboard} mr={'1.1rem'} />
                    
                        <Text>Dashboard</Text>
                

                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={FaGithubAlt} mr={'1.1rem'} />

                    <Text >CRM</Text>
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={HiOutlineCube} mr={'1.1rem'} />
                    <Text >MAM</Text>
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={FiPieChart} mr={'1.1rem'} />

                    <Text >PAMM</Text>
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={RiExchangeBoxLine} mr={'1.1rem'} />

                    <Text>Trade</Text>
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={PiWallet} mr={'1.1rem'} />

                    <Text>Wallet</Text>
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={AiOutlineDollarCircle} mr={'1.1rem'} />

                    <Text>Accounts</Text>
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={GoHistory} mr={'1.1rem'} />

                    <Text>History</Text>
                </Box>
                {/* ----------- */}
            </Box>

            {/* ----------bottom sidebar----------- */}
            <Box w={'100%'} mt={'2.2rem'} position={'absolute'} bottom={0}>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={IoIosNotificationsOutline} mr={'1.1rem'} />
                    <Text >Notifications</Text>

                </Box>

                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={IoSettingsOutline} mr={'1.1rem'} />

                    <Text>Settings</Text>
                </Box>

                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={LiaHeadphonesAltSolid} mr={'1.1rem'} />

                    <Text>Help & Support</Text>
                </Box>

                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={RiLogoutBoxLine} mr={'1.1rem'} />
                    <Text>Logout</Text>

                </Box>

                {/* ----------- */}

                <Box h={'3.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} pb={'2.3rem'} pt={'2.5rem'} borderTop={'1px solid lightgrey'} cursor={'pointer'}>
                    <Icon as={FiUser} fontSize={'2.4rem'} bg={'rgba(255, 255, 255, 0.5)'} borderRadius={'50%'} p={'0.7rem'} />
                    
                    
                        <Box w={'10.5rem'} display={'flex'} flexDirection={'column'} overflow={'hidden'}
                        whiteSpace={'nowrap'}
                        textOverflow={'ellipsis'}>
                            <Text fontSize={'md'} ml={'1.1rem'} fontWeight={500} >Yash Gupta</Text>
                            <Text w={'10rem'} fontSize={'sm'} ml={'1.1rem'} overflow={'hidden'}
                                whiteSpace={'nowrap'}
                                textOverflow={'ellipsis'} >yash01.gupta@gmail.com</Text>
                        </Box>



                </Box>
                {/* -------------------- */}

            </Box>



        </Box>
  )
}

export default MobileBar