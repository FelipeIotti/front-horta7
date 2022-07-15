import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({showProfileData=true}:ProfileProps){
  return(
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box
          mr='4' textAlign='right'
        >
          <Text>Victor Fuganholi</Text>
          <Text 
            color='gray.300' fontSize='small'
          >Victor.Fuganholi@hotmail.com</Text>
        </Box>
      )}
      <Avatar
        size='md' name='Victor Fuganholi' src='https://scontent.fbau1-1.fna.fbcdn.net/v/t1.6435-9/75567414_2351817471735347_7564871424821690368_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHGhj-bx2nJ0Ok0FoBL9MECJPQXpTM6HEck9BelMzocR6lryqr_Lj-1YChcZgn6bpsIbHCoztvpswEoPKsPHMkc&_nc_ohc=JMdGrmcGrnYAX_Wj29i&_nc_ht=scontent.fbau1-1.fna&oh=00_AT9VY801B5gSKLVZvVZpMGlXwJ9j1VLRczqan4UlOV1rQg&oe=62F22A76'
      />
    </Flex>
  );
}