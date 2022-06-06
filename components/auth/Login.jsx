import React, { useState } from "react";
import {
  Center,
  Flex,
  Input,
  Box,
  Button,
  FormControl,
  Heading,
  Link,
  Text,
  VStack,
  HStack,
} from "native-base";

export default function Login({ setToken }) {
  const [formData, setFormData] = useState({});

  const setEmail = (value) => {
    setFormData({ ...formData, email: value });
  };

  const setPassword = (value) => {
    setFormData({ ...formData, password: value });
  };

  const submitLoginData = () => {
    console.log(formData);
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Login
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              size="xl"
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              marginTop="1.5"
              size="xl"
              type="password"
              placeholder="Password"
              onChangeText={(value) => setPassword(value)}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="blue">
            Login
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Not registerd yet?{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="/register"
            >
              Register
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
