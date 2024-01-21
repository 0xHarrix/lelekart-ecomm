// Products.js
import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import CustomCard from './card';

const productData = [
    {
        id: 1,
        title: 'Iphone 14',
        price: "Rs.65000",
        imageUrl: 'pexels-jess-bailey-designs-788946.jpg',
      },
      {
        id: 2,
        title: 'MacBook M2',
        price: "Rs.120000",
        imageUrl: 'pexels-junior-teixeira-2047905.jpg',
      },
      {
        id: 3,
        title: 'Samsung S23 SnapDragon',
        price: "Rs.85000",
        imageUrl: 'pexels-john-tekeridis-214487.jpg',
      },
  {
    id: 4,
    title: 'iQOO M4 Tablet',
    price: "Rs.19000",
    imageUrl: 'pexels-josh-sorenson-1334597.jpg',
  },
  {
    id: 5,
    title: 'Acer Nitro 5 i5-12th gen',
    price: "Rs.65000",
    imageUrl: 'pexels-craig-dennis-205421.jpg',
  },
  {
    id: 6,
    title: 'Airpods Pro 2',
    price: "Rs.22000",
    imageUrl: 'pexels-soulful-pizza-3780681.jpg',
  },
];

const Electronics = () => {
  return (
    <Flex direction='column' align='center' mt='4'>
      <Heading as='h2' size='xl' textAlign='center' color='#3182ce'>
        Featured Electronics
      </Heading>
      <Heading as='h2' size='l' mb='6' textAlign='center' color='black'>
        Min 20% Off
      </Heading>
      <Flex className='container' maxW='1400px'>
        {productData.map((product) => (
          <CustomCard key={product.id} title={product.title} price={product.price} imageUrl={product.imageUrl} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Electronics;
