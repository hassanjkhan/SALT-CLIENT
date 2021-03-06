import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import HomeAbout from '../components/HomeAbout';
import HomeCountdown from '../components/HomeCountdown';
import HomeHeader from '../components/HomeHeader';
import HomeHero from '../components/HomeHero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Salt Society</title>
      </Head>
      <div>
        <HomeHeader />
        <HomeHero />
        <HomeAbout />
        <HomeCountdown />
      </div>
    </>
  );
};

export default Home;
