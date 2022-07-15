import {  Badge, Box, Flex,  Text } from "@chakra-ui/react";

interface SensorsProps {
  title: string;
  status: number;
}

export function Sensors({status,title}:SensorsProps) {

  return(
    <Box  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'mx='8' >
      <Flex m='2' mx='4' justifyContent={'space-between'} alignItems={'center'}>
        <Badge w='10' h='10' borderRadius='full' px='2' background={`${status===1?'green.400':'red.400'}`}>
          
        </Badge>
        <Text fontSize='25'>{title}</Text>
      </Flex>
    </Box>
  );
}