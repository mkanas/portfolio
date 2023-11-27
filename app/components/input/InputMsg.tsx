"use client";

import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Button,
  useToast,
  Center,
} from "@chakra-ui/react";
import { sendContactForm } from "@/lib/fetcher";

interface Values {
  name: string;
  email: string;
  subject: string;
  message: string;
}
type TouchedType = {
  name: boolean;
  subject: boolean;
  email: boolean;
  message: boolean;
};

interface State {
  values: Values;
  isLoading: boolean;
  error: string;
}

const initValues: Values = { name: "", email: "", subject: "", message: "" };
const initState: State = {
  values: initValues,
  isLoading: false,
  error: "",
};

const InputMsg = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState<TouchedType>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const { values, isLoading } = state;

  const onBlur = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      await sendContactForm(values);
      setState(initState);
      setTouched({ name: false, email: false, subject: false, message: false });
      toast({
        title: "Message sent",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <Container maxW="450px">
      <Heading fontSize={20} textAlign={["left", "center"]} mb={3}>
        Contact
      </Heading>
      <FormControl isRequired isInvalid={touched.name && !values.name} mb={1}>
        <FormLabel fontSize={13}>Name</FormLabel>
        <Input
          bgColor="gray.50"
          onChange={handleChange}
          value={values.name}
          errorBorderColor="red.300"
          name="name"
          type="text"
          onBlur={onBlur}
          border="none"
          height="30px"
        />
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={1}>
        <FormLabel fontSize={13}>Email</FormLabel>
        <Input
          bgColor="gray.50"
          onChange={handleChange}
          value={values.email}
          name="email"
          type="email"
          errorBorderColor="red.300"
          onBlur={onBlur}
          border="none"
          height="30px"
        />
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.subject && !values.subject}
        mb={1}
      >
        <FormLabel fontSize={13}>Subject</FormLabel>
        <Input
          bgColor="gray.50"
          onChange={handleChange}
          value={values.subject}
          name="subject"
          type="text"
          errorBorderColor="red.300"
          onBlur={onBlur}
          border="none"
          height="30px"
        />
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={1}
      >
        <FormLabel fontSize={13}>Message</FormLabel>
        <Textarea
          bgColor="gray.50"
          onChange={handleChange}
          value={values.message}
          name="message"
          rows={4}
          errorBorderColor="red.300"
          onBlur={onBlur}
          border="none"
          resize="none"
        />
      </FormControl>

      <Center pt={4}>
        <Button
          bgColor="gray.50"
          variant="outline"
          type="submit"
          isLoading={isLoading}
          isDisabled={
            !values.name || !values.email || !values.subject || !values.message
          }
          onClick={onSubmit}
          borderWidth="2px"
        >
          Send Message
        </Button>
      </Center>
    </Container>
  );
};

export default InputMsg;
