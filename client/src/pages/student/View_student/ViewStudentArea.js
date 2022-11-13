import React from 'react';

import {
    Flex,
} from "@chakra-ui/react"
import ViewStudentHeader from './ViewStudentHeader';
import ViewStudentList from './ViewStudentList';


const ViewStudentArea = () => {

    return (
        <Flex
            display="flex"
            minHeight="100vh"
            width="full"
            flexDirection="column"
        >
            <ViewStudentHeader />
            <Flex
                width="100vw"
                padding={5}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <ViewStudentList />
            </Flex>
        </Flex>
    )
}

export default ViewStudentArea;
