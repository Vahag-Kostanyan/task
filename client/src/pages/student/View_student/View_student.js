import {
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset,
} from "@chakra-ui/react"
import React from 'react';
import ViewStudentArea from "./ViewStudentArea";




const ViewStudent = () => {
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
                <CSSReset />
                <ViewStudentArea />
            </ColorModeProvider>
        </ThemeProvider>
    );
}


export default ViewStudent;
