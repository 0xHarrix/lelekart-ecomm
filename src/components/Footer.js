import React from 'react';
import { Box, Flex, Link, Text, Divider, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bgColor='white' color='black' py='8' >
      <Flex direction='column' align='center'>
        <Flex direction='row' justify='space-around' w='100%' mb='4'>
          <Flex direction='column' align='center' mx='4'>
            <Text fontSize='2xl' fontWeight='bold'>
              LeleMart
            </Text>
            <Text fontSize='sm' mt='2'>
              Your one-stop shop for all your needs
            </Text>
          </Flex>
          <Flex direction='column' align='center' mx='4'>
            <Text fontSize='lg' fontWeight='bold'>
              Customer Service
            </Text>
            <Link href='#' mt='2'>
              Contact Us
            </Link>
            <Link href='#' mt='2'>
              Shipping
            </Link>
            <Link href='#' mt='2'>
              Returns
            </Link>
          </Flex>
          <Flex direction='column' align='center' mx='4'>
            <Text fontSize='lg' fontWeight='bold'>
              About LeleMart
            </Text>
            <Link href='#' mt='2'>
              Our Story
            </Link>
            <Link href='#' mt='2'>
              Careers
            </Link>
            <Link href='#' mt='2'>
              Terms & Conditions
            </Link>
          </Flex>
          <Flex direction='column' align='center' mx='4'>
            <Text fontSize='lg' fontWeight='bold'>
              Connect with Us
            </Text>
            <Flex mt='2'>
              <IconButton icon={<FaFacebook />} variant='unstyled' fontSize='20px' color='white' />
              <IconButton icon={<FaTwitter />} variant='unstyled' fontSize='20px' color='white' ml='2' />
              <IconButton icon={<FaInstagram />} variant='unstyled' fontSize='20px' color='white' ml='2' />
              <IconButton icon={<FaPinterest />} variant='unstyled' fontSize='20px' color='white' ml='2' />
              <IconButton icon={<FaYoutube />} variant='unstyled' fontSize='20px' color='white' ml='2' />
            </Flex>
          </Flex>
        </Flex>
        <Divider borderColor='white' w='80%' mb='4' />
        <Text fontSize='sm' mb='2'>
          &copy; 2024 LeleMart. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
