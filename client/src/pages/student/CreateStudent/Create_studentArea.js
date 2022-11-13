import React from 'react';
import Create_studentForm from './Create_studentForm';
import Create_studentHeader from './Create_studentHeader';
import ThemeSelector from './ThemeSelector';
import { Flex, Box,useColorMode } from "@chakra-ui/react"

const Create_studentArea = () => {
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
                    <Create_studentHeader />
                    <Create_studentForm colorMode={colorMode} />
                </Box>
            </Box>
        </Flex>
    )
}

export default Create_studentArea;
