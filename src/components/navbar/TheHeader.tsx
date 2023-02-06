import { Flex, Image } from "@chakra-ui/react";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./searchInput";
const TheHeader = () => {
    return (
        <Flex
            bg="white"
            height="44px"
            padding="6px 12px"
            justifyContent={{ md: "space-between" }}
        >
            <Flex
                align="center"
                width={{ base: "40px", md: "auto" }}
                mr={{ base: 0, md: 2 }}
                cursor="pointer"
            //   onClick={() => onSelectMenuItem(defaultMenuItem)}
            >
                <Image src="/images/redditFace.svg" height="30px" alt="log" />
                <Image
                    display={{ base: "none", md: "unset" }}
                    src="/images/redditText.svg"
                    height="46px"
                    alt="log"
                />
            </Flex>
            <SearchInput />
            <RightContent />
        </Flex>
    );
};

export default TheHeader;
