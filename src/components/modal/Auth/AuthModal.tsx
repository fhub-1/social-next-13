import { authModaState } from '@/atoms/authModalAtom';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import React from 'react';

import { useRecoilState } from "recoil"

const AuthModal: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModaState);

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    }
    return (
        <>
            {/* get ride of the button on the section and adding recoil */}
            {/* <Button onClick={onOpen}>Open Modal</Button> */}

            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        here is the modal to work
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
    )
}
export default AuthModal;