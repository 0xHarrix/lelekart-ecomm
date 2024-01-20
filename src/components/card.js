// Card.js
import React from 'react';
import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

const CustomCard = ({ title, price, imageUrl }) => {
  return (
    <ChakraCard maxW='250' boxShadow='lg' borderRadius='lg' overflow='hidden' mb='4' mr='30'>
      <Image src={imageUrl} alt={title} borderRadius='md' objectFit='cover' h='160px' />
      <CardBody>
        <Stack spacing='2'>
          <Text fontWeight='semibold' fontSize='md' align='center'>
            {title}
          </Text>
          <Text color='blue.600' fontSize='lg' align='center'>
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider borderColor='blue.800' />
      <CardFooter>
        <ButtonGroup size='sm'>
          <Button variant='solid' colorScheme='blue' size='sm'>
            Buy Now
          </Button>
          <Button variant='ghost' colorScheme='blue' size='sm'>
            Add to Cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </ChakraCard>
  );
};

export default CustomCard;
