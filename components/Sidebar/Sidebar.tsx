import { Box, Center, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import Logo from '../../assets/logo.svg';
import BackIcon from '../../assets/icons/back.svg';
import AddIcon from '../../assets/icons/add_box.svg';
import DotIcon from '../../assets/icons/dot.svg';
import BulbIcon from '../../assets/icons/bulb.svg';

import { sidebarNav, sidebarProjects } from '../../constants/mockData';

const Sidebar = () => {
  return (
    <Box borderRight="1px" borderColor="brand.divider" minH="100vh">
      <Flex
        alignItems="center"
        h="88px"
        borderBottom="1px"
        borderColor="brand.divider"
        gap="46px"
        px="22px"
      >
        <Flex gap="9px">
          <Box cursor="pointer">
            <Image alt="logo" src={Logo} />
          </Box>
          <Text fontWeight="600" fontSize="20px" lineHeight="24.2px" color="brand.text">
            Project M.
          </Text>
        </Flex>
        <Box cursor="pointer">
          <Image alt="back" src={BackIcon} />
        </Box>
      </Flex>
      <Flex py="30.5px" px="22px" flexDirection="column" gap="30px">
        {sidebarNav.map((item) => {
          return (
            <Flex key={item.title} gap="14px" cursor="pointer">
              <Image alt={item.title} src={item.icon} />
              <Text fontSize="16px" fontWeight="500" lineHeight="19.36px" color="brand.textSec">
                {item.title}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Box backgroundColor="brand.divider" mx="13px" h="1px" />
      <Flex py="30.5px" flexDirection="column">
        <Flex justifyContent="space-between" px="22px">
          <Text fontSize="12px" fontWeight="700" lineHeight="14.52px" color="brand.textSec">
            MY PROJECTS
          </Text>
          <Box cursor="pointer">
            <Image alt="add" src={AddIcon} />
          </Box>
        </Flex>
        <Box mt="21px">
          {sidebarProjects.map((item) => {
            return (
              <Flex
                key={item.title}
                alignItems="center"
                justifyContent="space-between"
                bg={item.isSelected ? 'brand.selected' : ''}
                mx="12px"
                h="39px"
                px="12px"
                borderRadius="6px"
                mb="20px"
                cursor="pointer"
              >
                <Flex alignItems="center" gap="15px">
                  <Box boxSize="8px" borderRadius="8px" bg={`brand.${item.color}`} />
                  <Text
                    fontSize="16px"
                    fontWeight={item.isSelected ? '600' : '500'}
                    color={item.isSelected ? 'band.text' : 'brand.textSec'}
                  >
                    {item.title}
                  </Text>
                </Flex>
                {item.isSelected && (
                  <Box>
                    <Image alt="dot" src={DotIcon} />
                  </Box>
                )}
              </Flex>
            );
          })}
        </Box>
      </Flex>

      <Center
        h="200px"
        w="206px"
        bg="brand.container"
        borderRadius="16px"
        margin="auto"
        mt="55px"
        pos="relative"
        mx="22px"
      >
        <Center borderRadius="360" boxSize="66px" bg="brand.container" pos="absolute" top="-33">
          <Center background="rgba(252, 214, 74, 0.7)" filter="blur(17px)" boxSize="33px"></Center>
        </Center>
        <Box pos="absolute" top="-13px">
          <Image alt="bulb" src={BulbIcon} />
        </Box>

        <Box maxW="166px">
          <Text
            color="barnd.text"
            fontSize="14px"
            fontWeight="500"
            lineHeight="16.9px"
            textAlign="center"
            mt="4px"
          >
            Thoughts Time
          </Text>

          <Text
            color="brand.textSec"
            fontWeight="400"
            fontSize="12px"
            lineHeight="14.52px"
            textAlign="center"
            mt="12px"
          >
            We don’t have any notice for you, till then you can share your thoughts with your peers.
          </Text>

          <Center bg="Background" mt="14px" borderRadius="4px" h="40px" w="166px" cursor="pointer">
            <Text color="brand.text" fontSize="14px" fontWeight="500">
              Write a message
            </Text>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default Sidebar;
