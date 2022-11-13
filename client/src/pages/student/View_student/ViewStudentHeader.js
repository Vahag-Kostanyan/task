import React from 'react';

import {
    Box,
    IconButton,
    useColorMode,
} from "@chakra-ui/react"
import { SunIcon, Icon, MoonIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom";


const ViewStudentHeader = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box
            display="flex"
            width="100vw"
            justifyContent="space-between"
            p={4} textAlign="right" >
            <Link to="/Create_student">create new Student</Link>
            <IconButton onClick={toggleColorMode}>
                {colorMode === "light" ? (
                    <Icon as={MoonIcon} />
                ) : (
                    <Icon as={SunIcon} />
                )}
            </IconButton>
        </Box>
    )
}

export default ViewStudentHeader;
