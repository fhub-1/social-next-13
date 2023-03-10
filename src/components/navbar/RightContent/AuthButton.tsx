import { authModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";

const AuthButton: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        rounded="full"
        border="1px solid"
        borderColor="blue.400"
        bg="white"
        _hover={{
          bg: "blue.100",
        }}
        mr={2}
        //    adding the functionn the modal state here to call the modal
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log In
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        bg="blue.300"
        rounded="full"
        textColor="gray.900"
        _hover={{
          bg: "orange.500",
        }}
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButton;
