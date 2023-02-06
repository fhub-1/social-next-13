import { border, Flex, Input, InputGroup, InputLeftAddon, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons"
function SearchInput() {
    return (
        <Flex flexGrow={1} mr={2} align="center">
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    // eslint-disable-next-line react/no-children-prop
                    children={<SearchIcon color='gray.500' mb={1} />}
                />
                <Input placeholder='search...'
                    fontSize="10pt"
                    _placeholder={{ color: 'gray.600' }}
                    _hover={{ bg: 'white', border: '1px solid ', borderColor: "blue.500" }}
                    _focus={{
                        outline: "none",
                        border: "1px solid",
                        borderColor: "blue.500"
                    }}
                    height="34px"
                />
            </InputGroup>

        </Flex>
    )
}

export default SearchInput
