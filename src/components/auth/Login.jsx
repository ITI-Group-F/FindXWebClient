import React, { useState } from "react";
import {
  Center,
  Flex,
  Input,
  Box,
  Button,
  FormControl,
  Heading,
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
    <Flex height="xl" alignItems="center" justifyContent="center">
      <Center>
        <Heading marginBottom="5">Register</Heading>
        <FormControl>
          <Box padding="10" backgroundColor="lightBlue.300" borderRadius="2xl">
            <Input
              size="xl"
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
            />
            <Input
              marginTop="1.5"
              size="xl"
              type="password"
              placeholder="Password"
              onChangeText={(value) => setPassword(value)}
            />
            <FormControl.HelperText>
              Password must be strong
            </FormControl.HelperText>
            <Button
              colorScheme="success"
              onPress={submitLoginData}
              marginTop="1.5"
            >
              Register
            </Button>
          </Box>
        </FormControl>
      </Center>
    </Flex>
  );
}
