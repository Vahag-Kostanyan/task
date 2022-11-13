import React from 'react';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from "@chakra-ui/react"
import Create_studentArea from './Create_studentArea';

const Create_student = () => {
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
                <CSSReset />
                <Create_studentArea />
            </ColorModeProvider>
        </ThemeProvider>
    );
}



export default Create_student;
