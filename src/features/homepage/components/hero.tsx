import {
  Box,
  Button,
  Field,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { BiCurrentLocation, BiLocationPlus, BiSearch } from "react-icons/bi";
import Form from "next/form";

export function Hero() {
  return (
    <Flex
      as="section"
      gap="4"
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      px="5"
      py="10"
      h="25rem"
      bgGradient="to-r"
      gradientFrom="teal.500"
      gradientTo="blue.400"
      lg={{ px: "20", gap: "8" }}
      _dark={{
        gradientFrom: "teal.300",
        gradientTo: "blue.300",
      }}
    >
      <Heading
        color="bg"
        fontSize="3xl"
        textAlign="center"
        fontWeight={"bold"}
        lg={{ fontSize: "5xl" }}
      >
        Find Anything, Sell Everything
      </Heading>

      <Text color="bg" textAlign="center">
        Discover amazing deals in your area or sell your items to thousands of
        buyers
      </Text>
      <Form action="/search">
        <Flex
          bg="bg"
          h="12rem"
          rounded={"2xl"}
          px="4"
          py="4"
          shadow="lg"
          gap="4"
          border="InactiveBorder"
          alignItems={"center"}
          flexDir={"column"}
          lg={{
            h: "16",
            w: "40rem",
            flexDir: "row",
          }}
        >
          <Field.Root>
            <Flex alignItems={"center"} justifyContent={"center"} gap="1">
              <Field.Label>
                <Icon size={"lg"} color="fg.muted">
                  <BiSearch />
                </Icon>
              </Field.Label>
              <Input
                variant="subtle"
                placeholder="What are you looking for?"
                name="q"
              />
            </Flex>
          </Field.Root>

          <Field.Root>
            <Flex alignItems={"center"} justifyContent={"center"} gap="1">
              <Field.Label>
                <Icon size={"lg"} color="fg.muted">
                  <BiCurrentLocation />
                </Icon>
              </Field.Label>
              <Input variant="subtle" placeholder="Location" name="l" />
            </Flex>
          </Field.Root>

          <Button
            lg={{ ml: "auto", w: "auto" }}
            w="full"
            rounded="xl"
            type="submit"
            size="lg"
          >
            Search
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
}
