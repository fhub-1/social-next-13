import { auth } from "@/firebase/clientApp";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";

const OAuthButton: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
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
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="/images/googlelogo.png"
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
        // onClick={() => useSignInWithGithub()}
      >
        Add some Social Providers
      </Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButton;
