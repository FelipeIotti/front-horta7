import {  Box, Button, Flex,  Text } from "@chakra-ui/react";

interface ActuatorProps {
  title: string;
  status: string;
}

export function Actuator({title,status}:ActuatorProps) {

  return(
    <Box  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
      <Flex m='2' justifyContent={'space-between'} alignItems={'center'}>
        <Text ml='4' fontSize='25'>{title}</Text>
        <Flex alignItems='center'>
        <Button bgColor={`${status==='1'?'green.400':'red.400'}`} fontSize='25' mr='4'>{status==='1'?'✓': 'X'}</Button>
        <Text mr='4' fontSize='25'>{status==='1'?'On': 'Off'}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}