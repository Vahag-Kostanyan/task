import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";


const VARIANT_COLOR = "teal"

const Create_studentHeader = () => {
    return (
        <Box textAlign="center">
            <Heading fontSize={30} >Create new student</Heading>
            <Text>
                Or <Link to="/" style={{color: VARIANT_COLOR}}>see students list</Link>
            </Text>
        </Box>
    )
}

export default Create_studentHeader;
