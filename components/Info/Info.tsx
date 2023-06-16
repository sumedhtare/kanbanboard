import { Flex, Box, Text, Center } from '@chakra-ui/react';
import Image from 'next/image';
import { dropDownData } from '../../constants/mockData';
import EditIcon from '../../assets/icons/edit.svg';
import LinkIcon from '../../assets/icons/link.svg';
import DownIcon from '../../assets/icons/down.svg';
import AddIcon from '../../assets/icons/add.svg';
import User2 from '../../assets/users/user2.svg';
import User3 from '../../assets/users/user3.svg';
import User4 from '../../assets/users/user4.svg';
import User5 from '../../assets/users/user5.svg';
import ShareIcon from '../../assets/icons/members.svg';
import MenuIcon from '../../assets/icons/menu1.svg';
import MenuIcon2 from '../../assets/icons/menu2.svg';

const users = [User2, User3, User4, User5];

const Info = () => {
  return (
    <Flex p="42px 48.5px" justifyContent="space-between" alignItems="center">
      <Box>
        <Flex alignItems="center" gap="17px">
          <Text fontWeight="600" lineHeight="55.67px" fontSize="46px" color="brand.text" mb="15px">
            Mobile App
          </Text>
          <Box cursor="pointer">
            <Image src={EditIcon} alt="edit" />
          </Box>
          <Box cursor="pointer">
            <Image src={LinkIcon} alt="link" />
          </Box>
        </Flex>
        <Flex mt="40px" gap="12px">
          {dropDownData.map((item) => {
            return (
              <Flex
                key={item.title}
                alignItems="center"
                color="brand.textSec"
                h="40px"
                borderColor="brand.textSec"
                borderRadius="8px"
                border="1px"
                px="17.27px"
                cursor="pointer"
              >
                <Box>
                  <Image src={item.icon} alt={item.title} />
                </Box>
                <Text ml="8px">{item.title}</Text>
                <Box ml="12.22px">
                  <Image src={DownIcon} alt="down" />
                </Box>
              </Flex>
            );
          })}
        </Flex>
      </Box>

      <Box>
        <Flex alignItems="center" h="70.66px">
          <Flex alignItems="center" cursor="pointer">
            <Image alt="add" src={AddIcon} />
            <Text ml="8.5px">Invite</Text>
          </Flex>
          <Flex ml="12px">
            {users.map((item, index) => {
              return (
                <Box key={index} ml={index === 0 ? '0px' : '-8px'}>
                  <Image alt="user" src={item} />
                </Box>
              );
            })}
            <Center ml="-8px" boxSize="38px" bg="#F4D7DA" borderRadius="360px">
              <Text fontSize="15px" fontWeight="500" color="#D25B68">
                +2
              </Text>
            </Center>
          </Flex>
        </Flex>

        <Flex mt="40px" gap="20px">
          <Flex
            border="1px"
            px="16px"
            gap="8px"
            cursor="pointer"
            h="40px"
            borderRadius="6px"
            borderColor="brand.textSec"
            alignItems="center"
          >
            <Box>
              <Image alt="share" src={ShareIcon} />
            </Box>
            <Text color="brand.textSec" fontSize="16px" fontWeight="500">
              Share
            </Text>
          </Flex>
          <Center>
            <Box h="28px" w="1px" bg="brand.textSec" />
          </Center>

          <Center cursor="pointer" boxSize="40px" borderRadius="6px" bg="brand.purpleDivider">
            <Image alt="menu" src={MenuIcon} />
          </Center>

          <Center cursor="pointer">
            <Image alt="menu" src={MenuIcon2} />
          </Center>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Info;
