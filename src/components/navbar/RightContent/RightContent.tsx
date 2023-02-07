import AuthModal from "@/components/modal/Auth/AuthModal";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import React from "react";
import AuthButton from "./AuthButton";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <Button onClick={() => signOut(auth)}>Logout</Button>
        ) : (
          <AuthButton />
        )}
      </Flex>
    </>
  );
};
export default RightContent;
