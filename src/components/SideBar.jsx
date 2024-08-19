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

const SideBar = () => {
    const [flag, setFlag] = useState(true)
    return (
        <Box bg={colors.primary} color={'white'} w={flag ? '19rem' : 'auto'} h={'147vh'} position={'relative'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            {
                flag ? <Icon as={GoChevronLeft} boxShadow={'md'} border={'1px solid lightgrey'} onClick={() => setFlag(false)} color={'black'} fontSize={'1.9rem'} bg={'white'} borderRadius={'50%'} p={'0.3rem'} position={'absolute'} right={'-0.8rem'} top={'1.7rem'} cursor={'pointer'} /> :
                    <Icon as={GoChevronRight} boxShadow={'md'} border={'1px solid lightgrey'} onClick={() => setFlag(true)} color={'black'} fontSize={'1.9rem'} bg={'white'} borderRadius={'50%'} p={'0.3rem'} position={'absolute'} right={'-0.8rem'} top={'1.7rem'} cursor={'pointer'} />

            }
            {
                flag ? <Heading pt={'1.2rem'} h={'9rem'} w={'100%'} textAlign={'center'} lineHeight={'2rem'} color={colors.secondary}  cursor={'pointer'}>Ditch <br /> <Heading  cursor={'pointer'} ml={'3rem'}>Dollar</Heading></Heading> :
                    <Heading pt={'1.2rem'} h={'9rem'} w={'100%'} textAlign={'center'}></Heading>
            }



            {/* ----------top sidebar----------- */}
            <Box w={'100%'}  >
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={LuLayoutDashboard} mr={'1.1rem'} />
                    {
                        flag && <Text>Dashboard</Text>
                    }

                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={FaGithubAlt} mr={'1.1rem'} />

                    {
                        flag && <Text >CRM</Text>
                    }
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={HiOutlineCube} mr={'1.1rem'} />
                    {
                        flag && <Text >MAM</Text>
                    }
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={FiPieChart} mr={'1.1rem'} />

                    {
                        flag && <Text >PAMM</Text>
                    }
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={RiExchangeBoxLine} mr={'1.1rem'} />

                    {
                        flag && <Text>Trade</Text>
                    }
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={PiWallet} mr={'1.1rem'} />

                    {
                        flag && <Text>Wallet</Text>
                    }
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={AiOutlineDollarCircle} mr={'1.1rem'} />

                    {
                        flag && <Text>Accounts</Text>
                    }
                </Box>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={GoHistory} mr={'1.1rem'} />

                    {
                        flag && <Text>History</Text>
                    }
                </Box>
                {/* ----------- */}
            </Box>

            {/* ----------bottom sidebar----------- */}
            <Box w={'100%'} mt={'2.2rem'} position={'absolute'} bottom={0}>
                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={IoIosNotificationsOutline} mr={'1.1rem'} />
                    {
                        flag && <Text >Notifications</Text>
                    }


                </Box>

                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={IoSettingsOutline} mr={'1.1rem'} />

                    {
                        flag && <Text>Settings</Text>
                    }
                </Box>

                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={LiaHeadphonesAltSolid} mr={'1.1rem'} />

                    {
                        flag && <Text>Help & Support</Text>
                    }
                </Box>

                {/* ----------- */}
                <Box h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={RiLogoutBoxLine} mr={'1.1rem'} />

                    {
                        flag && <Text>Logout</Text>
                    }

                </Box>

                {/* ----------- */}

                <Box h={'3.5rem'} cursor={'pointer'} display={'flex'} alignItems={'center'} pl={flag ? '1.6rem' : '0.8rem'} pb={'2.3rem'} pt={'2.5rem'} borderTop={'1px solid lightgrey'}>
                    <Icon as={FiUser} fontSize={'2.4rem'} bg={'rgba(255, 255, 255, 0.5)'} borderRadius={'50%'} p={'0.7rem'} />
                    {
                        flag &&
                        <Box w={'10.5rem'}   display={'flex'} flexDirection={'column'} overflow={'hidden'}
                        whiteSpace={'nowrap'}
                        textOverflow={'ellipsis'}>
                            <Text fontSize={'md'} ml={'1.1rem'} fontWeight={500} >Yash Gupta</Text>
                            <Text w={'10rem'} fontSize={'sm'} ml={'1.1rem'} overflow={'hidden'}
                                whiteSpace={'nowrap'}
                                textOverflow={'ellipsis'} >yash01.gupta@gmail.com</Text>
                        </Box>
                    }



                </Box>
                {/* -------------------- */}

            </Box>



        </Box>
    )
}

export default SideBar


