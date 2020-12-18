import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label} from 'reactstrap'

export default function ModalResponse(props) {
    const {
        open,
        close,
        message
    } = props

    const [modalOpen, setModalOpen] = useState(open)

    useEffect(() => {
        if (open === true){
            setModalOpen(open)
        }
        // alert(isOpen)
    }, [open]);
    return (
        <Container>
            <Modal isOpen={modalOpen}>
                <ModalHeader>
                    Info
                </ModalHeader>
                <ModalBody>
                    <h3>
                        {message ? message : 'Profile Updated'}
                    </h3>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={()=>{setModalOpen(close)}} outline='secondary'>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}
