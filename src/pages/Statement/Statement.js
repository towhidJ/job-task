import { Box, Container } from "@mui/material";
import React from "react";
import AgeningStatement from "./AgeningStatement";

const Statement = () => {
    return (
        <Container maxWidth="lg">
            <Box>
                <AgeningStatement />
            </Box>
        </Container>
    );
};

export default Statement;
