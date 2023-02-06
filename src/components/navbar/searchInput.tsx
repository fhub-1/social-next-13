import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
function SearchInput() {
  return (
    <Flex flexGrow={1} mr={2} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color="gray.500" mb={1} cursor="pointer" />}
        />
        <Input
          placeholder="search..."
          fontSize="10pt"
          _placeholder={{ color: "gray.600" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
        />
      </InputGroup>
    </Flex>
  );
}

export default SearchInput;
