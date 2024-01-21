// Products.js
import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import CustomCard from './card';

const productData = [
    {
        id: 1,
        title: 'Puma 5 Series',
        price: "Rs.1200",
        imageUrl: 'the-dk-photography-NUoPWImmjCU-unsplash.jpg',
      },
      {
        id: 2,
        title: 'Nike Nylash',
        price: "Rs.2000",
        imageUrl: 'domino-164_6wVEHfI-unsplash.jpg',
      },
      {
        id: 3,
        title: 'Bizos Casual Wear',
        price: "Rs.850",
        imageUrl: 'ca-creative-Fc2KdQ2QaVs-unsplash.jpg',
      },
  {
    id: 4,
    title: 'Neonne N1s Shoes',
    price: "Rs.550",
    imageUrl: 'wengang-zhai-_fOL6ebfECQ-unsplash.jpg',
  },
  {
    id: 5,
    title: 'Converse Star Belz',
    price: "Rs.950",
    imageUrl: 'leo-griffith-CjNFouugoZs-unsplash.jpg',
  },
  {
    id: 6,
    title: 'Sizz Smart Shoes',
    price: "Rs.750",
    imageUrl: 'or-hakim-VQxKattL-X4-unsplash.jpg',
  },
];

const Shoes = () => {
  return (
    <Flex direction='column' align='center' mt='8' mb='4'>
      <Heading as='h2' size='xl' textAlign='center' color='#3182ce'>
        Featured Shoes
      </Heading>
      <Heading as='h2' size='l' mb='6' textAlign='center' color='black'>
        Min 30% Off
      </Heading>
      <Flex className='container' maxW='1400px'>
        {productData.map((product) => (
          <CustomCard key={product.id} title={product.title} price={product.price} imageUrl={product.imageUrl} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Shoes;
