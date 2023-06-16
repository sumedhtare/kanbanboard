import { Flex, Box, Text, Center } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';
import Image from 'next/image';
import AddIcon from '../../assets/icons/add.svg';
import Card from '../Card';
import { getLaneInfo } from '../../Utils/Utils';
interface LanesProps {
  items: any;
  title: string;
}

const Lanes = ({ items, title }: LanesProps) => {
  const laneData = getLaneInfo(title);

  const { setNodeRef } = useDroppable({
    id: title
  });

  return (
    <Center
      w="354px"
      bg="brand.container"
      borderRadius="16px 16px 0px 0px"
      px="20px"
      py="21px"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Flex alignItems="center" justifyContent="space-between" w="100%">
        <Flex alignItems="center">
          <Box boxSize="8px" borderRadius="360px" bg={laneData.color} />
          <Text ml="8px" fontWeight="500" fontSize="16px">
            {laneData.title}
          </Text>
          <Center boxSize="20px" bg="#E0E0E0" borderRadius="360px" ml="12px">
            <Text fontSize="12px" fontWeight="500">
              {items.length}
            </Text>
          </Center>
        </Flex>
        <Box cursor="pointer">
          <Image alt="add" src={AddIcon} />
        </Box>
      </Flex>
      <Box h="3px" mt="23px" bg={laneData.bg} w="100%" />

      <Center
        mt="28px"
        w="100%"
        flexDirection="column"
        gap="20px"
        ref={setNodeRef}
        h="100%"
        justifyContent="flex-start"
      >
        {items.map((item: any, index: number) => {
          return <Card data={item} parent={title} index={index} key={index} />;
        })}
      </Center>
    </Center>
  );
};

export default Lanes;
