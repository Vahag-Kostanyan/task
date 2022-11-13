import React from 'react';
import { Box, IconButton, } from "@chakra-ui/react"
import { SunIcon, Icon } from "@chakra-ui/icons"
import { BsFillMoonFill } from "react-icons/bs";



const ThemeSelector = ({ toggleColorMode, colorMode }) => {

    return (
        <Box textAlign="right">
            <IconButton onClick={toggleColorMode} >
                {colorMode === "light" ? (
                    <Icon as={BsFillMoonFill} />
                ) : (
                    <Icon as={SunIcon} />
                )}
            </IconButton>
        </Box>
    )
}

export default ThemeSelector;
