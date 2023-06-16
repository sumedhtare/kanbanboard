import { Box, Flex, Text, Input } from '@chakra-ui/react';
import Image from 'next/image';

import SearchIcon from '../../assets/icons/search.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';
import MessageIcon from '../../assets/icons/message-unknown.svg';
import AlertIcon from '../../assets/icons/notification.svg';
import User1 from '../../assets/users/user1.svg';
import DownIcon from '../../assets/icons/down_dark.svg';

const Header = () => {
  return (
    <Flex
      alignItems="center"
      h="88px"
      borderBottom="1px"
      borderColor="brand.divider"
      px="48.5px"
      w="100%"
      justifyContent="space-between"
    >
      <Flex alignItems="center" bg="brand.container" h="44px" w="417px" borderRadius="6px">
        <Box cursor="pointer" ml="18.63px">
          <Image alt="search" src={SearchIcon} />
        </Box>
        <Input
          ml="18.75px"
          placeholder="Search for anything..."
          variant="unstyled"
          fontSize="14px"
          fontWeight="400"
        />
      </Flex>

      <Flex alignItems="center" gap="50px">
        <Flex gap="29px" alignItems="center">
          <Image src={CalendarIcon} alt="calendar" />
          <Image src={MessageIcon} alt="message" />
          <Image src={AlertIcon} alt="alert" />
        </Flex>

        <Flex alignItems="center">
          <Box textAlign="right">
            <Text fontSize="16px" fontWeight="400" color="brand.text">
              Anima Agrawal
            </Text>
            <Text fontSize="14px" fontWeight="400" color="brand.textSec">
              U.P, India
            </Text>
          </Box>
          <Box ml="18px">
            <Image alt="user1" src={User1} />
          </Box>
          <Box ml="10px" cursor="pointer">
            <Image alt="down" src={DownIcon} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
