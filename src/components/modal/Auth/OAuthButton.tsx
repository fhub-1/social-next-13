import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButton: React.FC = () => {
  return (
    <Flex direction="column" width="100%" mt={4}>
      <Button
        variant="oauth"
        bg="gray.200"
        color="black"
        _hover={{
          bg: "orange.500",
        }}
        rounded="md"
        w="100%"
        type="submit"
        mt={2}
        mb={2}
      >
        <Image
          src="/images/redditFace.svg"
          alt="google_icon"
          height="24px"
          mr="4"
        />
        Conntinue with Google
      </Button>
      <Button
        bg="blue.300"
        color="white"
        _hover={{
          bg: "orange.500",
        }}
        rounded="md"
        w="100%"
        type="submit"
        mt={2}
        mb={2}
      >
        Add some Social Providers
      </Button>
    </Flex>
  );
};
export default OAuthButton;
