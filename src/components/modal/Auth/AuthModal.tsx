import { authModaState } from "@/atoms/authModalAtom";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";
import React from "react";

import { useRecoilState } from "recoil";
import AuthInput from "./AuthInput";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModaState);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  return (
    <>
      {/* get ride of the button on the section and adding recoil */}
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

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
              {/* <OAuthButtons */}
              <AuthInput />
              {/* <ResetPassword */}
            </Flex>
          </ModalBody>

          {/* <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
