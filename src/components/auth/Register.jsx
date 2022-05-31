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

export default function Register({ setToken }) {
  const [formData, setFormData] = useState({});

  const setEmail = (value) => {
    setFormData({ ...formData, email: value });
  };

  const setPassword = (value) => {
    setFormData({ ...formData, password: value });
  };

  const submitRegisterData = () => {
    console.log(formData);
  };

  const setFirstName = (value) => {
    setFormData({ ...formData, firstName: value });
  };

  const setLastName = (value) => {
    setFormData({ ...formData, lastName: value });
  };

  const setPhoneNumber = (value) => {
    setFormData({ ...formData, phone: value });
  };

  return (
    <Flex height="xl" alignItems="center" justifyContent="center">
      <Center>
        <Heading marginBottom="5">Login</Heading>
        <FormControl>
          <Box padding="10" backgroundColor="lightBlue.300" borderRadius="2xl">
            <Input
              size="xl"
              placeholder="First Name"
              onChangeText={(value) => setFirstName(value)}
            />
            <Input
              size="xl"
              marginTop="1.5"
              placeholder="Last Name"
              onChangeText={(value) => setLastName(value)}
            />
            <Input
              size="xl"
              marginTop="1.5"
              placeholder="Phone Number"
              onChangeText={(value) => setPhoneNumber(value)}
            />
            <Input
              size="xl"
              marginTop="1.5"
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
              onPress={submitRegisterData}
              marginTop="1.5"
            >
              Login
            </Button>
          </Box>
        </FormControl>
      </Center>
    </Flex>
  );
}
