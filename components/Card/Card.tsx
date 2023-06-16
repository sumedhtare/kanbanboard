import { useMemo } from 'react';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import DotIcon from '../../assets/icons/dot.svg';
import MessageIcon from '../../assets/icons/messages.svg';
import FilesIcon from '../../assets/icons/files.svg';

interface CardProps {
  data: {
    id: number;
    title: string;
    description?: string;
    images?: any[];
    users: any[];
    priority: string;
    comments: number;
    files: number;
  };
  parent: string;
  index: number;
}

const Card = ({ data, parent, index }: CardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: data.id,
    data: {
      index,
      data: data,
      parent
    }
  });

  const style = {
    transform: `${CSS.Translate.toString(transform)} rotate(3deg)`,
    zIndex: CSS.Translate.toString(transform) ? 100 : 0
  };

  const tagColor = useMemo(() => {
    switch (data.priority) {
      case 'Low':
        return {
          bg: 'brand.bgOrange',
          color: 'brand.textOrange'
        };
      case 'High':
        return {
          bg: 'brand.bgRed',
          color: 'brand.textRed'
        };
      default:
        return {
          bg: 'brand.bgGreen',
          color: 'brand.textGreen'
        };
    }
  }, [data]);

  return (
    <Box
      borderRadius="16px"
      p="20px"
      bg="brand.background"
      w="100%"
      transform={style.transform}
      zIndex={style.zIndex}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box bg={tagColor.bg} p="4px 6px" borderRadius="4px">
          <Text fontSize="12px" fontWeight="500" color={tagColor.color}>
            {data.priority}
          </Text>
        </Box>
        <Box cursor="pointer">
          <Image alt="dot" src={DotIcon} />
        </Box>
      </Flex>
      <Text color="brand.text" mt="4px" fontSize="18px" fontWeight="600">
        {data.title}
      </Text>
      {data.description && (
        <Text color="brand.textSec" mt="6px" fontSize="12px" fontWeight="400">
          {data.description}
        </Text>
      )}
      {data.images && (
        <Flex justifyContent={'space-between'}>
          {data.images.map((item: any, index: number) => {
            return (
              <Box key={index}>
                <Image alt="img" src={item} />
              </Box>
            );
          })}
        </Flex>
      )}
      <Flex mt="28px" alignItems="center" justifyContent="space-between">
        <Flex>
          {data.users.map((item: any, index: number) => {
            return (
              <Box boxSize="20px" key={index} ml={index === 0 ? '0px' : '-4px'} zIndex={99 - index}>
                <Image alt="user" src={item} />
              </Box>
            );
          })}
        </Flex>

        <Flex alignItems="center" gap="15px" color="brand.textSec" fontSize="12px" fontWeight="500">
          <Flex alignItems="center" gap="5.83px" cursor="pointer">
            <Image alt="comments" src={MessageIcon} />
            <Text>{data.comments} comments</Text>
          </Flex>
          <Flex alignItems="center" gap="5.83px" cursor="pointer">
            <Image alt="comments" src={FilesIcon} />
            <Text>{data.files} files</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
