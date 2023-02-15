import { Text } from "@chakra-ui/react";
import React from "react";
import TheHeader from "../navbar/TheHeader";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <TheHeader />
      <main>{children}</main>
      <Text
        fontSize="20pt"
        color="orange.800"
        textAlign="center"
        bg="orange.500"
        mr="2"
        mb="2"
        decoration="none"
      >
        footer
      </Text>
    </>
  );
};

export default Layout;
