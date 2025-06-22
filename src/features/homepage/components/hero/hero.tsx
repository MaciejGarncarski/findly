import {
  Button,
  Field,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { Locate, Search } from "lucide-react";

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
      <form action="/browse">
        <Flex
          bg="bg"
          w="20rem"
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
            gap: "3",
            w: "42rem",
            flexDir: "row",
          }}
        >
          <Field.Root>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap="1"
              w="full"
            >
              <Field.Label>
                <Icon size={"lg"} color="fg.muted">
                  <Search />
                </Icon>
              </Field.Label>
              <Input
                variant="subtle"
                size="lg"
                rounded={"xl"}
                placeholder="What are you looking for?"
                name="q"
              />
            </Flex>
          </Field.Root>

          <Field.Root>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap="1"
              w="full"
            >
              <Field.Label>
                <Icon size={"lg"} color="fg.muted">
                  <Locate />
                </Icon>
              </Field.Label>
              <Input
                rounded={"xl"}
                size="lg"
                variant="subtle"
                placeholder="Location"
                name="l"
              />
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
      </form>
    </Flex>
  );
}
