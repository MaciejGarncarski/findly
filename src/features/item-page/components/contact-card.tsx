import { Avatar, Button, Card, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { BoxIcon, Clock, Mail, MessageCircle, Phone } from "lucide-react";

export function ContactCard() {
  return (
    <Card.Root width="320px" h="auto" rounded={"xl"}>
      <Card.Body gap="2">
        <Flex gap="4">
          <Avatar.Root size="xl" shape="rounded" rounded="full">
            <Avatar.Fallback name="A" />
          </Avatar.Root>
          <Card.Title>Albert Jonson</Card.Title>
        </Flex>
        <Flex
          as="ul"
          color="fg.muted"
          fontSize={"sm"}
          flexDir={"column"}
          gap="2"
        >
          <Flex as="li" gap="2" alignItems={"center"}>
            <Icon size="sm">
              <Clock />
            </Icon>
            <Text>Usually responds within 2 hours</Text>
          </Flex>
          <Flex as="li" gap="2" alignItems={"center"}>
            <Icon size="sm">
              <BoxIcon />
            </Icon>
            <Text>3 active listings</Text>
          </Flex>
        </Flex>
      </Card.Body>
      <Card.Footer w="full">
        <Grid gap="2" gridTemplateColumns={"repeat(2, 1fr)"} w="full">
          <Button gridColumn={"span 2"}>
            <Icon>
              <MessageCircle />
            </Icon>
            Send message
          </Button>

          <Button variant="outline">
            <Icon>
              <Phone />
            </Icon>
            Call
          </Button>

          <Button variant="outline">
            <Icon>
              <Mail />
            </Icon>
            Email
          </Button>
        </Grid>
      </Card.Footer>
    </Card.Root>
  );
}
