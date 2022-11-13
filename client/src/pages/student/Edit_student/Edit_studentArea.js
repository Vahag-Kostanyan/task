import React from 'react';
import {  Flex, Box, useColorMode } from "@chakra-ui/react"
import Edit_studentHeader from './Edit_studentHeader';
import Edit_studentForm from './Edit_studentForm';
import ThemeSelector from './ThemeSelector';


const VARIANT_COLOR = "teal"

const Edit_studentArea = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex minHeight="100vh" width="full" align="center" justify="center" >
            <Box
                p={4}
                width="full"
                maxWidth="500px"
                borderRadius={15}
                textAlign="center"
                boxShadow="0px 7px 29px -7px"
            >
                <ThemeSelector colorMode={colorMode} toggleColorMode={toggleColorMode} />
                <Box p={1}>
                    <Edit_studentHeader />
                    <Edit_studentForm colorMode={colorMode} />
                </Box>
            </Box>
        </Flex>
    )
}

export default Edit_studentArea;
