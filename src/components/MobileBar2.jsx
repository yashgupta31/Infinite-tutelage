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
import MyLogo from './MyLogo'
import { RxCross2 } from 'react-icons/rx'

const MobileBar2 = ({setIsOpen}) => {
    const [flag, setFlag] = useState(true)
    const [clickedLink, setClickedLink]= useState('dashboard')
  return (
    <Box bg={'rgba(0, 0, 0, 0.7)'} h={'100%'} w={'100%'} position={'absolute'}  zIndex={1001}>
    <Box bg={colors.primary} color={'white'} w={'18rem'} h={'147vh'}  zIndex={1001} position={'relative'}  display={'flex'} flexDirection={'column'} alignItems={'center'}>
            {/* {
                flag ? <Icon as={GoChevronLeft} boxShadow={'md'} border={'1px solid lightgrey'} onClick={() => setFlag(false)} color={'black'} fontSize={'1.9rem'} bg={'white'} borderRadius={'50%'} p={'0.3rem'} position={'absolute'} right={'-0.8rem'} top={'1.7rem'} cursor={'pointer'} /> :
                    <Icon as={GoChevronRight} boxShadow={'md'} border={'1px solid lightgrey'} onClick={() => setFlag(true)} color={'black'} fontSize={'1.9rem'} bg={'white'} borderRadius={'50%'} p={'0.3rem'} position={'absolute'} right={'-0.8rem'} top={'1.7rem'} cursor={'pointer'} />

            } */}
            {/* {
                flag ? <Heading pt={'1.2rem'} h={'9rem'} w={'100%'} textAlign={'center'} lineHeight={'2rem'} color={colors.secondary}  cursor={'pointer'}>Ditch <br /> <Heading  cursor={'pointer'} ml={'3rem'}>Dollar</Heading></Heading> :
                    <Heading pt={'1.2rem'} h={'9rem'} w={'100%'} textAlign={'center'}></Heading>
            } */}
           {/* ---------- close sidebar button----------- */}
            <Icon as={RxCross2} onClick={()=> setIsOpen(false)} position={'absolute'} right={'1rem'} top={'1rem'} fontSize={'1.4rem'} cursor={'pointer'}/>
           <Box pt={'2rem'} pb={'2rem'} w={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <MyLogo wid={133} hei={58} />
                </Box>
            


            {/* ----------top sidebar----------- */}
            <Box w={'100%'}  >
                {/* ----------- */}
                <Box onClick={()=> setClickedLink('dashboard')} color={clickedLink == 'dashboard' && colors.secondary} bg={clickedLink== 'dashboard' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'dashboard' && '3px solid #BEFB7A'} h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'} >
                    <Icon as={LuLayoutDashboard} mr={'1.1rem'} />
                    <Text >Dashboard</Text>

                </Box>
                {/* ----------- */}
                <Box onClick={()=> setClickedLink('crm')} color={clickedLink == 'crm' && colors.secondary} bg={clickedLink== 'crm' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'crm' && '3px solid #BEFB7A'} h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={FaGithubAlt} mr={'1.1rem'} />

                    <Text >CRM</Text>
                </Box>
                {/* ----------- */}
                <Box onClick={()=> setClickedLink('mam')} color={clickedLink == 'mam' && colors.secondary} bg={clickedLink== 'mam' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'mam' && '3px solid #BEFB7A'}  h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={HiOutlineCube} mr={'1.1rem'} />
                    <Text >MAM</Text>
                </Box>
                {/* ----------- */}
                <Box onClick={()=> setClickedLink('pamm')} color={clickedLink == 'pamm' && colors.secondary} bg={clickedLink== 'pamm' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'pamm' && '3px solid #BEFB7A'}  h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={FiPieChart} mr={'1.1rem'} />

                    <Text >PAMM</Text>
                </Box>
                {/* ----------- */}
                <Box onClick={()=> setClickedLink('trade')} color={clickedLink == 'trade' && colors.secondary} bg={clickedLink== 'trade' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'trade' && '3px solid #BEFB7A'}  h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={RiExchangeBoxLine} mr={'1.1rem'} />
                    <Text>Trade</Text>
                </Box>
                {/* ----------- */}
                <Box onClick={()=> setClickedLink('wallet')} color={clickedLink == 'wallet' && colors.secondary} bg={clickedLink== 'wallet' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'wallet' && '3px solid #BEFB7A'}  h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={PiWallet} mr={'1.1rem'} />
                    <Text>Wallet</Text>
                </Box>
                {/* ----------- */}
                <Box  onClick={()=> setClickedLink('accounts')} color={clickedLink == 'accounts' && colors.secondary} bg={clickedLink== 'accounts' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'accounts' && '3px solid #BEFB7A'}  h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={AiOutlineDollarCircle} mr={'1.1rem'} />
                    <Text>Accounts</Text>
                </Box>
                {/* ----------- */}
                <Box  onClick={()=> setClickedLink('history')} color={clickedLink == 'history' && colors.secondary} bg={clickedLink== 'history' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'history' && '3px solid #BEFB7A'}  h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={GoHistory} mr={'1.1rem'} />
                    <Text>History</Text>
                </Box>
                {/* ----------- */}
            </Box>

            {/* ----------bottom sidebar----------- */}
            <Box w={'100%'} mt={'2.2rem'} position={'absolute'} bottom={0}>
                {/* ----------- */}
                <Box  onClick={()=> setClickedLink('noti')} color={clickedLink == 'noti' && colors.secondary} bg={clickedLink== 'noti' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'noti' && '3px solid #BEFB7A'}  h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={IoIosNotificationsOutline} mr={'1.1rem'} />
                    <Text >Notifications</Text>


                </Box>

                {/* ----------- */}
                <Box  onClick={()=> setClickedLink('seti')} color={clickedLink == 'seti' && colors.secondary} bg={clickedLink== 'seti' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'seti' && '3px solid #BEFB7A'}  h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={IoSettingsOutline} mr={'1.1rem'} />

                    <Text>Settings</Text>
                </Box>

                {/* ----------- */}
                <Box  onClick={()=> setClickedLink('sup')} color={clickedLink == 'sup' && colors.secondary} bg={clickedLink== 'sup' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'sup' && '3px solid #BEFB7A'}  h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={LiaHeadphonesAltSolid} mr={'1.1rem'} />

                    <Text>Help & Support</Text>
                </Box>

                {/* ----------- */}
                <Box onClick={()=> setClickedLink('log')} color={clickedLink == 'log' && colors.secondary} bg={clickedLink== 'log' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'log' && '3px solid #BEFB7A'}  h={'2.5rem'} display={'flex'} alignItems={'center'} pl={'1.6rem'} mb={'0.8rem'} cursor={'pointer'}>
                    <Icon as={RiLogoutBoxLine} mr={'1.1rem'} />

                    <Text>Logout</Text>
                </Box>

                {/* ----------- */}

                <Box  onClick={()=> setClickedLink('user')} color={clickedLink == 'user' && colors.secondary} bg={clickedLink== 'user' && 'linear-gradient(to left, rgba(190, 251, 122, 0.3), transparent)'} borderRight={clickedLink== 'user' && '3px solid #BEFB7A'}  h={'3.5rem'} cursor={'pointer'} display={'flex'} alignItems={'center'} pl={flag ? '1.6rem' : '0.8rem'} pb={'2.3rem'} pt={'2.5rem'} borderTop={'1px solid lightgrey'}>
                    <Icon as={FiUser} fontSize={'2.4rem'} bg={'rgba(255, 255, 255, 0.5)'} borderRadius={'50%'} p={'0.7rem'} />
                    <Box w={'10.5rem'}   display={'flex'} flexDirection={'column'} >
                            <Text fontSize={'md'} ml={'1.1rem'} fontWeight={500} >Yash Gupta</Text>
                            <Text w={'12rem'} fontSize={'sm'} ml={'1.1rem'} overflow={'hidden'}
                                whiteSpace={'nowrap'}
                                textOverflow={'ellipsis'} >yash01.gupta@gmail.com</Text>
                        </Box>

                </Box>
                {/* -------------------- */}

            </Box>



        </Box>
        </Box>
  )
}

export default MobileBar2