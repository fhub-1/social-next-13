import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useRecoilState } from "recoil";
import AuthInput from "./AuthInput";
import OAuthButton from "./OAuthButton";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  // checking if user is logned in
  useEffect(() => {
    if (user) handleClose();
    console.log("user", user);
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {modalState.view === "login" && "Sign in to your account"}
            {modalState.view === "signup" && "Sign Up in to your account"}
            {modalState.view === "resetPassword" && "Reset your passowrd"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="70%"
            >
              {/* TODO */}
              <OAuthButton />
              <Text color="gray.400" fontWeight={700}>
                OR
              </Text>
              <AuthInput />
              {/* <ResetPassword */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
