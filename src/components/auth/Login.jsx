import React from "react";
import {
  Center,
  Flex,
  Input,
  Box,
  Button,
  Heading,
  FormControl,
} from "native-base";

const Login = () => {
  return (
    <Flex h={40} alignItems="center">
      <Center>
        <FormControl>
          <Box>
            <Input size="xl" placeholder="Email" />
            <Input size="xl" type="password" placeholder="Password" />
            <Button colorScheme="success">Login</Button>
          </Box>
        </FormControl>
      </Center>
    </Flex>
  );
};
export default Login;
