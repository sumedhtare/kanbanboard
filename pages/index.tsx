import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Info from '../components/Info';
import Tasks from '../components/Tasks/Tasks';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mercor</title>
        <meta name="description" content="Created by Sumedh for demo purpose." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <Sidebar />
        <Box w="100%">
          <Header />
          <Info />
          <Tasks />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
