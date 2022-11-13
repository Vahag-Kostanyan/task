import React from 'react';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from "@chakra-ui/react"
import Edit_studentArea from './Edit_studentArea';

const Create_student = () => {
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
                <CSSReset />
                <Edit_studentArea />
            </ColorModeProvider>
        </ThemeProvider>
    );
}



export default Create_student;
