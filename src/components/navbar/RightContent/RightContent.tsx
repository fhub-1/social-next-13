import AuthModal from '@/components/modal/Auth/AuthModal';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButton from './AuthButton';

type RightContentProps = {

};

const RightContent: React.FC<RightContentProps> = () => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                <AuthButton />
            </Flex>
        </>
    )
}
export default RightContent;