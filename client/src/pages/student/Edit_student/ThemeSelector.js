import React from 'react';
import { Box, IconButton } from "@chakra-ui/react"
import { SunIcon, Icon } from "@chakra-ui/icons"
import { BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ThemeSelector = ({ toggleColorMode, colorMode }) => {
    return (
        <Box textAlign="right"
        display="flex"
        alignItems='center'
            justifyContent="space-between"
        >
            <Link to="/Create_student">create new Student</Link>

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
