import {
    Flex,
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    Text,
} from "@chakra-ui/react"
import React, { useEffect, useState } from 'react';
import { delete_student, get_students } from "../../../actions/studentAction";
import { useDispatch, useSelector } from "react-redux";


const ViewStudentList = () => {

    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const students = useSelector(state => state.students);
    const [deletedItemID, setDeletedItemId] = useState(0);

    useEffect(() => {
        dispatch(get_students())
    }, [])


    const deleteStudent = () => {
        dispatch(delete_student(deletedItemID));
        onClose();
    }
    return (
        <Flex>
            <TableContainer>
                <Table size='lg'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Surename</Th>
                            <Th>Date of Birth</Th>
                            <Th>Email Adress</Th>
                            <Th>Phone Number</Th>
                            <Th>Favorite sports</Th>
                            <Th>actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {students ? (
                            students.map(item => {
                                return (
                                    <Tr>
                                        <Td>{item.first_name}</Td>
                                        <Td>{item.last_name}</Td>
                                        <Td>{item.date_of_birth}</Td>
                                        <Td>{item.email}</Td>
                                        <Td>+374{item.phone}</Td>
                                        <Td>{item.favorite_sport}</Td>
                                        <Td gap={4}
                                            display="flex"
                                            gap="15px"
                                        >
                                            <Button colorScheme='red' onClick={() => {
                                                onOpen()
                                                setDeletedItemId(item.id)
                                            }}>delete</Button>
                                            <Button colorScheme='yellow' onClick={() => window.location.assign(`/Edit_student/${item.id}`)}>update</Button>
                                        </Td>
                                    </Tr>
                                )
                            })
                        ) : (
                            <></>
                        )}

                    </Tbody>

                </Table>
                {!students? (
                <Box
                    width="100%"
                    height="200px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text
                        fontSize="30"
                    >
                        ther is not Students
                    </Text>
                </Box>
                ):(
                    <></>
                )}
            </TableContainer>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader display="flex" alignItems="center" justifyContent="center">do you realy won to delet dhis student</ModalHeader>
                    <ModalFooter justifyContent="center">
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='red' variant='ghost' onClick={deleteStudent}>delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default ViewStudentList;
