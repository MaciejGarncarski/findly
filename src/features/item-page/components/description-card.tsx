import { Card, Heading, Text } from "@chakra-ui/react";

export function DescriptionCard() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>
          iPhone 17 Pro Max Ultra 5G 16GB/512GB Nano Micro Giga Mini
        </Card.Title>
      </Card.Header>
      <Card.Body rounded="xl" fontSize={"sm"}>
        <Heading as="h2">Description</Heading>
        <Text>
          Description Selling my iPhone 15 Pro Max in excellent condition.
          Purchased 3 months ago and barely used due to work phone. Always kept
          in a case with screen protector. Features: • 256GB Storage • Natural
          Titanium finish • Battery health: 100% • No scratches or dents •
          Original box and accessories included • AppleCare+ until March 2025
          Reason for selling: Company provided new phone, so this one is no
          longer needed. Serious buyers only please. Price is firm. Cash only,
          no trades. Can meet in safe public location in Brooklyn or Manhattan.
        </Text>
      </Card.Body>
      <Card.Footer>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non distinctio
        architecto, nulla molestias dolores temporibus aperiam repudiandae quod
        provident? Repellat debitis consequuntur odio autem at perspiciatis
        officia eius. Quos, at?
      </Card.Footer>
    </Card.Root>
  );
}
