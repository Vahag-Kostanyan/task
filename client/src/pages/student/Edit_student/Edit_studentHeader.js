import React from 'react';
import { Box, Heading,  Text, } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const VARIANT_COLOR = "teal"

const Edit_studentHeader = () => {
    return (
        <Box textAlign="center">
            <Heading fontSize={30} > Edit student</Heading>
            <Text>
            Or <Link to="/" style={{color: VARIANT_COLOR}}>see students list</Link>
            </Text>
        </Box>
    )
}

export default Edit_studentHeader;
