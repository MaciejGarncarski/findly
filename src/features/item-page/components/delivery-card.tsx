import { Card, Flex, Icon, Text } from "@chakra-ui/react";
import { HouseIcon, InfoIcon, Truck } from "lucide-react";

export function DeliveryCard() {
  return (
    <Card.Root width="320px" h="auto" rounded={"xl"}>
      <Card.Body gap="2">
        <Card.Title mt="2">Delivery & Pickup</Card.Title>
        <Flex
          as="ul"
          color="fg.muted"
          fontSize={"sm"}
          flexDir={"column"}
          gap="2"
        >
          <Flex as="li" gap="2" alignItems={"center"}>
            <Icon size="sm">
              <HouseIcon />
            </Icon>
            <Text>Pickup available in Brooklyn, NY</Text>
          </Flex>
          <Flex as="li" gap="2" alignItems={"center"}>
            <Icon size="sm">
              <Truck />
            </Icon>
            <Text>Local delivery may be available</Text>
          </Flex>
          <Flex as="li" gap="2" alignItems={"center"}>
            <Icon size="sm">
              <InfoIcon />
            </Icon>
            <Text>Contact seller for delivery options</Text>
          </Flex>
        </Flex>
      </Card.Body>
      <Card.Footer justifyContent="flex-end"></Card.Footer>
    </Card.Root>
  );
}
