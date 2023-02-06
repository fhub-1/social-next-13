import { authModaState } from "@/atoms/authModalAtom";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import Login from "./Login";

type AuthInputProps = {};

const AuthInput: React.FC<AuthInputProps> = () => {
  const modalState = useRecoilValue(authModaState);

  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && <Login />}
      {/* {modalState.view === "login" && <SignUp />} */}
    </Flex>
  );
};
export default AuthInput;
